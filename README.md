# Stop Cyberbullying Malawi

An educational and advocacy initiative promoting safer, more respectful online
communities in Malawi.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — Next.js App Router homepage, About, Understand, Know the Law, and Victim Support pages, metadata, and global styles
- `src/components/` — shared navigation, site footer, and private evidence checklist
- `supabase/migrations/` — PostgreSQL schema and row-level security policies

The initial site is informational and does not collect incident reports or
personal information. It distinguishes platform reporting, referrals for
suspected criminal conduct, and emotional support. Confirm official contact
details and legal wording with the relevant authorities and qualified
professionals before publishing additional referral or legal guidance.

## Supabase

The initial schema migration creates the campaign content, account, survey,
newsletter, and contact tables. It enables row-level security and keeps personal
or submitted content inaccessible to public clients. Public write policies for
newsletter signups, survey responses, and contact messages are intentionally
not included; add protected, validated, rate-limited server-side flows before
collecting that information.

To apply the migration, configure the Supabase CLI for the project and run:

```bash
supabase db push
```

Never expose a Supabase service-role key in browser code.

## Checks

```bash
npm run lint
npm run build
```
