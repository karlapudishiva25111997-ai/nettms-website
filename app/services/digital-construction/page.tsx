import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Digital Construction Management — ACC-Based Digital Oversight & 7D BIM",
  description: "NETTMS deploys Autodesk Construction Cloud as a live digital oversight layer — 3D, 4D, 5D and 7D Facility Management BIM for lifecycle asset intelligence from site to boardroom.",
  alternates: { canonical: "/services/digital-construction" },
};

const dimensions = [
  { d:"3D", title:"Model-Based Coordination", desc:"Multi-discipline BIM models coordinated through ACC for real-time clash resolution and design alignment across architecture, structure, and MEP." },
  { d:"4D", title:"Schedule Intelligence", desc:"Construction sequencing linked to BIM — site progress tracked against programme milestones with live deviation alerts." },
  { d:"5D", title:"Cost & Quantity Control", desc:"Model-driven quantity takeoffs and budget dashboards via ACC Cost — enabling real-time cost-to-plan visibility from site to boardroom." },
  { d:"7D", title:"Facility Management & Lifecycle Asset Intelligence", desc:"As-built models delivered with complete asset data — warranty records, operation manuals, maintenance schedules, and technical specifications — structured for immediate facility management use. NETTMS ensures all field observations, modifications, and as-built conditions captured in ACC are transferred to facility managers with a clean, owner-ready BIM model that supports operations from commissioning through decommissioning.", highlight:true },
];

const benefits7D = [
  { title:"Streamlined Operations", desc:"Facility managers gain immediate access to all asset information in one central model — no hunting across filing systems or disconnected spreadsheets." },
  { title:"Maintenance Planning", desc:"Schedule and track maintenance activities throughout the building's lifecycle, anchored to the as-built model rather than paper records." },
  { title:"Faster Decision-Making", desc:"Easy access to equipment specs, warranties, and manuals speeds up repairs and replacements — cutting downtime when systems fail." },
  { title:"Cost Optimization", desc:"Better planning of maintenance phases reduces unexpected expenses and reactive emergency spend over the asset's operational life." },
  { title:"Asset Tracking", desc:"Monitor the condition and performance of building systems from commissioning through decommissioning — with full traceability in the model." },
  { title:"Lifecycle Management", desc:"Optimize facility management from design stages through demolition — the 7D model becomes the owner's single source of asset truth." },
];

const platforms = ["Autodesk Construction Cloud (ACC)","Autodesk Build","Navisworks Manage","Revizto","BIM 360 legacy environments"];

const components = [
  "ACC environment setup and workflow configuration",
  "4D scheduling — BIM model linked to construction programme",
  "5D cost integration — BIM model linked to BOQ and cost tracking",
  "7D facility management — lifecycle asset data handover",
  "Digital quality management — QA/QC checklists, punch lists, NCRs via ACC",
  "RFI and issue tracking through CDE",
  "Digital reporting dashboards for owners and PMCs",
  "Document control and transmittal management",
];

export default function DigitalConstructionPage() {
  return (<>
    <style>{`
      .dim-card { padding:2rem; border:1px solid rgba(0,170,170,0.15); background:rgba(255,255,255,0.02); transition:all 0.3s; }
      .dim-card:hover { background:rgba(0,170,170,0.06); border-color:#00AAAA; }
      .dim-card.highlight { border-color:#00AAAA; border-left:4px solid #00AAAA; background:rgba(0,170,170,0.05); }
      .benefit-card { padding:1.5rem; border:1px solid rgba(0,102,102,0.15); background:#f5fafa; transition:all 0.3s; }
      .benefit-card:hover { background:#E8F4F4; border-color:#00AAAA; transform:translateY(-2px); }
      @media(max-width:900px){.dim-grid{grid-template-columns:1fr!important}.benefit-grid{grid-template-columns:1fr 1fr!important}}
      @media(max-width:600px){.benefit-grid{grid-template-columns:1fr!important}}
    `}</style>

    {/* Hero */}
    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0}}>
        <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=65&auto=format&fit=crop"
          alt="" fill style={{objectFit:"cover",opacity:0.08,mixBlendMode:"luminosity"}} />
      </div>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:2}}>
        <Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#00AAAA",textDecoration:"none",fontWeight:600,marginBottom:"2rem"}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Services
        </Link>
        <div className="eyebrow" style={{color:"#00AAAA"}}>Service 03</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:"#fff",marginBottom:"1.2rem",fontWeight:600,lineHeight:1.1}}>
          ACC-Based Digital Oversight. Real-Time Intelligence. From Site to Boardroom.
        </h1>
        <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.82)",lineHeight:1.88,fontWeight:300,marginBottom:"1.5rem"}}>
          NETTMS deploys ACC as a live digital oversight layer — connecting field data, BIM models, and cost intelligence into one platform accessible from site to boardroom, and extending through to <strong style={{color:"#00AAAA"}}>7D Facility Management</strong> for lifecycle asset value.
        </p>

        {/* Dimension badges */}
        <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"1.5rem"}}>
          {[{d:"3D",l:"MODEL"},{d:"4D",l:"SCHEDULE"},{d:"5D",l:"COST"},{d:"7D",l:"FACILITY MGMT ✦",h:true}].map(b=>(
            <div key={b.d} style={{padding:"0.55rem 1.2rem",background:b.h?"#00AAAA":"rgba(0,170,170,0.12)",border:`1px solid ${b.h?"#00AAAA":"rgba(0,170,170,0.3)"}`,display:"inline-flex",alignItems:"center",gap:"6px"}}>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.1rem",fontWeight:700,color:b.h?"#001e3c":"#00AAAA"}}>{b.d}</span>
              <span style={{fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.1em",color:b.h?"#001e3c":"rgba(255,255,255,0.6)"}}>{b.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Dimensions */}
    <section style={{padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",background:"#001228"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#00AAAA"}}>BIM Dimensions Delivered</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#fff",marginBottom:"2rem",fontWeight:600}}>From 3D Model to 7D Facility Intelligence</h2>
        <div className="dim-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"rgba(0,170,170,0.1)"}}>
          {dimensions.map(d=>(
            <div key={d.d} className={`dim-card${d.highlight?" highlight":""}`}>
              <div style={{display:"flex",alignItems:"center",gap:"0.8rem",marginBottom:"0.8rem"}}>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",fontWeight:700,color:d.highlight?"#00AAAA":"rgba(0,170,170,0.6)",lineHeight:1}}>{d.d}</span>
                <div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.2rem",color:"#fff",fontWeight:600,lineHeight:1.2}}>{d.title}</h3>
                  {d.highlight && <span style={{fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#00AAAA",background:"rgba(0,170,170,0.12)",padding:"0.15rem 0.6rem",display:"inline-block",marginTop:"0.2rem"}}>UPDATED</span>}
                </div>
              </div>
              <p style={{fontSize:"0.92rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8}}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 7D FAQ */}
    <section style={{padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"4rem",alignItems:"start"}} className="faq-grid">
          <div>
            <div className="eyebrow" style={{color:"#006666"}}>7D BIM Explained</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600}}>How does 7D BIM improve facility management?</h2>
            <p style={{fontSize:"1rem",color:"#3a5468",lineHeight:1.88,marginBottom:"1rem"}}>
              <strong style={{color:"#001e3c"}}>7D BIM centers on facility management and asset information,</strong> supporting the operation and maintenance of buildings throughout their lifecycles.
            </p>
            <p style={{fontSize:"0.95rem",color:"#3a5468",lineHeight:1.88,marginBottom:"1rem"}}>
              This dimension involves submitting an &ldquo;as-built&rdquo; model to the owner that contains all necessary information for future maintenance and operations. The 7D process means the model created by designers is updated during construction and delivered with <strong style={{color:"#001e3c"}}>comprehensive asset data</strong> — including warranty details, operation manuals, maintenance schedules, technical specifications, and other critical documentation needed for facility management.
            </p>
            <p style={{fontSize:"0.95rem",color:"#3a5468",lineHeight:1.88}}>
              Digital collaboration platforms like Revizto and ACC that track construction issues and documentation streamline the handover process, ensuring that all field observations, modifications, and as-built conditions are captured and transferred to facility managers along with the model.
            </p>
          </div>
          <div style={{background:"#001e3c",padding:"2.5rem",position:"relative",overflow:"hidden"}}>
            <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
            <div style={{position:"relative",zIndex:1}}>
              <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:"#00AAAA",marginBottom:"1rem"}}>7D Asset Data Includes</p>
              {["Warranty records & expiry dates","Operation manuals & specifications","Maintenance schedules & intervals","Technical specifications per system","As-built conditions & modifications","Equipment tags & identification","O&M documentation linking","Owner-ready BIM model handover"].map((item,i)=>(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:"8px",padding:"0.6rem 0",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:"0.86rem",color:"rgba(255,255,255,0.82)",lineHeight:1.75}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" style={{flexShrink:0,marginTop:"2px"}}><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`.faq-grid{@media(max-width:900px){grid-template-columns:1fr!important}}`}</style>
      </div>
    </section>

    {/* 7D Benefits */}
    <section style={{padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",background:"#f5fafa"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Key Benefits</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Why 7D BIM Matters for Your Asset</h2>
        <div className="benefit-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
          {benefits7D.map(b=>(
            <div key={b.title} className="benefit-card">
              <h4 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.15rem",color:"#001e3c",marginBottom:"0.6rem",fontWeight:600}}>{b.title}</h4>
              <p style={{fontSize:"0.86rem",color:"#3a5468",lineHeight:1.75}}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Components */}
    <section style={{padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div className="eyebrow" style={{color:"#006666"}}>Full Service Scope</div>
        <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,2.5vw,2.2rem)",color:"#001e3c",marginBottom:"1.5rem",fontWeight:600}}>Service Components</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"0.75rem",marginBottom:"2.5rem"}}>
          {components.map((c,i)=>(
            <div key={i} style={{padding:"1.1rem 1.2rem",background:"#E8F4F4",borderLeft:"3px solid #00AAAA",fontSize:"0.93rem",fontWeight:500,color:"#001e3c",lineHeight:1.75}}>{c}</div>
          ))}
        </div>
        <div style={{marginBottom:"2rem"}}>
          <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.3rem",color:"#001e3c",marginBottom:"1rem",fontWeight:600}}>Platforms Used</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:"0.75rem"}}>
            {platforms.map(p=><span key={p} style={{padding:"0.6rem 1.4rem",border:"1px solid rgba(0,102,102,0.2)",fontSize:"0.85rem",fontWeight:600,color:"#006666",background:"#f5fafa"}}>{p}</span>)}
          </div>
        </div>
        <div style={{padding:"2.5rem",background:"#001e3c",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",flexWrap:"wrap"}}>
          <div>
            <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.4rem",color:"#fff",marginBottom:"0.4rem",fontWeight:600}}>Set Up ACC for Your Project</h3>
            <p style={{color:"rgba(255,255,255,0.82)",fontSize:"0.9rem"}}>Configure your ACC environment and 7D BIM delivery framework today.</p>
          </div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-primary">Set Up ACC Now</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </div>
    </section>
  </>);
}
