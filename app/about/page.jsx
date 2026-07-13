"use client";

import {
  Award,
  BookOpen,
  Camera,
  Compass,
  Cpu,
  GraduationCap,
  Sparkles,
  Tent,
  Activity,
  Coins,
  MapPin,
  Calendar,
  Languages,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      status: "Completed",
      progress: 100,
      courses: "9/9 courses completed",
      color: "bg-success/10 text-success border-success/20",
    },
    {
      title: "Google AI Professional Certificate",
      issuer: "Coursera",
      status: "In Progress",
      progress: 44, // 4/9 courses completed
      courses: "4/9 courses completed",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
  ];

  const involvements = [
    {
      program: "K-Youth Development Program (AI Development)",
      role: "AI Development Capstone",
      desc: "Applied prompt engineering and Responsible AI frameworks to design enterprise-grade LLM interactions, and architected an AI-driven web platform during a 48-hour capstone sprint using Google Stitch, Manus, and Jotform.",
      icon: Sparkles,
      period: "2026",
    },
    {
      program: "CONVOFEST",
      role: "Business & Merchandise Committee",
      desc: "Coordinated artisan and vendor recruitment, generating RM100,000 in vendor-registration revenue, and directed merchandise operations driving an estimated RM30,000 in additional revenue.",
      icon: Coins,
      period: "2024",
    },
    {
      program: "Zoolander Venture (MPU4 Project)",
      role: "Head of Business",
      desc: "Led a team to organise three Car Boot fundraising events, raising ~RM5,000 in vendor registration and ensuring full compliance with university regulations.",
      icon: Compass,
      period: "2024",
    },
    {
      program: "STEMX",
      role: "Event Management & Media Committee",
      desc: "Facilitated 50 primary-school students in STEM outreach and led event media, banner, and photography deliverables.",
      icon: Cpu,
      period: "2024",
    },
  ];

  const hobbies = [
    {
      name: "Travelling",
      desc: "Exploring new environments, diverse cultures, and geographic landscapes.",
      icon: Compass,
    },
    {
      name: "Camping",
      desc: "Reconnecting with nature, exploring remote trails, and outdoor living.",
      icon: Tent,
    },
    {
      name: "Sports & Fitness",
      desc: "Staying active, developing stamina, and promoting active team sports.",
      icon: Activity,
    },
    {
      name: "Photography",
      desc: "Capturing visual stories through street, automotive, and portrait perspectives.",
      icon: Camera,
    },
  ];

  const languages = [
    { name: "Malay", level: "Native Proficiency" },
    { name: "English", level: "Fluent Proficiency" },
  ];

  return (
    <main className="pt-32 pb-24 px-4 md:px-10 max-w-5xl mx-auto">
      {/* Header Bio Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Introduction</span>
              <h1 className="font-headline text-4xl md:text-5xl font-black text-on-surface mt-2">
                About Me
              </h1>
            </div>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed text-justify">
              Farhan Nur Iman Bin Shamrulismawi | 24 Aug 2002 (24 years old)
            </p>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed text-justify">
              Information Systems graduate (Big Data Analytics) with hands-on experience delivering business intelligence solutions across corporate marketing, sales, and engineering functions. Very passionate about data analytics, data visualisation, and software development. 
            </p>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed text-justify">
              Technically versatile across Power BI, DAX, Power Query, SQL, Python, and Tableau. Seeking a Junior Data Analyst or Business Analyst role where data-driven analysis directly informs business strategy and organisational performance. Interested to transition into a Software Developer role with a focus on web development, UI/UX Designer and application development.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-24 h-24 text-on-surface" />
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface">Education Summary</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-label text-on-surface-variant">Universiti Teknologi PETRONAS</p>
                <p className="font-headline text-sm font-bold text-on-surface">Bachelor of Information Systems (Hons)</p>
                <p className="text-[11px] font-body text-secondary mt-0.5">Jan 2023 – Apr 2026</p>
              </div>
              <div className="border-t border-outline-variant/20 pt-4">
                <p className="text-xs font-label text-on-surface-variant">Universiti Tenaga Nasional (UNITEN)</p>
                <p className="font-headline text-sm font-bold text-on-surface">Foundation in Computer Science</p>
                <p className="text-[11px] font-body text-secondary mt-0.5">June 2020 – June 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split: Hobbies & Certifications */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Certifications Card */}
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold text-on-surface flex items-center gap-3">
            <Award className="text-secondary w-6 h-6" />
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="font-headline text-base font-bold text-on-surface">{cert.title}</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold font-label rounded-full border ${cert.color}`}>
                    {cert.status}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-mono mb-1.5 text-on-surface-variant">
                    <span>{cert.courses}</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary transition-all duration-500"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Card */}
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold text-on-surface flex items-center gap-3">
            <Compass className="text-secondary w-6 h-6" />
            Hobbies &amp; Personal Interests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-start hover:border-secondary transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                  <hobby.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-sm font-bold text-on-surface mb-1">{hobby.name}</h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Involvement Section */}
      <section className="mb-20 space-y-6">
        <h2 className="font-headline text-2xl font-bold text-on-surface flex items-center gap-3">
          <Sparkles className="text-secondary w-6 h-6" />
          Leadership &amp; Involvement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {involvements.map((inv) => (
            <div
              key={inv.program}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                    <inv.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 bg-surface-container rounded-md text-on-surface-variant font-medium">
                    {inv.period}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">{inv.program}</h3>
                <p className="text-xs font-label text-secondary font-semibold mt-1 mb-3">{inv.role}</p>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{inv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Skills Banner */}
      <section className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-secondary/10 text-secondary">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold text-on-surface">Language Proficiencies</h2>
              <p className="font-body text-xs text-on-surface-variant mt-1">Written and spoken communication skills.</p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-6 py-3 flex items-center gap-3"
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">{lang.name}</p>
                  <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
