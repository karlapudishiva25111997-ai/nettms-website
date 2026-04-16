import Link from "next/link";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; content: React.ReactNode }[];
  ctaLabel1: string;
  ctaLabel2: string;
}

export default function ServicePageTemplate({ eyebrow, title, intro, sections, ctaLabel1, ctaLabel2 }: ServicePageProps) {
  return (
    <>
      <section style={{ background: "#001e3c", padding: "8rem 2rem 5rem", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #00AAAA, transparent)" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#00AAAA", textDecoration: "none", fontWeight: 600, marginBottom: "2rem" }}>
            ← Back to Services
          </Link>
          <div className="eyebrow" style={{ color: "#00AAAA" }}>{eyebrow}</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#fff", marginBottom: "1.5rem", fontWeight: 600 }}>{title}</h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.85, fontWeight: 300 }}>{intro}</p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: "#001e3c", marginBottom: "1.2rem", fontWeight: 600, paddingBottom: "0.6rem", borderBottom: "2px solid #E8F4F4" }}>{sec.heading}</h2>
              {sec.content}
            </div>
          ))}

          <div style={{ padding: "2.5rem", background: "#001e3c", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#fff", marginBottom: "0.4rem", fontWeight: 600 }}>Ready to Get Started?</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>Contact our team to discuss your project requirements.</p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">{ctaLabel1}</Link>
              <Link href="/services" className="btn-outline">{ctaLabel2}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
