import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IcLayers, IcLink, IcMonitor, IcBox, IcGlobe, IcShield, IcCheck, IcDownload } from "@/components/Icons";
import IronTriangleStats from "@/components/IronTriangleStats";
import LiveDashboard from "@/components/LiveDashboard";

export const metadata: Metadata = {
  title: "NETTMS Urban Habitat — Digital Construction Management & BIM Delivery Platform",
  description: "India's structured Digital Construction Management & BIM Delivery Platform. ISO-aligned digital governance from design stage to digital asset handover.",
  alternates: { canonical: "/" },
};

// inline mini icon for downloads strip
const IcFileStrip = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const services = [
  { Icon: IcLayers,  title: "BIM Outsourcing (Global)",       desc: "Offshore BIM production & coordination — Architecture, Structure, MEP, Tekla, LOD 300–450, Scan-to-BIM.", href: "/services/bim-outsourcing",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcLink,    title: "BIM Delivery & Coordination",     desc: "Single digital coordination layer — clash-free, 4D/5D/6D enabled, real-time reported.", href: "/services/bim-coordination",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcMonitor, title: "Digital Construction Management", desc: "ACC-based oversight from site to boardroom — quality, cost, schedule in real-time.", href: "/services/digital-construction",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcBox,     title: "Digital Asset Twin (Lite)",       desc: "As-built BIM + O&M data — lifecycle-ready certified digital handover.", href: "/services/digital-asset-twin",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcGlobe,   title: "Digital Twin & GIS-BIM",          desc: "City-scale intelligence, spatial BIM, and infrastructure digital twin platforms.", href: "/services/digital-twin-gis",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70&auto=format&fit=crop" },
];

const stats    = [{ num:"2021",label:"Year Established"},{num:"50+",label:"Projects Completed"},{num:"10+",label:"Countries Served"},{num:"ISO",label:"Aligned Framework"}];
const steps    = [{n:"1",t:"BIM Setup & 3D Modeling",s:"Arch / Str / MEP / Tekla / Infra"},{n:"2",t:"4D / 5D / 6D Coordination",s:"Schedule + Cost + Sustainability"},{n:"3",t:"ACC / CDE Integration",s:"Common Data Environment"},{n:"4",t:"QA/QC & Compliance",s:"5-Level screening before release"},{n:"5",t:"Digital Asset Twin (Lite)",s:"As-built handover to operations"}];
const clients  = ["L&T","Jayabheri","Meenakshi","Hetero","Reliance Builders","ADAC","Saipem","Petro Rabigh","Shurooq","Dubai Metro","Hyderabad Metro","NYU Abu Dhabi"];
const trust    = [{Icon:IcShield,t:"ISO-Aligned Quality Framework",d:"Every deliverable governed by ISO 19650 & ISO 9001"},{Icon:IcLink,t:"Single Digital Coordination Layer",d:"Unified ACC/CDE connecting all stakeholders"},{Icon:IcCheck,t:"5-Level QA/QC Before Every Release",d:"No file leaves without multi-layer compliance clearance"}];
const dlItems = [
  { label:"Digital Quality Policy",  file:"/quality-policy.pdf" },
  { label:"BIM Capability Brochure", file:"/bim-capability-brochure.pdf" },
  { label:"Corporate Profile",       file:"/corporate-profile.pdf" },
  { label:"NETTMSedu Brochure",      file:"/nettmsedu-brochure.pdf" },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero-img-wrap{position:absolute;inset:0;z-index:0}
        .svc-card-wrap{display:block;text-decoration:none;height:100%}
        .svc-card{position:relative;overflow:hidden;cursor:pointer;height:100%;min-height:320px}
        .svc-card-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;filter:brightness(0.28)}
        .svc-card:hover .svc-card-img{transform:scale(1.06);filter:brightness(0.38)}
        .svc-card-body{position:relative;z-index:1;padding:2.2rem 2rem;height:100%;display:flex;flex-direction:column}
        .svc-card-body::before{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,30,60,0.95) 0%,rgba(0,30,60,0.4) 60%,transparent 100%);z-index:-1}
        .svc-card:hover .svc-card-body::before{background:linear-gradient(to top,rgba(0,60,80,0.97) 0%,rgba(0,60,80,0.5) 60%,transparent 100%)}
        .svc-link{font-size:0.74rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#00AAAA;display:inline-flex;align-items:center;gap:5px;margin-top:auto;padding-top:1rem;transition:gap 0.2s}
        .svc-card:hover .svc-link{gap:10px}
        .ind-pill{padding:0.65rem 1.5rem;border:1px solid rgba(0,102,102,0.2);font-size:0.85rem;font-weight:500;color:#006666;background:#fff;text-decoration:none;display:inline-block;transition:all 0.25s;border-radius:2px}
        .ind-pill:hover{background:#006666;color:#fff}
        .client-item{padding:0.85rem 1.6rem;border:1px solid rgba(0,102,102,0.12);margin:-1px 0 0 -1px;font-family:'Cormorant Garamond',Georgia,serif;font-size:1rem;font-weight:600;color:#5a7080;letter-spacing:0.05em;transition:all 0.2s;cursor:default}
        .client-item:hover{color:#006666;background:#E8F4F4}
        .stat-box{padding:2rem 1.5rem;background:#E8F4F4;border-top:3px solid #00AAAA;text-align:center;transition:all 0.3s}
        .stat-box:hover{background:#c0dada;transform:translateY(-3px)}
        .hero-tag{display:flex;align-items:flex-start;gap:1rem;padding:1.4rem 1.6rem;background:rgba(255,255,255,0.05);border:1px solid rgba(0,170,170,0.18);border-left:3px solid #00AAAA;transition:all 0.3s;backdrop-filter:blur(4px)}
        .hero-tag:hover{background:rgba(0,170,170,0.1);transform:translateX(4px)}
        .dl-strip-card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);padding:1.4rem 1.6rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;transition:all 0.3s;flex:1}
        .dl-strip-card:hover{background:rgba(0,170,170,0.1);border-color:#00AAAA}
        .dl-btn-sm{display:inline-flex;align-items:center;gap:5px;padding:0.5rem 1rem;background:#00AAAA;color:#001e3c;font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;white-space:nowrap;transition:background 0.2s;flex-shrink:0}
        .dl-btn-sm:hover{background:#00cccc}
        @media(max-width:900px){.hero-cols{grid-template-columns:1fr!important}.about-cols{grid-template-columns:1fr!important;gap:2.5rem!important}.dl-strip{flex-direction:column!important}}
        @media(max-width:700px){.process-cols{grid-template-columns:1fr 1fr!important;gap:2rem!important}}
        @media(max-width:480px){.process-cols{grid-template-columns:1fr!important}}
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{minHeight:"100vh",background:"#001e3c",position:"relative",display:"flex",alignItems:"center",paddingTop:"72px",overflow:"hidden"}}>
        {/* Hero background image */}
        <div className="hero-img-wrap">
          <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=70&auto=format&fit=crop"
            alt="Modern construction" fill style={{objectFit:"cover",opacity:0.18,mixBlendMode:"luminosity"}} priority />
        </div>
        <div className="grid-bg" style={{position:"absolute",inset:0,zIndex:1}} />
        {/* Radial glows */}
        <div style={{position:"absolute",width:"900px",height:"900px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,102,102,0.3) 0%,transparent 70%)",top:"-200px",right:"-150px",zIndex:1,pointerEvents:"none"}} />
        <div style={{position:"absolute",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle,rgba(0,30,60,0.45) 0%,transparent 70%)",bottom:"-100px",left:"-100px",zIndex:1,pointerEvents:"none"}} />

        <div className="hero-cols" style={{maxWidth:"1300px",margin:"0 auto",padding:"4rem 2rem 5rem",position:"relative",zIndex:2,width:"100%",display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"4rem",alignItems:"center"}}>
          <div className="animate-fade-up">
            <div className="eyebrow" style={{color:"#00AAAA"}}>India&apos;s BIM Delivery Platform</div>
            <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2.6rem,4.5vw,4rem)",color:"#fff",fontWeight:600,marginBottom:"1.5rem",lineHeight:1.05}}>
              Digital Certainty.<br/><em style={{color:"#00AAAA",fontStyle:"italic"}}>From Concept to</em><br/>As-Built Handover.
            </h1>
            <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.88,marginBottom:"2.5rem",fontWeight:300,maxWidth:"540px"}}>
              NETTMS is India&apos;s structured Digital Construction Management &amp; BIM Delivery Platform — serving global AEC consultants, PMCs, and infrastructure programs with ISO-aligned digital governance.
            </p>
            <div className="hero-ctas" style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
              <Link href="/services" className="btn-primary">Explore Our Services</Link>
              <Link href="/contact" className="btn-outline">Talk to Our Team</Link>
            </div>
            {/* ── Certificate Trust Strip ── */}
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem",marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid rgba(0,170,170,0.15)"}}>
              {[
                { code:"ISO 9001:2015", label:"Quality Management System", icon:"Q" },
                { code:"Startup India",  label:"DPIIT Recognised Startup",  icon:"S" },
                { code:"MSME Registered", label:"Govt. of India Certified", icon:"M" },
              ].map((cert)=>(
                <div key={cert.code} style={{display:"flex",alignItems:"center",gap:"0.65rem",padding:"0.6rem 1rem",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(0,170,170,0.22)",backdropFilter:"blur(4px)"}}>
                  <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"rgba(0,170,170,0.15)",border:"1.5px solid #00AAAA",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif",fontSize:"0.7rem",fontWeight:800,color:"#00AAAA",flexShrink:0}}>{cert.icon}</div>
                  <div>
                    <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.74rem",fontWeight:700,color:"#fff",letterSpacing:"0.04em",lineHeight:1.2}}>{cert.code}</p>
                    <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.67rem",color:"rgba(255,255,255,0.5)",lineHeight:1.3}}>{cert.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up delay-200" style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {trust.map((tag)=>(
              <div key={tag.t} className="hero-tag">
                <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(0,170,170,0.14)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#00AAAA"}}>
                  <tag.Icon size={20} color="#00AAAA" />
                </div>
                <div>
                  <h4 style={{fontFamily:"'DM Sans',Arial,sans-serif",fontSize:"0.93rem",fontWeight:700,color:"#fff",marginBottom:"0.2rem"}}>{tag.t}</h4>
                  <p style={{fontSize:"0.84rem",color:"rgba(255,255,255,0.78)",lineHeight:1.75}}>{tag.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES WITH IMAGES ══════════════════════════════ */}
      <section style={{background:"#001228",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
        <div style={{maxWidth:"1300px",margin:"0 auto"}}>
          <div className="eyebrow">What We Do</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.6rem)",color:"#fff",marginBottom:"2.5rem",fontWeight:600}}>Five Pillars of Digital Construction Excellence</h2>
          <div className="svc-strip-grid" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"2px",minHeight:"360px"}}>
            {services.map((s)=>(
              <Link key={s.href} href={s.href} className="svc-card-wrap">
                <div className="svc-card">
                  <img src={s.img} alt={s.title} className="svc-card-img" />
                  <div className="svc-card-body">
                    <div style={{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(0,170,170,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.9rem",color:"#00AAAA",border:"1px solid rgba(0,170,170,0.3)"}}>
                      <s.Icon size={20} color="#00AAAA" />
                    </div>
                    <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.2rem",color:"#fff",marginBottom:"0.7rem",fontWeight:600,lineHeight:1.25}}>{s.title}</h3>
                    <p style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,flex:1}}>{s.desc}</p>
                    <span className="svc-link">
                      Learn More
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:900px){.svc-strip-grid{grid-template-columns:1fr 1fr!important;min-height:auto!important}}@media(max-width:500px){.svc-strip-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ══ ABOUT WITH IMAGE ══════════════════════════════════ */}
      <section style={{background:"#fff",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
        <div className="about-cols" style={{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.15fr 1fr",gap:"5rem",alignItems:"center"}}>
          <div>
            <div className="eyebrow" style={{color:"#006666"}}>About NETTMS</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.6rem)",color:"#001e3c",marginBottom:"1.5rem",fontWeight:600,lineHeight:1.15}}>
              Platform-Driven<br/>Digital Construction
            </h2>
            <p style={{fontSize:"1rem",color:"#3a5468",lineHeight:1.9,marginBottom:"1rem"}}>
              NETTMS Urban Habitat Pvt. Ltd. operates as a <strong style={{color:"#001e3c"}}>Digital Construction Management &amp; BIM Delivery Platform</strong> — enabling BIM outsourcing, digital construction management, and digital asset intelligence for global AEC and infrastructure clients.
            </p>
            <p style={{fontSize:"1rem",color:"#3a5468",lineHeight:1.9,marginBottom:"2rem"}}>We embed ourselves as an extension of your design or PMC team. No design liability, no contractor risk. Pure digital coordination excellence.</p>
            <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
              <Link href="/about" className="btn-outline-dark">Know More About Us</Link>
              <Link href="/process-qaqc" style={{display:"inline-flex",alignItems:"center",gap:"6px",color:"#006666",fontSize:"0.90rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",textDecoration:"none"}}>
                Our QA/QC Process
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          {/* Stats + image */}
          <div>
            <div style={{position:"relative",borderRadius:"4px",overflow:"hidden",marginBottom:"1.5rem",height:"260px"}}>
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=75&auto=format&fit=crop"
                alt="NETTMS team collaboration" fill style={{objectFit:"cover"}} />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(0,30,60,0.55) 0%,rgba(0,102,102,0.3) 100%)"}} />
              <div style={{position:"absolute",bottom:"1.2rem",left:"1.5rem",right:"1.5rem"}}>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.15rem",fontStyle:"italic",color:"#fff",lineHeight:1.75}}>&ldquo;Digital Certainty for Modern Construction&rdquo;</p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
              {stats.map((s)=>(
                <div key={s.num} className="stat-box">
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2.8rem",fontWeight:700,color:"#001e3c",display:"block",lineHeight:1,marginBottom:"0.4rem"}}>{s.num}</span>
                  <span style={{fontSize:"0.78rem",color:"#3a5468",fontWeight:500,letterSpacing:"0.06em",textTransform:"uppercase"}}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS WITH BACKGROUND IMAGE ════════════════════ */}
      <section style={{background:"#001e3c",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=60&auto=format&fit=crop"
            alt="" fill style={{objectFit:"cover",opacity:0.06,mixBlendMode:"luminosity"}} />
        </div>
        <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
        <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1}}>
          <div className="eyebrow">Our Digital Delivery Journey</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.6rem)",color:"#fff",marginBottom:"0.5rem",fontWeight:600}}>From Concept to Certified Handover</h2>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:"1rem",marginBottom:"3rem"}}>We manage the complete digital lifecycle — not just 3D models.</p>
          <div className="process-cols" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"0",position:"relative"}}>
            <div style={{position:"absolute",top:"30px",left:"10%",right:"10%",height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA 20%,#00AAAA 80%,transparent)",zIndex:0}} />
            {steps.map((step)=>(
              <div key={step.n} style={{textAlign:"center",padding:"0 0.8rem",position:"relative",zIndex:1}}>
                <div style={{width:"60px",height:"60px",borderRadius:"50%",background:"#001e3c",border:"2px solid #00AAAA",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.4rem",fontWeight:700,color:"#00AAAA"}}>{step.n}</div>
                <h4 style={{fontFamily:"'DM Sans',Arial,sans-serif",fontSize:"0.75rem",fontWeight:700,color:"#fff",marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"}}>{step.t}</h4>
                <p style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.70)",lineHeight:1.75}}>{step.s}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"3.5rem"}}>
            <Link href="/process-qaqc" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"0.75rem 1.8rem",border:"1px solid rgba(0,170,170,0.4)",color:"#00AAAA",fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",transition:"all 0.25s",background:"rgba(0,170,170,0.06)"}}>
              View Full QA/QC Framework
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <IronTriangleStats />

      <LiveDashboard variant="compact" />

      {/* ══ INDUSTRIES ════════════════════════════════════════ */}
      <section style={{background:"#f5fafa",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)"}}>
        <div style={{maxWidth:"1300px",margin:"0 auto"}}>
          <div className="eyebrow" style={{color:"#006666"}}>Industries We Serve</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Sector-Agnostic. Same Quality Standard. Always.</h2>
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}}>
            {["AEC & Design Consultants","Project Management Consultants","Real Estate Developers","Infrastructure & Urban Development","Smart Cities & Public Sector","Industrial & Manufacturing Facilities"].map(ind=>(
              <Link key={ind} href="/industries" className="ind-pill">{ind}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENTS ═══════════════════════════════════════════ */}
      <section style={{background:"#fff",padding:"clamp(2rem,3.5vw,3.5rem) clamp(1.2rem,4vw,2rem)",borderTop:"1px solid rgba(0,102,102,0.1)",borderBottom:"1px solid rgba(0,102,102,0.1)"}}>
        <div style={{maxWidth:"1300px",margin:"0 auto"}}>
          <p style={{textAlign:"center",fontSize:"0.74rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#3a5468",marginBottom:"2rem",fontWeight:600}}>Trusted by Clients & Partners Across India, Middle East &amp; Beyond</p>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {clients.map(c=><div key={c} className="client-item">{c}</div>)}
          </div>
        </div>
      </section>

      {/* ══ DOWNLOADS STRIP ═══════════════════════════════════ */}
      <section style={{background:"#001e3c",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",borderTop:"1px solid rgba(0,170,170,0.15)"}}>
        <div style={{maxWidth:"1300px",margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem",marginBottom:"1.5rem"}}>
            <div>
              <div className="eyebrow" style={{color:"#00AAAA"}}>Resource Library</div>
              <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.5rem,2.5vw,2rem)",color:"#fff",fontWeight:600}}>Downloadable Resources</h2>
            </div>
            <Link href="/downloads" style={{display:"inline-flex",alignItems:"center",gap:"6px",color:"#00AAAA",fontSize:"0.76rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none"}}>
              View All Downloads
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="dl-strip" style={{display:"flex",gap:"1px",background:"rgba(0,170,170,0.15)"}}>
            {dlItems.map(d=>(
              <div key={d.file} className="dl-strip-card">
                <div style={{display:"flex",alignItems:"center",gap:"0.9rem"}}>
                  <IcFileStrip />
                  <span style={{fontSize:"0.93rem",fontWeight:600,color:"#fff",lineHeight:1.3}}>{d.label}</span>
                </div>
                <a href={d.file} download className="dl-btn-sm">
                  <IcDownload size={12} color="#001e3c" sw={2.5} />
                  PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <section style={{position:"relative",padding:"6rem 2rem",overflow:"hidden",textAlign:"center"}}>
        <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=65&auto=format&fit=crop"
          alt="Construction" fill style={{objectFit:"cover",objectPosition:"center 40%"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(0,20,50,0.93) 0%,rgba(0,60,80,0.90) 100%)"}} />
        <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.3}} />
        <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1}}>
          <blockquote style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.2rem,2.5vw,1.75rem)",color:"#fff",fontStyle:"italic",lineHeight:1.85,marginBottom:"1.5rem",padding:"1.5rem 2rem",borderLeft:"3px solid #00AAAA",background:"rgba(0,0,0,0.15)",textAlign:"left"}}>
            &ldquo;Every drawing, model, and report released by NETTMS passes through a structured multi-level compliance system aligned with international BIM standards.&rdquo;
          </blockquote>
          <p style={{fontSize:"1.1rem",color:"rgba(255,255,255,0.82)",marginBottom:"2rem"}}>Ready to experience digital certainty?</p>
          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
            <Link href="/services" className="btn-outline">View Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
