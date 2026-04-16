import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact Us — Get in Touch with NETTMS", description: "Contact NETTMS Urban Habitat for BIM outsourcing, digital construction management, NETTMSedu training, or partnership enquiries. Hyderabad, India.", alternates: { canonical: "/contact" } };
export default function ContactPage() {
  return (<>
    <section style={{background:"#001e3c",padding:"8rem 2rem 5rem",position:"relative",overflow:"hidden"}}>
      <div className="grid-bg" style={{position:"absolute",inset:0,opacity:0.5}} />
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#00AAAA,transparent)"}} />
      <div style={{maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:2}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.72rem",letterSpacing:"0.18em",textTransform:"uppercase",fontWeight:600,color:"#00AAAA",marginBottom:"0.6rem"}}><span style={{display:"block",width:"24px",height:"1px",background:"currentColor"}} />Contact NETTMS</div>
        <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(2rem,4vw,3.2rem)",color:"#fff",fontWeight:600,marginBottom:"1.2rem"}}>Let&apos;s Talk Digital Construction</h1>
        <p style={{fontSize:"1.05rem",color:"rgba(255,255,255,0.82)",lineHeight:1.8,maxWidth:"620px",fontWeight:300}}>Whether you need BIM outsourcing, digital construction management, NETTMSedu training, or a strategic partnership — we are ready to discuss your project.</p>
      </div>
    </section>
    <section style={{background:"#fff",padding:"5rem 2rem"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:"5rem",alignItems:"start"}} className="contact-layout">
        {/* LEFT — Details */}
        <div>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.8rem",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Our Details</h2>
          {[
            { label:"Head Office", value:"501, Vamshi Estates, Opposite Big Bazaar Road, Punjagutta Officers Colony, Ameerpet, Hyderabad, Telangana 500016, India" },
            { label:"Email", value:"info@nettms.com", href:"mailto:info@nettms.com" },
            { label:"Phone", value:"+91 9963384555", href:"tel:+919963384555" },
            { label:"Website", value:"www.nettms.com", href:"https://nettms.com" },
          ].map((d) => (
            <div key={d.label} style={{marginBottom:"1.8rem",paddingBottom:"1.8rem",borderBottom:"1px solid rgba(0,102,102,0.12)"}}>
              <p style={{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#00AAAA",marginBottom:"0.4rem"}}>{d.label}</p>
              {d.href ? <a href={d.href} style={{fontSize:"0.95rem",color:"#001e3c",fontWeight:500,textDecoration:"none",lineHeight:1.6}}>{d.value}</a> : <p style={{fontSize:"0.9rem",color:"#3a5468",lineHeight:1.7}}>{d.value}</p>}
            </div>
          ))}
          <div style={{marginTop:"1rem",padding:"1.5rem",background:"#E8F4F4",borderLeft:"3px solid #006666"}}>
            <p style={{fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#006666",marginBottom:"0.5rem"}}>Employment</p>
            <p style={{fontSize:"0.85rem",color:"#3a5468",lineHeight:1.7}}>To apply, send your CV to <a href="mailto:info@nettms.com" style={{color:"#006666",fontWeight:600,textDecoration:"none"}}>info@nettms.com</a> with subject line <strong>&apos;Application — [Your Role]&apos;</strong>.</p>
            <p style={{fontSize:"0.90rem",color:"#3a5468",marginTop:"0.6rem",lineHeight:1.7}}>We are hiring: BIM Modelers, Coordination Managers, Digital Construction Managers, QA/QC Reviewers, BIM Trainers, Business Development professionals.</p>
          </div>
        </div>
        {/* RIGHT — Form */}
        <div>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.8rem",color:"#001e3c",marginBottom:"2rem",fontWeight:600}}>Send Us an Enquiry</h2>
          <ContactForm />
        </div>
      </div>
      <style>{`.contact-layout{@media(max-width:900px){grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  </>);
}
