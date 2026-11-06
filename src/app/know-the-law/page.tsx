import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  FileText,
  Gavel,
  MessageSquareText,
  Scale,
  ShieldAlert,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Know the Law | Stop Cyberbullying Malawi",
  description:
    "Educational information about Malawi's Electronic Transactions and Cyber Security Act, 2016, and digital safety.",
};

const legalSections = [
  {
    section: "Section 86",
    title: "Cyber harassment",
    topic:
      "A provision concerning cyber harassment through electronic communication.",
    icon: MessageSquareText,
    tone: "green",
  },
  {
    section: "Section 87",
    title: "Offensive communication",
    topic:
      "A provision concerning offensive communication by electronic means.",
    icon: AlertTriangle,
    tone: "red",
  },
  {
    section: "Section 88",
    title: "Cyberstalking",
    topic:
      "A provision concerning cyberstalking using electronic communication.",
    icon: Smartphone,
    tone: "gold",
  },
  {
    section: "Section 97",
    title: "Public education programmes",
    topic:
      "A provision concerning public education programmes relating to the Act.",
    icon: BookOpen,
    tone: "green",
  },
];

const distinctions = [
  {
    title: "Platform rules",
    description:
      "A platform can remove content or restrict an account under its own rules. A platform decision is separate from a decision under Malawi law.",
    tone: "green",
  },
  {
    title: "Legal questions",
    description:
      "Whether a particular incident falls within a law depends on its facts and the applicable legal provisions. Seek advice from a qualified Malawian legal professional.",
    tone: "gold",
  },
  {
    title: "Personal safety",
    description:
      "If you feel unsafe or receive a threat, prioritise your immediate safety and speak with someone you trust. Contact local emergency services or police if there is immediate danger.",
    tone: "red",
  },
];

const evidenceSteps = [
  {
    number: "01",
    title: "Keep a safe record",
    description:
      "If it is safe and appropriate, note what happened and when. Do not put yourself at risk to collect information.",
  },
  {
    number: "02",
    title: "Preserve relevant context",
    description:
      "Keep original messages or links where possible. Avoid editing or publicly reposting content.",
  },
  {
    number: "03",
    title: "Protect private information",
    description:
      "Do not forward intimate images, personal details, or private messages. Never upload incident evidence to this website.",
  },
  {
    number: "04",
    title: "Ask for trusted help",
    description:
      "Talk with a trusted adult or qualified professional about what to keep and how to share it safely, especially if you are under 18.",
  },
];

export default function KnowTheLawPage() {
  return (
    <main id="main-content">
      <section className="law-guide-hero" aria-labelledby="law-guide-title">
        <div className="page-shell law-guide-hero-inner">
          <p className="law-guide-badge">
            <Scale size={14} aria-hidden="true" />
            Legal education framework
          </p>
          <h1 id="law-guide-title">Know your rights. Know the law.</h1>
          <p>
            An introduction to parts of Malawi&apos;s Electronic Transactions
            and Cyber Security Act, 2016 that are relevant to online safety.
          </p>
        </div>
      </section>

      <section className="law-guide-notice" aria-labelledby="legal-notice-title">
        <div className="page-shell">
          <aside className="legal-notice-card">
            <span className="legal-notice-icon">
              <ShieldAlert size={21} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow">Please read</p>
              <h2 id="legal-notice-title">Important legal notice</h2>
              <p>
                This page provides general public education, not legal advice,
                legal representation, or a decision about any incident.
                Stop Cyberbullying Malawi is an educational and advocacy
                initiative—not a police station, court, or investigative
                authority. For advice about a specific situation, consult a
                qualified Malawian legal professional.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="law-act-section section-space"
        aria-labelledby="act-title"
      >
        <div className="page-shell">
          <article className="law-act-card">
            <span className="law-act-icon">
              <Gavel size={23} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow eyebrow-green">The legislation</p>
              <h2 id="act-title">
                Electronic Transactions and Cyber Security Act, 2016
              </h2>
              <p>
                The Act is identified as Act No. 33 of 2016. The section topics
                below are an introductory guide only. Refer to the official
                text for the full wording, definitions, and legal effect.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="law-provisions-section section-space"
        aria-labelledby="provisions-title"
      >
        <div className="page-shell">
          <div className="law-guide-heading">
            <div>
              <p className="eyebrow eyebrow-green">A starting point</p>
              <h2 className="law-guide-section-title" id="provisions-title">
                Provisions related
                <span>to online safety.</span>
              </h2>
            </div>
            <p>
              These section labels help you find relevant topics in the Act.
              They are not a substitute for reading the law or getting legal
              advice.
            </p>
          </div>
          <div className="law-provisions-grid">
            {legalSections.map(
              ({ section, title, topic, icon: Icon, tone }) => (
                <article
                  className={`law-provision-card law-provision-${tone}`}
                  key={section}
                >
                  <div className="law-provision-top">
                    <span>{section}</span>
                    <span className="law-provision-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{topic}</p>
                  <div className="law-provision-note">
                    Use the official Act text to understand the full provision.
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="law-boundaries-section section-space"
        aria-labelledby="boundaries-title"
      >
        <div className="page-shell">
          <div className="law-guide-centered">
            <p className="eyebrow eyebrow-green">Different routes for different needs</p>
            <h2 className="law-guide-section-title" id="boundaries-title">
              Understand the
              <span>different boundaries.</span>
            </h2>
            <p>
              Not every upsetting interaction is treated the same way. These
              general distinctions can help you think about a next step, but
              they cannot determine what the law says about a specific case.
            </p>
          </div>
          <div className="law-distinctions-grid">
            {distinctions.map(({ title, description, tone }) => (
              <article
                className={`law-distinction-card law-distinction-${tone}`}
                key={title}
              >
                <span className="law-distinction-marker" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="evidence-section section-space"
        aria-labelledby="evidence-title"
      >
        <div className="page-shell">
          <div className="evidence-card">
            <div className="evidence-heading">
              <span className="evidence-heading-icon">
                <FileText size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow eyebrow-gold">Only if it is safe</p>
                <h2 id="evidence-title">Keeping information safely</h2>
              </div>
            </div>
            <p className="evidence-intro">
              If you decide to seek help or make a report, relevant information
              may be useful. Your safety and privacy come first; do not collect
              or share anything that could put you or someone else at risk.
            </p>
            <div className="evidence-grid">
              {evidenceSteps.map(({ number, title, description }) => (
                <article className="evidence-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="law-next-steps section-space" aria-labelledby="next-steps-title">
        <div className="page-shell law-next-steps-inner">
          <div>
            <p className="eyebrow eyebrow-green">Need support?</p>
            <h2 id="next-steps-title">
              You do not have to work it out alone.
            </h2>
            <p>
              Find guidance on platform reporting, referrals for suspected
              criminal conduct, and emotional support.
            </p>
          </div>
          <Link className="button button-primary" href="/victim-support">
            Explore victim support <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
