import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  HeartHandshake,
  HelpCircle,
  LockKeyhole,
  MessageSquareWarning,
  Share2,
  Smartphone,
  UserRoundX,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Understand Cyberbullying | Stop Cyberbullying Malawi",
  description:
    "Learn what cyberbullying can look like, how it affects people, and practical steps for safer digital communities in Malawi.",
};

const formsOfBullying = [
  {
    title: "Abusive or intimidating messages",
    description:
      "Sending hurtful, intimidating, or threatening messages through texts, voice notes, email, or direct messages.",
    icon: MessageSquareWarning,
    tone: "green",
  },
  {
    title: "Threats and intimidation",
    description:
      "Using digital communication to threaten harm, frighten someone, or pressure them through coercion or extortion.",
    icon: AlertTriangle,
    tone: "red",
  },
  {
    title: "Impersonation and fake accounts",
    description:
      "Pretending to be another person online or misusing their identity to mislead, target, or harm them.",
    icon: UserRoundX,
    tone: "gold",
  },
  {
    title: "Public humiliation",
    description:
      "Targeting someone with humiliating posts, edited images, memes, or rumours intended to invite ridicule.",
    icon: Eye,
    tone: "red",
  },
  {
    title: "Sharing private content without consent",
    description:
      "Forwarding private messages, personal details, images, or recordings without permission can put someone at risk.",
    icon: Share2,
    tone: "green",
  },
  {
    title: "Group attacks and exclusion",
    description:
      "Coordinating repeated attacks, piling on, or deliberately excluding someone in group chats or online communities.",
    icon: UsersRound,
    tone: "gold",
  },
];

const platformExamples = [
  {
    name: "WhatsApp",
    focus: "Group chats and forwarded content",
    description:
      "Harm can include exclusion from a group, repeated targeting, or forwarding rumours, private messages, and voice notes without consent.",
  },
  {
    name: "Facebook",
    focus: "Comments, pages, and fake profiles",
    description:
      "People may be targeted through hurtful comments, impersonation, misleading posts, or rumours shared with a wider audience.",
  },
  {
    name: "TikTok and Instagram",
    focus: "Images, videos, and direct messages",
    description:
      "Examples include unwanted edits, humiliating posts, repeated hostile messages, or sharing someone’s content to target them.",
  },
];

const preventionTips = [
  "Pause before posting or forwarding, especially when you feel upset or pressured.",
  "Review privacy settings and limit who can see your personal information and posts.",
  "Do not forward private messages, images, recordings, or rumours without permission.",
  "Check whether a claim is reliable before sharing it with a group or wider audience.",
  "Use platform tools to block, mute, and report content that breaks the platform’s rules.",
  "If someone is being targeted, offer support privately and involve a trusted adult when appropriate.",
];

export default function UnderstandCyberbullyingPage() {
  return (
    <main id="main-content">
      <section className="understand-hero" aria-labelledby="understand-title">
        <div className="page-shell understand-hero-inner">
          <p className="understand-badge">
            <HelpCircle size={14} aria-hidden="true" />
            Educational resource
          </p>
          <h1 id="understand-title">Understand cyberbullying</h1>
          <p>
            Recognising harmful digital behaviour is a first step towards
            building a safer, kinder, and more responsible online Malawi.
          </p>
          <a className="understand-hero-link" href="#definition">
            Explore the guide <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="understand-definition section-space"
        id="definition"
        aria-labelledby="definition-title"
      >
        <div className="page-shell">
          <article className="definition-card">
            <div className="definition-title">
              <span className="definition-icon">
                <HelpCircle size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow eyebrow-green">The basics</p>
                <h2 id="definition-title">What is cyberbullying?</h2>
              </div>
            </div>
            <p className="definition-copy">
              Cyberbullying is bullying or harassment carried out using digital
              devices and online services. It can involve sending, posting, or
              sharing hurtful, threatening, humiliating, or private content to
              target or distress someone.
            </p>
            <div className="definition-note">
              <strong>Every situation is different.</strong> Repeated targeting
              is common, but a single serious incident can also cause harm.
              Online disagreement or criticism is not automatically
              cyberbullying; context, impact, and behaviour matter.
            </div>
          </article>
        </div>
      </section>

      <section
        className="understand-forms section-space"
        aria-labelledby="forms-title"
      >
        <div className="page-shell">
          <div className="understand-section-heading">
            <div>
              <p className="eyebrow eyebrow-green">Recognise the signs</p>
              <h2 className="understand-section-title" id="forms-title">
                Harm can take
                <span>many forms online.</span>
              </h2>
            </div>
            <p>
              These are examples, not a complete list. If something feels
              unsafe, seek advice from someone you trust.
            </p>
          </div>
          <div className="forms-grid">
            {formsOfBullying.map(
              ({ title, description, icon: Icon, tone }) => (
                <article className={`form-card form-card-${tone}`} key={title}>
                  <span className="form-card-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="understand-context section-space"
        aria-labelledby="context-title"
      >
        <div className="page-shell">
          <div className="understand-centered-heading">
            <p className="eyebrow eyebrow-green">Digital life in Malawi</p>
            <h2 className="understand-section-title" id="context-title">
              The platform may change.
              <span>Respect still matters.</span>
            </h2>
            <p>
              Harmful behaviour can happen anywhere people communicate,
              including on platforms commonly used for community, school, and
              social connections.
            </p>
          </div>
          <div className="platform-grid">
            {platformExamples.map(({ name, focus, description }) => (
              <article className="platform-card" key={name}>
                <span className="platform-icon">
                  <Smartphone size={19} aria-hidden="true" />
                </span>
                <p className="eyebrow">{name}</p>
                <h3>{focus}</h3>
                <p className="platform-description">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="understand-impact section-space"
        aria-labelledby="impact-title"
      >
        <div className="page-shell">
          <div className="impact-card">
            <div className="impact-heading">
              <span className="impact-icon">
                <HeartHandshake size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow eyebrow-gold">People come first</p>
                <h2 id="impact-title">Online harm can have real effects.</h2>
              </div>
            </div>
            <p className="impact-intro">
              Being targeted online may affect someone’s wellbeing, confidence,
              sense of safety, relationships, and ability to focus. The impact
              is personal, and everyone responds differently.
            </p>
            <div className="impact-examples">
              <article>
                <h3>Emotional wellbeing</h3>
                <p>
                  Someone may feel worried, isolated, embarrassed, or less
                  confident. A calm, supportive conversation can help.
                </p>
              </article>
              <article>
                <h3>School, work, and community life</h3>
                <p>
                  Online targeting may make it harder to concentrate or feel
                  comfortable participating in everyday activities.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="understand-prevention section-space"
        aria-labelledby="prevention-title"
      >
        <div className="page-shell">
          <div className="understand-centered-heading">
            <p className="eyebrow eyebrow-green">Small steps can help</p>
            <h2 className="understand-section-title" id="prevention-title">
              Safer habits for
              <span>everyday online life.</span>
            </h2>
          </div>
          <ul className="prevention-list">
            {preventionTips.map((tip) => (
              <li key={tip}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <aside className="understand-privacy-note">
            <LockKeyhole size={19} aria-hidden="true" />
            <p>
              <strong>Protect privacy.</strong> This site does not accept
              incident reports. Do not send us names, screenshots, or private
              content. If you are under 18, speak with a trusted adult.
            </p>
          </aside>
          <div className="understand-cta">
            <p>If you or someone you know needs help, explore safer next steps.</p>
            <Link className="button button-primary" href="/victim-support">
              Find victim support <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
