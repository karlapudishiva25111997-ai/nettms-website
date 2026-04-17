export type Tier = "t1" | "t2" | "t3" | "app";
export type Discipline = "arch" | "interior" | "struct" | "tekla" | "mep" | "scan" | "dt" | "acc" | "coord";
export type EngagementMode = "ft" | "pt" | "hr" | "proj";
export type WorkMode = "online" | "offline" | "hybrid";
export type Availability = "now" | "3-days" | "1-week" | "calibrating" | "mentor" | "assessment";
export type LOD = "200" | "300" | "350" | "400" | "450";

export interface Resource {
  id: string;
  role_title: string;
  discipline: Discipline;
  engagement_mode: EngagementMode;
  work_mode: WorkMode;
  tier: Tier;
  lod_max: LOD;
  experience_years: number;
  state: string;
  city: string;
  availability: Availability;
  skills: { name: string; score: number }[];
}

export const DISCIPLINE_LABELS: Record<Discipline, string> = {
  arch: "Architecture (Revit)",
  interior: "Interiors & Fit-Out",
  struct: "Structural (Revit)",
  tekla: "Tekla Structures",
  mep: "MEP (Revit)",
  scan: "Scan-to-BIM",
  dt: "Digital Twin / GIS-BIM",
  acc: "ACC Build / Coordination",
  coord: "BIM Coordination",
};

export const TIER_LABELS: Record<Tier, string> = {
  t1: "Tier 1 — Certified",
  t2: "Tier 2 — Calibration",
  t3: "Tier 3 — Mentor",
  app: "Applicant",
};

export const TIER_COLORS: Record<Tier, string> = {
  t1: "#0F5132",
  t2: "#B8860B",
  t3: "#1E5F8C",
  app: "#6B7268",
};

export const ENGAGEMENT_LABELS: Record<EngagementMode, string> = {
  ft: "Full-Time",
  pt: "Part-Time",
  hr: "Hourly",
  proj: "Project-Based",
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  "now": "Available Now",
  "3-days": "In 3 Days",
  "1-week": "In 1 Week",
  "calibrating": "Calibrating",
  "mentor": "Mentor Track",
  "assessment": "In Assessment",
};

export const AVAILABILITY_COLORS: Record<Availability, string> = {
  "now": "#0F5132",
  "3-days": "#1A7A4C",
  "1-week": "#B8860B",
  "calibrating": "#B8860B",
  "mentor": "#1E5F8C",
  "assessment": "#6B7268",
};

export const SEED_RESOURCES: Resource[] = [
  { id:"NCR-1001", role_title:"Senior Revit Architect", discipline:"arch", engagement_mode:"ft", work_mode:"online", tier:"t1", lod_max:"400", experience_years:8, state:"Telangana", city:"Hyderabad", availability:"now", skills:[{name:"Revit",score:92},{name:"AutoCAD",score:85},{name:"Navisworks",score:78}] },
  { id:"NCR-1002", role_title:"Structural BIM Engineer", discipline:"struct", engagement_mode:"ft", work_mode:"hybrid", tier:"t1", lod_max:"400", experience_years:11, state:"Karnataka", city:"Bangalore", availability:"now", skills:[{name:"Revit Structure",score:94},{name:"ETABS",score:80},{name:"Navisworks",score:76}] },
  { id:"NCR-1003", role_title:"MEP BIM Coordinator", discipline:"mep", engagement_mode:"pt", work_mode:"online", tier:"t1", lod_max:"350", experience_years:6, state:"Tamil Nadu", city:"Chennai", availability:"now", skills:[{name:"Revit MEP",score:88},{name:"Navisworks",score:84},{name:"ACC Build",score:72}] },
  { id:"NCR-1004", role_title:"Tekla Steel Detailer", discipline:"tekla", engagement_mode:"ft", work_mode:"online", tier:"t1", lod_max:"450", experience_years:9, state:"Andhra Pradesh", city:"Vijayawada", availability:"3-days", skills:[{name:"Tekla Structures",score:96},{name:"SDS/2",score:74},{name:"AutoCAD",score:80}] },
  { id:"NCR-1005", role_title:"Scan-to-BIM Specialist", discipline:"scan", engagement_mode:"hr", work_mode:"online", tier:"t1", lod_max:"400", experience_years:5, state:"Telangana", city:"Hyderabad", availability:"now", skills:[{name:"ReCap Pro",score:88},{name:"Revit",score:84},{name:"CloudCompare",score:76}] },
  { id:"NCR-1006", role_title:"BIM Coordination Manager", discipline:"coord", engagement_mode:"ft", work_mode:"hybrid", tier:"t1", lod_max:"350", experience_years:12, state:"Karnataka", city:"Bangalore", availability:"now", skills:[{name:"Navisworks",score:95},{name:"ACC Build",score:90},{name:"Revit",score:85}] },
  { id:"NCR-1007", role_title:"Interior BIM Designer", discipline:"interior", engagement_mode:"pt", work_mode:"online", tier:"t1", lod_max:"300", experience_years:7, state:"Tamil Nadu", city:"Chennai", availability:"1-week", skills:[{name:"Revit",score:86},{name:"3ds Max",score:80},{name:"AutoCAD",score:78}] },
  { id:"NCR-1008", role_title:"ACC Build Implementation Lead", discipline:"acc", engagement_mode:"ft", work_mode:"online", tier:"t1", lod_max:"400", experience_years:6, state:"Telangana", city:"Hyderabad", availability:"now", skills:[{name:"ACC Build",score:94},{name:"BIM 360",score:88},{name:"Revit",score:80}] },
  { id:"NCR-1009", role_title:"Digital Twin Specialist", discipline:"dt", engagement_mode:"proj", work_mode:"hybrid", tier:"t1", lod_max:"400", experience_years:8, state:"Kerala", city:"Kochi", availability:"3-days", skills:[{name:"ArcGIS",score:86},{name:"Bentley iTwin",score:82},{name:"Revit",score:78}] },
  { id:"NCR-1010", role_title:"Revit Architecture Modeler", discipline:"arch", engagement_mode:"ft", work_mode:"online", tier:"t1", lod_max:"300", experience_years:4, state:"Telangana", city:"Hyderabad", availability:"now", skills:[{name:"Revit",score:84},{name:"AutoCAD",score:88},{name:"SketchUp",score:72}] },
  { id:"NCR-1011", role_title:"Structural Revit Modeler", discipline:"struct", engagement_mode:"pt", work_mode:"online", tier:"t2", lod_max:"300", experience_years:3, state:"Andhra Pradesh", city:"Guntur", availability:"calibrating", skills:[{name:"Revit Structure",score:70},{name:"AutoCAD",score:82},{name:"STAAD Pro",score:65}] },
  { id:"NCR-1012", role_title:"MEP Design Engineer", discipline:"mep", engagement_mode:"ft", work_mode:"online", tier:"t2", lod_max:"300", experience_years:5, state:"Tamil Nadu", city:"Coimbatore", availability:"calibrating", skills:[{name:"Revit MEP",score:74},{name:"AutoCAD MEP",score:80},{name:"Navisworks",score:60}] },
  { id:"NCR-1013", role_title:"BIM Coordinator (Junior)", discipline:"coord", engagement_mode:"ft", work_mode:"online", tier:"t2", lod_max:"300", experience_years:2, state:"Karnataka", city:"Mysore", availability:"calibrating", skills:[{name:"Navisworks",score:68},{name:"Revit",score:76},{name:"AutoCAD",score:82}] },
  { id:"NCR-1014", role_title:"Tekla Trainee Detailer", discipline:"tekla", engagement_mode:"ft", work_mode:"offline", tier:"t2", lod_max:"300", experience_years:1, state:"Telangana", city:"Hyderabad", availability:"calibrating", skills:[{name:"Tekla Structures",score:62},{name:"AutoCAD",score:78},{name:"Excel",score:74}] },
  { id:"NCR-1015", role_title:"Interior BIM Modeler", discipline:"interior", engagement_mode:"hr", work_mode:"online", tier:"t2", lod_max:"200", experience_years:2, state:"Kerala", city:"Trivandrum", availability:"calibrating", skills:[{name:"Revit",score:66},{name:"3ds Max",score:72},{name:"SketchUp",score:78}] },
  { id:"NCR-M-001", role_title:"Senior Mentor — BIM Strategy", discipline:"acc", engagement_mode:"proj", work_mode:"hybrid", tier:"t3", lod_max:"450", experience_years:18, state:"Telangana", city:"Hyderabad", availability:"mentor", skills:[{name:"ACC Build",score:98},{name:"ISO 19650",score:96},{name:"Revit",score:90}] },
  { id:"NCR-M-002", role_title:"Senior Mentor — Structural Systems", discipline:"struct", engagement_mode:"proj", work_mode:"hybrid", tier:"t3", lod_max:"450", experience_years:22, state:"Karnataka", city:"Bangalore", availability:"mentor", skills:[{name:"Tekla",score:97},{name:"Revit Structure",score:94},{name:"Navisworks",score:92}] },
  { id:"NCR-2001", role_title:"Architecture Graduate — BIM Trainee", discipline:"arch", engagement_mode:"ft", work_mode:"online", tier:"app", lod_max:"200", experience_years:0, state:"Telangana", city:"Hyderabad", availability:"assessment", skills:[{name:"Revit",score:55},{name:"AutoCAD",score:70},{name:"SketchUp",score:62}] },
  { id:"NCR-2002", role_title:"Civil Engineer — BIM Aspirant", discipline:"struct", engagement_mode:"ft", work_mode:"online", tier:"app", lod_max:"200", experience_years:1, state:"Tamil Nadu", city:"Chennai", availability:"assessment", skills:[{name:"AutoCAD",score:72},{name:"Revit",score:48},{name:"STAAD Pro",score:66}] },
  { id:"NCR-2003", role_title:"MEP Fresher — Assessment Track", discipline:"mep", engagement_mode:"ft", work_mode:"online", tier:"app", lod_max:"200", experience_years:0, state:"Andhra Pradesh", city:"Vizag", availability:"assessment", skills:[{name:"AutoCAD",score:65},{name:"Revit MEP",score:42},{name:"MS Project",score:55}] },
];
