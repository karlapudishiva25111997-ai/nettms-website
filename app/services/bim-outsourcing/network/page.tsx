"use client";
import { useState, useMemo } from "react";
import LiveDashboard from "@/components/LiveDashboard";
import Link from "next/link";
import {
  SEED_RESOURCES, DISCIPLINE_LABELS, TIER_LABELS, TIER_COLORS,
  ENGAGEMENT_LABELS, AVAILABILITY_LABELS, AVAILABILITY_COLORS,
  type Discipline, type Tier, type EngagementMode, type WorkMode, type LOD, type Resource
} from "./data";

// ── Design tokens ────────────────────────────────────────────────────────────
const T = {
  green:      "#0F5132",
  greenBright:"#1A7A4C",
  leaf:       "#84CC16",
  ink:        "#0A1410",
  inkSoft:    "#1F2A24",
  paper:      "#FBFAF6",
  paperAlt:   "#F3F1E9",
  line:       "#D9D5C8",
  lineSoft:   "#E8E5DA",
  muted:      "#6B7268",
  amber:      "#B8860B",
  sky:        "#1E5F8C",
};

// ── Skill bar ────────────────────────────────────────────────────────────────
const SkillBar = ({ name, score }: { name: string; score: number }) => (
  <div style={{ marginBottom:"0.55rem" }}>
    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"3px" }}>
      <span style={{ fontFamily:"'Manrope',sans-serif", fontSize:"11px", color:T.muted }}>{name}</span>
      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:T.green, fontWeight:600 }}>{score}%</span>
    </div>
    <div style={{ height:"4px", background:T.lineSoft, borderRadius:"2px", overflow:"hidden" }}>
      <div style={{ height:"100%", width:`${score}%`, background:T.green, borderRadius:"2px", transition:"width 0.6s ease" }}
        aria-label={`${name} proficiency: ${score}%`} role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
);

// ── Resource card ────────────────────────────────────────────────────────────
const ResourceCard = ({ r }: { r: Resource }) => {
  const tierColor = TIER_COLORS[r.tier];
  const availColor = AVAILABILITY_COLORS[r.availability];
  return (
    <div style={{ background:T.paper, border:`1px solid ${T.lineSoft}`, borderRadius:"4px", padding:"clamp(1rem,3vw,1.4rem)", minWidth:0, wordBreak:"break-word", position:"relative", overflow:"hidden", transition:"all 0.25s", cursor:"default" }}
      onMouseOver={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=T.inkSoft; el.style.transform="translateY(-2px)"; el.style.boxShadow=`0 4px 16px rgba(10,20,16,0.06),0 12px 32px rgba(10,20,16,0.04)`; }}
      onMouseOut={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor=T.lineSoft; el.style.transform=""; el.style.boxShadow=""; }}
    >
      {/* Tier bar */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px", background:tierColor }} />

      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"12px", marginTop:"4px" }}>
        <div>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase", display:"block", marginBottom:"3px" }}>{r.id}</span>
          <h3 style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:"19px", fontWeight:500, color:T.ink, lineHeight:1.2 }}>{r.role_title}</h3>
        </div>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:tierColor, background:`${tierColor}14`, padding:"3px 8px", borderRadius:"3px", whiteSpace:"nowrap", flexShrink:0, marginLeft:"8px", marginTop:"2px" }}>
          {r.tier === "t1" ? "Certified" : r.tier === "t2" ? "Calibration" : r.tier === "t3" ? "Mentor" : "Applicant"}
        </span>
      </div>

      {/* Meta tags */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", marginBottom:"14px" }}>
        {[
          DISCIPLINE_LABELS[r.discipline],
          ENGAGEMENT_LABELS[r.engagement_mode],
          r.work_mode.charAt(0).toUpperCase()+r.work_mode.slice(1),
          `LOD ${r.lod_max}`,
          `${r.experience_years > 0 ? r.experience_years+"+ yrs" : "Fresher"}`,
          `${r.city}, ${r.state.slice(0,3).toUpperCase()}`
        ].map(tag => (
          <span key={tag} style={{ fontFamily:"'Manrope',sans-serif", fontSize:"11px", color:T.muted, background:T.paperAlt, padding:"2px 8px", borderRadius:"20px", border:`1px solid ${T.lineSoft}` }}>{tag}</span>
        ))}
      </div>

      {/* Skill bars */}
      <div style={{ marginBottom:"14px" }}>
        {r.skills.map(s => <SkillBar key={s.name} name={s.name} score={s.score} />)}
      </div>

      {/* Footer */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"12px", borderTop:`1px dashed ${T.lineSoft}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
          <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:availColor }} />
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:availColor }}>{AVAILABILITY_LABELS[r.availability]}</span>
        </div>
        <Link href="/contact" style={{ fontFamily:"'Manrope',sans-serif", fontSize:"13px", fontWeight:600, color:T.green, textDecoration:"none" }}>Engage →</Link>
      </div>
    </div>
  );
};

// ── Filter chip ──────────────────────────────────────────────────────────────
const Chip = ({ label, active, count, dot, onClick }: { label:string; active:boolean; count?:number; dot?:string; onClick:()=>void }) => (
  <button onClick={onClick} aria-pressed={active} style={{
    fontFamily:"'Manrope',sans-serif", fontSize:"12px", fontWeight:active?600:400,
    padding:"5px 12px", borderRadius:"20px", cursor:"pointer",
    background:active?T.ink:T.paper, color:active?T.paper:T.inkSoft,
    border:`1px solid ${active?T.ink:T.line}`, transition:"all 0.15s",
    display:"inline-flex", alignItems:"center", gap:"5px",
  }}>
    {dot && <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:dot, flexShrink:0 }} />}
    {label}
    {count !== undefined && <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", opacity:0.7 }}>({count})</span>}
  </button>
);

// ── Main page ────────────────────────────────────────────────────────────────
export default function NetworkPage() {
  const [discipline, setDiscipline] = useState<Discipline|"all">("all");
  const [mode, setMode]       = useState<EngagementMode|"all">("all");
  const [work, setWork]       = useState<WorkMode|"all">("all");
  const [tier, setTier]       = useState<Tier|"all">("all");
  const [lod,  setLod]        = useState<LOD|"all">("all");
  const [sort, setSort]       = useState<"tier"|"availability"|"experience">("tier");
  const [regForm, setRegForm] = useState({ name:"", mobile:"", email:"", state:"", experience:"", discipline:"arch", engagement:"ft", work_mode:"online" });
  const [regSubmitted, setRegSubmitted] = useState(false);

  const filtered = useMemo(() => {
    let r = [...SEED_RESOURCES];
    if (discipline !== "all") r = r.filter(x => x.discipline === discipline);
    if (mode       !== "all") r = r.filter(x => x.engagement_mode === mode);
    if (work       !== "all") r = r.filter(x => x.work_mode === work);
    if (tier       !== "all") r = r.filter(x => x.tier === tier);
    if (lod        !== "all") r = r.filter(x => x.lod_max === lod);
    const tierOrder: Record<Tier,number> = { t1:0, t2:1, t3:2, app:3 };
    const availOrder: Record<string,number> = { now:0, "3-days":1, "1-week":2, calibrating:3, mentor:4, assessment:5 };
    if (sort === "tier")         r.sort((a,b) => tierOrder[a.tier] - tierOrder[b.tier]);
    if (sort === "availability") r.sort((a,b) => availOrder[a.availability] - availOrder[b.availability]);
    if (sort === "experience")   r.sort((a,b) => b.experience_years - a.experience_years);
    return r;
  }, [discipline, mode, work, tier, lod, sort]);

  const total       = SEED_RESOURCES.length;
  const deployable  = SEED_RESOURCES.filter(r => r.tier==="t1" && r.availability==="now").length;
  const calibrating = SEED_RESOURCES.filter(r => r.tier==="t2").length;

  const countFor = (axis: string, val: string) => {
    let r = [...SEED_RESOURCES];
    if (axis === "discipline") r = r.filter(x => x.discipline === val);
    if (axis === "mode")       r = r.filter(x => x.engagement_mode === val);
    if (axis === "work")       r = r.filter(x => x.work_mode === val);
    if (axis === "tier")       r = r.filter(x => x.tier === val);
    if (axis === "lod")        r = r.filter(x => x.lod_max === val);
    return r.length;
  };

  const gates = [
    { num:"01", name:"Technical Assessment", desc:"Live Revit, Tekla, or Navisworks test on a real project scenario under timed conditions.", owner:"NETTMS QA/QC" },
    { num:"02", name:"Standards Audit",      desc:"ISO 19650 naming, LOD discipline, BEP comprehension, and CDE workflow literacy.", owner:"BIM Manager" },
    { num:"03", name:"Skill Gap Closure",    desc:"Custom NETTMSEDU upskilling track — 7-module programme targeted at identified gaps.", owner:"NETTMSEDU" },
    { num:"04", name:"Benchmark Project",    desc:"Mentor-reviewed mini-project delivered to international client standard — not a mock.", owner:"Senior Mentor Panel" },
    { num:"05", name:"Compliance Onboarding",desc:"NDA execution, CDE access protocol, IP security briefing, and confidentiality training.", owner:"Ops + Legal" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@300..800&display=swap');
        .net-page { background:${T.paper}; min-height:100vh; font-family:'Manrope',sans-serif; color:${T.ink}; }
        .net-page * { box-sizing:border-box; }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        .pulse-dot { animation: pulse-dot 2s infinite; }
        @media(max-width:1024px){
          .main-cols{flex-direction:column!important}
          .sidebar{width:100%!important;margin-bottom:1.5rem}
          .filter-row{flex-wrap:wrap!important}
          .metrics-grid{grid-template-columns:1fr 1fr!important}
          .gate-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:768px){
          .hero-ctas{flex-direction:column!important;width:100%!important}
          .hero-ctas a{width:100%!important;text-align:center!important;justify-content:center!important}
          .reg-cols{flex-direction:column!important}
          .reg-cols > div{width:100%!important;min-width:0!important}
          .net-page section{padding-left:1.2rem!important;padding-right:1.2rem!important}
        }
        @media(max-width:640px){
          .metrics-grid{grid-template-columns:1fr!important}
          .gate-grid{grid-template-columns:1fr!important}
          .donut-row{grid-template-columns:1fr 1fr 1fr!important}
          .hide-mobile{display:none!important}
        }
        @media(max-width:480px){
          .donut-row{grid-template-columns:1fr 1fr!important}
          .skill-meta-row{flex-wrap:wrap!important}
        }
      `}</style>

      <div className="net-page">

        {/* ── Live Ribbon ── */}
        <div style={{ minHeight:"36px", background:T.ink, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px clamp(1.2rem,4vw,2rem)", flexWrap:"wrap", gap:"8px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <div className="pulse-dot" style={{ width:"8px", height:"8px", borderRadius:"50%", background:T.leaf }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.paper, letterSpacing:"0.08em", textTransform:"uppercase" }}>
              Live Readiness · Updated {new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
            </span>
          </div>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.leaf, letterSpacing:"0.08em", textTransform:"uppercase" }} className="hide-mobile">
            NETTMS Certified Resource Network · v1.0 · NDA-governed
          </span>
        </div>

        {/* ── Breadcrumb ── */}
        <div style={{ padding:"10px clamp(1.2rem,4vw,2rem)", background:T.paperAlt, borderBottom:`1px solid ${T.lineSoft}` }}>
          <nav style={{ display:"flex", gap:"6px", alignItems:"center", fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", letterSpacing:"0.06em" }}>
            {["Home","Services","Offshore BIM Production"].map((crumb, i) => (
              <span key={crumb} style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                <Link href={i===0?"/":`/services${i===2?"/bim-outsourcing":""}`} style={{ color:T.green, textDecoration:"none" }}>{crumb}</Link>
                <span style={{ color:T.muted }}>/</span>
              </span>
            ))}
            <span style={{ color:T.ink, fontWeight:600 }}>Certified Resource Network</span>
          </nav>
        </div>

        {/* ── Hero ── */}
        <section style={{ maxWidth:"1440px", margin:"0 auto", padding:"clamp(3rem,6vw,3.5rem) clamp(1.2rem,4vw,2rem) 2.5rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
            <div style={{ width:"24px", height:"1px", background:T.green }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", letterSpacing:"0.14em", textTransform:"uppercase", color:T.green, fontWeight:600 }}>Service 01 · Offshore BIM Production</span>
          </div>
          <h1 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:400, fontSize:"clamp(32px,4vw,56px)", color:T.ink, lineHeight:1.1, maxWidth:"900px", marginBottom:"20px" }}>
            Benchmark-certified BIM resources, <em style={{ color:T.green, fontStyle:"italic" }}>ready for your project</em> — with global standards and local depth.
          </h1>
          <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"17px", color:T.muted, maxWidth:"720px", lineHeight:1.65, marginBottom:"32px" }}>
            A live, NDA-governed network of NETTMS-certified BIM professionals — assessed, calibrated, and benchmarked by NETTMSEDU. Every resource passes a 5-gate quality protocol before appearing here. Deploy full-time, part-time, or hourly — online or from our Hyderabad delivery centre.
          </p>
          <div className="hero-ctas" style={{ display:"flex", gap:"12px", flexWrap:"wrap", width:"100%" }}>
            <a href="#dashboard" style={{ fontFamily:"'Manrope',sans-serif", fontSize:"14px", fontWeight:600, padding:"12px 24px", background:T.green, color:T.paper, textDecoration:"none", borderRadius:"4px", border:`2px solid ${T.green}`, transition:"all 0.2s" }}
              onMouseOver={e=>(e.currentTarget as HTMLElement).style.background=T.greenBright}
              onMouseOut={e=>(e.currentTarget as HTMLElement).style.background=T.green}>
              Explore Dashboard ↓
            </a>
            <a href="#register" style={{ fontFamily:"'Manrope',sans-serif", fontSize:"14px", fontWeight:600, padding:"12px 24px", background:"transparent", color:T.green, textDecoration:"none", borderRadius:"4px", border:`2px solid ${T.green}`, transition:"all 0.2s" }}
              onMouseOver={e=>{const el=e.currentTarget as HTMLElement;el.style.background=T.green;el.style.color=T.paper}}
              onMouseOut={e=>{const el=e.currentTarget as HTMLElement;el.style.background="transparent";el.style.color=T.green}}>
              Register as Resource
            </a>
            <a href="#quality-gates" style={{ fontFamily:"'Manrope',sans-serif", fontSize:"14px", fontWeight:500, padding:"12px 24px", background:"transparent", color:T.muted, textDecoration:"none", borderRadius:"4px", border:`1px solid ${T.line}` }}>
              View Quality Protocol
            </a>
          </div>
        </section>

        {/* ── Live Dashboard ── */}
        <LiveDashboard variant="full" />

        {/* ── Metrics Strip ── */}
        <section style={{ maxWidth:"1440px", margin:"0 auto", padding:"0 clamp(1.2rem,4vw,2rem) 2.5rem" }}>
          <div className="metrics-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1px", background:T.line, border:`1px solid ${T.line}`, borderRadius:"4px", overflow:"hidden" }}>
            {[
              { label:"Total Network",     value:String(total),     delta:`↑ 3 this month`,       caption:"All tiers combined" },
              { label:"Deployable Today",  value:String(deployable), delta:"Benchmark-certified",  caption:"NDA-ready · Available Now" },
              { label:"Onboarding SLA",    value:"72 hrs",           delta:"From RFP to delivery", caption:"Full-time or hourly" },
              { label:"In Calibration",    value:String(calibrating),delta:"⚠ Upskilling track",   caption:"NETTMSEDU enrolled" },
            ].map((m, i) => (
              <div key={m.label} style={{ background:T.paper, padding:"24px 20px", position:"relative", borderLeft:i>0?`1px solid ${T.line}`:"none" }}>
                <div style={{ position:"absolute", top:0, left:0, width:"3px", height:"3px", background:T.green }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.14em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"8px" }}>{m.label}</span>
                <span style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:"clamp(28px,3vw,40px)", fontWeight:400, color:T.ink, display:"block", lineHeight:1, marginBottom:"6px" }}>{m.value}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color: i===3?T.amber:T.green, display:"block", marginBottom:"2px" }}>{m.delta}</span>
                <span style={{ fontFamily:"'Manrope',sans-serif", fontSize:"12px", color:T.muted }}>{m.caption}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dashboard ── */}
        <section id="dashboard" style={{ maxWidth:"1440px", margin:"0 auto", padding:"0 clamp(1.2rem,4vw,2rem) 3.5rem" }}>

          {/* Sticky Filter Bar */}
          <div style={{ position:"sticky", top:"72px", zIndex:10, background:"rgba(1,14,30,0.95)", backdropFilter:"blur(8px)", border:`1px solid ${T.lineSoft}`, borderRadius:"4px", padding:"12px clamp(0.8rem,3vw,1.2rem)", marginBottom:"16px" }}>
            {/* Discipline */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }} className="filter-row">
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase", color:T.muted, minWidth:"92px", flexShrink:0 }}>Discipline</span>
              <div style={{ display:"flex", gap:"5px", flexWrap:"wrap", maxWidth:"100%", overflowX:"auto" }}>
                <Chip label="All" active={discipline==="all"} onClick={()=>setDiscipline("all")} />
                {(Object.keys(DISCIPLINE_LABELS) as Discipline[]).map(d => (
                  <Chip key={d} label={DISCIPLINE_LABELS[d]} active={discipline===d} count={countFor("discipline",d)} onClick={()=>setDiscipline(discipline===d?"all":d)} />
                ))}
              </div>
            </div>
            {/* Engagement + Work */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }} className="filter-row">
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase", color:T.muted, minWidth:"92px", flexShrink:0 }}>Engagement</span>
              <div style={{ display:"flex", gap:"5px", flexWrap:"wrap", maxWidth:"100%", overflowX:"auto" }}>
                {(["all","ft","pt","hr","proj"] as const).map(m => <Chip key={m} label={m==="all"?"All":ENGAGEMENT_LABELS[m as EngagementMode]} active={mode===m} count={m!=="all"?countFor("mode",m):undefined} onClick={()=>setMode(mode===m&&m!=="all"?"all":m)} />)}
                <span style={{ color:T.line, margin:"0 4px" }}>|</span>
                {(["all","online","offline","hybrid"] as const).map(w => <Chip key={w} label={w==="all"?"All":w.charAt(0).toUpperCase()+w.slice(1)} active={work===w} count={w!=="all"?countFor("work",w):undefined} onClick={()=>setWork(work===w&&w!=="all"?"all":w as WorkMode)} />)}
              </div>
            </div>
            {/* Tier + LOD */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }} className="filter-row">
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase", color:T.muted, minWidth:"92px", flexShrink:0 }}>Tier · LOD</span>
              <div style={{ display:"flex", gap:"5px", flexWrap:"wrap", maxWidth:"100%", overflowX:"auto" }}>
                {([["all","All",undefined],["t1","Certified",T.green],["t2","Calibration",T.amber],["t3","Mentor",T.sky],["app","Applicant",T.muted]] as const).map(([v,l,dot]) =>
                  <Chip key={v} label={l} active={tier===v} count={v!=="all"?countFor("tier",v):undefined} dot={dot} onClick={()=>setTier(tier===v&&v!=="all"?"all":v as Tier)} />
                )}
                <span style={{ color:T.line, margin:"0 4px" }}>|</span>
                {(["all","200","300","350","400","450"] as const).map(l => <Chip key={l} label={l==="all"?"All LOD":`LOD ${l}`} active={lod===l} count={l!=="all"?countFor("lod",l):undefined} onClick={()=>setLod(lod===l&&l!=="all"?"all":l as LOD)} />)}
              </div>
            </div>
          </div>

          {/* Results header */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"14px", flexWrap:"wrap", gap:"8px" }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"12px", color:T.muted, letterSpacing:"0.08em" }}>
              Showing <strong style={{ color:T.ink }}>{filtered.length}</strong> of <strong style={{ color:T.ink }}>{total}</strong> resources
            </span>
            <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase" }}>Sort:</span>
              {(["tier","availability","experience"] as const).map(s =>
                <button key={s} onClick={()=>setSort(s)} style={{ fontFamily:"'Manrope',sans-serif", fontSize:"12px", fontWeight:sort===s?600:400, padding:"4px 10px", borderRadius:"3px", background:sort===s?T.ink:"transparent", color:sort===s?T.paper:T.muted, border:`1px solid ${sort===s?T.ink:T.line}`, cursor:"pointer" }}>
                  {s.charAt(0).toUpperCase()+s.slice(1)}
                </button>
              )}
            </div>
          </div>

          {/* Resource grid */}
          {filtered.length > 0 ? (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(320px,100%),1fr))", gap:"16px" }}>
              {filtered.map(r => <ResourceCard key={r.id} r={r} />)}
            </div>
          ) : (
            <div style={{ textAlign:"center", padding:"60px 20px", border:`1px dashed ${T.line}`, borderRadius:"4px" }}>
              <p style={{ fontFamily:"'Fraunces',serif", fontSize:"22px", color:T.inkSoft, marginBottom:"8px" }}>No resources match this filter combination.</p>
              <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"15px", color:T.muted }}>Widen your criteria or register a new brief — we will calibrate a team to your LOD within 72 hours.</p>
              <Link href="/contact" style={{ display:"inline-block", marginTop:"16px", fontFamily:"'Manrope',sans-serif", fontSize:"14px", fontWeight:600, color:T.paper, background:T.green, padding:"10px 20px", borderRadius:"4px", textDecoration:"none" }}>Request a Team Brief</Link>
            </div>
          )}
        </section>

        {/* ── Quality Gates ── */}
        <section id="quality-gates" style={{ background:T.ink, padding:"clamp(3rem,6vw,4.5rem) clamp(1.2rem,4vw,2rem)" }}>
          <div style={{ maxWidth:"1440px", margin:"0 auto" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px" }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.leaf, letterSpacing:"0.14em", textTransform:"uppercase" }}>5-Gate Quality Protocol</span>
            </div>
            <h2 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:300, fontSize:"clamp(28px,3.5vw,44px)", color:T.paper, lineHeight:1.15, marginBottom:"16px", maxWidth:"800px" }}>
              No resource reaches this dashboard without clearing <em style={{ color:T.leaf, fontStyle:"italic" }}>all five gates</em>.
            </h2>
            <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"16px", color:`rgba(251,250,246,0.65)`, maxWidth:"720px", lineHeight:1.65, marginBottom:"48px" }}>
              Every professional — whether full-time, hourly, online or offline — passes through a structured five-stage protocol before being marked Benchmark Certified. This is the quality moat that separates NETTMS from every other BIM staffing network.
            </p>
            <div className="gate-grid" style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"1px", background:`rgba(251,250,246,0.1)` }}>
              {gates.map((gate, i) => (
                <div key={gate.num} style={{ padding:"clamp(1.2rem,3vw,2rem)", background:T.ink, borderLeft:i>0?`1px solid rgba(251,250,246,0.08)`:"none" }}>
                  <span style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:300, fontSize:"52px", color:T.leaf, lineHeight:1, display:"block", marginBottom:"16px" }}>{gate.num}</span>
                  <h3 style={{ fontFamily:"'Manrope',sans-serif", fontWeight:600, fontSize:"14px", color:T.paper, marginBottom:"10px" }}>{gate.name}</h3>
                  <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"12px", color:`rgba(251,250,246,0.55)`, lineHeight:1.65, marginBottom:"20px" }}>{gate.desc}</p>
                  <div style={{ paddingTop:"14px", borderTop:`1px dashed rgba(251,250,246,0.15)` }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase", color:T.leaf }}>{gate.owner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Registration ── */}
        <section id="register" style={{ maxWidth:"1440px", margin:"0 auto", padding:"clamp(2rem,5vw,4.5rem) clamp(1.2rem,4vw,2rem)" }}>
          <div className="reg-cols" style={{ display:"flex", gap:"48px", alignItems:"flex-start" }}>
            {/* Left */}
            <div style={{ flex:1 }}>
              <h2 style={{ fontFamily:"'Fraunces',Georgia,serif", fontWeight:400, fontSize:"clamp(28px,3vw,40px)", color:T.ink, lineHeight:1.15, marginBottom:"16px" }}>
                Join the network. <em style={{ color:T.green, fontStyle:"italic" }}>Be found by global AEC firms.</em>
              </h2>
              <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"16px", color:T.muted, lineHeight:1.7, marginBottom:"28px" }}>
                Registration is open to BIM professionals across India — with a deliberate focus on Southern states. Whether you are a fresher seeking mentorship or a 15-year veteran looking for global project exposure, the gate is the same: prove your craft, meet our standard, and represent NETTMS on every delivery.
              </p>
              <ul style={{ listStyle:"none", marginBottom:"32px" }}>
                {[
                  "Structured skill assessment — you know exactly where you stand",
                  "Free NETTMSEDU upskilling for gap closure (conditions apply)",
                  "Access to international projects — USA, EU, Gulf, Australia",
                  "Full-time, part-time, or hourly — you choose the engagement",
                  "Mentor Track option for senior professionals (10+ yrs)",
                  "NETTMS Benchmark Certificate on successful completion",
                ].map(b => (
                  <li key={b} style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px", fontFamily:"'Manrope',sans-serif", fontSize:"15px", color:T.inkSoft, lineHeight:1.6 }}>
                    <span style={{ color:T.green, fontWeight:700, flexShrink:0, marginTop:"1px" }}>→</span>{b}
                  </li>
                ))}
              </ul>
              <Link href="#register-form" style={{ fontFamily:"'Manrope',sans-serif", fontSize:"14px", fontWeight:600, padding:"12px 24px", background:T.green, color:T.paper, textDecoration:"none", borderRadius:"4px", display:"inline-block" }}>Register Now →</Link>
            </div>

            {/* Right - Form */}
            <div id="register-form" style={{ flex:1, minWidth:0, background:T.paperAlt, border:`1px solid ${T.lineSoft}`, borderRadius:"4px", padding:"clamp(1.2rem,4vw,2rem)" }}>
              {regSubmitted ? (
                <div style={{ textAlign:"center", padding:"40px 20px" }}>
                  <div style={{ width:"56px", height:"56px", borderRadius:"50%", background:`${T.green}15`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.green} strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 style={{ fontFamily:"'Fraunces',serif", fontSize:"24px", color:T.ink, marginBottom:"8px" }}>Registration Received</h3>
                  <p style={{ fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.muted, lineHeight:1.6 }}>Your assessment link will arrive via email and SMS. We will contact you within 72 hours to schedule your Gate 01 — Technical Assessment.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily:"'Fraunces',serif", fontSize:"22px", color:T.ink, marginBottom:"24px", fontWeight:500 }}>Step 1 of 4 — Basic Registration</h3>
                  {/* Row 1 */}
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:"10px", marginBottom:"10px" }}>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Full Name *</label>
                      <input value={regForm.name} onChange={e=>setRegForm(f=>({...f,name:e.target.value}))} placeholder="Your full name" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }} />
                    </div>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Mobile (+91) *</label>
                      <input value={regForm.mobile} onChange={e=>setRegForm(f=>({...f,mobile:e.target.value}))} placeholder="10-digit number" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }} />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div style={{ marginBottom:"12px" }}>
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Email Address *</label>
                    <input value={regForm.email} onChange={e=>setRegForm(f=>({...f,email:e.target.value}))} placeholder="professional@email.com" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }} />
                  </div>
                  {/* Row 3 */}
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:"10px", marginBottom:"10px" }}>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>State *</label>
                      <select value={regForm.state} onChange={e=>setRegForm(f=>({...f,state:e.target.value}))} style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }}>
                        <option value="">Select state</option>
                        {["Telangana","Andhra Pradesh","Karnataka","Tamil Nadu","Kerala","Maharashtra","Gujarat","Delhi","Other"].map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Experience *</label>
                      <select value={regForm.experience} onChange={e=>setRegForm(f=>({...f,experience:e.target.value}))} style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }}>
                        <option value="">Select band</option>
                        {["Fresher (0 yrs)","1–3 years","4–6 years","7–10 years","10–15 years","15+ years"].map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div style={{ marginBottom:"12px" }}>
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Primary Discipline *</label>
                    <select value={regForm.discipline} onChange={e=>setRegForm(f=>({...f,discipline:e.target.value}))} style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }}>
                      {(Object.entries(DISCIPLINE_LABELS) as [Discipline,string][]).map(([k,v])=><option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  {/* Row 5 */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"20px" }}>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Engagement *</label>
                      <select value={regForm.engagement} onChange={e=>setRegForm(f=>({...f,engagement:e.target.value}))} style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }}>
                        {Object.entries(ENGAGEMENT_LABELS).map(([k,v])=><option key={k} value={k}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase", color:T.muted, display:"block", marginBottom:"5px" }}>Work Mode *</label>
                      <select value={regForm.work_mode} onChange={e=>setRegForm(f=>({...f,work_mode:e.target.value}))} style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.line}`, borderRadius:"4px", background:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"14px", color:T.ink, outline:"none" }}>
                        {["online","offline","hybrid"].map(s=><option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
                      </select>
                    </div>
                  </div>
                  <button onClick={()=>{if(regForm.name&&regForm.email&&regForm.state)setRegSubmitted(true)}} style={{ width:"100%", padding:"14px", background:T.green, color:T.paper, fontFamily:"'Manrope',sans-serif", fontSize:"15px", fontWeight:600, border:"none", borderRadius:"4px", cursor:"pointer", letterSpacing:"0.02em" }}>
                    Submit Registration →
                  </button>
                  <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"10px", color:T.muted, textAlign:"center", marginTop:"10px", letterSpacing:"0.06em" }}>NDA-GOVERNED · NO PII PUBLISHED · NETTMS CERTIFIED PROCESS</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── Footer Note ── */}
        <div style={{ background:T.paperAlt, borderTop:`1px solid ${T.lineSoft}`, padding:"12px clamp(1.2rem,4vw,2rem)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"8px" }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.muted, letterSpacing:"0.06em" }}>NETTMS Urban Habitat Pvt. Ltd. · Digital Construction Management &amp; BIM Delivery Platform</span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"11px", color:T.muted, letterSpacing:"0.06em" }}>No design ownership · No contractor role · NDA-governed</span>
        </div>

      </div>
    </>
  );
}
