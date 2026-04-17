import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "BIM Outsourcing", href: "/services/bim-outsourcing" },
  { label: "BIM Delivery & Coordination", href: "/services/bim-coordination" },
  { label: "Digital Construction Management", href: "/services/digital-construction" },
  { label: "Digital Asset Twin (Lite)", href: "/services/digital-asset-twin" },
  { label: "Digital Twin & GIS-BIM", href: "/services/digital-twin-gis" },
];

const companyLinks = [
  { label: "About NETTMS", href: "/about" },
  { label: "Process & QA/QC", href: "/process-qaqc" },
  { label: "Industries", href: "/industries" },
  { label: "Partners & Network", href: "/partners" },
  { label: "Confidentiality", href: "/confidentiality" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#001228", borderTop: "1px solid rgba(0,170,170,0.12)" }}>
      <style>{`
        .footer-cta { background:linear-gradient(135deg,#001e3c,#006666); padding:3rem 2rem; text-align:center; }
        .footer-grid { max-width:1300px; margin:0 auto; padding:4rem 2rem 2rem; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
        .footer-link { color:rgba(255,255,255,0.55); font-size:0.84rem; text-decoration:none; transition:color 0.2s; display:block; margin-bottom:0.65rem; }
        .footer-link:hover { color:#00AAAA; }
        .footer-bar { border-top:1px solid rgba(255,255,255,0.06); max-width:1300px; margin:0 auto; padding:1.5rem 2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; }
        @media(max-width:900px){ .footer-grid { grid-template-columns:1fr 1fr !important; } }
        @media(max-width:600px){ .footer-grid { grid-template-columns:1fr !important; } }
      `}</style>

      <div className="footer-cta">
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", color: "rgba(255,255,255,0.85)", fontStyle: "italic", marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
          &ldquo;Digital Certainty for Modern Construction&rdquo;
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
          <Link href="/services" className="btn-outline">View Services</Link>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <Image src="/logo.png" alt="NETTMS" width={130} height={44} style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "1.2rem" }} />
          <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.8", marginBottom: "1.2rem", maxWidth: "280px" }}>
            India&apos;s structured Digital Construction Management &amp; BIM Delivery Platform — serving global AEC, PMC, and infrastructure clients.
          </p>
          <a href="mailto:info@nettms.com" style={{ color: "#00AAAA", fontSize: "0.84rem", textDecoration: "none", display: "block", marginBottom: "0.3rem" }}>info@nettms.com</a>
          <a href="tel:+919963384555" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.84rem", textDecoration: "none", display: "block", marginBottom: "1.2rem" }}>+91 9963384555</a>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["ISO-Aligned","Zero-Compromise","Certified Digital Delivery"].map(tag => (
              <span key={tag} style={{ fontSize: "0.68rem", padding: "0.3rem 0.7rem", border: "1px solid rgba(0,170,170,0.3)", color: "#00AAAA", letterSpacing: "0.08em", textTransform: "uppercase" }}>{tag}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00AAAA", marginBottom: "1.2rem" }}>Services</h4>
          {serviceLinks.map(l => <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>)}
        </div>

        <div>
          <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00AAAA", marginBottom: "1.2rem" }}>Company</h4>
          {companyLinks.map(l => <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>)}
        </div>

        <div>
          <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#00AAAA", marginBottom: "1.2rem" }}>Group Verticals</h4>
          {[
            { name: "NETTMS Urban Habitat", desc: "Core BIM & Digital Platform", href: "#" },
            { name: "NETTMSedu", desc: "Training & Research Wing", href: "/nettmsedu" },
            { name: "WatchDoc", desc: "Digital Quality Monitoring", href: "#" },
          ].map(g => (
            <div key={g.name} style={{ marginBottom: "1rem" }}>
              <Link href={g.href} className="footer-link" style={{ fontWeight: 600, fontSize: "0.86rem" }}>{g.name}</Link>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.77rem" }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bar">
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: "1.6" }}>
          501, Vamshi Estates, Ameerpet, Hyderabad, Telangana 500016, India
        </p>
        <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.3)" }}>
          © 2026 NETTMS Urban Habitat Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
