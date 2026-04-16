// ── NETTMS Central SVG Icon Library ──────────────────────────────────────────
// All icons: 24×24 viewBox, stroke-based, 1.6px default weight, no emojis

type P = { size?: number; color?: string; sw?: number };
const base = (size=24, color="currentColor", sw=1.6) => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: color, strokeWidth: sw,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

// ── Service icons ─────────────────────────────────────────────────────────────
export const IcLayers     = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
export const IcLink       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
export const IcMonitor    = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
export const IcBox        = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
export const IcGlobe      = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;

// ── Trust / QA icons ──────────────────────────────────────────────────────────
export const IcShield     = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
export const IcCheck      = ({size=24,color="currentColor",sw=2}:P)   => <svg {...base(size,color,sw)}><polyline points="20 6 9 17 4 12"/></svg>;
export const IcCheckCircle= ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
export const IcXCircle    = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
export const IcAlertShield= ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
export const IcArrowRight = ({size=24,color="currentColor",sw=2}:P)   => <svg {...base(size,color,sw)}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

// ── Industry icons ────────────────────────────────────────────────────────────
export const IcBuilding   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>;
export const IcUsers      = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
export const IcHome       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
export const IcMap        = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
export const IcCity       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M3 21h18M3 7v14M21 7v14M6 7h3v3H6zM15 7h3v3h-3zM6 14h3v3H6zM15 14h3v3h-3zM9 21v-4h6v4"/><path d="M9 3h6v4H9z"/></svg>;
export const IcCpu        = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
export const IcFactory    = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"/><path d="M17 18h.01M13 18h.01"/></svg>;
export const IcHospital   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M9 22v-4h6v4M12 7v6M9 10h6"/></svg>;
export const IcPlane      = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 1 16.5 2.5L13 6 4.8 4.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 5.8 5.3c.4.4.9.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;

// ── NETTMSedu / training icons ────────────────────────────────────────────────
export const IcTarget     = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
export const IcGrid       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
export const IcTool       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
export const IcBriefcase  = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/><line x1="2" y1="12" x2="22" y2="12"/></svg>;
export const IcAward      = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>;
export const IcZap        = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
export const IcBook       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>;

// ── Downloads / file icons ────────────────────────────────────────────────────
export const IcFileText   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
export const IcFileBadge  = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="12" cy="14" r="3"/><path d="M10.6 17L10 20l2-1 2 1-.6-3"/></svg>;
export const IcDownload   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
export const IcClipboard  = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="13" y2="15"/></svg>;
export const IcHardDrive  = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>;
export const IcGraduate   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
export const IcBuilding2  = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18"/><path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2"/><path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></svg>;

// ── Contact / communication icons ─────────────────────────────────────────────
export const IcMail       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
export const IcPhone      = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.49 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.11h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
export const IcMapPin     = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
export const IcSend       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

// ── Partner / ecosystem icons ─────────────────────────────────────────────────
export const IcLock       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
export const IcActivity   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
export const IcSettings   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>;
export const IcDatabase   = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
export const IcInfo       = ({size=24,color="currentColor",sw=1.6}:P) => <svg {...base(size,color,sw)}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
