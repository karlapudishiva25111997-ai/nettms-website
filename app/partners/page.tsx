import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Partners & Network — Technology Platforms & Ecosystem Network", description: "NETTMS is part of an integrated digital construction ecosystem connecting design consultants, PMCs, technology platforms, and academic institutions.", alternates: { canonical: "/partners" } };
const techPartners = [{ name:"Autodesk", desc:"ACC Build, BIM 360, Revit, Navisworks — core delivery stack" },{ name:"Esri ArcGIS", desc:"GIS-BIM spatial integration for infrastructure projects" },{ name:"Bentley iTwin", desc:"Infrastructure digital twin platform" },{ name:"Microsoft Azure", desc:"Cloud infrastructure for CDE governance" }];
const ecosystem = [
  { type:"Design Consultants", rel:"We work as their BIM outsourcing arm — embedded in their workflows, protected by NDA. They design; we produce, coordinate, and document." },
  { type:"PMCs & Advisory Firms", rel:"We serve as their digital construction management layer — setting up ACC, managing quality workflows, and delivering digital reports to owners." },
  { type:"Developers / Owners", rel:"We provide coordination confidence and Digital Asset Twin (Lite) handover — ensuring they receive a structured digital record at project close." },
  { type:"Contractors & Fabricators", rel:"We supply clash-free coordination models, Tekla steel files, and shop drawing packages — reducing rework on site." },
  { type:"Academic Institutions", rel:"Through NETTMSedu, we co-develop curriculum and provide live-project training for BIM professionals feeding into our talent pipeline." },
];
export default function PartnersPage() {
  return (<>
    <style>{`
      .tech-card { background:#fff; padding:2rem 1.5rem; text-align:center; transition:all 0.25s; }
      .tech-card:hover { background:#E8F4F4; }
      .eco-card { padding:2rem; border:1px solid rgba(0,170,170,0.15); background:rgba(255,255,255,0.03); border-left:3px solid #00AAAA; transition:all 0.3s; }
      .eco-card:hover { background:rgba(0,170,170,0.07); }
      @media(max-width:700px){.tech-grid-inner{grid-template-columns:1fr 1fr!important}.eco-grid-inner{grid-template-columns:1fr!important}}
    `}</style>
    <section className="page-hero">
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">Partners & Network</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"800px"}}>An Integrated Digital Construction Ecosystem</h1>
        <blockquote style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.3rem",fontStyle:"italic",color:"rgba(255,255,255,0.82)",borderLeft:"3px solid #00AAAA",paddingLeft:"1.5rem",maxWidth:"680px",marginTop:"1.5rem"}}>&ldquo;NETTMS remains the single digital coordination layer — connecting all stakeholders without becoming any of them.&rdquo;</blockquote>
      </div>
    </section>
    <section style={{background:"#fff",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Technology Platforms</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Platform & Technology Platforms</h2>
        <div className="tech-grid-inner" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(0,102,102,0.12)"}}>
          {techPartners.map((p) => (
            <div key={p.name} className="tech-card">
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem",color:"#001e3c",fontWeight:600,marginBottom:"0.4rem"}}>{p.name}</h3>
              <p style={{fontSize:"0.8rem",color:"#3a5468"}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section style={{background:"#001e3c",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.4}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative"}}>
        <div className="eyebrow">Ecosystem Network</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#fff",marginBottom:"2rem",fontWeight:600}}>How We Work With Each Stakeholder</h2>
        <div className="eco-grid-inner" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem"}}>
          {ecosystem.map((e) => (
            <div key={e.type} className="eco-card">
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.25rem",color:"#00AAAA",marginBottom:"0.7rem",fontWeight:600}}>{e.type}</h3>
              <p style={{fontSize:"0.93rem",color:"rgba(255,255,255,0.82)",lineHeight:1.7}}>{e.rel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section style={{background:"#001e3c",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Partner With NETTMS</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem"}}>Join the NETTMS digital construction ecosystem.</p>
      <Link href="/contact" className="btn-primary">Become a Partner</Link>
    </section>
  </>);
}
