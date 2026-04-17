import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BIM Outsourcing (Global) — Offshore BIM Production & Coordination",
  description: "NETTMS delivers high-quality offshore BIM modeling for global AEC firms. Architecture, Structure, MEP, Tekla, Scan-to-BIM. LOD 100–500. NDA-protected. 5-Level QA/QC.",
  alternates: { canonical: "/services/bim-outsourcing" },
};

const disciplines = ["Architectural BIM — Revit-based, LOD 100 to 400, GFC-ready","Structural BIM — RC and Steel, Revit Structure / Tekla Structures","MEP BIM — Mechanical, Electrical, Plumbing, Fire Fighting, HVAC","Tekla Structures — Steel fabrication detailing and connection design support","Scan-to-BIM — Point cloud processing and as-built BIM model generation","Infrastructure BIM — Roads, bridges, drainage, civil utility models"];
const lods = [["LOD 100","Concept mass modeling"],["LOD 200","Schematic design"],["LOD 300","Construction documentation"],["LOD 350","Coordination model"],["LOD 400","Fabrication / GFC level"],["LOD 500","As-built / handover model"]];
const differentiators = ["NDA-protected: Every client engagement starts with a signed Non-Disclosure Agreement","BEP-compliant: We work to your BIM Execution Plan or help you build one","Resource-flexible: Fully dedicated, partly dedicated, or 2-hour specialist models","24×7 support: Our team spans time zones — we respond when you need us","5-Level QA/QC: Nothing leaves without multi-level internal review","Unlimited 2D output: From one 3D model — no extra charge per sheet"];

export default function BIMOutsourcingPage() {
  return (
    <>
      <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
        <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, #00AAAA, transparent)"}} />
        <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:2}}>
          <Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#00AAAA",textDecoration:"none",fontWeight:600,marginBottom:"2rem"}}>← Back to Services</Link>
          <div className="eyebrow" style={{color:"#00AAAA"}}>Service 01</div>
          <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:"#fff",marginBottom:"1.5rem",fontWeight:600}}>Offshore BIM Production. Global Standards. Local Expertise.</h1>
          <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,fontWeight:300}}>NETTMS delivers high-quality BIM modeling and production for global AEC and infrastructure firms — operating as your offshore digital team. We deliver to your LOD, your template, your timeline. We sign NDAs with every client — your design IP is protected by strict confidentiality protocols enforced within our controlled CDE environment.</p>
        </div>
      </section>
      <section style={{padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",background:"#fff"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div style={{marginBottom:"3rem"}}>
            <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Disciplines Covered</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0.75rem"}}>
              {disciplines.map((d,i) => <div key={i} style={{padding:"1.1rem 1.2rem",background:"#E8F4F4",borderLeft:"3px solid #00AAAA",fontSize:"0.93rem",fontWeight:500,color:"#001e3c",lineHeight:1.4}}>{d}</div>)}
            </div>
          </div>
          <div style={{marginBottom:"3rem"}}>
            <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>LOD Levels Supported</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"}} className="lod-grid">
              {lods.map(([lod,desc]) => <div key={lod} style={{padding:"1.2rem",border:"1px solid rgba(0,102,102,0.15)"}}>
                <strong style={{display:"block",color:"#00AAAA",fontFamily:"'Cormorant Garamond', serif",fontSize:"1.2rem",marginBottom:"0.2rem"}}>{lod}</strong>
                <span style={{fontSize:"0.84rem",color:"#3a5468"}}>{desc}</span>
              </div>)}
            </div>
            <style>{`.lod-grid{@media(max-width:700px){grid-template-columns:1fr 1fr!important}}`}</style>
          </div>
          <div style={{marginBottom:"3rem"}}>
            <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>What Makes Us Different</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.75rem"}} className="diff-grid">
              {differentiators.map((d,i) => <div key={i} style={{padding:"1rem 1.2rem",background:"#f5fafa",display:"flex",alignItems:"flex-start",gap:"8px",fontSize:"0.93rem",lineHeight:1.75}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>{d}
              </div>)}
            </div>
            <style>{`.diff-grid{@media(max-width:700px){grid-template-columns:1fr!important}}`}</style>
          </div>
          <div style={{padding:"2.5rem",background:"#001e3c",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",flexWrap:"wrap"}}>
            <div><h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.4rem",color:"#fff",marginBottom:"0.4rem",fontWeight:600}}>Ready to Get Started?</h3>
            <p style={{color:"rgba(255,255,255,0.82)",fontSize:"0.9rem"}}>Request a quote or download our BIM capability brochure.</p></div>
            <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
              <Link href="/contact" className="btn-primary">Request BIM Quote</Link>
              <Link href="/services" className="btn-outline">All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
