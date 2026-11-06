import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Shield } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div>
          <Link className="brand" href="/" aria-label="Stop Cyberbullying Malawi home">
            <span className="brand-mark" aria-hidden="true">
              <Image
                alt=""
                className="brand-logo-image"
                height={2000}
                sizes="38px"
                src="/cyber%20logo.png"
                width={2000}
              />
            </span>
            <span className="brand-name">
              <strong>STOP CYBERBULLYING</strong>
              <span>MALAWI</span>
            </span>
          </Link>
          <p className="footer-tagline">
            A Safer Malawi Starts With How We Treat Each Other Online.
          </p>
        </div>
        <div className="footer-notice">
          <span className="footer-notice-icon">
            <Shield size={16} aria-hidden="true" />
          </span>
          <p>
            An educational and advocacy initiative. Not an emergency,
            law-enforcement, or legal service.
          </p>
        </div>
        <Link className="back-to-top" href="#top">
          Back to top <ArrowDown size={15} aria-hidden="true" />
        </Link>
      </div>
      <div className="footer-bottom">
        <div className="page-shell footer-bottom-inner">
          <span>© Stop Cyberbullying Malawi</span>
          <span>Think before you type. Respect before you post.</span>
          <Link href="/privacy">Privacy &amp; safeguarding</Link>
        </div>
      </div>
    </footer>
  );
}
