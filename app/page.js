"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Code2,
  Briefcase,
  ArrowRight,
  ChevronDown,
  LineChart,
  Database,
  Terminal,
  TableProperties,
  Cloud,
  Camera,
  GraduationCap,
  Calendar,
  Award,
  Users,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  X,
  BookOpen,
} from "lucide-react";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activePhotoCategory, setActivePhotoCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxCaption, setLightboxCaption] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success

  const metrics = [
    { label: "Monthly Records", value: "1M+" },
    { label: "Active Users", value: "325+" },
    { label: "Departments", value: "10+" },
    { label: "OJT Alignments", value: "378+" },
  ];

  const experienceData = [
    {
      company: "MMC Oil & Gas Engineering",
      role: "Trainee Executive",
      bullets: [
        "Analysed workforce manhour allocation across multiple concurrent engineering projects, improving resource visibility and enabling data-driven project planning and headcount forecasting.",
        "Developed an interactive resource-tracking model that aggregates multi-sheet engineering data to dynamically filter and display key metrics — project descriptions, document types, and position-specific manhour allocations — based on user-defined criteria.",
        "Built interactive Power BI dashboards with custom DAX measures and automated reporting workflows, significantly reducing manual data processing while improving reporting accuracy and executive decision-making.",
        "Recognised by management for delivering a solution that simplified complex manual workflows and improved resource planning and headcount visibility."
      ],
    },
    {
      company: "PETRONAS Chemical Group",
      role: "Marketing & Sales Capability Intern",
      bullets: [
        "Delivered monthly analytics on 1M+ records and enhanced a 10-page Power BI dashboard serving 325+ users across 10 departments, consolidating multiple data sources through Power Query and DAX.",
        "Analysed training-module completion across departments, surfacing learning-hour trends and underperformance against a 52-hour annual target while flagging anomalies and performance deviations.",
        "Conducted On-Job Training (OJT) competency-gap mapping with department heads and Commercial Transformation, aligning 378 line items across 298 unique OJT tasks with current business needs.",
        "Produced supporting documentation and process materials, demonstrating initiative across multiple professional-development workstreams."
      ],
    },
  ];

  const projects = [
    {
      title: "AI Travel Planner",
      desc: "Developed a mobile app that personalises Malaysian travel planning with cultural inclusivity and real-time adaptability, integrating the Gemini 2.5 Flash API and OSM Overpass API to aggregate live Points of Interest and dynamically re-plan itineraries via natural language.",
      img: "/Img/FYP.jpg",
      cta: "TypeScript, React Native, Gemini API, FastAPI",
    },
    {
      title: "Web Development Portfolio",
      desc: "Built a personal portfolio website featuring a contact form and a database-backed sign-in system, using PHP to validate submitted credentials against stored user records.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUdrMYzl8sB48pHM2LP8eUvOpd2jqa0_e-HCpnwHE8oV_ZJCr83Iyw6QiSb93zs16795irqC5Cyrtw8chQQduEhpye0RzZy_8pLfmI7kZ-kCAADfa5WrotA5cm5-qinBePqpKs9Q2Aw89C7QwqUz1l3r2Cbt2hRsLsn47BAO3EvoWUm4jv96m6K7VFuICxdbRZ4qf494B--cX80YtZbc_VFYfxXtfCWjp6wMQqvvFmimmsfPj9iaOK",
      cta: "HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
      title: "Child Presence Detection",
      desc: "Designed a child-presence detection concept aligned to the NCAP 2.0 requirement using radar sensors and an Aurix SoC to strengthen in-vehicle safety and minimise heatstroke risk.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4mpJRbVj99TgMiD4MCOzcyiHHarkUs7v9tWsslgUiwZJSfjPTHVFAO1zrS6Ki0_q8QDK0rpnZ9O0Eg8M7HXQdYDGr-UoBAjubZkNhlAq01u0bv7dXn8RFX8N5W6kPVudycNdvwFNkhXiLYfjk7zYSEm3b03sH3cbqji70_5gMOr38RcnoLUKjK0H6AeJEdThIwPgsOZCA2WH_XCkM0Vxi3eSYjxCYX8BNacrLo1ZUEpnVzWJI5jQT",
      cta: "C++, Radar Sensors, Aurix SoC",
    },
  ];

  const photos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnT8XZHpnlFmfdlyDgCtf4a0QhI7axuZ7TvmXqKzYzMfEVBY1-LMjx2P6F8p1hu6krp6kARxNpWGAPyZKyRfGuvL28Pa1AfWahOW36fKZ3khF1Ve4OZ7553Vy2k7YEuQiUTca2lu3a8JbG2aK1Z8UumDMK_mUMsCUWgcjjlJZiYmI3hJBzK68-6e_OEVp_ho4V7PINKdya2bJR1rpE95k2UdPfjiRnyEtoRCrbjvsG1W9wEDFXhab_",
      alt: "A moody, high-contrast black and white street photography shot taken in a bustling Asian city at night.",
      category: "Street",
    },
    {
      src: "/Img/BMW.jpg",
      alt: "A sleek, close-up shot of a classic vintage sports car's chrome details and curves.",
      category: "Automotive",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Cn8CQfhLYsqBDwWGqbzlMvSltnVajvrEJejfVrmbz7blk6EZXnG1HQ40zdslkulF7R_kAyhG4akfaRRU5KP6M_OOc9P45DsTgG2_DZ4kvO3dSYcYe0SqyHh4IGc4fdgDAhTZEG1zfVkKi5y4v_aUyJbOjM2GsBUxEOnE91m9W-0EQRHYEUSl8sfBW-rzH00n64ZLzF1dQ7UpTZcFdJYm1gcVmPngoq-Y--JOtWMNrnB2RklwPvdC",
      alt: "A minimalist architectural photograph of a modern skyscraper with geometric glass panels reflecting a clear blue sky.",
      category: "Street",
    },
    {
      src: "/Img/DSC05003.jpg",
      alt: "An intimate portrait of a person in a cozy, dimly lit library, with soft light from a nearby window.",
      category: "Portrait",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA4BqR8woJ4vXkBM7FtxYsjkcTVpVUTxdUDfDSqzzIX-MVDP-zunLQraHQTShCa_Ge0hFZF2l7_m9buor8w5nqz8FDgQxt7_zyu87ASu2R-pRlhu3XhVjQTlxfimefqBLBIfr1UNPrkIaVTQarpgQEYZOUSoxdmx8RTJ9ctWTg2-hGFWPSIYxFXZ_SB4ggKAOQPZZm2VxQfVxzB9qmA-bdOziPiPJB-Lj2qGQM6dulA-IhdKX6cIEU",
      alt: "A breathtaking landscape of a misty mountain range at dawn.",
      category: "Street",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1UyRWoIREQ-iztFStvk5YT5AzxKTQIolJSTc6rVq-zHKDxc4qglUvc2skIYbhFcS8ie0UqDnuF77olafkaii5_cbcSrce8hS1QI3aVNUsEGyr9fEgkebooq3ZE2I7x5XQYttI6BXjZLlcrPDcBicTJkw1Iwrizkh8spOi7e6o7st3r83npYvwEz9lY9CiKPh_edYlzIU1s45qhlhy3eT1voeYibG7ITvPl0UAgp8Mp02qRSyIG5HD",
      alt: "An urban street scene featuring vibrant neon signs and colorful lights reflecting off a rain-slicked road.",
      category: "Street",
    },
  ];

  const handleAccordionToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handlePhotoClick = (photo) => {
    setLightboxImg(photo.src);
    setLightboxCaption(photo.alt.split(".")[0]); // Shorten caption
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    setLightboxCaption("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORMSPREE_ID";

    if (formspreeId === "YOUR_FORMSPREE_ID") {
      setTimeout(() => {
        setSubmitStatus("success");
        e.target.reset();
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    }

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 4000);
  };

  const filteredPhotos = activePhotoCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activePhotoCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24" id="home">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-square md:order-2 group">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Professional Portrait of Farhan"
              src="/Img/Profile.jpeg"
            />
          </div>
          <div className="flex flex-col gap-6 md:order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-on-surface text-5xl md:text-7xl font-black leading-tight tracking-tight font-headline">
                Farhan Nur Iman
              </h1>
              <h2 className="text-secondary text-xl md:text-2xl font-semibold font-headline">
                Information Systems Graduate
              </h2>
              <h2 className="text-secondary text-base md:text-lg font-semibold font-headline mt-1 opacity-95">
                Full-Stack Developer | Data Analyst &amp; Business Analyst | Creative Photographer
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl font-body">
                Information Systems graduate with a genuine, long-standing interest in programming. Hands-on full-stack development experience with React Native, FastAPI, PHP, and MySQL. Strong analytical foundation from enterprise BI work at PETRONAS and MMC Oil &amp; Gas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:brightness-110 transition-all font-label text-sm"
                href="https://linkedin.com/in/farhannuriman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                className="flex items-center gap-2 px-6 py-3 bg-surface-container-high text-on-surface rounded-lg font-bold hover:bg-surface-container-highest transition-all font-label text-sm"
                href="https://github.com/Zyrus02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <Code2 className="w-4 h-4" />
              </a>
              <a
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold hover:brightness-110 transition-all font-label text-sm"
                href="https://zyrus.mypixieset.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Photography Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-24" id="experience">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-on-surface text-3xl font-bold flex items-center gap-3 font-headline">
            <Briefcase className="w-6 h-6 text-secondary" />
            Professional Journey
          </h2>
          <Link
            href="/professional"
            className="text-secondary font-semibold flex items-center gap-1.5 hover:underline text-sm font-label"
          >
            Detailed Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-6">
          {experienceData.map((item, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={item.company}
                className={`group border border-outline-variant/30 rounded-xl bg-surface overflow-hidden transition-all duration-300 ${
                  isOpen ? "shadow-md" : "hover:shadow-md"
                }`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                  onClick={() => handleAccordionToggle(index)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-on-surface font-headline">{item.company}</h3>
                    <p className="text-secondary font-medium font-body">{item.role}</p>
                  </div>
                  <ChevronDown
                    className={`text-on-surface-variant transition-transform duration-300 w-5 h-5 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-8 pb-8 pt-2">
                    <ul className="list-disc pl-5 space-y-2.5 text-on-surface-variant leading-relaxed font-body">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-surface-container-lowest py-24 border-y border-outline-variant/20" id="portfolio">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-on-surface text-3xl font-bold mb-4 font-headline">Analytics &amp; Solutions</h2>
              <p className="text-on-surface-variant max-w-xl font-body">
                A selection of technical projects spanning AI, full-stack web, and safety systems.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-secondary font-semibold flex items-center gap-1.5 hover:underline text-sm font-label"
            >
              All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col gap-4 group cursor-pointer">
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={project.title}
                    src={project.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-1.5 font-label text-sm">
                      {project.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface font-headline">{project.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-1 font-body leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Sandbox */}
      <section className="py-24 max-w-[1280px] mx-auto px-4 md:px-10" id="gallery">
        <div className="text-center mb-16">
          <h2 className="text-on-surface text-3xl font-bold mb-4 font-headline">Creative Perspective: A Visual Sandbox</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
            Capturing the world through the lens, exploring light, geometry, and urban life.
          </p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {["All", "Automotive", "Street", "Portrait"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePhotoCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-sm font-semibold transition-colors font-label cursor-pointer ${
                  activePhotoCategory === cat
                    ? "bg-secondary border-secondary text-on-secondary"
                    : "border-outline text-on-surface-variant hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => handlePhotoClick(photo)}
              className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl group bg-surface-container border border-outline-variant/20"
            >
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                alt={photo.alt}
                src={photo.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium font-label">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4 font-label text-sm"
          >
            View Detailed Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stack & Education */}
      <section className="bg-surface-container-low py-24 border-t border-outline-variant/20" id="stack">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-on-surface text-3xl font-bold mb-10 font-headline">Technical Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { name: "React Native", icon: Code2 },
                { name: "FastAPI", icon: Cloud },
                { name: "SQL", icon: Database },
                { name: "Python", icon: Terminal },
                { name: "Power BI", icon: LineChart },
                { name: "Lightroom", icon: Camera },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-surface p-4 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-sm hover:border-secondary transition-all"
                >
                  <tech.icon className="text-secondary w-8 h-8 mb-2" />
                  <span className="font-bold text-on-surface font-label text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-on-surface text-3xl font-bold mb-10 font-headline">Education</h2>
            <div className="space-y-6">
              <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-16 h-16 text-on-surface" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 font-headline">Universiti Teknologi PETRONAS</h3>
                <p className="text-secondary font-semibold mb-2 font-body text-sm">Bachelor of Information Systems (Hons)</p>
                <p className="text-on-surface-variant font-body text-xs mb-4">Major: Big Data Analytics | Minor: Financial Management</p>
                <div className="flex flex-col gap-3 text-on-surface-variant font-body text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2023 – Apr 2026</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>
                      <strong>Coursework:</strong> Data Science, Data Mining, Machine Learning, Web App &amp; Integrative Programming, Business Intelligence, Data Visualisation.
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-16 h-16 text-on-surface" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 font-headline">Universiti Tenaga Nasional (UNITEN)</h3>
                <p className="text-secondary font-semibold mb-2 font-body text-sm">Foundation in Computer Science</p>
                <p className="text-on-surface-variant font-body text-xs mb-4">CGPA: 3.44</p>
                <div className="flex flex-col gap-3 text-on-surface-variant font-body text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>June 2020 – June 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Dean's List, Trimester 2, Academic Year 2020/2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-24" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-on-surface text-4xl font-black mb-6 font-headline">Let's Connect</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed font-body">
              Whether you're looking for a data-driven business analyst or a creative eye for your next visual project, I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="space-y-6">
              {[
                { label: "Email", val: "farhannuriman123@gmail.com", icon: Mail },
                { label: "Location", val: "Shah Alam, Selangor, Malaysia", icon: MapPin },
                { label: "Phone", val: "(+60) 19-711 6899", icon: Phone },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium font-label">{info.label}</p>
                    <p className="text-lg font-bold font-body">{info.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface border border-outline-variant/30 p-8 md:p-10 rounded-2xl shadow-sm">
            <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface font-label">Full Name</label>
                  <input
                    required
                    name="name"
                    className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface font-label">Email Address</label>
                  <input
                    required
                    name="email"
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
                  name="subject"
                  className="bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-secondary text-on-surface p-3 font-body text-sm"
                  placeholder="How can I help?"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-on-surface font-label">Message</label>
                <textarea
                  required
                  name="message"
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
                    : submitStatus === "error"
                    ? "bg-error text-on-error"
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
                {submitStatus === "error" && (
                  <>
                    Failed to Send
                    <X className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-secondary transition-colors cursor-pointer"
            onClick={closeLightbox}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            alt={lightboxCaption}
            src={lightboxImg}
          />
          <div className="mt-6 text-white text-center">
            <p className="text-lg font-medium font-headline">{lightboxCaption}</p>
          </div>
        </div>
      )}
    </main>
  );
}
