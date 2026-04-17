import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IcClipboard, IcLayers, IcBuilding2, IcGraduate, IcDownload, IcFileText, IcInfo } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Downloads — NETTMS Resource Library",
  description: "Download NETTMS's Digital Quality Policy, BIM Capability Brochure, Corporate Profile, and NETTMSedu Program Brochure.",
  alternates: { canonical: "/downloads" },
};

const downloads = [
  {
    Icon: IcClipboard,
    title: "Digital Quality Policy",
    subtitle: "NETTMS-QP-2026-V1.0",
    desc: "Our structured 5-Level Digital Quality Governance Framework — detailing every gate, principle, and standard that governs every NETTMS deliverable.",
    tags: ["ISO 19650", "ISO 9001", "QA/QC", "Release Policy"],
    file: "/quality-policy.pdf",
    label: "Download Quality Policy",
    accent: "#001e3c",
  },
  {
    Icon: IcLayers,
    title: "BIM Capability Brochure",
    subtitle: "Disciplines · LOD Levels · Engagement Models",
    desc: "Full overview of NETTMS BIM production capabilities — all disciplines, LOD levels, resource models, and what makes us different.",
    tags: ["BIM Outsourcing", "LOD 100–500", "MEP", "Tekla", "Scan-to-BIM"],
    file: "/bim-capability-brochure.pdf",
    label: "Download BIM Brochure",
    accent: "#006666",
  },
  {
    Icon: IcBuilding2,
    title: "Corporate Profile",
    subtitle: "Company Overview · Services · Group Verticals",
    desc: "NETTMS company overview — who we are, core service lines, group structure, quality governance summary, and contact information.",
    tags: ["Company Profile", "Services Overview", "Group Verticals"],
    file: "/corporate-profile.pdf",
    label: "Download Corporate Profile",
    accent: "#001e3c",
  },
  {
    Icon: IcGraduate,
    title: "NETTMSedu Program Brochure",
    subtitle: "6 Programs · Industry-Ready · Placement Pipeline",
    desc: "Complete NETTMSedu training overview — all six programs, audience, the NETTMSedu advantage, and placement into the NETTMS talent pipeline.",
    tags: ["BIM Training", "Revit", "ACC", "Tekla", "Scan-to-BIM"],
    file: "/nettmsedu-brochure.pdf",
    label: "Download Edu Brochure",
    accent: "#006666",
  },
];

export default function DownloadsPage() {
  return (<>
    <style>{`
      .dl-card { background:#fff; border:1px solid rgba(0,102,102,0.14); transition:all 0.35s; position:relative; overflow:hidden; }
      .dl-card:hover { transform:translateY(-6px); box-shadow:0 28px 70px rgba(0,30,60,0.13); border-color:#00AAAA; }
      .dl-card-top { height:4px; }
      .dl-icon-wrap { width:58px; height:58px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.3s; }
      .dl-card:hover .dl-icon-wrap { transform:scale(1.08); }
      .dl-tag { display:inline-block; padding:0.22rem 0.65rem; font-size:0.68rem; font-weight:600; letter-spacing:0.09em; text-transform:uppercase; background:rgba(0,170,170,0.07); color:#006666; border:1px solid rgba(0,170,170,0.18); margin:0 4px 4px 0; border-radius:2px; }
      .dl-btn { display:inline-flex; align-items:center; gap:8px; padding:0.75rem 1.6rem; font-size:0.76rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:all 0.3s; border-radius:2px; }
      .dl-btn:hover { transform:translateY(-2px); filter:brightness(1.1); }
      .info-note { background:#E8F4F4; border-left:4px solid #00AAAA; padding:1.5rem 2rem; margin-top:3rem; display:flex; align-items:flex-start; gap:1rem; }
      @media(max-width:900px){.dl-grid{grid-template-columns:1fr!important}}
    `}</style>

    {/* Hero */}
    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0}}>
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=65&auto=format&fit=crop"
          alt="" fill style={{objectFit:"cover",opacity:0.1,mixBlendMode:"luminosity"}} />
      </div>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow" style={{color:"#00AAAA"}}>Resource Library</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"700px"}}>Downloadable Resources</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"640px",fontWeight:300}}>Official NETTMS documentation — quality policies, capability brochures, corporate profile, and training programs. All documents are formal NETTMS publications.</p>
      </div>
    </section>

    {/* Grid */}
    <section style={{background:"#f5fafa",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div className="dl-grid" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem"}}>
          {downloads.map(d=>(
            <div key={d.file} className="dl-card">
              <div className="dl-card-top" style={{background:`linear-gradient(90deg,${d.accent},#00AAAA)`}} />
              <div style={{padding:"2.5rem"}}>
                {/* Header */}
                <div style={{display:"flex",alignItems:"flex-start",gap:"1.2rem",marginBottom:"1.4rem"}}>
                  <div className="dl-icon-wrap" style={{background:d.accent+"15",border:`1px solid ${d.accent}30`}}>
                    <d.Icon size={26} color={d.accent} sw={1.5} />
                  </div>
                  <div>
                    <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.45rem",color:"#001e3c",fontWeight:600,marginBottom:"0.25rem",lineHeight:1.2}}>{d.title}</h3>
                    <p style={{fontSize:"0.73rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#00AAAA"}}>{d.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p style={{fontSize:"0.9rem",color:"#3a5468",lineHeight:1.8,marginBottom:"1.2rem"}}>{d.desc}</p>

                {/* Tags */}
                <div style={{marginBottom:"1.5rem"}}>{d.tags.map(t=><span key={t} className="dl-tag">{t}</span>)}</div>

                {/* Footer */}
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.8rem",borderTop:"1px solid #E8F4F4",paddingTop:"1.2rem"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"6px",color:"#3a5468",fontSize:"0.78rem"}}>
                    <IcFileText size={14} color="#00AAAA" />
                    PDF Document · Official Publication
                  </div>
                  <a href={d.file} download className="dl-btn" style={{background:d.accent,color:"#fff"}}>
                    <IcDownload size={14} color="#fff" sw={2.5} />
                    {d.label}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="info-note">
          <IcInfo size={20} color="#006666" />
          <div>
            <h4 style={{fontFamily:"'DM Sans',Arial,sans-serif",fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#001e3c",marginBottom:"0.4rem"}}>About These Documents</h4>
            <p style={{fontSize:"0.93rem",color:"#3a5468",lineHeight:1.75}}>All downloadable documents are official NETTMS publications. The Quality Policy is the governing document for all NETTMS digital deliverables. For NDA execution, project-specific documentation, or customized capability presentations, contact us at <a href="mailto:info@nettms.com" style={{color:"#006666",fontWeight:600,textDecoration:"none"}}>info@nettms.com</a>.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{background:"linear-gradient(135deg,#001e3c,#006666)",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Need a Custom Presentation?</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem",maxWidth:"500px",margin:"0 auto 2rem"}}>We prepare project-specific capability documents and NDA-covered detailed brochures on request.</p>
      <Link href="/contact" className="btn-primary">Request Custom Document</Link>
    </section>
  </>);
}
