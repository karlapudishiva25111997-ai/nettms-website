import Script from "next/script"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NETTMS Urban Habitat — Digital Construction Management & BIM Delivery Platform",
    template: "%s | NETTMS Urban Habitat",
  },
  description: "India's structured Digital Construction Management & BIM Delivery Platform. Serving global AEC consultants, PMCs, and infrastructure programs with ISO-aligned digital governance from design stage to digital asset handover.",
  keywords: ["BIM outsourcing India","Digital Construction Management","BIM delivery platform","Autodesk Construction Cloud","4D 5D BIM","Digital Asset Twin","ISO 19650","Hyderabad BIM","MEP BIM coordination","Tekla structures","Scan to BIM"],
  authors: [{ name: "NETTMS Urban Habitat Pvt. Ltd." }],
  creator: "NETTMS Urban Habitat Pvt. Ltd.",
  metadataBase: new URL("https://nettms.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nettms.com",
    siteName: "NETTMS Urban Habitat",
    title: "NETTMS — Digital Construction Management & BIM Delivery Platform",
    description: "ISO-aligned BIM outsourcing, digital construction management, and digital asset handover for global AEC and infrastructure clients.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
              <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3C2EQNSKVR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3C2EQNSKVR');
        `}
      </Script>
      </body>
    </html>
  );
}
