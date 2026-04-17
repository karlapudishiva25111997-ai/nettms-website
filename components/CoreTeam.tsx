"use client";
import { IcAward, IcActivity, IcShield, IcBook, IcTarget } from "@/components/Icons";

const Stat = ({ num, label }: { num: string; label: string }) => (
  <div style={{ textAlign:"center", padding:"0.9rem 0.75rem", background:"rgba(0,170,170,0.08)", border:"1px solid rgba(0,170,170,0.18)" }}>
    <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.4rem", fontWeight:700, color:"#00AAAA", display:"block", lineHeight:1 }}>{num}</span>
    <span style={{ fontSize:"0.67rem", color:"rgba(255,255,255,0.75)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{label}</span>
  </div>
);

const Skill = ({ text }: { text: string }) => (
  <span style={{ display:"inline-block", fontSize:"0.71rem", fontWeight:500, padding:"0.22rem 0.65rem", background:"rgba(0,102,102,0.12)", border:"1px solid rgba(0,170,170,0.2)", color:"rgba(255,255,255,0.82)", borderRadius:"2px", margin:"0 4px 4px 0" }}>{text}</span>
);

interface MemberProps {
  initials: string; name: string; role: string; cred: string; exp: string;
  stats: { num:string; label:string }[]; skills: string[]; projects: string[]; accent?: string;
}
const MemberCard = ({ initials, name, role, cred, exp, stats, skills, projects, accent="#00AAAA" }: MemberProps) => (
  <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(0,170,170,0.15)", borderTop:`3px solid ${accent}`, padding:"2.5rem 2rem", transition:"all 0.3s" }}
    onMouseOver={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,170,170,0.05)"}
    onMouseOut={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)"}
  >
    <div style={{ display:"flex", alignItems:"flex-start", gap:"1.2rem", marginBottom:"1.5rem" }}>
      <div style={{ width:"60px", height:"60px", borderRadius:"50%", background:`linear-gradient(135deg,${accent}33,${accent}66)`, border:`2px solid ${accent}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontWeight:700, color:accent, flexShrink:0 }}>{initials}</div>
      <div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.35rem", color:"#fff", fontWeight:600, marginBottom:"0.2rem", lineHeight:1.2 }}>{name}</h3>
        <p style={{ fontSize:"0.78rem", fontWeight:700, color:accent, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.2rem" }}>{role}</p>
        <p style={{ fontSize:"0.74rem", color:"rgba(255,255,255,0.75)", lineHeight:1.4 }}>{cred}</p>
      </div>
    </div>
    <div style={{ padding:"0.65rem 0.9rem", background:"rgba(0,0,0,0.25)", borderLeft:`3px solid ${accent}`, marginBottom:"1.3rem" }}>
      <p style={{ fontSize:"0.90rem", color:"rgba(255,255,255,0.82)", lineHeight:1.7 }}>{exp}</p>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:`repeat(${stats.length},1fr)`, gap:"0.5rem", marginBottom:"1.2rem" }}>
      {stats.map(s=><Stat key={s.label} {...s} />)}
    </div>
    <div style={{ marginBottom:"1.2rem" }}>{skills.map(s=><Skill key={s} text={s} />)}</div>
    <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:"1rem" }}>
      <p style={{ fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(255,255,255,0.82)", marginBottom:"0.5rem" }}>Notable Projects</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"0 1rem" }}>
        {projects.map(p=>(
          <span key={p} style={{ fontSize:"0.77rem", color:"rgba(255,255,255,0.78)", lineHeight:1.8, display:"flex", alignItems:"center", gap:"4px" }}>
            <span style={{ width:"4px", height:"4px", borderRadius:"50%", background:accent, display:"inline-block", flexShrink:0 }} />{p}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface AdvisorProps { initials:string; name:string; role:string; cred:string; desc:string; tags:string[]; accent?:string; }
const AdvisorCard = ({ initials, name, role, cred, desc, tags, accent="#006666" }: AdvisorProps) => (
  <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(0,170,170,0.12)", borderLeft:`3px solid ${accent}`, padding:"1.8rem 2rem", transition:"all 0.3s" }}
    onMouseOver={e=>(e.currentTarget as HTMLElement).style.background="rgba(0,102,102,0.06)"}
    onMouseOut={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.02)"}
  >
    <div style={{ display:"flex", alignItems:"flex-start", gap:"1.1rem", marginBottom:"1rem" }}>
      <div style={{ width:"50px", height:"50px", borderRadius:"50%", background:`linear-gradient(135deg,${accent}22,${accent}44)`, border:`2px solid ${accent}55`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:700, color:accent, flexShrink:0 }}>{initials}</div>
      <div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.2rem", color:"#fff", fontWeight:600, marginBottom:"0.15rem" }}>{name}</h3>
        <p style={{ fontSize:"0.74rem", fontWeight:700, color:accent, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.15rem" }}>{role}</p>
        <p style={{ fontSize:"0.71rem", color:"rgba(255,255,255,0.70)", lineHeight:1.4 }}>{cred}</p>
      </div>
    </div>
    <p style={{ fontSize:"0.92rem", color:"rgba(255,255,255,0.82)", lineHeight:1.8, marginBottom:"1rem" }}>{desc}</p>
    <div>{tags.map(t=><Skill key={t} text={t} />)}</div>
  </div>
);

const InMemoryCard = () => (
  <div style={{ padding:"2rem 2.5rem", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.08)", borderTop:"2px solid rgba(200,200,200,0.2)", position:"relative" }}>
    <div style={{ display:"flex", alignItems:"flex-start", gap:"1.2rem" }}>
      <div style={{ width:"50px", height:"50px", borderRadius:"50%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:700, color:"rgba(255,255,255,0.78)", flexShrink:0 }}>RS</div>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.82)", marginBottom:"0.35rem" }}>In Loving Memory</p>
        <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.2rem", color:"rgba(255,255,255,0.72)", fontWeight:600, marginBottom:"0.2rem" }}>Ranga Suggana</h3>
        <p style={{ fontSize:"0.74rem", fontWeight:600, color:"rgba(255,255,255,0.82)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.9rem" }}>Interior Execution Head — In Loving Memory</p>
        <p style={{ fontSize:"0.86rem", color:"rgba(255,255,255,0.75)", lineHeight:1.85, fontStyle:"italic", marginBottom:"0.8rem" }}>
          Ranga Suggana was a consummate construction professional — a man who carried 17+ years of Gulf and international project experience with quiet diligence and deep craft. Across the UAE, India, Oman, China, Turkey, and Indonesia, he executed luxury villa fit-outs, royal venues, and world-class hospitality spaces for brands like Sheraton, Ritz-Carlton, and Rotana — always with meticulous attention to quality, cost, and timely delivery. His mastery of MEP coordination, joinery supervision, and large-scale interior execution made him an irreplaceable presence on every project he touched.
        </p>
        <p style={{ fontSize:"0.84rem", color:"rgba(255,255,255,0.70)", lineHeight:1.8, fontStyle:"italic" }}>
          At NETTMS, Ranga was more than a team member — he was a trusted colleague whose professionalism and commitment to excellence shaped the way we approach every project. His contribution to our work and to the people around him will not be forgotten.
        </p>
        <p style={{ marginTop:"0.8rem", fontSize:"0.84rem", color:"rgba(255,255,255,0.82)", fontStyle:"italic" }}>We remember him with gratitude and deep respect. 🕊️</p>
      </div>
    </div>
  </div>
);

export default function CoreTeam({ context = "about" }: { context?: "about" | "edu" }) {
  return (
    <section style={{ background:"#001228", padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)", position:"relative", overflow:"hidden" }}>
      <div className="grid-bg" style={{ position:"absolute", inset:0, opacity:0.4 }} />
      <div style={{ maxWidth:"1300px", margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ marginBottom:"3rem" }}>
          <div className="eyebrow" style={{ color:"#00AAAA" }}>
            {context==="edu" ? "Our Mentors — The NETTMS Difference" : "Core Team"}
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", color:"#fff", fontWeight:600, marginBottom:"0.8rem" }}>
            {context==="edu" ? "IIT-Grade Rigour. Gulf-Forged Experience. Industry-Embedded Training." : "The People Behind Digital Certainty"}
          </h2>
          <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.78)", maxWidth:"820px", lineHeight:1.85 }}>
            NETTMS is led by professionals with combined exposure to over $40 billion in global construction projects — bringing design, execution, planning, QA/QC, contracts, and structural expertise under one BIM digital delivery platform.
          </p>
        </div>

        {/* Combined stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1px", background:"rgba(0,170,170,0.12)", marginBottom:"3rem" }} className="team-stats-grid">
          {[{ num:"$40B+", label:"Combined Project Value" },{ num:"70+ Yrs", label:"Combined Experience" },{ num:"5", label:"Countries Active" },{ num:"Design → Digital", label:"Full Spectrum" }].map(s=>(
            <div key={s.label} style={{ background:"rgba(255,255,255,0.02)", padding:"1.8rem 1.5rem", textAlign:"center" }}>
              <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.6rem", fontWeight:700, color:"#00AAAA", display:"block", marginBottom:"0.3rem" }}>{s.num}</span>
              <span style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.68)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── LEADERSHIP ── */}
        <div style={{ marginBottom:"1rem" }}>
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.82)", marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"8px" }}>
            <span style={{ display:"block", width:"24px", height:"1px", background:"rgba(255,255,255,0.15)" }} />Leadership
          </p>
        </div>
        <div style={{ marginBottom:"2.5rem" }}>
          <MemberCard
            initials="VN"
            name="Vijayababu Nettem"
            role="Founder & Director"
            cred="NICMAR PGD — QS & Contract Management  |  B.Arch. — JNTU Main Campus, Hyderabad"
            exp="With 11+ years in the Gulf and 25+ years across India — spanning Mumbai, Bangalore, and Hyderabad — Vijayababu brings rare, full-spectrum expertise to every engagement. His Gulf career includes landmark projects such as ADAC's Abu Dhabi Midfield Terminal, ADNOC oil & gas projects, and a portfolio of major hotels, large residential towers, and commercial developments across the UAE. What sets Vijayababu apart is the breadth of disciplines he commands within a single professional — design coordination, project execution, PMC, procurement, BIM QA/QC audits, cost management, and contract administration."
            stats={[{ num:"11+", label:"Yrs Gulf" },{ num:"25+", label:"Yrs India" },{ num:"$20B+", label:"Proj. Value" }]}
            skills={["Design Coordination","Project Execution","PMC & Oversight","BIM QA/QC Audits","QS & Contracts","3D/4D/5D BIM","ACC Build Workflows","Cost Management","Procurement"]}
            projects={["ADAC Midfield Terminal, Abu Dhabi","ADNOC Oil & Gas, UAE","Major Hotel & Hospitality Towers, UAE","Large Residential & Commercial — UAE, Mumbai, Bangalore, Hyderabad"]}
            accent="#00AAAA"
          />
        </div>

        {/* ── CORE DELIVERY TEAM ── */}
        <div style={{ marginBottom:"1rem" }}>
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.82)", marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"8px" }}>
            <span style={{ display:"block", width:"24px", height:"1px", background:"rgba(255,255,255,0.15)" }} />Core Delivery Team
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem", marginBottom:"2.5rem" }} className="team-core-grid">
          <MemberCard
            initials="EK"
            name="Engineer Krishna"
            role="Project Controls Specialist & Advisor"
            cred="B.E. Civil Engineering  |  15 Years Project Controls  |  13 Career Roles — Site Engr to PMO Head"
            exp="Senior project controls expert with 15 years of experience across 28+ projects spanning airports, metros, and oil & gas infrastructure in India, UAE, and Saudi Arabia. Has trained 960+ professionals. His experience means teams learn planning, scheduling, and BIM coordination as professional disciplines with real project consequence — not academic exercises."
            stats={[{ num:"$20.86B", label:"Proj. Value" },{ num:"28+", label:"Projects" },{ num:"960+", label:"Trained" }]}
            skills={["Primavera P6","4D/5D BIM","PMO Setup","EVA & Delay Analysis","Project Controls","L&T | AECOM | Parsons"]}
            projects={["Abu Dhabi Midfield Terminal ($4.42B)","Petro Rabigh ($9.4B)","Hyderabad Metro ($2.45B)","King Salman Maritime ($3.1B)"]}
            accent="#00cccc"
          />
          <MemberCard
            initials="KS"
            name="Karlapudi Shiva"
            role="Digital Construction Tools & Training Head"
            cred="4 Years AEC Platform Development  |  BIM Software & ACC Build Specialist"
            exp="Shiva bridges the gap between construction workflows and digital technology at NETTMS. With 4 years of hands-on experience building custom platforms for the AEC industry, he develops site QA/QC tools, digital inspection dashboards, project progress trackers, and client-facing reporting portals — purpose-built around how construction teams actually work on site. He also leads BIM software training, ensuring field engineers and project teams can operationalise ACC Build, digital checklists, and model-based workflows from day one of a project."
            stats={[{ num:"4+", label:"Yrs AEC Dev" },{ num:"ACC", label:"Build Specialist" },{ num:"BIM", label:"Training Lead" }]}
            skills={["Site QA/QC Tools","ACC Build Integration","BIM Software Training","Digital Dashboards","Inspection Portals","Progress Trackers"]}
            projects={["NETTMS QA/QC Digital Platform","ACC Build Workflow Deployment","BIM Training Programme — AEC Teams"]}
            accent="#00AAAA"
          />
        </div>

        {/* ── ADVISORS ── */}
        <div style={{ marginBottom:"1rem" }}>
          <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.82)", marginBottom:"1.2rem", display:"flex", alignItems:"center", gap:"8px" }}>
            <span style={{ display:"block", width:"24px", height:"1px", background:"rgba(255,255,255,0.15)" }} />Advisory Board
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.2rem", marginBottom:"2rem" }} className="team-adv-grid">
          <AdvisorCard
            initials="EP"
            name="Er. C.A. Prasad"
            role="Technical Advisor — Structural BIM"
            cred="Fellow IEI  |  Chartered Engineer  |  ASCE Member  |  40+ Years  |  M.Tech Structures"
            desc="Er. Prasad provides the structural engineering authority behind NETTMS's technical standards. 40 years of structural design experience spanning multi-storey towers, precast, steel, FRP, and insulated RCC wall systems. Delivered PMC for Hyderabad International Airport Terminal and Bangalore Development Authority towers. Director, METEY Engineering & Consultancy Pvt. Ltd."
            tags={["Structural Design","Precast & Steel","FRP / GFRC","Composite Structures","Middle East 10 Yrs","Published Researcher"]}
            accent="#00AAAA"
          />
          <AdvisorCard
            initials="KK"
            name="Kavin Kumar Shanmugam"
            role="Industry Mentor — Construction Technology & Lean Construction"
            cred="Director, M/s EPMCR  |  IIT Madras Incubated Company  |  PG Construction Management — IIT Madras  |  F.I.E"
            desc="Director of EPMCR — an IIT-incubated construction management company — Kavin Kumar has designed and managed 100+ projects across India including IIT Madras, IIT Tirupathi, and IIIT Chennai. He actively guides the NETTMS curriculum to ensure graduates are industry-ready — bridging academic excellence with real-world lean construction delivery."
            tags={["Lean Construction","IIT Madras Incubated","Construction Mgmt","100+ Projects","Project Audit","Structural Design"]}
            accent="#006666"
          />
          <AdvisorCard
            initials="IS"
            name="Iyyappan Sriramulu"
            role="Industry Mentor — Structural Steel & Precast"
            cred="10+ Years Gulf Experience  |  Dubai, Turkey & India  |  PEB & Precast Specialist"
            desc="With 10+ years of Gulf project experience across Dubai, Turkey, and India, Iyyappan brings deep field expertise in PEB systems, structural steel fabrication, and precast construction — spanning international airports, large-span malls, and shipping port infrastructure. As a mentor to the NETTMS team, he provides guidance on structural coordination, factory-built system integration, and on-site sequencing — the kind of hard-won knowledge that only comes from years of hands-on delivery."
            tags={["PEB Systems","Structural Steel Fabrication","Precast Construction","Steel Coordination","Airport Projects","Port Infrastructure"]}
            accent="#006666"
          />
          <div /> {/* empty cell for grid balance */}
        </div>

        {/* ── IN MEMORY ── */}
        <InMemoryCard />

      </div>
      <style>{`
        @media(max-width:900px){
          .team-core-grid{grid-template-columns:1fr!important}
          .team-adv-grid{grid-template-columns:1fr!important}
          .team-stats-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:500px){ .team-stats-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
