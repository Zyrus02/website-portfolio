"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ExternalLink, Code2, Instagram, Camera, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    setTimeout(() => {
      setSubmitStatus("success");
      e.target.reset();
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfos = [
    { label: "Email", value: "farhannuriman123@gmail.com", icon: Mail, href: "mailto:farhannuriman123@gmail.com" },
    { label: "Location", value: "Shah Alam, Selangor, Malaysia", icon: MapPin, href: null },
    { label: "Phone", value: "(+60) 19-711 6899", icon: Phone, href: "tel:+60197116899" }
  ];

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/farhannuriman", icon: ExternalLink },
    { name: "GitHub", url: "https://github.com/Zyrus02", icon: Code2 },
    { name: "Instagram", url: "#", icon: Code2 },
    { name: "Unsplash", url: "#", icon: Camera }
  ];

  return (
    <main className="pt-32 pb-24 px-4 md:px-10 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Information */}
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
            Let's Connect
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant mb-12 leading-relaxed max-w-lg">
            Have a project in mind or just want to chat? Feel free to reach out using the form or through my professional channels.
          </p>

          <div className="space-y-8 mb-12">
            <h2 className="font-headline text-lg font-bold text-on-surface uppercase tracking-wider mb-4">
              Contact Information
            </h2>
            {contactInfos.map((info) => {
              const content = (
                <div className="flex items-center gap-4 group">
                  <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium font-label">{info.label}</p>
                    <p className="text-lg font-bold font-body">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} className="block hover:opacity-85 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </div>

          <div>
            <h2 className="font-headline text-lg font-bold text-on-surface uppercase tracking-wider mb-6">
              Find me on
            </h2>
            <div className="flex flex-wrap gap-4">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-outline-variant/30 hover:border-secondary hover:text-secondary rounded-lg font-semibold font-label text-sm transition-all"
                  target={soc.url !== "#" ? "_blank" : undefined}
                  rel={soc.url !== "#" ? "noopener noreferrer" : undefined}
                >
                  <span>{soc.name}</span>
                  <soc.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-10 rounded-2xl shadow-sm">
          <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface font-label">Full Name</label>
                <input
                  required
                  className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface font-label">Email Address</label>
                <input
                  required
                  className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-on-surface font-label">Subject</label>
              <input
                required
                className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                placeholder="How can I help?"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-on-surface font-label">Message</label>
              <textarea
                required
                className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            <button
              disabled={submitStatus !== "idle"}
              className={`w-full text-on-secondary py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                submitStatus === "success"
                  ? "bg-tertiary"
                  : "bg-secondary hover:brightness-110"
              }`}
              type="submit"
            >
              {submitStatus === "idle" && (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
              {submitStatus === "sending" && (
                <>
                  Sending...
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              )}
              {submitStatus === "success" && (
                <>
                  Sent Successfully!
                  <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
