"use client";

const stats_cost = [
  { big:"↓ 40%", label:"Reduction in unbudgeted design changes", source:"Stanford CIFE — BIM Value Study (20-project survey)" },
  { big:"< 3%", label:"Cost estimation error with 5D BIM vs 10–15% traditional", source:"Stanford CIFE · Autodesk ROI Report" },
  { big:"₹1.5–2L Cr", label:"Annual Indian construction loss from rework & delays", source:"McKinsey Global Institute — India Infrastructure Report" },
];
const stats_time = [
  { big:"↑ 88%", label:"Productivity boost — Gamuda, 80+ projects on ACC Build", source:"Autodesk Construction Cloud Case Study, Malaysia" },
  { big:"↓ 7–15%", label:"Schedule duration reduction with BIM-integrated programmes", source:"Stanford CIFE · NBS BIM Report" },
  { big:"+20 Months", label:"Average overrun on large projects WITHOUT digital tools", source:"McKinsey GI — Imagining Construction's Digital Future" },
];
const stats_quality = [
  { big:"↓ 21%", label:"Field conflicts & rework from BIM clash detection", source:"Stanford CIFE, 32-project longitudinal study" },
  { big:"≈ 0", label:"Punchlists at project closeout — Zero Punchlist target achieved", source:"Clayco Construction, USA — ACC Build rollout" },
  { big:"70%", label:"BIM users report significant reduction in project errors", source:"NBS National BIM Report — UK & Global Survey" },
];

const bullets_cost = [
  "20–25% rework reduction with ACC Build digital checklists & issue tracking (Autodesk ACC Global Survey 2023)",
  "50% less labour for project closeout using ACC Build (Brinkman Construction, USA)",
  "5–12% total project cost saving — global BIM adopters, 500+ projects (Dodge Data & Analytics)",
  "8–15% cost saving in Indian BIM pilot projects (KPMG–CII India Construction Report)",
  "100% drawing compliance — zero old-version errors on site (NETTMS PMC case, ACC Build deployment)",
];
const bullets_time = [
  "15% efficiency gain — John Holland Group, simplified to single ACC stack (Autodesk, Australia 2023)",
  "15% faster slab cycle per floor using 4D BIM + ACC tracking (NETTMS PMC Deployment Reference)",
  "40% less RFI resolution time with centralised ACC document management (FMI / Autodesk Digital Contractor Report)",
  "25–40% schedule overruns typical in Indian projects without digitisation (CII India, KPMG Survey 2022)",
];
const bullets_quality = [
  "Zero BOQ conflicts in billing with model-linked ACC Cost module (NETTMS PMC Reference, Hyderabad)",
  "40% fewer unplanned scope changes with federated BIM coordination (Stanford CIFE)",
  "Digital QA/QC inspection records eliminate paper-based errors & disputes (Autodesk Build QC Module Survey)",
  "As-built accuracy up to LOD 400 when ACC tracks all field modifications (Autodesk 7D Handover Study)",
  "RERA compliance pressure accelerating digital quality adoption in India (CII Digital Construction Report 2023)",
];

const comparison = [
  { metric:"Cost Overrun (pre-BIM avg.)", global:"+28–80%", india:"+30–50%" },
  { metric:"Schedule Overrun (pre-BIM avg.)", global:"+20 months", india:"+25–40%" },
  { metric:"Rework as % of project cost", global:"5–15%", india:"12–18%" },
  { metric:"BIM Cost Saving (documented)", global:"5–12%", india:"8–15%" },
  { metric:"Schedule reduction with BIM+ACC", global:"7–15%", india:"10–20%" },
];

export default function IronTriangleStats() {
  return (
    <section style={{ background:"#001e3c", padding:"5rem 2rem", position:"relative", overflow:"hidden" }}>
      <div className="grid-bg" style={{ position:"absolute", inset:0, opacity:0.4 }} />
      <div style={{ maxWidth:"1300px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", fontSize:"0.72rem", letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:600, color:"#00AAAA", marginBottom:"0.8rem" }}>
            <span style={{ display:"block", width:"24px", height:"1px", background:"currentColor" }} />
            BIM + ACC Build Evidence
            <span style={{ display:"block", width:"24px", height:"1px", background:"currentColor" }} />
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", fontWeight:600, marginBottom:"0.8rem" }}>
            What the Numbers Say: Cost, Time &amp; Quality Savings
          </h2>
          <p style={{ fontSize:"0.9rem", color:"rgba(255,255,255,0.92)", maxWidth:"700px", margin:"0 auto" }}>
            Real-world surveys &amp; case studies — International &amp; Indian construction market &nbsp;·&nbsp; Stanford CIFE · McKinsey GI · Autodesk Global · KPMG India · NBS · CII
          </p>
        </div>

        {/* Iron Triangle — 3 columns */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem", marginBottom:"3rem" }} className="triangle-grid">
          {/* COST */}
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderTop:"3px solid #00AAAA", padding:"2rem" }}>
            <h3 style={{ fontFamily:"'DM Sans',Arial,sans-serif", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#00AAAA", marginBottom:"1.5rem" }}>💰 Cost — Savings & Overrun Prevention</h3>
            {stats_cost.map(s=>(
              <div key={s.big} style={{ marginBottom:"1.2rem", paddingBottom:"1.2rem", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"2.2rem", fontWeight:700, color:"#ffffff", display:"block", lineHeight:1 }}>{s.big}</span>
                <p style={{ fontSize:"0.90rem", color:"rgba(255,255,255,0.82)", lineHeight:1.78, margin:"0.4rem 0 0.2rem" }}>{s.label}</p>
                <p style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.82)", fontStyle:"italic" }}>{s.source}</p>
              </div>
            ))}
            <div style={{ marginTop:"1rem" }}>
              {bullets_cost.map((b,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"6px", fontSize:"0.78rem", color:"rgba(255,255,255,0.78)", lineHeight:1.6, marginBottom:"0.5rem" }}>
                  <span style={{ color:"#00AAAA", flexShrink:0 }}>▸</span>{b}
                </div>
              ))}
            </div>
          </div>

          {/* TIME */}
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderTop:"3px solid #00cccc", padding:"2rem" }}>
            <h3 style={{ fontFamily:"'DM Sans',Arial,sans-serif", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#00cccc", marginBottom:"1.5rem" }}>⏱ Time — Schedule & Delivery Performance</h3>
            {stats_time.map(s=>(
              <div key={s.big} style={{ marginBottom:"1.2rem", paddingBottom:"1.2rem", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"2.2rem", fontWeight:700, color:"#ffffff", display:"block", lineHeight:1 }}>{s.big}</span>
                <p style={{ fontSize:"0.90rem", color:"rgba(255,255,255,0.82)", lineHeight:1.78, margin:"0.4rem 0 0.2rem" }}>{s.label}</p>
                <p style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.82)", fontStyle:"italic" }}>{s.source}</p>
              </div>
            ))}
            <div style={{ marginTop:"1rem" }}>
              {bullets_time.map((b,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"6px", fontSize:"0.78rem", color:"rgba(255,255,255,0.78)", lineHeight:1.6, marginBottom:"0.5rem" }}>
                  <span style={{ color:"#00cccc", flexShrink:0 }}>▸</span>{b}
                </div>
              ))}
            </div>
          </div>

          {/* QUALITY */}
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderTop:"3px solid #006666", padding:"2rem" }}>
            <h3 style={{ fontFamily:"'DM Sans',Arial,sans-serif", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#00AAAA", marginBottom:"1.5rem" }}>✅ Quality & Scope — Defects, Conflicts & Handover</h3>
            {stats_quality.map(s=>(
              <div key={s.big} style={{ marginBottom:"1.2rem", paddingBottom:"1.2rem", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"2.2rem", fontWeight:700, color:"#ffffff", display:"block", lineHeight:1 }}>{s.big}</span>
                <p style={{ fontSize:"0.90rem", color:"rgba(255,255,255,0.82)", lineHeight:1.78, margin:"0.4rem 0 0.2rem" }}>{s.label}</p>
                <p style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.82)", fontStyle:"italic" }}>{s.source}</p>
              </div>
            ))}
            <div style={{ marginTop:"1rem" }}>
              {bullets_quality.map((b,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"6px", fontSize:"0.78rem", color:"rgba(255,255,255,0.78)", lineHeight:1.6, marginBottom:"0.5rem" }}>
                  <span style={{ color:"#00AAAA", flexShrink:0 }}>▸</span>{b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* India vs Global table */}
        <div style={{ marginBottom:"2.5rem" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.5rem", color:"#fff", fontWeight:600, marginBottom:"1.2rem", textAlign:"center" }}>🇮🇳 India vs Global — Before &amp; After BIM + ACC</h3>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"0.86rem", minWidth:"500px" }}>
              <thead>
                <tr>
                  {["Metric","Global","India"].map(h=>(
                    <th key={h} style={{ background:"#001e3c", color:"#fff", padding:"0.9rem 1.2rem", textAlign:"left", fontSize:"0.74rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row,i)=>(
                  <tr key={i} style={{ background: i%2===0 ? "rgba(255,255,255,0.03)" : "rgba(0,170,170,0.04)" }}>
                    <td style={{ padding:"0.9rem 1.2rem", color:"rgba(255,255,255,0.90)", borderBottom:"1px solid rgba(255,255,255,0.06)", fontWeight:500 }}>{row.metric}</td>
                    <td style={{ padding:"0.9rem 1.2rem", color:"rgba(255,255,255,0.78)", borderBottom:"1px solid rgba(255,255,255,0.06)", fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem" }}>{row.global}</td>
                    <td style={{ padding:"0.9rem 1.2rem", color:"#00AAAA", borderBottom:"1px solid rgba(255,255,255,0.06)", fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", fontWeight:600 }}>{row.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quotes */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }} className="quote-grid">
          <blockquote style={{ padding:"1.8rem", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderLeft:"3px solid #00AAAA", margin:0 }}>
            <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.05rem", fontStyle:"italic", color:"rgba(255,255,255,0.92)", lineHeight:1.75, marginBottom:"0.8rem" }}>
              &ldquo;Large Indian infrastructure projects average 30% cost overrun and 25–40% time delay. BIM adoption in pilot programmes reduced both by 10–20% in the first year.&rdquo;
            </p>
            <p style={{ fontSize:"0.74rem", color:"rgba(255,255,255,0.68)", fontWeight:600, letterSpacing:"0.08em" }}>— KPMG India — Engineering &amp; Construction Survey 2022</p>
          </blockquote>
          <blockquote style={{ padding:"1.8rem", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderLeft:"3px solid #00cccc", margin:0 }}>
            <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.05rem", fontStyle:"italic", color:"rgba(255,255,255,0.92)", lineHeight:1.75, marginBottom:"0.8rem" }}>
              &ldquo;Projects that integrated BIM with ACC Build saw 20–25% reduction in rework, 15% faster delivery cycles, and near-zero drawing conflicts at site.&rdquo;
            </p>
            <p style={{ fontSize:"0.74rem", color:"rgba(255,255,255,0.68)", fontWeight:600, letterSpacing:"0.08em" }}>— Autodesk Construction Cloud Global Impact Report 2023</p>
          </blockquote>
        </div>

        <p style={{ textAlign:"center", fontSize:"0.72rem", color:"rgba(255,255,255,0.58)", marginTop:"2rem", lineHeight:1.8 }}>
          Sources: Stanford CIFE BIM ROI Study · McKinsey Global Institute · Autodesk Construction Cloud Impact Reports (2022–24) · NBS National BIM Report · Dodge Data &amp; Analytics · KPMG–CII India Infrastructure · FMI Digital Contractor Survey · Autodesk Customer Case Studies: Gamuda, John Holland, Brinkman, Clayco
        </p>
      </div>
      <style>{`
        @media(max-width:900px){.triangle-grid{grid-template-columns:1fr!important}.quote-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
