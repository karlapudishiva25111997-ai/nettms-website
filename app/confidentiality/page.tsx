import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Confidentiality & Risk Boundary — NDA & IP Protection", description: "NETTMS enforces confidentiality through contractual NDAs, controlled CDE access, individual team agreements, and strict data retention policies.", alternates: { canonical: "/confidentiality" } };
const controls = [
  { type:"Contractual NDA", how:"Signed Non-Disclosure Agreement executed before any project data exchange. Covers all project information, client identities, design data, and deliverables." },
  { type:"Team Confidentiality", how:"All NETTMS team members sign individual confidentiality agreements. No team member may share, discuss, or reference project information outside controlled channels." },
  { type:"Controlled CDE Access", how:"All project files are maintained within a controlled Common Data Environment (ACC/CDE) with role-based permissions. No download or sharing outside authorized channels." },
  { type:"No Personal Device Storage", how:"Project files may not be stored on personal devices. All work is performed within secure, controlled environments only." },
  { type:"Data Retention Policy", how:"Project data is retained only for the contracted period. Data disposal follows the agreed protocol upon project closure or client request." },
  { type:"NDA Upon Resource Deployment", how:"If a NETTMS resource works within your office (online or offline), a specific resource-level NDA is executed." },
];
const assumes = ["Digital data integrity — all models, drawings, reports are accurate and verified","Information management — structured CDE governance, version control, audit trails","Compliance validation — alignment to client BEP, ISO standards, and contracted scope","Quality assurance — multi-level QA/QC before every release","Timely delivery — committed to agreed milestones and response times"];
const notAssumes = ["Design ownership or design liability — we produce BIM from your design intent, not our own","Construction execution liability — we are a digital platform, not a contractor","Site supervision responsibility — we do not direct physical site activities","Structural engineering certifications — we model structures but do not certify calculations","Physical construction risk — on-site safety and execution are outside our scope"];
export default function ConfidentialityPage() {
  return (<>
    <section className="page-hero">
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">Confidentiality & Risk Boundary</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"700px"}}>Your Design is Yours. Always.</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"720px",fontWeight:300}}>NETTMS understands that design IP, client relationships, project data, and proprietary information are the most sensitive assets of any design consultant or developer. We do not merely promise confidentiality — we enforce it through structured contractual, technical, and operational controls.</p>
      </div>
    </section>
    <section style={{background:"#fff",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>NDA & Control Framework</div>
        <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>How NETTMS Enforces Confidentiality</h2>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.93rem",minWidth:"600px"}}>
            <thead><tr>
              <th style={{background:"#006666",color:"#fff",padding:"0.9rem 1.2rem",textAlign:"left",fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600}}>Control Type</th>
              <th style={{background:"#006666",color:"#fff",padding:"0.9rem 1.2rem",textAlign:"left",fontSize:"0.75rem",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600}}>How NETTMS Enforces It</th>
            </tr></thead>
            <tbody>{controls.map((c,i) => (
              <tr key={i} style={{background:i%2===0?"#fff":"#E8F4F4"}}>
                <td style={{padding:"1.1rem 1.2rem",borderBottom:"1px solid rgba(0,102,102,0.1)",fontWeight:700,color:"#001e3c",verticalAlign:"top",whiteSpace:"nowrap"}}>{c.type}</td>
                <td style={{padding:"1.1rem 1.2rem",borderBottom:"1px solid rgba(0,102,102,0.1)",color:"#3a5468",lineHeight:1.7,verticalAlign:"top"}}>{c.how}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </section>
    <section style={{background:"#f5fafa",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Risk Boundary</div>
        <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Responsibility & Scope Boundary</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"}} className="resp-grid">
          <div style={{padding:"2rem",background:"rgba(0,102,102,0.05)",borderTop:"3px solid #006666"}}>
            <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.3rem",color:"#006666",marginBottom:"1rem",fontWeight:600}}>What NETTMS Assumes Responsibility For</h3>
            {assumes.map((a,i) => <div key={i} style={{padding:"0.75rem 0",borderBottom:"1px solid rgba(0,102,102,0.1)",display:"flex",gap:"8px",alignItems:"flex-start",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>{a}</div>)}
          </div>
          <div style={{padding:"2rem",background:"rgba(0,30,60,0.05)",borderTop:"3px solid #001e3c"}}>
            <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.3rem",color:"#001e3c",marginBottom:"1rem",fontWeight:600}}>What NETTMS Does Not Assume</h3>
            {notAssumes.map((a,i) => <div key={i} style={{padding:"0.75rem 0",borderBottom:"1px solid rgba(0,30,60,0.08)",display:"flex",gap:"8px",alignItems:"flex-start",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>{a}</div>)}
          </div>
        </div>
        <style>{`.resp-grid{@media(max-width:700px){grid-template-columns:1fr!important}}`}</style>
        <div style={{marginTop:"2rem",padding:"2rem",background:"#f0f7ff",border:"1px solid rgba(0,30,60,0.15)",borderLeft:"4px solid #001e3c"}}>
          <h4 style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#001e3c",marginBottom:"0.6rem"}}>Legal Note</h4>
          <p style={{fontSize:"0.84rem",color:"#3a5468",lineHeight:1.7}}>NETTMS Urban Habitat Pvt. Ltd. operates exclusively as a digital construction management and BIM delivery service provider. All deliverables are digital in nature. NETTMS does not carry professional indemnity for design decisions, structural calculations, or physical construction outcomes. Clients are advised to engage licensed design professionals and certified contractors for these responsibilities.</p>
        </div>
      </div>
    </section>
    <section style={{background:"#001e3c",padding:"4rem 2rem",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Ready to Begin with Full Confidentiality?</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem"}}>Every project starts with a signed NDA before any data exchange.</p>
      <Link href="/contact" className="btn-primary">Contact Us to Start</Link>
    </section>
  </>);
}
