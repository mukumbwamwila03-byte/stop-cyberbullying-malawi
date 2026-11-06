import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stop Cyberbullying Malawi | Think Before You Type",
  description:
    "An educational initiative promoting digital responsibility, kindness, and safer online communities across Malawi.",
  openGraph: {
    title: "Stop Cyberbullying Malawi | Think Before You Type",
    description:
      "Your words have power. Use them responsibly. A safer Malawi starts with how we treat each other online.",
    siteName: "Stop Cyberbullying Malawi",
    locale: "en_MW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Cyberbullying Malawi | Think Before You Type",
    description:
      "Your words have power. Use them responsibly. A safer Malawi starts with how we treat each other online.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
