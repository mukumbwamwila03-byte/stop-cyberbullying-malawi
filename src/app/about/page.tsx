import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Network,
  Scale,
  Shield,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Stop Cyberbullying Malawi",
  description:
    "Learn about the vision, mission, values, and strategic pillars behind Stop Cyberbullying Malawi.",
};

const values = [
  {
    number: "01",
    title: "Respect",
    description: "Treat every person with dignity, online and offline.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Responsibility",
    description: "Think about the impact of what we share and say.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Awareness",
    description: "Recognise cyberbullying and understand how to respond.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Empowerment",
    description: "Give people the knowledge and confidence to act safely.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Accountability",
    description: "Take ownership of our actions and help prevent harm.",
    icon: Scale,
  },
  {
    number: "06",
    title: "Inclusion",
    description: "Make digital spaces safer and more welcoming for everyone.",
    icon: UsersRound,
  },
];

const pillars = [
  {
    number: "01",
    title: "Public education",
    description:
      "Share practical, age-appropriate knowledge about cyberbullying, online safety, and respectful communication.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Victim empowerment",
    description:
      "Help people affected by online harm understand safer next steps and where to find appropriate support.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Digital responsibility",
    description:
      "Encourage thoughtful, compassionate behaviour and responsible participation in digital spaces.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Community engagement",
    description:
      "Bring young people, families, educators, and communities into the conversation and the solution.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Institutional collaboration",
    description:
      "Promote constructive collaboration with relevant institutions while respecting their distinct roles.",
    icon: Network,
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="page-shell about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-badge">
              <span aria-hidden="true" />
              A national digital responsibility initiative
            </p>
            <h1 id="about-title">
              A safer online Malawi
              <span>starts with all of us.</span>
            </h1>
            <p className="about-hero-description">
              We are building awareness, encouraging digital responsibility,
              and helping communities stand together against cyberbullying.
            </p>
            <a className="about-hero-link" href="#our-story">
              Get to know us <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="about-hero-note" aria-label="Campaign theme">
            <span className="about-note-icon">
              <HeartHandshake size={25} aria-hidden="true" />
            </span>
            <p>Our campaign theme</p>
            <strong>Think before you type. Respect before you post.</strong>
            <span className="about-note-rule" />
            <span className="about-note-caption">
              A Safer Malawi Starts With How We Treat Each Other Online.
            </span>
          </div>
        </div>
        <div className="about-hero-ribbon" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section
        className="about-story section-space"
        id="our-story"
        aria-labelledby="story-title"
      >
        <div className="page-shell about-story-layout">
          <div>
            <p className="eyebrow eyebrow-green">Why this work matters</p>
            <h2 className="about-section-title" id="story-title">
              More connection brings
              <span>more responsibility.</span>
            </h2>
          </div>
          <div className="about-story-copy">
            <p>
              Digital platforms help people in Malawi learn, work, connect, and
              share their voices. As more of everyday life happens online, the
              way we treat one another in digital spaces matters more than ever.
            </p>
            <p>
              Cyberbullying can affect wellbeing, confidence, relationships,
              and a person&apos;s sense of safety. It can be difficult to know
              what to do, especially for children and young people. Clear,
              practical public education can help people recognise harmful
              behaviour, prevent escalation, and seek trusted support.
            </p>
            <p>
              Stop Cyberbullying Malawi exists to make those conversations
              easier to start and safer to continue, in homes, schools, and
              communities across the country.
            </p>
          </div>
        </div>
      </section>

      <section className="about-boundary-section" aria-labelledby="boundary-title">
        <div className="page-shell">
          <div className="about-boundary">
            <span className="about-boundary-icon">
              <Shield size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow">Our role and boundaries</p>
              <h2 id="boundary-title">We educate, advocate, and connect.</h2>
              <p>
                Stop Cyberbullying Malawi is an educational and advocacy
                initiative. <strong>We are not a law-enforcement agency, a
                court, or an emergency-response service.</strong> We do not
                investigate incidents, determine guilt, or replace professional
                legal or emotional support. For the right next step, visit our{" "}
                <a href="/victim-support">Victim Support</a> guidance.
              </p>
            </div>
            <ArrowRight
              className="about-boundary-arrow"
              size={22}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section
        className="about-purpose section-space"
        aria-labelledby="purpose-title"
      >
        <div className="page-shell">
          <div className="about-centered-heading">
            <p className="eyebrow eyebrow-green">What guides us</p>
            <h2 className="about-section-title" id="purpose-title">
              One shared purpose.
              <span>A collective effort.</span>
            </h2>
          </div>
          <div className="purpose-grid">
            <article className="purpose-card purpose-card-vision">
              <span className="purpose-label">
                <Eye size={15} aria-hidden="true" /> Our vision
              </span>
              <h3>A safer digital environment for everyone in Malawi.</h3>
              <p>
                A country where people can participate online with confidence,
                free from cyberbullying and supported by a culture of respect.
              </p>
            </article>
            <article className="purpose-card purpose-card-mission">
              <span className="purpose-label">
                <ArrowRight size={15} aria-hidden="true" /> Our mission
              </span>
              <h3>Educate, empower, and mobilise Malawians.</h3>
              <p>
                We bring people together with practical knowledge and
                community-led action to prevent cyberbullying and promote
                responsible digital citizenship.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="about-values section-space"
        aria-labelledby="values-title"
      >
        <div className="page-shell">
          <div className="about-section-heading">
            <div>
              <p className="eyebrow eyebrow-green">The way we work</p>
              <h2 className="about-section-title" id="values-title">
                Values that keep
                <span>people at the centre.</span>
              </h2>
            </div>
            <p>
              These principles shape how we learn, communicate, and work with
              communities.
            </p>
          </div>
          <div className="values-grid">
            {values.map(({ number, title, description, icon: Icon }) => (
              <article className="value-card" key={number}>
                <div className="value-card-top">
                  <span>{number}</span>
                  <span className="value-card-icon">
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
        className="about-pillars section-space"
        aria-labelledby="pillars-title"
      >
        <div className="page-shell">
          <div className="about-centered-heading">
            <p className="eyebrow eyebrow-gold">How we make a difference</p>
            <h2 className="about-section-title" id="pillars-title">
              Five pillars.
              <span>One safer digital future.</span>
            </h2>
            <p>
              Our work connects individual knowledge with community action and
              collaboration.
            </p>
          </div>
          <div className="pillars-grid">
            {pillars.map(({ number, title, description, icon: Icon }) => (
              <article className="pillar-card" key={number}>
                <div className="pillar-card-top">
                  <span className="pillar-number">{number}</span>
                  <span className="pillar-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="about-closing">
            <span className="about-closing-icon">
              <HeartHandshake size={21} aria-hidden="true" />
            </span>
            <p>
              <strong>Everyone has a part to play.</strong> Choose empathy,
              share what you learn, and help make online spaces safer.
            </p>
            <a href="/victim-support">
              Find support <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
