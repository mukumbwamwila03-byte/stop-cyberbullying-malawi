import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  HeartHandshake,
  MessageCircle,
  Pause,
  Shield,
  ShieldAlert,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const principles = [
  {
    number: "01",
    title: "Pause",
    description:
      "Take a breath before replying. A few seconds can stop a hurtful moment from becoming a bigger one.",
    icon: Pause,
  },
  {
    number: "02",
    title: "Protect",
    description:
      "Save relevant evidence safely, block or mute harmful accounts, and protect your personal information.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Reach out",
    description:
      "Talk with someone you trust. You do not have to handle cyberbullying on your own.",
    icon: HeartHandshake,
  },
];

const supportRoutes = [
  {
    label: "Platform violations",
    title: "Report it to the platform",
    description:
      "Use the app or website's own reporting and blocking tools for bullying, impersonation, or content that breaks its rules.",
    icon: Smartphone,
    tone: "mint",
  },
  {
    label: "Threats or suspected crime",
    title: "Contact the right authorities",
    description:
      "For immediate danger or suspected criminal conduct, contact the Malawi Police Service. For cyber incidents, seek guidance from mwCERT or MACRA.",
    icon: ShieldAlert,
    tone: "rose",
  },
  {
    label: "Emotional wellbeing",
    title: "Talk to a trusted person",
    description:
      "Reach out to a parent or guardian, teacher, counsellor, or another trusted adult. If you are a young person, ask an adult to help you decide what to do next.",
    icon: HeartHandshake,
    tone: "gold",
  },
];

const legalSections = [
  ["Section 86", "Cyber harassment"],
  ["Section 87", "Offensive communication"],
  ["Section 88", "Cyberstalking"],
  ["Section 97", "Public education programmes"],
];

function HeroArtwork() {
  return (
    <figure className="hero-art">
      <div className="hero-art-backdrop" aria-hidden="true">
        <span className="hero-art-sun" />
        <span className="hero-art-accent hero-art-accent-red" />
        <span className="hero-art-accent hero-art-accent-green" />
      </div>
      <Image
        alt="A man raising his hand in a stop gesture, reminding us to pause before we post."
        className="hero-art-image"
        height={2000}
        priority
        sizes="(max-width: 680px) 88vw, (max-width: 900px) 46vw, 520px"
        src="/cyber%201.png"
        width={2000}
      />
    </figure>
  );
}

function SupportCard({
  label,
  title,
  description,
  icon: Icon,
  tone,
}: (typeof supportRoutes)[number]) {
  return (
    <article className={`support-card support-card-${tone}`}>
      <div className="support-card-icon">
        <Icon size={21} strokeWidth={1.9} aria-hidden="true" />
      </div>
      <span className="eyebrow">{label}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="text-link" href="/victim-support">
        Know what to do <ArrowRight size={15} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <main id="main-content">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <p className="campaign-label">
                <span className="campaign-label-dot" />
                A national digital responsibility initiative
              </p>
              <h1 id="hero-title">
                Think before you type.
                <span>Respect before you post.</span>
              </h1>
              <p className="hero-description">
                The internet connects us. Let&apos;s make it a place where every
                person in Malawi feels safer, seen, and respected.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#why-it-matters">
                  Be part of the change <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-quiet" href="#get-support">
                  Get help and guidance
                </a>
              </div>
              <div className="hero-reassurance">
                <UsersRound size={17} aria-hidden="true" />
                <span>A safer Malawi starts with how we treat each other online.</span>
              </div>
            </div>
            <HeroArtwork />
          </div>
          <div className="hero-bottom page-shell">
            <Sparkles className="hero-bottom-mark" size={15} aria-hidden="true" />
            <span>Kindness is a strength. Make it your first response.</span>
            <a href="#why-it-matters" aria-label="Scroll to our approach">
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="notice-strip" aria-label="About this initiative">
          <div className="page-shell notice-inner">
            <Shield size={20} aria-hidden="true" />
            <p>
              <strong>We educate and support.</strong> This initiative is not a
              law-enforcement agency, court, or emergency-response service.
            </p>
            <a href="#get-support">Find the right support <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="approach-section section-space" id="why-it-matters" aria-labelledby="approach-title">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-green">A better online Malawi</p>
                <h2 id="approach-title">
                  Small choices can
                  <span>change the whole conversation.</span>
                </h2>
              </div>
              <p className="section-intro">
                Cyberbullying can affect anyone. We can each help prevent harm
                by choosing empathy, acting early, and supporting one another.
              </p>
            </div>
            <div className="principle-grid">
              {principles.map(({ number, title, description, icon: Icon }) => (
                <article className="principle-card" key={number}>
                  <div className="principle-card-top">
                    <span className="principle-number">{number}</span>
                    <span className="principle-icon">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="pledge">
              <span className="pledge-icon"><HeartHandshake size={20} aria-hidden="true" /></span>
              <p><strong>Choose respect. Stand with someone.</strong> A safer online community is something we build together.</p>
              <a href="#get-support">Start with one kind action <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="law-section section-space" id="know-your-rights" aria-labelledby="law-title">
          <div className="page-shell law-layout">
            <div className="law-copy">
              <p className="eyebrow eyebrow-gold">Awareness, not legal advice</p>
              <h2 id="law-title">Know the law.<span>Know where to turn.</span></h2>
              <p>
                Malawi&apos;s Electronic Transactions and Cyber Security Act,
                2016 (Act No. 33 of 2016) includes provisions relevant to
                cyberbullying and public education.
              </p>
              <p className="law-caveat">
                This is general educational information, not legal advice or a
                determination that a particular incident is unlawful.
              </p>
              <a className="button button-light" href="#get-support">
                Explore support options <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="law-card">
              <div className="law-card-header">
                <span className="law-card-icon"><BookOpen size={19} aria-hidden="true" /></span>
                <div>
                  <span className="eyebrow">Electronic Transactions and</span>
                  <h3>Cyber Security Act, 2016</h3>
                </div>
              </div>
              <ul className="law-list">
                {legalSections.map(([section, topic]) => (
                  <li key={section}>
                    <span className="law-section-number">{section}</span>
                    <span>{topic}</span>
                    <Check size={16} aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <p className="law-card-footnote">For the full Act and advice on your situation, consult an authoritative source or a qualified legal professional.</p>
            </div>
          </div>
        </section>

        <section className="support-section section-space" id="get-support" aria-labelledby="support-title">
          <div className="page-shell">
            <div className="support-heading">
              <div>
                <p className="eyebrow eyebrow-green">You are not alone</p>
                <h2 id="support-title">Different situations.<span>Different kinds of support.</span></h2>
              </div>
              <p>Choose the next step that fits. If someone is in immediate danger, contact local emergency services or the police.</p>
            </div>
            <div className="support-grid">
              {supportRoutes.map((route) => (
                <SupportCard key={route.label} {...route} />
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="page-shell closing-inner">
            <div className="closing-icon"><MessageCircle size={22} aria-hidden="true" /></div>
            <p className="eyebrow">Our shared promise</p>
            <h2 id="closing-title">A safer Malawi starts with how we treat each other online.</h2>
            <p>Think before you type. Respect before you post.</p>
            <a className="button button-primary" href="#home">Bring kindness into your next conversation</a>
          </div>
        </section>
      </main>
    </>
  );
}
