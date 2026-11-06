import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stop Cyberbullying Malawi | Think Before You Type",
  description:
    "An educational initiative promoting digital responsibility, kindness, and safer online communities across Malawi.",
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
