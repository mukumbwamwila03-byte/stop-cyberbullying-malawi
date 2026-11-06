import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  LifeBuoy,
  MessageCircleWarning,
  Phone,
  Shield,
  ShieldAlert,
  Smartphone,
  UserRoundCheck,
} from "lucide-react";
import EvidenceChecklist from "@/components/EvidenceChecklist";

export const metadata: Metadata = {
  title: "Victim Support & Help | Stop Cyberbullying Malawi",
  description:
    "Practical, privacy-conscious guidance on online safety, platform reporting, and support in Malawi.",
};

const actionSteps = [
  {
    number: "01",
    title: "Pause before replying",
    description:
      "You do not have to respond immediately. Step away, take a breath, and avoid replying while upset.",
    icon: MessageCircleWarning,
    tone: "gold",
  },
  {
    number: "02",
    title: "Keep a safe record",
    description:
      "If it is safe, note dates, times, account names, and what happened. Do not share private material publicly.",
    icon: Shield,
    tone: "green",
  },
  {
    number: "03",
    title: "Block or restrict",
    description:
      "Use the platform’s block, mute, restrict, or privacy controls to reduce unwanted contact.",
    icon: Ban,
    tone: "red",
  },
  {
    number: "04",
    title: "Report and reach out",
    description:
      "Report content through the platform and tell someone you trust. If you are under 18, involve a trusted adult.",
    icon: UserRoundCheck,
    tone: "green",
  },
];

const platformGuides = [
  {
    name: "WhatsApp",
    href: "https://faq.whatsapp.com/",
    steps: [
      "Open the chat or group and tap the contact or group name.",
      "Look for the Report, Block, or Exit group options.",
      "Choose the action that feels safe; check the current WhatsApp Help Center for up-to-date steps.",
    ],
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/help/",
    steps: [
      "Open the post, profile, comment, or message you want to report.",
      "Open its options menu and choose Find support or Report.",
      "Follow the prompts. You can also block or restrict the account.",
    ],
  },
  {
    name: "TikTok",
    href: "https://support.tiktok.com/",
    steps: [
      "Open the video, comment, message, or profile.",
      "Use the Share or options menu and select Report.",
      "Choose the closest reason and follow the prompts; block the account if needed.",
    ],
  },
  {
    name: "Instagram",
    href: "https://help.instagram.com/",
    steps: [
      "Open the post, comment, message, or profile.",
      "Tap the options menu and select Report.",
      "Follow the prompts. Consider restricting or blocking the account.",
    ],
  },
];

const referralRoutes = [
  {
    category: "Criminal offence reports",
    title: "Malawi Police Service — Cybercrime Unit",
    description:
      "For suspected criminal conduct, contact the Malawi Police Service through a current official channel and ask about the Cybercrime Unit. Use 997 for immediate danger only.",
    contact: "997",
    contactLabel: "Emergency Police: 997",
    href: "tel:997",
    note: "The emergency number was supplied in the project brief. Confirm its current availability; do not assume it is a direct cybercrime reporting line.",
    tone: "red",
    icon: Phone,
  },
  {
    category: "Child safeguarding and support",
    title: "Child Helpline",
    description:
      "Children and young people can seek support through the child helpline or ask a trusted adult to help find a safe, appropriate service.",
    contact: "116",
    contactLabel: "Call Child Helpline: 116",
    href: "tel:116",
    note: "Helpline number supplied in the project brief; confirm current availability and hours before publishing.",
    tone: "gold",
    icon: HeartHandshake,
  },
  {
    category: "Regulatory concerns",
    title: "MACRA",
    description:
      "The Malawi Communications Regulatory Authority handles communications-sector regulation. Check its official channels for the appropriate complaint route.",
    contact: "Official website",
    contactLabel: "Visit MACRA",
    href: "https://macra.mw/",
    note: "Use official channels to confirm whether your concern falls within MACRA’s remit.",
    tone: "green",
    icon: Smartphone,
  },
  {
    category: "Cyber incident guidance",
    title: "mwCERT",
    description:
      "For technical cyber incidents, seek guidance through the current official Malawi Computer Emergency Response Team channels.",
    contact: "Contact details to confirm",
    contactLabel: "Check with MACRA",
    href: "https://macra.mw/",
    note: "We could not verify a current direct mwCERT reporting endpoint; confirm it through an official source.",
    tone: "navy",
    icon: LifeBuoy,
  },
];

export default function VictimSupportPage() {
  return (
    <main id="main-content">
      <section className="support-hero" aria-labelledby="victim-support-title">
        <div className="page-shell support-hero-inner">
          <p className="support-hero-badge">
            <HeartHandshake size={15} aria-hidden="true" />
            Support and guidance
          </p>
          <h1 id="victim-support-title">You are not alone.<span>Help is available.</span></h1>
          <p>
            If someone has hurt or frightened you online, you deserve support.
            Take one step at a time, and choose the help that feels safest.
          </p>
          <a className="support-hero-link" href="#immediate-danger">
            See urgent support options <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="danger-section"
        id="immediate-danger"
        aria-labelledby="danger-title"
      >
        <div className="page-shell">
          <div className="danger-alert">
            <span className="danger-alert-icon">
              <ShieldAlert size={22} aria-hidden="true" />
            </span>
            <div className="danger-alert-copy">
              <p className="eyebrow">Urgent safety</p>
              <h2 id="danger-title">Are you in immediate physical danger?</h2>
              <p>
                Move to a safer place if you can and contact local emergency
                services or police. If you are a child or young person, tell a
                trusted adult right away.
              </p>
              <p className="danger-number-note">
                The following numbers were provided in the project brief. Their
                current availability and coverage have not been independently
                confirmed; verify them with local official sources before
                relying on them.
              </p>
            </div>
            <div className="danger-actions">
              <a className="danger-call-button" href="tel:997">
                <Phone size={16} aria-hidden="true" /> Police 997
              </a>
              <a className="danger-call-secondary" href="tel:116">
                Child Helpline 116
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="support-actions-section section-space"
        aria-labelledby="action-steps-title"
      >
        <div className="page-shell">
          <div className="support-section-heading">
            <div>
              <p className="eyebrow eyebrow-green">Start with what feels safe</p>
              <h2 className="support-section-title" id="action-steps-title">
                Four steps you
                <span>can take right now.</span>
              </h2>
            </div>
            <p>
              You do not need to do everything at once. Your safety and
              wellbeing come first.
            </p>
          </div>
          <div className="support-action-grid">
            {actionSteps.map(({ number, title, description, icon: Icon, tone }) => (
              <article
                className={`support-action-card support-action-${tone}`}
                key={number}
              >
                <div className="support-action-top">
                  <span>{number}</span>
                  <span className="support-action-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="platform-guides-section section-space"
        aria-labelledby="platform-guides-title"
      >
        <div className="page-shell">
          <div className="support-centered-heading">
            <p className="eyebrow eyebrow-green">Reporting on the app or website</p>
            <h2 className="support-section-title" id="platform-guides-title">
              Use the platform’s
              <span>own safety tools.</span>
            </h2>
            <p>
              These general steps can help you find reporting tools. Menus
              change over time, so use each platform’s official Help Center for
              the latest instructions.
            </p>
          </div>
          <div className="platform-guide-grid">
            {platformGuides.map(({ name, href, steps }) => (
              <article className="platform-guide-card" key={name}>
                <div className="platform-guide-heading">
                  <span className="platform-guide-icon">
                    <Smartphone size={18} aria-hidden="true" />
                  </span>
                  <h3>{name}</h3>
                </div>
                <ol>
                  {steps.map((step) => <li key={step}>{step}</li>)}
                </ol>
                <a href={href} rel="noreferrer" target="_blank">
                  Official {name} Help Center
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="referral-section section-space"
        aria-labelledby="referral-title"
      >
        <div className="page-shell">
          <div className="support-section-heading">
            <div>
              <p className="eyebrow eyebrow-green">Different needs, different pathways</p>
              <h2 className="support-section-title" id="referral-title">
                Find the right
                <span>kind of support.</span>
              </h2>
            </div>
            <p>
              This initiative is not an emergency service or law-enforcement
              agency. Contact the appropriate organization for your situation.
            </p>
          </div>
          <div className="referral-grid">
            {referralRoutes.map(
              ({
                category,
                title,
                description,
                contact,
                contactLabel,
                href,
                note,
                tone,
                icon: Icon,
              }) => (
                <article className={`referral-card referral-${tone}`} key={title}>
                  <span className="referral-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <p className="eyebrow">{category}</p>
                  <h3>{title}</h3>
                  <p className="referral-description">{description}</p>
                  <p className="referral-contact">{contact}</p>
                  <a
                    className="referral-link"
                    href={href}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    target={href.startsWith("http") ? "_blank" : undefined}
                  >
                    {contactLabel}
                    {href.startsWith("http") ? (
                      <ExternalLink size={14} aria-hidden="true" />
                    ) : (
                      <Phone size={14} aria-hidden="true" />
                    )}
                  </a>
                  <p className="referral-note">{note}</p>
                </article>
              ),
            )}
          </div>
          <aside className="psychosocial-note">
            <span><HeartHandshake size={19} aria-hidden="true" /></span>
            <p>
              <strong>Emotional support matters too.</strong> Talk to a trusted
              friend, parent or guardian, teacher, counsellor, or a child
              safeguarding or psychosocial support organisation you trust.
              Ask a trusted adult to help identify an appropriate local service.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="evidence-checklist-section section-space"
        aria-labelledby="checklist-title"
      >
        <div className="page-shell checklist-layout">
          <div className="checklist-intro">
            <p className="eyebrow eyebrow-green">Your information stays yours</p>
            <h2 className="support-section-title">
              Keep a record
              <span>only if it is safe.</span>
            </h2>
            <p>
              This optional checklist is a private reminder—not a reporting
              form. Nothing you tick is stored, uploaded, or sent.
            </p>
            <div className="checklist-safeguarding">
              <Shield size={17} aria-hidden="true" />
              <span>
                If you are under 18, do not collect or share sensitive material
                on your own. Ask a trusted adult for help.
              </span>
            </div>
          </div>
          <EvidenceChecklist />
        </div>
      </section>

      <section className="support-final-cta">
        <div className="page-shell support-final-cta-inner">
          <div>
            <p className="eyebrow eyebrow-gold">Support and education</p>
            <h2>You deserve to be treated with respect—online and offline.</h2>
            <p>
              Learn more about cyberbullying and the ways people can find help.
            </p>
          </div>
          <Link className="button button-light" href="/understand">
            Understand cyberbullying <CheckCircle2 size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
