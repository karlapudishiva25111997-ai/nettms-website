"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const services = [
  { label:"BIM Outsourcing (Global)",         href:"/services/bim-outsourcing" },
  { label:"BIM Delivery & Coordination",      href:"/services/bim-coordination" },
  { label:"Digital Construction Management",  href:"/services/digital-construction" },
  { label:"Digital Asset Twin (Lite)",        href:"/services/digital-asset-twin" },
  { label:"Digital Twin & GIS-BIM",           href:"/services/digital-twin-gis" },
];

const navLinks = [
  { label:"About",           href:"/about" },
  { label:"Services",        href:"/services", children:services },
  { label:"Process & QA/QC", href:"/process-qaqc" },
  { label:"Industries",      href:"/industries" },
  { label:"Partners",        href:"/partners" },
  { label:"NETTMSedu",       href:"/nettmsedu" },
  { label:"Downloads",       href:"/downloads" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropOpen,     setDropOpen]     = useState(false);
  const [isMobile,     setIsMobile]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setServicesOpen(false); setDropOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        background: scrolled ? "rgba(0,15,40,0.98)" : "rgba(0,22,50,0.95)",
        backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
        borderBottom:"1px solid rgba(0,170,170,0.14)",
        transition:"background 0.3s ease",
        height:"72px", display:"flex", alignItems:"center",
        padding:"0 2rem", justifyContent:"space-between",
      }}>

        {/* Logo */}
        <Link href="/" style={{display:"flex",alignItems:"center",textDecoration:"none"}}>
          <div style={{background:"#fff",borderRadius:"6px",padding:"4px 10px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s"}}
            onMouseOver={e=>(e.currentTarget as HTMLElement).style.opacity="0.9"}
            onMouseOut={e=>(e.currentTarget as HTMLElement).style.opacity="1"}
          >
            <Image src="/logo.png" alt="NETTMS Urban Habitat" width={110} height={36}
              style={{height:"34px",width:"auto",display:"block"}} priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{display:"flex",alignItems:"center",height:"72px"}}>
            {navLinks.map(link =>
              link.children ? (
                <div key={link.href} style={{position:"relative",height:"72px",display:"flex",alignItems:"center"}}
                  onMouseEnter={()=>setDropOpen(true)} onMouseLeave={()=>setDropOpen(false)}>
                  <Link href={link.href} style={{
                    padding:"0 0.85rem", height:"72px", display:"flex", alignItems:"center", gap:"4px",
                    color: pathname.startsWith("/services") ? "#00AAAA" : "rgba(255,255,255,0.85)",
                    textDecoration:"none", fontSize:"0.72rem", fontWeight:600,
                    letterSpacing:"0.09em", textTransform:"uppercase",
                    borderBottom: pathname.startsWith("/services") ? "2px solid #00AAAA" : "2px solid transparent",
                  }}>
                    {link.label}
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" style={{transition:"transform 0.2s",transform:dropOpen?"rotate(180deg)":"none"}}>
                      <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </Link>
                  <div style={{
                    position:"absolute", top:"72px", left:0, minWidth:"275px",
                    background:"#001020", border:"1px solid rgba(0,170,170,0.2)", borderTop:"2px solid #00AAAA",
                    zIndex:500, opacity:dropOpen?1:0, visibility:dropOpen?"visible":"hidden",
                    transform:dropOpen?"translateY(0)":"translateY(-8px)", transition:"all 0.22s ease",
                    pointerEvents:dropOpen?"auto":"none",
                  }}>
                    {link.children.map(child=>(
                      <Link key={child.href} href={child.href} style={{
                        display:"flex", alignItems:"center", gap:"8px",
                        padding:"0.85rem 1.4rem",
                        color: pathname===child.href ? "#00AAAA" : "rgba(255,255,255,0.7)",
                        textDecoration:"none", fontSize:"0.8rem", fontWeight:500,
                        borderBottom:"1px solid rgba(255,255,255,0.05)", transition:"all 0.2s",
                      }}
                        onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.color="#00AAAA";el.style.paddingLeft="1.8rem";el.style.background="rgba(0,170,170,0.06)"}}
                        onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.color=pathname===child.href?"#00AAAA":"rgba(255,255,255,0.7)";el.style.paddingLeft="1.4rem";el.style.background="transparent"}}
                      >
                        <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="2.5" fill="#00AAAA"/></svg>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} style={{
                  padding:"0 0.85rem", height:"72px", display:"flex", alignItems:"center",
                  color: pathname===link.href ? "#00AAAA" : "rgba(255,255,255,0.85)",
                  textDecoration:"none", fontSize:"0.72rem", fontWeight:600,
                  letterSpacing:"0.09em", textTransform:"uppercase",
                  borderBottom: pathname===link.href ? "2px solid #00AAAA" : "2px solid transparent",
                  transition:"color 0.2s",
                  ...(link.label==="Downloads" ? {
                    color: pathname==="/downloads" ? "#00AAAA" : "#00AAAA",
                    background:"rgba(0,170,170,0.08)",
                    borderLeft:"1px solid rgba(0,170,170,0.2)",
                    borderRight:"1px solid rgba(0,170,170,0.2)",
                  } : {}),
                }}>
                  {link.label==="Downloads" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{marginRight:"4px"}}>
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  )}
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" style={{
              marginLeft:"1rem", padding:"0.6rem 1.3rem",
              background:"#00AAAA", color:"#001e3c",
              fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.09em",
              textTransform:"uppercase", textDecoration:"none", transition:"background 0.2s", whiteSpace:"nowrap",
            }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="#00cccc"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="#00AAAA"}
            >Contact Us</Link>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={()=>setMenuOpen(p=>!p)} aria-label="Toggle menu" style={{
            background:"none", border:"none", cursor:"pointer",
            padding:"8px", display:"flex", flexDirection:"column",
            justifyContent:"center", alignItems:"center", gap:"5px",
            width:"42px", height:"42px",
          }}>
            <span style={{display:"block",width:"22px",height:"2px",background:"#fff",borderRadius:"2px",transformOrigin:"center",transform:menuOpen?"translateY(7px) rotate(45deg)":"none",transition:"transform 0.3s ease"}} />
            <span style={{display:"block",width:"22px",height:"2px",background:"#fff",borderRadius:"2px",opacity:menuOpen?0:1,transition:"opacity 0.2s ease"}} />
            <span style={{display:"block",width:"22px",height:"2px",background:"#fff",borderRadius:"2px",transformOrigin:"center",transform:menuOpen?"translateY(-7px) rotate(-45deg)":"none",transition:"transform 0.3s ease"}} />
          </button>
        )}
      </nav>

      {/* Mobile Drawer — rendered outside nav */}
      {isMobile && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999,pointerEvents:menuOpen?"auto":"none"}}>
          {/* Backdrop */}
          <div onClick={()=>setMenuOpen(false)} style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.75)",opacity:menuOpen?1:0,transition:"opacity 0.3s ease"}} />

          {/* Slide panel */}
          <div style={{
            position:"absolute", top:"72px", left:0, right:0,
            background:"#001020", borderBottom:"1px solid rgba(0,170,170,0.18)",
            maxHeight:"calc(100vh - 72px)", overflowY:"auto",
            transform:menuOpen?"translateY(0)":"translateY(-16px)",
            opacity:menuOpen?1:0,
            transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            paddingBottom:"2rem",
          }}>
            {navLinks.map(link=>(
              <div key={link.href} style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                {link.children ? (
                  <>
                    <button onClick={()=>setServicesOpen(p=>!p)} style={{
                      width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"1.1rem 1.8rem", background:"none", border:"none", cursor:"pointer",
                      color: pathname.startsWith("/services") ? "#00AAAA" : "rgba(255,255,255,0.92)",
                      fontSize:"1.05rem", fontWeight:600, fontFamily:"'Cormorant Garamond',Georgia,serif", textAlign:"left",
                    }}>
                      {link.label}
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" style={{transform:servicesOpen?"rotate(180deg)":"none",transition:"transform 0.25s",flexShrink:0}}>
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <div style={{maxHeight:servicesOpen?"360px":"0",overflow:"hidden",transition:"max-height 0.35s ease",background:"rgba(0,170,170,0.04)"}}>
                      {link.children.map(child=>(
                        <Link key={child.href} href={child.href} onClick={()=>setMenuOpen(false)} style={{
                          display:"flex", alignItems:"center", gap:"8px",
                          padding:"0.85rem 2.4rem",
                          color:pathname===child.href?"#00AAAA":"rgba(255,255,255,0.6)",
                          textDecoration:"none", fontSize:"0.92rem",
                          borderBottom:"1px solid rgba(255,255,255,0.04)",
                        }}>
                          <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="2.5" fill="#00AAAA"/></svg>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.href} onClick={()=>setMenuOpen(false)} style={{
                    display:"flex", alignItems:"center", gap:"8px",
                    padding:"1.1rem 1.8rem",
                    color:pathname===link.href?"#00AAAA":"rgba(255,255,255,0.92)",
                    textDecoration:"none", fontSize:"1.05rem", fontWeight:600,
                    fontFamily:"'Cormorant Garamond',Georgia,serif",
                    ...(link.label==="Downloads" ? {color:"#00AAAA"} : {}),
                  }}>
                    {link.label==="Downloads" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                    )}
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{padding:"1.5rem 1.8rem"}}>
              <Link href="/contact" onClick={()=>setMenuOpen(false)} style={{
                display:"block", textAlign:"center", padding:"0.9rem",
                background:"#00AAAA", color:"#001e3c", fontSize:"0.90rem",
                fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
              }}>Contact Us →</Link>
            </div>
            <div style={{padding:"0 1.8rem",borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:"1rem",marginTop:"0.5rem"}}>
              <a href="tel:+919963384555" style={{display:"block",color:"rgba(255,255,255,0.4)",fontSize:"0.90rem",textDecoration:"none",marginBottom:"0.4rem"}}>+91 9963384555</a>
              <a href="mailto:info@nettms.com" style={{color:"rgba(255,255,255,0.4)",fontSize:"0.90rem",textDecoration:"none"}}>info@nettms.com</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
