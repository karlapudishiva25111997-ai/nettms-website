import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "BIM Delivery & Coordination — Multi-Discipline BIM Coordination", description: "NETTMS provides end-to-end multi-discipline BIM delivery and coordination — clash-resolved, BEP-compliant, and construction-ready.", alternates: { canonical: "/services/bim-coordination" } };
const components = ["Design-stage BIM modeling and consultant coordination","Multi-discipline clash detection using Navisworks / ACC","Issue management and RFI tracking through CDE","Coordination matrix management","Model review and validation against client BEP","Drawing production and GFC sheet sets from coordinated models","PMC-level digital construction reporting"];
const clients = ["Design consultants needing BIM coordination capacity","PMCs managing multi-discipline design teams","Developers who want coordination confidence before construction","International firms outsourcing India/Gulf project coordination"];
export default function BIMCoordinationPage() {
  return (<>
    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, #00AAAA, transparent)"}} />
      <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:2}}>
        <Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#00AAAA",textDecoration:"none",fontWeight:600,marginBottom:"2rem"}}>← Back to Services</Link>
        <div className="eyebrow" style={{color:"#00AAAA"}}>Service 02</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:"#fff",marginBottom:"1.5rem",fontWeight:600}}>Multi-Discipline BIM Coordination — Clash-Free. Compliant. Construction-Ready.</h1>
        <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,fontWeight:300}}>For design consultants and PMCs who need active BIM coordination support — not just models — NETTMS provides end-to-end multi-discipline BIM delivery and coordination. We manage the coordination process across Architecture, Structure, and MEP disciplines, ensuring your models are clash-resolved, BEP-compliant, and construction-ready before they reach site.</p>
      </div>
    </section>
    <section style={{padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{marginBottom:"3rem"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Service Components</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0.75rem"}}>
            {components.map((c,i) => <div key={i} style={{padding:"1.1rem 1.2rem",background:"#E8F4F4",borderLeft:"3px solid #00AAAA",fontSize:"0.93rem",fontWeight:500,color:"#001e3c",lineHeight:1.4,display:"flex",alignItems:"flex-start",gap:"8px"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>{c}</div>)}
          </div>
        </div>
        <div style={{marginBottom:"3rem"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Who This Is For</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"}} className="clients-grid">
            {clients.map((c,i) => <div key={i} style={{padding:"1.4rem 1.5rem",border:"1px solid rgba(0,102,102,0.15)",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.6,display:"flex",alignItems:"flex-start",gap:"8px"}}><span style={{color:"#006666",fontWeight:700,flexShrink:0}}>✓</span>{c}</div>)}
          </div>
          <style>{`.clients-grid{@media(max-width:600px){grid-template-columns:1fr!important}}`}</style>
        </div>
        <div style={{padding:"2.5rem",background:"#001e3c",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",flexWrap:"wrap"}}>
          <div><h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.4rem",color:"#fff",marginBottom:"0.4rem",fontWeight:600}}>Talk to Our Coordination Team</h3>
          <p style={{color:"rgba(255,255,255,0.82)",fontSize:"0.9rem"}}>Tell us about your project and we will map the right coordination model.</p></div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-primary">Contact Coordination Team</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </div>
    </section>
  </>);
}
