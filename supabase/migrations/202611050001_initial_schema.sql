create table public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  preferred_language text not null default 'en',
  created_at timestamptz not null default now()
);

create table public.administrator_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null check (role in ('administrator', 'editor')),
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories (id) on delete set null,
  author_id uuid references auth.users (id) on delete set null,
  title text not null,
  slug text not null unique,
  summary text not null,
  content text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  resource_type text not null check (resource_type in ('guide', 'video', 'tool', 'service')),
  url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  starts_at timestamptz not null,
  ends_at timestamptz,
  location text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_at is null or ends_at >= starts_at)
);

create table public.ambassadors (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  public_bio text,
  public_consent_at timestamptz,
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  check (not is_public or public_consent_at is not null)
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  website_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  consented_at timestamptz not null,
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.survey_questions (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer_options jsonb not null default '[]'::jsonb,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (jsonb_typeof(answer_options) = 'array')
);

create table public.survey_responses (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.survey_questions (id) on delete cascade,
  answer jsonb not null,
  created_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  reply_email text,
  message text not null,
  created_at timestamptz not null default now()
);

create unique index newsletter_subscribers_email_unique
  on public.newsletter_subscribers (lower(email));

create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger articles_set_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();
create trigger resources_set_updated_at
  before update on public.resources
  for each row execute function public.set_updated_at();
create trigger events_set_updated_at
  before update on public.events
  for each row execute function public.set_updated_at();
create trigger partners_set_updated_at
  before update on public.partners
  for each row execute function public.set_updated_at();
create trigger survey_questions_set_updated_at
  before update on public.survey_questions
  for each row execute function public.set_updated_at();

create function public.is_campaign_admin()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (
    select 1
    from public.administrator_roles
    where user_id = (select auth.uid())
      and role in ('administrator', 'editor')
  );
$$;

alter table public.users enable row level security;
alter table public.administrator_roles enable row level security;
alter table public.categories enable row level security;
alter table public.articles enable row level security;
alter table public.resources enable row level security;
alter table public.events enable row level security;
alter table public.ambassadors enable row level security;
alter table public.partners enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.survey_questions enable row level security;
alter table public.survey_responses enable row level security;
alter table public.contact_messages enable row level security;

create policy "Users can read their own profile"
  on public.users for select to authenticated
  using (id = (select auth.uid()));
create policy "Users can create their own profile"
  on public.users for insert to authenticated
  with check (id = (select auth.uid()));
create policy "Users can update their own profile"
  on public.users for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy "Users can read their own administrator roles"
  on public.administrator_roles for select to authenticated
  using (user_id = (select auth.uid()));

create policy "Categories are publicly readable"
  on public.categories for select to anon, authenticated
  using (true);
create policy "Campaign administrators manage categories"
  on public.categories for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Published articles are publicly readable"
  on public.articles for select to anon, authenticated
  using (status = 'published');
create policy "Campaign administrators manage articles"
  on public.articles for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Published resources are publicly readable"
  on public.resources for select to anon, authenticated
  using (is_published);
create policy "Campaign administrators manage resources"
  on public.resources for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Published events are publicly readable"
  on public.events for select to anon, authenticated
  using (is_published);
create policy "Campaign administrators manage events"
  on public.events for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Consenting ambassadors are publicly listed"
  on public.ambassadors for select to anon, authenticated
  using (is_public and public_consent_at is not null);
create policy "Campaign administrators manage ambassadors"
  on public.ambassadors for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Published partners are publicly readable"
  on public.partners for select to anon, authenticated
  using (is_published);
create policy "Campaign administrators manage partners"
  on public.partners for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Campaign administrators manage newsletter subscribers"
  on public.newsletter_subscribers for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Active survey questions are publicly readable"
  on public.survey_questions for select to anon, authenticated
  using (is_active);
create policy "Campaign administrators manage survey questions"
  on public.survey_questions for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));
create policy "Campaign administrators manage survey responses"
  on public.survey_responses for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

create policy "Campaign administrators manage contact messages"
  on public.contact_messages for all to authenticated
  using ((select public.is_campaign_admin()))
  with check ((select public.is_campaign_admin()));

comment on table public.newsletter_subscribers is
  'No client write policy is intentionally provided. Add a verified, rate-limited subscription flow before collecting email addresses.';
comment on table public.survey_responses is
  'No client write policy is intentionally provided. Validate and minimize responses in a protected server-side flow before enabling surveys.';
comment on table public.contact_messages is
  'No client write policy is intentionally provided. This is not an incident-reporting table; use a protected, rate-limited server-side flow for general enquiries only.';
