import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CoreTeam from "@/components/CoreTeam";

export const metadata: Metadata = {
  title: "About Us — Who We Are & What We Do",
  description: "NETTMS Urban Habitat is India's structured Digital Construction Management & BIM Delivery Platform headquartered in Hyderabad. We are the digital intelligence layer for your construction project.",
  alternates: { canonical: "/about" },
};

const whatWeAre    = ["Global BIM outsourcing network facilitator","Single digital coordination layer for all stakeholders","BIM production & delivery platform (LOD 300–450)","ACC / CDE based project governance platform","4D, 5D, 6D digital construction management","Digital Asset Twin (Lite) handover specialist","ISO-aligned multi-level QA/QC governance system","Embedded extension of your design/PMC team"];
const whatWeAreNot = ["Architects or interior designers","Structural or MEP design engineers","Construction contractors","Site supervisors or executors","QS / Cost estimating firm","Physical project management firm","Design liability carrier","Land acquisition or legal consultant"];
const models       = [
  { name:"Fully Dedicated",       desc:"Exclusive resource on your projects — on-site or remote.", best:"Large design consultants, ongoing pipelines, international firms" },
  { name:"Partly Dedicated",      desc:"Shared resources, scale up or down anytime. No idle cost.", best:"Mid-size firms, project-based engagements, burst capacity" },
  { name:"2-Hour / Part-Time",    desc:"Specialist support billed by hours for targeted tasks.", best:"Small firms, freelance architects, spot BIM needs" },
  { name:"24×7 Online Monitoring",desc:"Round-the-clock CDE/ACC monitoring across time zones.", best:"International clients, large infrastructure programs" },
];
const verticals    = [
  { name:"NETTMS Urban Habitat Pvt. Ltd.", tag:"Core Platform", desc:"BIM outsourcing, digital construction management, ACC/CDE governance, Digital Asset Twin (Lite) delivery, and QA/QC.", url:"nettms.com" },
  { name:"NETTMSedu",    tag:"Training Wing", desc:"Industry-aligned BIM training programs. Graduates feeding directly into NETTMS outsourcing talent pipeline.", url:"nettmsedu.com" },
  { name:"WatchDoc",     tag:"Digital QA",    desc:"Digital quality monitoring & as-built documentation compliance — site-level digital oversight.", url:"" },
  { name:"+ Future Verticals", tag:"Expanding", desc:"The NETTMS ecosystem is designed to grow — all sharing the same governance, quality ethics, and digital-first philosophy.", url:"" },
];

export default function AboutPage() {
  return (<>
    <style>{`
      .model-card{background:#fff;padding:2.5rem 2rem;border-top:3px solid transparent;transition:all 0.3s}
      .model-card:hover{border-top-color:#00AAAA;background:#E8F4F4}
      .vert-card{padding:2rem 2rem 2rem 2.4rem;border:1px solid rgba(0,170,170,0.15);background:rgba(255,255,255,0.03);transition:all 0.3s;border-left:3px solid #00AAAA}
      .vert-card:hover{background:rgba(0,170,170,0.07);border-color:#00AAAA}
      @media(max-width:900px){.about-hero-cols{grid-template-columns:1fr!important}.contrast-cols{grid-template-columns:1fr!important}.vert-cols{grid-template-columns:1fr!important}}
    `}</style>

    {/* Hero with image */}
    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0}}>
        <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=65&auto=format&fit=crop"
          alt="Construction site" fill style={{objectFit:"cover",opacity:0.12,mixBlendMode:"luminosity"}} />
      </div>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.6}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">About NETTMS</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.5rem",maxWidth:"800px"}}>Who We Are — And Who We Are Not</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,maxWidth:"780px",fontWeight:300}}>NETTMS Urban Habitat Pvt. Ltd. is a Digital Construction Management &amp; BIM Delivery Platform headquartered in Hyderabad, Telangana. Established in 2021, we operate as the single digital coordination layer for AEC consultants, PMCs, developers, and infrastructure programs globally.</p>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.78)",lineHeight:1.85,maxWidth:"780px",fontWeight:300,marginTop:"1rem"}}>We are not architects. We are not contractors. We are the digital intelligence layer that connects all construction stakeholders — from design concept to as-built digital handover.</p>
      </div>
    </section>

    {/* What We Are / Not */}
    <section style={{background:"#f5fafa",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Clarity of Purpose</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2.5rem",fontWeight:600}}>Our Role — Precisely Defined</h2>
        <div className="contrast-cols" style={{display:"grid",gridTemplateColumns:"1fr 1fr",border:"1px solid rgba(0,102,102,0.15)"}}>
          <div>
            <div style={{padding:"1.2rem 2rem",background:"#006666",color:"#fff",fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase"}}>What We Are</div>
            {whatWeAre.map((item,i)=><div key={i} style={{padding:"0.95rem 2rem",borderBottom:"1px solid rgba(0,102,102,0.1)",display:"flex",alignItems:"flex-start",gap:"8px",fontSize:"0.93rem",color:"#006666",fontWeight:500,lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>{item}</div>)}
          </div>
          <div style={{borderLeft:"1px solid rgba(0,102,102,0.15)"}}>
            <div style={{padding:"1.2rem 2rem",background:"rgba(0,30,60,0.08)",color:"#001e3c",fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase"}}>What We Are Not</div>
            {whatWeAreNot.map((item,i)=><div key={i} style={{padding:"0.95rem 2rem",borderBottom:"1px solid rgba(0,102,102,0.1)",display:"flex",alignItems:"flex-start",gap:"8px",fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:"2px"}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>{item}</div>)}
          </div>
        </div>
        <div style={{marginTop:"1.5rem",padding:"2rem",background:"#001e3c",color:"#fff",fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.15rem",lineHeight:1.75,fontStyle:"italic",borderLeft:"4px solid #00AAAA"}}>
          NETTMS manages digital certainty — not physical construction. We assume full responsibility for digital data integrity, information management, and compliance validation. We do not assume design ownership, construction execution liability, site supervision responsibility, or physical construction risk.
        </div>
      </div>
    </section>

    {/* Engagement Models */}
    <section style={{background:"#fff",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center"}} className="about-hero-cols">
          <div>
            <div className="eyebrow" style={{color:"#006666"}}>Engagement Models</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"0.8rem",fontWeight:600}}>Flexible Resource Models</h2>
            <p style={{color:"#3a5468",fontSize:"1rem",marginBottom:"2rem",lineHeight:1.8}}>Fully dedicated and partly dedicated digital resource models — flexible enough to work as an extension of your in-house team. When your workload drops, we absorb the resource back — no cost, no hassle.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"rgba(0,102,102,0.1)"}}>
              {models.map(m=>(
                <div key={m.name} className="model-card">
                  <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.2rem",color:"#001e3c",marginBottom:"0.6rem",fontWeight:600}}>{m.name}</h3>
                  <p style={{fontSize:"0.85rem",color:"#3a5468",lineHeight:1.85,marginBottom:"0.7rem"}}>{m.desc}</p>
                  <p style={{fontSize:"0.76rem",fontWeight:600,color:"#006666"}}>Best for: <span style={{fontWeight:400,color:"#3a5468"}}>{m.best}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:"relative",borderRadius:"4px",overflow:"hidden",height:"480px"}}>
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=75&auto=format&fit=crop"
              alt="NETTMS team" fill style={{objectFit:"cover"}} />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(0,30,60,0.6) 0%,transparent 60%)"}} />
            <div style={{position:"absolute",bottom:"1.5rem",left:"1.5rem",right:"1.5rem"}}>
              <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                {["ISO-Aligned","Zero-Compromise","Certified Digital Delivery"].map(t=>(
                  <span key={t} style={{fontSize:"0.68rem",padding:"0.3rem 0.8rem",border:"1px solid rgba(0,170,170,0.4)",color:"#00AAAA",letterSpacing:"0.08em",textTransform:"uppercase",background:"rgba(0,20,40,0.6)",backdropFilter:"blur(4px)"}}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Group Verticals */}
    <section style={{background:"#001e3c",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0}}>
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=60&auto=format&fit=crop"
          alt="Modern buildings" fill style={{objectFit:"cover",opacity:0.08,mixBlendMode:"luminosity"}} />
      </div>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.4}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1}}>
        <div className="eyebrow">NETTMS Group</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#fff",marginBottom:"0.6rem",fontWeight:600}}>Our Group Verticals</h2>
        <p style={{color:"rgba(255,255,255,0.78)",fontSize:"1rem",marginBottom:"2.5rem",maxWidth:"650px"}}>All speaking the same voice, holding the same quality standards, serving the construction ecosystem from different angles.</p>
        <div className="vert-cols" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem"}}>
          {verticals.map(v=>(
            <div key={v.name} className="vert-card">
              <span style={{fontSize:"0.7rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"#00AAAA",fontWeight:600,background:"rgba(0,170,170,0.12)",padding:"0.25rem 0.7rem",display:"inline-block",marginBottom:"0.8rem"}}>{v.tag}</span>
              <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.3rem",color:"#fff",marginBottom:"0.7rem",fontWeight:600}}>{v.name}</h3>
              <p style={{fontSize:"0.92rem",color:"rgba(255,255,255,0.78)",lineHeight:1.75}}>{v.desc}</p>
              {v.url && <p style={{fontSize:"0.78rem",color:"#00AAAA",marginTop:"0.7rem",fontWeight:600}}>{v.url}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>

    <CoreTeam context="about" />

    <section style={{background:"#001e3c",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Ready to Experience Digital Certainty?</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem",fontSize:"1rem"}}>Let NETTMS become the digital backbone of your next project.</p>
      <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
        <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
        <Link href="/services" className="btn-outline">View Services</Link>
      </div>
    </section>
  </>);
}
