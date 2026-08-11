import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => { 
    e.preventDefault(); 
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace with your Web3Forms Access Key
          access_key: "f52978f9-27df-4c56-b2aa-f7feadc643ac", 
          ...form
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    }
    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionLabel text="contact" />
        <div className="contact-grid" style={{ marginTop:32 }}>
          <div className="reveal-left">
            <h2 className="contact-heading">Let's build something <span style={{ color:"var(--btn-blue)" }}>together.</span></h2>
            <p className="contact-sub">Reach out for remote opportunities, freelance projects, or technical discussions. I typically respond within 24 hours.</p>
            {[
              { label:"Email",        value:<a href="mailto:arfaisal463@gmail.com">arfaisal463@gmail.com</a> },
              { label:"Location",     value:"Dhaka, Bangladesh — UTC+6" },
              { label:"Availability", value:"Open · Remote full-time & contract" },
            ].map(({ label, value }) => (
              <div className="contact-detail" key={label}>
                <span className="contact-label">{label}</span>
                <span className="contact-val">{value}</span>
              </div>
            ))}
          </div>
          <div className="reveal-right">
            {sent ? (
              <div className="card" style={{ padding:40, textAlign:"center" }}>
                <div style={{ fontSize:"2.5rem", marginBottom:12 }}>✓</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontWeight:600, color:"var(--text-primary)", marginBottom:6 }}>Message sent!</div>
                <div style={{ fontSize:"0.85rem", color:"var(--text-secondary)" }}>I'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={submit}>
                {[{name:"name",ph:"Your name"},{name:"email",ph:"your@email.com",type:"email"},{name:"subject",ph:"Subject"}].map(({ name, ph, type="text" }) => (
                  <div className="form-field" key={name}>
                    <input name={name} type={type} placeholder={ph} className="form-input" value={form[name]} onChange={handle} required />
                  </div>
                ))}
                <div className="form-field">
                  <textarea name="message" placeholder="Your message..." rows={5} className="form-input" style={{ resize:"none" }} value={form.message} onChange={handle} required />
                </div>
                <ShinyButton onClick={submit} style={{ width:"100%", justifyContent:"center", borderRadius:12 }}>
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </ShinyButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}