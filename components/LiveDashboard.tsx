"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

function AnimatedBar({ label, value, color, delay = 0 }: { label: string; value: number; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setWidth(value), delay); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref} style={{ marginBottom: "0.8rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.9rem", fontWeight: 700, color }}>{value}%</span>
      </div>
      <div style={{ height: "5px", background: "rgba(255,255,255,0.08)", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${width}%`, background: color, borderRadius: "3px", transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}ms` }} />
      </div>
    </div>
  );
}

const PulseRing = ({ color = "#00AAAA" }: { color?: string }) => (
  <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "14px", height: "14px", flexShrink: 0 }}>
    <span style={{ position: "absolute", width: "12px", height: "12px", borderRadius: "50%", background: color, opacity: 0.3, animation: "ping 1.4s cubic-bezier(0,0,0.2,1) infinite" }} />
    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: color, display: "inline-block" }} />
  </span>
);

function DonutRing({ pct, color, size = 76, label }: { pct: number; color: string; size?: number; label: string }) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setAnimated(pct), 200); observer.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);
  const offset = circ - (animated / 100) * circ;
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" }} />
        <text x={size/2} y={size/2+5} textAnchor="middle"
          style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "14px", fontWeight: 700, fill: "#fff" }}>{pct}%</text>
      </svg>
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", textAlign: "center", lineHeight: 1.4 }}>{label}</span>
    </div>
  );
}

function StatCard({ value, suffix="", prefix="", label, sublabel, color="#00AAAA", duration=1800 }: {
  value: number; suffix?: string; prefix?: string; label: string; sublabel?: string; color?: string; duration?: number;
}) {
  const { count, ref } = useCountUp(value, duration);
  return (
    <div ref={ref} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,170,170,0.18)", borderTop: `3px solid ${color}`, padding: "1.5rem 1.2rem", position: "relative", overflow: "hidden", transition: "all 0.3s" }}
      onMouseOver={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,170,170,0.07)"}
      onMouseOut={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"}>
      <div style={{ position: "absolute", bottom: "-16px", right: "-16px", width: "70px", height: "70px", borderRadius: "50%", background: `${color}14`, pointerEvents: "none" }} />
      <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: "0.35rem" }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: "0.78rem", fontWeight: 700, color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</div>
      {sublabel && <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{sublabel}</div>}
    </div>
  );
}

export default function LiveDashboard({ variant = "full" }: { variant?: "full" | "compact" }) {
  const [tick, setTick] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => { setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })); setTick(t => t + 1); };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const deployableNow = 12 + (tick % 3 === 0 ? 1 : 0);

  return (
    <section style={{ background: "linear-gradient(160deg,#001020 0%,#001e3c 50%,#002040 100%)", padding: "4rem 1.2rem", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }
        @keyframes scanline { 0%{top:-5%} 100%{top:105%} }
        .dash-card-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:rgba(0,170,170,0.1); }
        .dash-bottom-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.2rem; margin-top:1.2rem; }
        .dash-header-row { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:1rem; margin-bottom:2rem; }
        .dash-live-badge { display:flex; align-items:center; gap:8px; padding:0.45rem 0.9rem; border:1px solid rgba(0,170,170,0.3); background:rgba(0,170,170,0.06); white-space:nowrap; }
        .dash-cta-strip { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; padding:1rem 1.2rem; background:rgba(0,170,170,0.06); border:1px solid rgba(0,170,170,0.2); margin-top:1.2rem; }
        .dash-cta-btns { display:flex; gap:0.6rem; flex-wrap:wrap; }
        .dash-time { display:inline-block; }
        /* Mobile overrides */
        @media(max-width:900px){
          .dash-card-grid { grid-template-columns:1fr 1fr !important; }
          .dash-bottom-grid { grid-template-columns:1fr !important; }
        }
        @media(max-width:480px){
          .dash-card-grid { grid-template-columns:1fr !important; }
          .dash-header-row { flex-direction:column; }
          .dash-live-badge { align-self:flex-start; }
          .dash-cta-strip { flex-direction:column; align-items:flex-start; }
          .dash-cta-btns { width:100%; }
          .dash-cta-btns a { flex:1; text-align:center; justify-content:center; }
          .dash-time { display:none; }
        }
      `}</style>

      {/* Grid bg */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,170,170,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,170,170,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      {/* Scan line */}
      <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(0,170,170,0.25),transparent)", animation: "scanline 4s linear infinite", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header row */}
        <div className="dash-header-row">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem", flexWrap: "wrap" }}>
              <PulseRing color="#00AAAA" />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#00AAAA" }}>Live Network Dashboard</span>
              <span className="dash-time" style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em" }}>{time}</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.4rem,2.5vw,2.2rem)", color: "#fff", fontWeight: 600, lineHeight: 1.15, marginBottom: "0.4rem" }}>
              Certified BIM Resource Network
            </h2>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, maxWidth: "560px" }}>
              Benchmark-certified BIM professionals — assessed, calibrated, and NDA-governed. Numbers update live.
            </p>
          </div>
          <div className="dash-live-badge">
            <PulseRing color="#00ff88" />
            <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#00ff88", letterSpacing: "0.1em", textTransform: "uppercase" }}>System Live</span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="dash-card-grid">
          <StatCard value={20}  suffix="+" label="Total Network"    sublabel="All tiers · Southern India focus"        color="#00AAAA" duration={1400} />
          <StatCard value={deployableNow} label="Deployable Today"  sublabel="Tier 1 · NDA-ready · Available now"      color="#00ff88" duration={1000} />
          <StatCard value={72}  suffix=" hrs" label="Onboarding SLA" sublabel="From RFP to first delivery"             color="#00AAAA" duration={1600} />
          <StatCard value={5}   label="In Calibration"   sublabel="NETTMSEDU upskilling track active"                 color="#f0c040" duration={1200} />
        </div>

        {/* Bottom panels */}
        <div className="dash-bottom-grid">

          {/* Discipline bars */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,170,170,0.15)", padding: "1.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "1rem" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00AAAA" }}>Discipline Mix</span>
            </div>
            <AnimatedBar label="Architecture (Revit)"     value={25} color="#00AAAA" delay={0}   />
            <AnimatedBar label="Structural (Revit+Tekla)" value={20} color="#00ccaa" delay={100} />
            <AnimatedBar label="MEP (Revit)"              value={18} color="#00AAAA" delay={200} />
            <AnimatedBar label="Tekla Structures"          value={12} color="#00ff88" delay={300} />
            <AnimatedBar label="BIM Coordination (ACC)"    value={15} color="#00ccaa" delay={400} />
            <AnimatedBar label="Scan-to-BIM + Others"      value={10} color="#00AAAA" delay={500} />
          </div>

          {/* Donuts */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,170,170,0.15)", padding: "1.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "1rem" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00AAAA" }}>Readiness Profile</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem", marginBottom: "1rem" }}>
              <DonutRing pct={60} color="#00AAAA" label="Tier 1 Certified" />
              <DonutRing pct={25} color="#f0c040" label="Tier 2 Calibrating" />
              <DonutRing pct={15} color="#006666" label="Tier 3 Mentor" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[{ label:"Online-ready",value:"85%",color:"#00AAAA"},{ label:"NDA-signed",value:"100%",color:"#00ff88"},{ label:"ISO 19650",value:"72%",color:"#00AAAA"},{ label:"ACC trained",value:"68%",color:"#00ccaa"}].map(m => (
                <div key={m.label} style={{ padding: "0.5rem 0.65rem", background: "rgba(0,170,170,0.06)", border: "1px solid rgba(0,170,170,0.1)" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.38)", display: "block", marginBottom: "2px" }}>{m.label}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", fontWeight: 700, color: m.color }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,170,170,0.15)", padding: "1.4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "1rem" }}>
              <PulseRing color="#00AAAA" />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00AAAA" }}>Live Activity Feed</span>
            </div>
            {[
              { id:"NCR-1001", action:"Passed Gate 01 — Technical Assessment",   time:"2m ago",  color:"#00ff88" },
              { id:"NCR-1008", action:"Deployed — ACC Build project, UAE",         time:"14m ago", color:"#00AAAA" },
              { id:"NCR-M-001",action:"Mentor session — 3 candidates",             time:"31m ago", color:"#00ccaa" },
              { id:"NCR-2001", action:"Registered — Architecture (Revit)",          time:"1h ago",  color:"#f0c040" },
              { id:"NCR-1003", action:"Re-certified — ISO 19650 Standards Audit",   time:"2h ago",  color:"#00AAAA" },
              { id:"NCR-1006", action:"Engaged — BIM Coord, Hyderabad",             time:"3h ago",  color:"#00AAAA" },
            ].map((ev, i) => (
              <div key={i} style={{ display: "flex", gap: "9px", alignItems: "flex-start", paddingBottom: "0.65rem", marginBottom: "0.65rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ev.color, flexShrink: 0, marginTop: "5px" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: "monospace", fontSize: "0.67rem", color: ev.color, letterSpacing: "0.07em" }}>{ev.id}</span>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.45, margin: "2px 0", wordBreak: "break-word" }}>{ev.action}</p>
                  <span style={{ fontFamily: "monospace", fontSize: "0.64rem", color: "rgba(255,255,255,0.28)" }}>{ev.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="dash-cta-strip">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <PulseRing color="#00ff88" />
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.84rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
              Network is <strong style={{ color: "#00ff88" }}>live</strong> — {deployableNow} resources deployable today · 72-hour SLA
            </span>
          </div>
          <div className="dash-cta-btns">
            <a href="/services/bim-outsourcing/network" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0.65rem 1.3rem", background: "#00AAAA", color: "#001e3c", fontFamily: "'DM Sans',sans-serif", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore Network →
            </a>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0.65rem 1.3rem", background: "transparent", color: "#00AAAA", fontFamily: "'DM Sans',sans-serif", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(0,170,170,0.4)", borderRadius: "2px" }}>
              Request Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
