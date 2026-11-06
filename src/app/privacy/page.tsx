import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  EyeOff,
  FileLock2,
  HeartHandshake,
  LockKeyhole,
  ShieldAlert,
  UserRoundCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Safeguarding | Stop Cyberbullying Malawi",
  description:
    "How Stop Cyberbullying Malawi respects visitor privacy, minimises data collection, and protects children and young people.",
};

const policySections = [
  {
    number: "01",
    title: "Data collection & minimisation",
    icon: EyeOff,
    paragraphs: [
      "We aim to collect only the personal information needed to provide a clearly described service. At the time of publication, this website is informational: it does not offer ambassador registration, newsletter signup, contact enquiry, or quiz submission forms. The evidence checklist does not send or save your selections.",
      "If registration or optional forms are introduced, the information requested and the reason for collecting it will be explained before you submit anything. Participation will be voluntary except where information is necessary to provide a service you request.",
    ],
  },
  {
    number: "02",
    title: "How submitted information may be used",
    icon: FileLock2,
    paragraphs: [
      "If a form is introduced, information will be used only for the purpose stated beside that form. Depending on the service, this may include coordinating volunteers, arranging workshop logistics, responding to a general enquiry, or delivering educational materials that were requested.",
      "Information will not be repurposed for public accusations, naming or shaming, or unrelated marketing. Any future newsletter would require a clear, optional subscription and a way to unsubscribe.",
    ],
  },
  {
    number: "03",
    title: "Child safeguarding",
    icon: HeartHandshake,
    paragraphs: [
      "Children and young people should not be asked to provide unnecessary personal details. Before any school ambassador registration involving someone under 18 is offered, an appropriate safeguarding process must be in place, including explicit parent or guardian consent and age-appropriate participation.",
      "We will not publish a minor’s name, photograph, school, location, or other identifying details without verified written consent from a parent or guardian and the young person’s informed agreement where appropriate. A child’s safety and best interests take priority over publicity.",
    ],
  },
  {
    number: "04",
    title: "Security & storage",
    icon: LockKeyhole,
    paragraphs: [
      "The project includes a Supabase PostgreSQL schema with Row Level Security (RLS) policies. This website is not currently connected to an active Supabase data-collection flow, so the schema should not be understood as evidence that submitted visitor data is presently being stored there.",
      "Before any collection service launches, it must be deployed over HTTPS (which encrypts data in transit), use appropriately configured RLS and least-privilege administrator access, and be tested for its intended security controls. No system or transmission method can be promised to be completely secure.",
    ],
  },
  {
    number: "05",
    title: "Your choices & data rights",
    icon: UserRoundCheck,
    paragraphs: [
      "If a future form collects personal information, its notice should explain how to request access, correction, or deletion, and any limits that may apply. Requests should be handled through a verified campaign privacy contact, with reasonable steps to confirm the requester’s identity before making changes.",
      "A dedicated privacy coordinator contact channel has not yet been published. Until one is provided, this website cannot accept privacy requests or incident reports. Please do not put sensitive information in public comments or social posts; use the relevant service’s official privacy channel where available.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page" id="main-content">
      <header className="privacy-hero" aria-labelledby="privacy-title">
        <div className="page-shell privacy-hero-inner">
          <p className="privacy-badge">
            <ShieldAlert size={16} aria-hidden="true" />
            Trust &amp; Safeguarding
            <span aria-hidden="true">|</span>
            Official Governance Document
          </p>
          <h1 id="privacy-title">Privacy Policy &amp; Safeguarding</h1>
          <p className="privacy-subtitle">
            How Stop Cyberbullying Malawi protects user data, respects visitor
            privacy, and ensures child online safety.
          </p>
          <p className="privacy-status">
            Current scope: informational website; no visitor-submission forms
            are active.
          </p>
        </div>
      </header>

      <div className="page-shell privacy-content">
        <aside className="privacy-boundary" aria-labelledby="privacy-boundary-title">
          <span className="privacy-boundary-icon">
            <ShieldAlert size={20} aria-hidden="true" />
          </span>
          <div>
            <h2 id="privacy-boundary-title">
              No public accusation boards or unmoderated complaint logs
            </h2>
            <p>
              This initiative does not operate public naming forums, anonymous
              public complaint logs, or accusation message boards. Do not post
              names, screenshots, or identifying details here. This boundary
              helps reduce misuse, privacy harm, and vigilantism.
            </p>
          </div>
        </aside>

        <section className="privacy-policy-list" aria-label="Privacy policy sections">
          {policySections.map(({ number, title, icon: Icon, paragraphs }) => (
            <article
              aria-labelledby={`privacy-section-${number}`}
              className="privacy-policy-section"
              key={number}
            >
              <div className="privacy-policy-icon">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div className="privacy-policy-copy">
                <p className="privacy-section-number">
                  Section {number}
                </p>
                <h2 id={`privacy-section-${number}`}>{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <CheckCircle2
                className="privacy-section-mark"
                size={18}
                aria-hidden="true"
              />
            </article>
          ))}
        </section>

        <aside className="privacy-contact-note" aria-labelledby="privacy-help-title">
          <CircleHelp size={20} aria-hidden="true" />
          <div>
            <h2 id="privacy-help-title">Need support with an online safety concern?</h2>
            <p>
              This site is not an incident-reporting service. Review practical
              next steps and distinguish platform reporting, emergency help,
              and other support options.
            </p>
            <Link href="/victim-support">
              Visit Victim Support <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
