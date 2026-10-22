import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";

// Contact Form
export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", message: "EmailJS is not configured yet. Add your credentials to .env." });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus({ type: "success", message: "Message sent successfully. Thank you!" });
    } catch {
      setStatus({ type: "error", message: "Message could not be sent. Please try again or email me directly." });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name<input name="from_name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Email<input name="reply_to" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
      </div>
      <label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label>
      <label>Message<textarea name="message" rows="5" required placeholder="Tell me a little about your project..." /></label>
      <button className="button button-dark" type="submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Sending..." : "Send message"} <ArrowUpRight size={16} />
      </button>
      {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
    </form>
  );
}