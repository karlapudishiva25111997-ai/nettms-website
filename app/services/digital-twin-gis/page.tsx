import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Digital Twin & GIS-BIM Platforms — City-Scale Infrastructure Intelligence", description: "NETTMS delivers spatial BIM and digital twin platforms for large-scale infrastructure programs, smart city initiatives, and urban development authorities.", alternates: { canonical: "/services/digital-twin-gis" } };
const components = ["GIS-BIM integration — connecting spatial data to BIM models","City-scale BIM modeling and urban 3D environments","Infrastructure digital twin development","Smart city asset registry platforms","Platform selection and implementation advisory"];
const platforms = [{ name:"Esri ArcGIS", desc:"GIS-BIM spatial integration" },{ name:"Bentley iTwin", desc:"Infrastructure digital twin" },{ name:"Autodesk InfraWorks", desc:"Urban planning and infrastructure BIM" },{ name:"Custom Platforms", desc:"For specific smart city deployments" }];
export default function DigitalTwinGISPage() {
  return (<>
    <section style={{background:"#001e3c",padding:"clamp(6rem,8vw,8rem) clamp(1.2rem,4vw,2rem) clamp(3rem,5vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg, transparent, #00AAAA, transparent)"}} />
      <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:2}}>
        <Link href="/services" style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#00AAAA",textDecoration:"none",fontWeight:600,marginBottom:"2rem"}}>← Back to Services</Link>
        <div className="eyebrow" style={{color:"#00AAAA"}}>Service 05</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",color:"#fff",marginBottom:"1.5rem",fontWeight:600}}>City-Scale Intelligence. Spatial BIM. Infrastructure Digital Twins.</h1>
        <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.82)",lineHeight:1.85,fontWeight:300}}>For large-scale infrastructure programs, smart city initiatives, and urban development authorities, NETTMS delivers spatial BIM and digital twin platforms through our partner ecosystem. This includes GIS-BIM integration, city-scale 3D urban models, infrastructure intelligence dashboards, and connected digital twin environments.</p>
      </div>
    </section>
    <section style={{padding:"clamp(2.5rem,4vw,4rem) clamp(1.2rem,4vw,2rem)",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{marginBottom:"3rem"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Service Components</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0.75rem"}}>
            {components.map((c,i) => <div key={i} style={{padding:"1.1rem 1.2rem",background:"#E8F4F4",borderLeft:"3px solid #00AAAA",fontSize:"0.93rem",fontWeight:500,color:"#001e3c",lineHeight:1.4}}>{c}</div>)}
          </div>
        </div>
        <div style={{marginBottom:"3rem"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.7rem",color:"#001e3c",marginBottom:"1.2rem",fontWeight:600,paddingBottom:"0.6rem",borderBottom:"2px solid #E8F4F4"}}>Partner Platforms</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"}} className="plat-grid">
            {platforms.map((p) => <div key={p.name} style={{padding:"1.5rem",border:"1px solid rgba(0,102,102,0.15)"}}>
              <h4 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.2rem",color:"#001e3c",marginBottom:"0.3rem",fontWeight:600}}>{p.name}</h4>
              <p style={{fontSize:"0.84rem",color:"#3a5468"}}>{p.desc}</p>
            </div>)}
          </div>
          <style>{`.plat-grid{@media(max-width:600px){grid-template-columns:1fr!important}}`}</style>
        </div>
        <div style={{padding:"2.5rem",background:"#001e3c",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",flexWrap:"wrap"}}>
          <div><h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.4rem",color:"#fff",marginBottom:"0.4rem",fontWeight:600}}>Discuss Your Infrastructure Program</h3>
          <p style={{color:"rgba(255,255,255,0.82)",fontSize:"0.9rem"}}>NETTMS acts as the delivery and coordination partner for your digital twin initiative.</p></div>
          <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-primary">Discuss Your Program</Link>
            <Link href="/services" className="btn-outline">All Services</Link>
          </div>
        </div>
      </div>
    </section>
  </>);
}
