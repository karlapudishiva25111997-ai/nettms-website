import type { Metadata } from "next";
import Link from "next/link";
import { IcTarget, IcGrid, IcTool, IcBriefcase, IcAward, IcGlobe } from "@/components/Icons";
import CoreTeam from "@/components/CoreTeam";

export const metadata: Metadata = {
  title: "NETTMSedu — BIM Training & Research Wing",
  description: "NETTMSedu is the Training & Research Wing of NETTMS Group. Industry-aligned BIM training programs to produce job-ready professionals.",
  alternates: { canonical: "/nettmsedu" },
};

const programs = [
  { name:"BIM Foundation Program",             desc:"Revit for Architecture, Structure, MEP — Beginners to Intermediate", duration:"3 Months" },
  { name:"BIM Professional Program",           desc:"Advanced coordination, Navisworks, ACC, BEP, LOD practice",          duration:"4 Months" },
  { name:"Tekla Steel Detailing Program",      desc:"Structural steel fabrication modeling for industry",                  duration:"2 Months" },
  { name:"Scan-to-BIM Program",               desc:"Point cloud processing and as-built modeling",                        duration:"6 Weeks" },
  { name:"Digital Construction Management",    desc:"ACC setup, 4D/5D, QA/QC management",                                 duration:"3 Months" },
  { name:"BIM Project Internship",             desc:"Live project exposure under NETTMS supervision",                      duration:"Ongoing" },
];

const audience = [
  "Fresh architecture / civil / mechanical engineering graduates",
  "Practicing architects and engineers upgrading to BIM workflows",
  "CAD operators transitioning to BIM",
  "Design firm owners wanting their teams BIM-trained",
  "Construction professionals seeking digital construction management skills",
];

const advantages = [
  { Icon: IcTarget,    title:"Taught by Practitioners",    desc:"Real project experience — not academics or theory" },
  { Icon: IcGrid,      title:"NETTMS Quality Standards",   desc:"Training on our institutional governance framework — industry benchmark" },
  { Icon: IcTool,      title:"Live Project Access",        desc:"Access to NETTMS live project workflows during training" },
  { Icon: IcBriefcase, title:"Direct Placement Pipeline",  desc:"Graduates feed directly into NETTMS outsourcing talent pool" },
  { Icon: IcAward,     title:"Institutional Recognition",  desc:"Your training record tied to NETTMS Group standards" },
  { Icon: IcGlobe,     title:"Global-Ready Skills",        desc:"Trained for international BIM outsourcing work from day one" },
];

export default function NETTMSeduPage() {
  return (<>
    <style>{`
      .prog-card { background:#fff; padding:2.5rem 2rem; transition:all 0.3s; border-top:3px solid transparent; }
      .prog-card:hover { border-top-color:#00AAAA; background:#E8F4F4; }
      .adv-card-edu { padding:2rem; border:1px solid rgba(0,102,102,0.15); background:#f5fafa; transition:all 0.3s; }
      .adv-card-edu:hover { border-color:#00AAAA; background:#E8F4F4; transform:translateY(-4px); box-shadow:0 12px 40px rgba(0,30,60,0.1); }
      .adv-icon { width:50px; height:50px; border-radius:10px; background:#E8F4F4; display:flex; align-items:center; justify-content:center; margin-bottom:1.1rem; color:#006666; transition:all 0.3s; }
      .adv-card-edu:hover .adv-icon { background:#006666; color:#fff; }
      @media(max-width:900px){.why-inner{grid-template-columns:1fr!important;gap:2.5rem!important}.prog-inner{grid-template-columns:1fr 1fr!important}.adv-inner{grid-template-columns:1fr 1fr!important}}
      @media(max-width:600px){.prog-inner{grid-template-columns:1fr!important}.adv-inner{grid-template-columns:1fr!important}}
    `}</style>

    <section style={{background:"#001e3c",padding:"8rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow" style={{color:"#00AAAA"}}>A NETTMS Group Vertical</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2rem,4vw,3.5rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"800px",lineHeight:1.1}}>
          Industry-Ready BIM Professionals.<br/><em style={{color:"#00AAAA",fontStyle:"italic"}}>Built by Practitioners. Not Theory.</em>
        </h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,maxWidth:"720px",fontWeight:300}}>NETTMSedu is the Training &amp; Research Wing of NETTMS Group — dedicated to building the next generation of BIM professionals who are job-ready from day one.</p>
      </div>
    </section>

    <section style={{background:"#fff",padding:"5rem 2rem"}}>
      <div className="why-inner" style={{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"center"}}>
        <div>
          <div className="eyebrow" style={{color:"#006666"}}>Why NETTMSedu Exists</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.5rem)",color:"#001e3c",marginBottom:"1.5rem",fontWeight:600}}>Bridging the Talent Gap in BIM</h2>
          {["India's construction industry needs BIM professionals — but most training is tool-focused, not industry-focused","NETTMS identified a talent gap between what colleges teach and what BIM outsourcing clients expect","NETTMSedu bridges that gap — training professionals on live project workflows, real BEPs, actual ACC environments","Graduates who master NETTMS standards are ready for global BIM outsourcing work from day one"].map((item,i) => (
            <div key={i} style={{padding:"1rem 1.2rem",background:"#E8F4F4",borderLeft:"3px solid #00AAAA",fontSize:"0.9rem",color:"#3a5468",lineHeight:1.7,marginBottom:"0.75rem"}}>{item}</div>
          ))}
        </div>
        <div style={{background:"#001e3c",padding:"3rem",position:"relative",overflow:"hidden"}}>
          <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
          <div style={{position:"relative",zIndex:1}}>
            <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.45rem",fontStyle:"italic",color:"#fff",lineHeight:1.85,marginBottom:"2rem",borderLeft:"3px solid #00AAAA",paddingLeft:"1.2rem"}}>&ldquo;What we teach in the classroom is what we implement on real projects tomorrow.&rdquo;</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
              {[["6","Programs"],["Live","Project Access"],["Direct","Industry Pipeline"],["ISO","Quality Standards"]].map(([num,label]) => (
                <div key={label} style={{textAlign:"center",padding:"1.2rem",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(0,170,170,0.2)"}}>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",fontWeight:700,color:"#00AAAA",display:"block"}}>{num}</span>
                  <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.78)",textTransform:"uppercase",letterSpacing:"0.08em"}}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{background:"#f5fafa",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Training Programs</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Programs Offered</h2>
        <div className="prog-inner" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(0,102,102,0.1)"}}>
          {programs.map((p) => (
            <div key={p.name} className="prog-card">
              <span style={{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#00AAAA",background:"rgba(0,170,170,0.1)",padding:"0.25rem 0.8rem",display:"inline-block",marginBottom:"0.9rem",borderRadius:"2px"}}>{p.duration}</span>
              <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.3rem",color:"#001e3c",marginBottom:"0.7rem",fontWeight:600}}>{p.name}</h3>
              <p style={{fontSize:"0.86rem",color:"#3a5468",lineHeight:1.7}}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p style={{marginTop:"1.5rem",fontSize:"0.84rem",color:"#3a5468",fontStyle:"italic"}}>* Contact us for current batch dates, fees, and schedules.</p>
      </div>
    </section>

    <section style={{background:"#001e3c",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow">Who Should Attend</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#fff",marginBottom:"2rem",fontWeight:600}}>This Training Is For You If...</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem"}}>
          {audience.map((a,i) => (
            <div key={i} style={{padding:"1.4rem 1.6rem",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(0,170,170,0.18)",borderLeft:"3px solid #00AAAA",display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"0.9rem",color:"rgba(255,255,255,0.75)",lineHeight:1.85}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:"2px"}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{background:"#fff",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>The NETTMSedu Advantage</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.4rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Why Choose NETTMSedu?</h2>
        <div className="adv-inner" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
          {advantages.map((a) => (
            <div key={a.title} className="adv-card-edu">
              <div className="adv-icon"><a.Icon size={22} /></div>
              <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.2rem",color:"#001e3c",marginBottom:"0.6rem",fontWeight:600}}>{a.title}</h3>
              <p style={{fontSize:"0.86rem",color:"#3a5468",lineHeight:1.7}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CoreTeam context="edu" />

    <section style={{background:"linear-gradient(135deg,#001e3c,#001e3c)",padding:"5rem 2rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.4}} />
      <div style={{maxWidth:"700px",margin:"0 auto",position:"relative"}}>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3vw,2.5rem)",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Ready to Build Your BIM Career?</h2>
        <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2.5rem",fontSize:"1rem",lineHeight:1.8}}>Join NETTMSedu and become part of the NETTMS talent ecosystem — trained for global BIM outsourcing from day one.</p>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <Link href="/contact" className="btn-primary">Register for Next Batch</Link>
          <Link href="/contact" className="btn-outline">Partner With NETTMSedu</Link>
        </div>
      </div>
    </section>
  </>);
}
