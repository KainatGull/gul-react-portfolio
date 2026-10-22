import React from "react";
import { Mail } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import ContactForm from "../components/ContactForm";

// Contact Section
export default function Contact() {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="section-heading">
        <div><p className="eyebrow">HAVE A PROJECT IN MIND? / 03</p><h2>Let's make<br /><span>something good.</span></h2></div>
        <p>Have a role, a project, or an interesting idea? Send me a message.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-aside">
          <span className="contact-icon"><Mail size={22} /></span>
          <p>Prefer email?</p>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <span className="contact-red-line" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}