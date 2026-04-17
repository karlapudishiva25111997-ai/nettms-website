import type { Metadata } from "next";
import Link from "next/link";
import { IcLayers, IcLink, IcMonitor, IcBox, IcGlobe } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services — BIM Outsourcing, Digital Construction Management & More",
  description: "Explore NETTMS's five service lines: BIM Outsourcing, BIM Coordination, Digital Construction Management, Digital Asset Twin, and GIS-BIM platforms.",
  alternates: { canonical: "/services" },
};

const services = [
  { Icon: IcLayers,  href:"/services/bim-outsourcing",     title:"BIM Outsourcing (Global)",          desc:"Offshore BIM production & coordination for global AEC firms — Architecture, Structure, MEP, Tekla, LOD 300–450, Scan-to-BIM. NDA-protected, BEP-compliant." },
  { Icon: IcLink,    href:"/services/bim-coordination",    title:"BIM Delivery & Coordination",        desc:"Multi-discipline BIM coordination — clash-free, compliant, and construction-ready. We manage the coordination process across Architecture, Structure, and MEP disciplines." },
  { Icon: IcMonitor, href:"/services/digital-construction",title:"Digital Construction Management",    desc:"ACC-based digital oversight. Real-time intelligence from site to boardroom. 4D/5D/6D scheduling, quality management, and digital reporting dashboards." },
  { Icon: IcBox,     href:"/services/digital-asset-twin",  title:"Digital Asset Twin (Lite)",          desc:"Your project's digital life after construction. As-built BIM + O&M data + structured handover with Digital Release Certificate and QR verification." },
  { Icon: IcGlobe,   href:"/services/digital-twin-gis",    title:"Digital Twin & GIS-BIM Platforms",   desc:"City-scale intelligence. Spatial BIM. Infrastructure digital twins for large-scale programs, smart city initiatives, and urban development authorities." },
];

export default function ServicesPage() {
  return (<>
    <style>{`
      .svc-pg-card { background:#fff; padding:3rem 2.5rem; transition:all 0.3s; position:relative; overflow:hidden; }
      .svc-pg-card:hover { background:#E8F4F4; }
      .svc-pg-card .bar { position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#006666,#00AAAA); transform:scaleX(0); transform-origin:left; transition:transform 0.35s; }
      .svc-pg-card:hover .bar { transform:scaleX(1); }
      .svc-pg-icon { width:54px; height:54px; border-radius:10px; background:#E8F4F4; display:flex; align-items:center; justify-content:center; margin-bottom:1.4rem; color:#001e3c; transition:all 0.3s; }
      .svc-pg-card:hover .svc-pg-icon { background:#001e3c; color:#fff; }
      .svc-learn-btn { display:inline-flex; align-items:center; gap:6px; padding:0.6rem 1.4rem; background:#001e3c; color:#fff; font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:all 0.25s; }
      .svc-learn-btn:hover { background:#006666; gap:10px; }
      @media(max-width:900px){.svc-pg-grid{grid-template-columns:1fr 1fr!important}}
      @media(max-width:600px){.svc-pg-grid{grid-template-columns:1fr!important}}
    `}</style>

    <section className="page-hero">
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">Our Services</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"700px"}}>End-to-End Digital Construction Services</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"680px",fontWeight:300}}>From initial BIM modeling to certified digital asset handover — NETTMS delivers a structured, ISO-aligned digital journey for every project type and scale.</p>
      </div>
    </section>

    <section style={{background:"#fff",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="svc-pg-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(0,102,102,0.1)"}}>
          {services.map((s) => (
            <div key={s.href} className="svc-pg-card">
              <div className="bar" />
              <div className="svc-pg-icon"><s.Icon size={24} /></div>
              <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.5rem",color:"#001e3c",marginBottom:"0.8rem",fontWeight:600}}>{s.title}</h3>
              <p style={{fontSize:"0.93rem",color:"#3a5468",lineHeight:1.8,marginBottom:"1.5rem"}}>{s.desc}</p>
              <Link href={s.href} className="svc-learn-btn">
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{background:"linear-gradient(135deg,#001e3c,#006666)",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Not Sure Where to Start?</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem",maxWidth:"500px",margin:"0 auto 2rem"}}>Tell us about your project and we will recommend the right service combination.</p>
      <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
    </section>
  </>);
}
