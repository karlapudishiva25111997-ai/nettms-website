import type { Metadata } from "next";
import IronTriangleStats from "@/components/IronTriangleStats";
import Link from "next/link";
export const metadata: Metadata = { title: "Process & QA/QC — 5-Level Digital Quality Governance Framework", description: "NETTMS operates a structured 5-Level Digital Quality Governance Framework. No drawing, model, or report is released without multi-layer clearance, traceable approval, and documented version control.", alternates: { canonical: "/process-qaqc" } };
const levels = [
  { level:"Level 0", name:"Producer Self-Check", by:"BIM Modeler / Engineer", checks:"Scope compliance, naming conventions, LOD verification, basic clash review, drawing sheet integrity, quantity sanity check", gate:"File moves to Level 1 OR returned for correction" },
  { level:"Level 1", name:"Discipline Lead QA", by:"Discipline BIM Lead", checks:"BEP alignment, parameter & data consistency, cross-discipline interface check, model health (warnings/corruption), view & template consistency, sheet set verification", gate:"Approval to coordination review OR return with comments" },
  { level:"Level 2", name:"Coordination Validation", by:"Coordination Manager", checks:"Clash detection (Navisworks/ACC), interdisciplinary tolerance verification, RFI & issue resolution tracking, coordination matrix alignment, construction feasibility logic", gate:"Models are coordination-ready OR clash list issued" },
  { level:"Level 3", name:"Digital Compliance Audit", by:"QA/QC Head / Senior Reviewer", checks:"Client deliverable compliance, contract scope mapping, LOD/LOI validation, IFC/export integrity check, drawing-to-model consistency, report accuracy", gate:"Deliverable matches agreed client terms OR revision required" },
  { level:"Level 4", name:"Release Authorization", by:"Authorized Release Authority", checks:"QA checklist signed, revision numbering validated, ACC/CDE version control confirmed, client format verified, delivery log created", gate:"Official Digital Release Certificate issued with Release ID" },
];
const principles = ["No direct file release to client without QA clearance","No model without multi-discipline coordination screening","No drawing without model validation and sheet integrity check","No revision without documented change log and approval trail","No compromise on agreed LOD, scope, and deliverable format","No uncontrolled file sharing outside the CDE environment","No single individual produces, reviews, and releases the same deliverable"];
export default function ProcessPage() {
  return (<>
    <section className="page-hero">
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">Process & QA/QC</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"800px"}}>We Don&apos;t Just Check Models. We Govern Digital Delivery.</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"720px",fontWeight:300}}>NETTMS operates a structured 5-Level Digital Quality Governance Framework — similar to regulated industries — where no drawing, model, or report is released without multi-layer clearance, traceable approval, and documented version control.</p>
        <blockquote style={{marginTop:"2rem",fontFamily:"'Cormorant Garamond', serif",fontSize:"1.3rem",fontStyle:"italic",color:"rgba(255,255,255,0.82)",borderLeft:"3px solid #00AAAA",paddingLeft:"1.5rem",maxWidth:"600px"}}>&ldquo;Zero-compromise quality is not a policy. It is the only way we work.&rdquo;</blockquote>
      </div>
    </section>
    <section style={{background:"#fff",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>5-Level Quality Screening</div>
        <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Every Deliverable Passes Through All Five Levels</h2>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.93rem",minWidth:"700px"}}>
            <thead>
              <tr>{["Level","Performed By","What Is Checked","Gate Outcome"].map(h => <th key={h} style={{background:"#001e3c",color:"#fff",padding:"0.9rem 1rem",textAlign:"left",fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {levels.map((l,i) => (
                <tr key={i} style={{background:i%2===0?"#fff":"#E8F4F4"}}>
                  <td style={{padding:"1.1rem 1rem",borderBottom:"1px solid rgba(0,102,102,0.1)",verticalAlign:"top"}}><strong style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1rem",color:"#001e3c",display:"block"}}>{l.level}</strong><span style={{fontSize:"0.8rem",color:"#00AAAA",fontWeight:600}}>{l.name}</span></td>
                  <td style={{padding:"1.1rem 1rem",borderBottom:"1px solid rgba(0,102,102,0.1)",verticalAlign:"top",color:"#3a5468",lineHeight:1.75}}>{l.by}</td>
                  <td style={{padding:"1.1rem 1rem",borderBottom:"1px solid rgba(0,102,102,0.1)",verticalAlign:"top",color:"#3a5468",lineHeight:1.6}}>{l.checks}</td>
                  <td style={{padding:"1.1rem 1rem",borderBottom:"1px solid rgba(0,102,102,0.1)",verticalAlign:"top",color:"#006666",fontWeight:500,lineHeight:1.75}}>{l.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop:"1.5rem",padding:"1.5rem 2rem",background:"#001e3c",color:"rgba(255,255,255,0.95)",fontSize:"0.93rem",lineHeight:1.7,borderLeft:"4px solid #00AAAA"}}>
          <strong style={{color:"#00AAAA"}}>Release Principle: </strong>No drawing, model, or report is released to any client or stakeholder without completing all five levels above. Every released deliverable carries a unique NETTMS Release ID, an approval trace, and a digital release log maintained within the controlled CDE environment.
        </div>
      </div>
    </section>
    <section style={{background:"#001e3c",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.4}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative"}}>
        <div className="eyebrow">Zero-Compromise Principles</div>
        <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#fff",marginBottom:"2rem",fontWeight:600}}>NETTMS Quality Principles — Non-Negotiable</h2>
        <div style={{padding:"2.5rem",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(0,170,170,0.2)",borderLeft:"4px solid #00AAAA"}}>
          <h3 style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#00AAAA",marginBottom:"1.5rem"}}>Non-Negotiable Quality Standards</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.65rem"}} className="principles-grid">
            {principles.map((p,i) => <div key={i} style={{fontSize:"0.93rem",color:"rgba(255,255,255,0.75)",display:"flex",alignItems:"flex-start",gap:"8px",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>{p}</div>)}
          </div>
          <style>{`.principles-grid{@media(max-width:700px){grid-template-columns:1fr!important}}`}</style>
        </div>
      </div>
    </section>
    <IronTriangleStats />

    <section style={{background:"#f5fafa",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Standards Alignment</div>
        <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>ISO & Standards Alignment</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}} className="iso-cards-grid">
          {[
            { code:"ISO 19650", title:"Information Management Using BIM Principles", points:["Information container naming and structure","Version control and audit trail management","Defined information roles and responsibilities","Common Data Environment (CDE) workflow adherence","Structured revision tracking and supersession management"] },
            { code:"ISO 9001", title:"Quality Management System Principles", points:["Defined and documented process flow","Multi-stage verification before delivery","Controlled release mechanisms with approval authority","Continuous improvement loop after every project","Non-conformance reporting and corrective action system"] },
            { code:"Client BEP", title:"Client-Specific Compliance", points:["Full alignment to client BIM Execution Plan (BEP)","Project contract scope and deliverable mapping","Controlled Common Data Environment (CDE) protocols","Client-specified naming and data standards","Custom deliverable format compliance"] },
          ].map((iso) => <div key={iso.code} style={{padding:"2rem",border:"1px solid rgba(0,102,102,0.15)",background:"#fff"}}>
            <div style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",color:"#00AAAA",textTransform:"uppercase",marginBottom:"0.5rem"}}>{iso.code}</div>
            <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.2rem",color:"#001e3c",marginBottom:"1rem",fontWeight:600,lineHeight:1.3}}>{iso.title}</h3>
            <ul style={{listStyle:"none",fontSize:"0.84rem",color:"#3a5468",lineHeight:1.8}}>{iso.points.map((p,i) => <li key={i} style={{display:"flex",gap:"6px"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>{p}</li>)}</ul>
          </div>)}
        </div>
        <style>{`.iso-cards-grid{@media(max-width:900px){grid-template-columns:1fr 1fr!important} @media(max-width:600px){grid-template-columns:1fr!important}}`}</style>
      </div>
    </section>
    <section style={{background:"#001e3c",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Experience Zero-Compromise Quality</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem"}}>Every release from NETTMS carries a unique Release ID and full audit trail.</p>
      <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
        <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
        <Link href="/services" className="btn-outline">View Services</Link>
      </div>
    </section>
  </>);
}
