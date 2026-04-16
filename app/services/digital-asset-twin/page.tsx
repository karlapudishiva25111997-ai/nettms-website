import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Digital Asset Twin (Lite) — Certified As-Built Digital Handover", description: "NETTMS delivers a structured Digital Asset Twin (Lite) at project completion — as-built BIM, O&M data, equipment tags, and Digital Release Certificate.", alternates: { canonical: "/services/digital-asset-twin" } };
const included = ["As-built BIM model — updated to site conditions","Equipment tagging and identification data","O&M documentation alignment and linking","Basic asset metadata mapping (name, type, manufacturer, warranty)","Structured data export (COBie, IFC, custom formats)","Digital Release Certificate with Release ID and QR verification","Controlled handover through CDE to owner/FM team"];
const notIncluded = ["Full digital twin with live sensor integration (this is a Lite version)","FM software implementation or training","Asset maintenance scheduling or CMMS integration (available as add-on)"];
export default function DigitalAssetTwinPage() {
  return (<>
    <section style={{background:"#001e3c",padding:"8rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, #00AAAA, transparent)"}} />
      <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:2}}>
        <Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#00AAAA",textDecoration:"none",fontWeight:600,marginBottom:"2rem"}}>← Back to Services</Link>
        <div className="eyebrow" style={{color:"#00AAAA"}}>Service 04</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:"#fff",marginBottom:"1.5rem",fontWeight:600}}>Your Project&apos;s Digital Life After Construction. As-Built. Asset-Ready. Handover-Certified.</h1>
        <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,fontWeight:300}}>Most BIM projects end at construction. NETTMS goes further — delivering a structured Digital Asset Twin (Lite) at project completion that is ready for operations, facilities management, and asset lifecycle use. This is the final certified deliverable: an as-built BIM model enriched with operations data, equipment tags, O&amp;M documentation links, and structured metadata.</p>
      </div>
    </section>
    <section style={{padding:"4rem 2rem",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",marginBottom:"3rem"}} className="twin-grid">
          <div>
            <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>What Is Included</h2>
            {included.map((item,i) => <div key={i} style={{padding:"0.9rem 1rem",borderBottom:"1px solid #E8F4F4",display:"flex",gap:"8px",alignItems:"flex-start",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>{item}</div>)}
          </div>
          <div>
            <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Scope Boundary</h2>
            {notIncluded.map((item,i) => <div key={i} style={{padding:"0.9rem 1rem",borderBottom:"1px solid #E8F4F4",display:"flex",gap:"8px",alignItems:"flex-start",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>{item}</div>)}
            <div style={{marginTop:"1.5rem",padding:"1.5rem",background:"#E8F4F4",borderLeft:"3px solid #006666"}}>
              <p style={{fontSize:"0.93rem",color:"#001e3c",lineHeight:1.7}}>Buildings operate for 50–100 years after construction. A structured as-built digital record saves significant cost in future renovations, equipment replacement, and facility management.</p>
            </div>
          </div>
        </div>
        <style>{`.twin-grid{@media(max-width:700px){grid-template-columns:1fr!important}}`}</style>
        <div style={{padding:"2.5rem",background:"#001e3c",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",flexWrap:"wrap"}}>
          <div><h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.4rem",color:"#fff",marginBottom:"0.4rem",fontWeight:600}}>Request an Asset Handover Consultation</h3>
          <p style={{color:"rgba(255,255,255,0.82)",fontSize:"0.9rem"}}>Let us plan your Digital Asset Twin (Lite) delivery.</p></div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-primary">Request Consultation</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </div>
    </section>
  </>);
}
