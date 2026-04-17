import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IcBuilding, IcUsers, IcHome, IcMap, IcCity, IcCpu, IcFactory, IcHospital, IcPlane } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Industries We Serve — AEC, Infrastructure, Smart Cities & More",
  description: "NETTMS serves AEC consultants, PMCs, real estate developers, infrastructure programs, smart cities, industrial, healthcare, and airport sectors.",
  alternates: { canonical: "/industries" },
};

const industries = [
  { Icon: IcBuilding,  name:"AEC & Design Consultants",          desc:"BIM outsourcing, 3D-to-unlimited-2D drawing production, coordination support, BEP compliance, NDA-protected resource embedding.",
    img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcUsers,     name:"Project Management Consultants",    desc:"Digital construction management via ACC, 4D/5D reporting, QA/QC management, digital reporting dashboards for project owners.",
    img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcHome,      name:"Real Estate Developers",            desc:"BIM coordination oversight, clash-free construction documentation, Digital Asset Twin (Lite) for handover to FM teams.",
    img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcMap,       name:"Infrastructure & Urban Development",desc:"Civil BIM, road/bridge/drainage modeling, GIS-BIM integration, smart city digital twin platforms for urban programs.",
    img:"https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcCity,      name:"Smart Cities & Public Sector",       desc:"City-scale BIM environments, GIS-BIM spatial platforms, digital governance frameworks for public infrastructure.",
    img:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcCpu,       name:"Hospitality & Commercial",           desc:"High-detail interior and architectural BIM, MEP coordination, fit-out BIM, Scan-to-BIM for renovation projects.",
    img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcFactory,   name:"Industrial & Manufacturing",         desc:"Plant BIM, structural steel detailing (Tekla), MEP coordination, as-built documentation for industrial facilities.",
    img:"https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcHospital,  name:"Healthcare & Education",             desc:"Complex MEP coordination, regulatory compliance BIM, asset management-ready as-built models.",
    img:"https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=70&auto=format&fit=crop" },
  { Icon: IcPlane,     name:"Airports & Large Transport",         desc:"Infrastructure BIM, phased construction coordination, multi-discipline clash management, digital handover for operations.",
    img:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=70&auto=format&fit=crop" },
];

export default function IndustriesPage() {
  return (<>
    <style>{`
      .ind-card{position:relative;overflow:hidden;min-height:280px;cursor:default}
      .ind-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;filter:brightness(0.25)}
      .ind-card:hover .ind-img{transform:scale(1.05);filter:brightness(0.35)}
      .ind-body{position:absolute;inset:0;padding:2rem;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(to top,rgba(0,20,50,0.95) 0%,rgba(0,20,50,0.5) 50%,transparent 100%)}
      .ind-icon-bg{width:44px;height:44px;border-radius:8px;background:rgba(0,170,170,0.18);border:1px solid rgba(0,170,170,0.35);display:flex;align-items:center;justify-content:center;margin-bottom:0.9rem;color:#00AAAA;transition:all 0.3s}
      .ind-card:hover .ind-icon-bg{background:rgba(0,170,170,0.3)}
      @media(max-width:900px){.ind-full-grid{grid-template-columns:1fr 1fr!important}}
      @media(max-width:500px){.ind-full-grid{grid-template-columns:1fr!important}}
    `}</style>

    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0}}>
        <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60&auto=format&fit=crop"
          alt="" fill style={{objectFit:"cover",opacity:0.1,mixBlendMode:"luminosity"}} />
      </div>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div className="eyebrow">Industries We Serve</div>
        <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem",maxWidth:"700px"}}>Sector-Agnostic. Same Quality Framework. Every Time.</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"680px",fontWeight:300}}>Our platform is sector-agnostic — the same quality framework, the same governance standards, applied to every industry we serve.</p>
      </div>
    </section>

    <section style={{background:"#001228",padding:"clamp(3rem,5vw,5rem) clamp(1.2rem,4vw,2rem)"}}>
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="ind-full-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px"}}>
          {industries.map(ind=>(
            <div key={ind.name} className="ind-card">
              <img src={ind.img} alt={ind.name} className="ind-img" />
              <div className="ind-body">
                <div className="ind-icon-bg"><ind.Icon size={20} /></div>
                <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"1.25rem",color:"#fff",marginBottom:"0.6rem",fontWeight:600,lineHeight:1.3}}>{ind.name}</h3>
                <p style={{fontSize:"0.90rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85}}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{background:"linear-gradient(135deg,#001e3c,#006666)",padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",textAlign:"center"}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"2rem",color:"#fff",marginBottom:"1rem",fontWeight:600}}>Your Industry. Our Digital Certainty.</h2>
      <p style={{color:"rgba(255,255,255,0.82)",marginBottom:"2rem",maxWidth:"500px",margin:"0 auto 2rem"}}>Tell us about your sector and we will configure the right service package.</p>
      <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
    </section>
  </>);
}
