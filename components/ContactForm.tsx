"use client";
import { useState } from "react";

const enquiryTypes = [
  "BIM Outsourcing",
  "BIM Delivery & Coordination",
  "Digital Construction Management",
  "Digital Asset Twin (Lite)",
  "Digital Twin & GIS-BIM",
  "NETTMSedu Training",
  "Partnership",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    designation: "",
    email: "",
    phone: "",
    cityCountry: "",
    enquiryType: "",
    message: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid rgba(0,102,102,0.2)",
    background: "#fff",
    fontSize: "0.9rem",
    color: "#1e3040",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "'DM Sans', sans-serif",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700 as const,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#001e3c",
    marginBottom: "0.4rem",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#00AAAA";
    e.target.style.boxShadow = "0 0 0 3px rgba(0,170,170,0.08)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(0,102,102,0.2)";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        padding: "3rem 2rem",
        background: "linear-gradient(135deg, #001e3c, #006666)",
        textAlign: "center",
        color: "#fff",
      }}>
        <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:"rgba(0,170,170,0.15)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00AAAA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 600 }}>
          Enquiry Received
        </h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
          Thank you, <strong>{formData.fullName}</strong>. Our team will review your enquiry and get back to you at <strong>{formData.email}</strong> within 24 business hours.
        </p>
        <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.5)" }}>
          For urgent matters: <a href="tel:+919963384555" style={{ color: "#00AAAA", textDecoration: "none" }}>+91 9963384555</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      {/* Row 1 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: "1rem" }} className="form-row">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Organization Name *</label>
          <input
            name="organization"
            type="text"
            required
            placeholder="Company / Firm name"
            value={formData.organization}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <style>{`.form-row{@media(max-width:600px){grid-template-columns:1fr!important}}`}</style>
      </div>

      {/* Row 2 */}
      <div>
        <label style={labelStyle}>Designation</label>
        <input
          name="designation"
          type="text"
          placeholder="Your role / title"
          value={formData.designation}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputStyle}
        />
      </div>

      {/* Row 3 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: "1rem" }} className="form-row">
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+91 or +1 (with country code)"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 4 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: "1rem" }} className="form-row">
        <div>
          <label style={labelStyle}>City / Country</label>
          <input
            name="cityCountry"
            type="text"
            placeholder="e.g. Hyderabad, India"
            value={formData.cityCountry}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Enquiry Type</label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          >
            <option value="">Select enquiry type</option>
            {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message / Project Brief</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project, requirements, or any specific questions..."
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          padding: "1rem 2.5rem",
          background: "#001e3c",
          color: "#fff",
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s",
          fontFamily: "'DM Sans', sans-serif",
          alignSelf: "flex-start",
        }}
        onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#006666"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
        onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#001e3c"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
      >
        Submit Enquiry →
      </button>

      <p style={{ fontSize: "0.78rem", color: "#3a5468", lineHeight: 1.6 }}>
        * Required fields. All enquiries are routed to <strong>info@nettms.com</strong>. We respond within 24 business hours.
      </p>
    </form>
  );
}
