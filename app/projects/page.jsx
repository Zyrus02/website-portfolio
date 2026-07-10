import { LineChart, Terminal, Eye, ArrowRight, Code2 } from "lucide-react";

const IconMap = {
  analytics: LineChart,
  terminal: Terminal,
  visibility: Eye,
  arrow_forward: ArrowRight,
  code: Code2,
};

export default function Projects() {
  const projects = [
    {
      id: "travel",
      title: "AI Travel Planner",
      desc: "Developed a mobile app that personalises Malaysian travel planning with cultural inclusivity and real-time adaptability, integrating the Gemini 2.5 Flash API and OSM Overpass API to aggregate live Points of Interest and dynamically re-plan itineraries via natural language.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVIx6y4ViX8v3ILSozSWBkiR_Luy4q0-2pKBL1SbfAqdv1Nzre-JNk-uRFvrEukPWipljta-8kYwUWTv3pJiqOpv_PFoVxRROQf-dR8wAvwMaGUQ3Ato11d01Ddiag28DsqJ_3SI11yA2hJoXqt4jUg-JGr2p7KL-ZevVgA2xG48eio9lb9NIDKHVU531xDM_YcsE1j3EXDekZ7wvdC1bkYjlSwjVVfrRYDingCclTh-Iz_HHm6dv",
      tags: ["TypeScript", "React Native", "Gemini API", "FastAPI"],
      span: "col-span-12 lg:col-span-8",
      link: "https://github.com/Zyrus02",
      layout: "flex-col md:flex-row"
    },
    {
      id: "stats",
      type: "stats",
      title: "Technical Rigor",
      desc: "Focusing on low-latency data processing and robust architectural patterns across all engineering domains.",
      icon: "analytics",
      span: "col-span-12 md:col-span-6 lg:col-span-4",
      bgColor: "bg-secondary text-on-secondary",
    },
    {
      id: "web-portfolio",
      title: "Web Development Portfolio",
      desc: "Built a personal portfolio website featuring a contact form and a database-backed sign-in system, using PHP to validate submitted credentials against stored user records.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7WJqH6cxRIkeq7WPRNZk_IFhpCGhQ_tgnOvL7Ux-rCWu3sTdz9k7ie_GbaljFVTX8HXfCZnI2_71uqv-r1njype16pxim3vvR3mp4VDgBmm41EcAl7d7o1cdnIoBJS1RhGqzkTAlW5ejFhcWf7jsp1Luz_vQ6BykMDBWcBOsOdAqCilfo2fBnNET1hEQvbw8aj0T2tAFr5W1wUIwvHxT_GpVpiGexq51rLUb-VE64SFInAQyBcwX2",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      span: "col-span-12 md:col-span-6 lg:col-span-4",
      link: "https://github.com/Zyrus02",
      extra: "Currently under development: a new portfolio website built with Next.js, Tailwind CSS, and TypeScript.",
      extraIcon: "code"
    },
    {
      id: "child",
      title: "Child Presence Detection",
      desc: "Designed a child-presence detection concept aligned to the NCAP 2.0 requirement using radar sensors and an Aurix SoC to strengthen in-vehicle safety and minimise heatstroke risk.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzmoaOq9sYZwFUvvkC9xTfeWDtwjhTkERXNzHTEEe2O4WYhBTc-XyYcCH_SSmB6VDB_GcVHiVH1I2-Kv8wVpjM25Gsn0vfpAgUFEe7_dPsYPJKJmJdSIiG3jAFcrLpxkMWEi4sv_7kDB-XXmsxb2M4Jlu91nVvx7FIffYYpK5GBfF4_nRgo5WeNqqQZsMlj9aQ4t89iZGLGSAsdg3izG3MskPMIFrnG9DDZhoz52b6qArKXrcFLdpo",
      tags: ["C++", "Radar Sensors", "Aurix SoC"],
      span: "col-span-12 lg:col-span-8",
      link: "https://github.com/Zyrus02",
      layout: "flex-col-reverse md:flex-row",
      buttons: [
        { text: "Documentation", style: "primary" },
        { icon: "terminal", style: "icon" }
      ]
    }
  ];

  return (
    <main className="pt-32 pb-24 px-4 md:px-10 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="font-headline text-headline-lg text-on-surface mb-4 tracking-tight font-black">
          Technical Projects &amp; Analytics
        </h1>
        <p className="text-on-surface-variant max-w-2xl font-body text-body-md leading-relaxed">
          A collection of full-stack engineering, embedded applications, and custom analytical systems built with precision.
        </p>
      </header>

      {/* Projects Bento Grid */}
      <div className="bento-grid">
        {projects.map((proj) => {
          if (proj.type === "stats") {
            return (
              <div
                key={proj.id}
                className={`${proj.span} rounded-xl p-8 flex flex-col justify-center items-center text-center ${proj.bgColor} border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                {(() => {
                  const Icon = IconMap[proj.icon];
                  return Icon ? <Icon className="w-12 h-12 mb-4" /> : null;
                })()}
                <h3 className="font-headline text-2xl font-bold mb-2">{proj.title}</h3>
                <p className="font-body text-sm opacity-90 leading-relaxed max-w-xs">{proj.desc}</p>
              </div>
            );
          }

          const isLarge = proj.span.includes("col-span-8") || proj.span.includes("col-span-12");

          return (
            <div
              key={proj.id}
              className={`${proj.span} glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden border border-outline-variant/30 ${
                isLarge ? "lg:flex-row gap-8" : "gap-6"
              }`}
            >
              {/* Image element (Left/Right for large projects, Top for small card) */}
              {isLarge && proj.layout?.startsWith("flex-col-reverse") ? (
                <div className="flex-1 relative min-h-[250px] bg-surface-container rounded-lg overflow-hidden border border-outline-variant/20">
                  <img className="absolute inset-0 w-full h-full object-cover" alt={proj.title} src={proj.img} />
                </div>
              ) : null}

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">{proj.title}</h2>
                  <p className="text-on-surface-variant mb-6 font-body text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                {proj.buttons ? (
                  <div className="flex items-center gap-4">
                    {proj.buttons.map((btn, idx) =>
                      btn.style === "primary" ? (
                        <button
                          key={idx}
                          className="px-6 py-2.5 bg-secondary text-on-secondary rounded-lg font-label text-xs font-semibold cursor-pointer hover:brightness-110 active:scale-95 transition-all"
                        >
                          {btn.text}
                        </button>
                      ) : (
                        <button
                          key={idx}
                          className="p-2 text-on-surface-variant hover:text-secondary hover:bg-surface-container rounded-full transition-colors cursor-pointer flex items-center justify-center"
                          aria-label={btn.icon}
                        >
                          {(() => {
                            const Icon = IconMap[btn.icon];
                            return Icon ? <Icon className="w-5 h-5" /> : null;
                          })()}
                        </button>
                      )
                    )}
                  </div>
                ) : proj.extra ? (
                  <div className="pt-4 border-t border-outline-variant/20">
                    <span className="text-xs font-label text-on-surface-variant flex items-center gap-1.5">
                      {(() => {
                        const Icon = IconMap[proj.extraIcon];
                        return Icon ? <Icon className="w-4 h-4" /> : null;
                      })()}
                      {proj.extra}
                    </span>
                  </div>
                ) : (
                  <a
                    className="inline-flex items-center gap-2 text-secondary font-label text-xs font-bold hover:underline"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project Code
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Show image on right for default large layouts, or top for small card */}
              {(!isLarge || proj.layout?.startsWith("flex-col")) && !proj.layout?.startsWith("flex-col-reverse") ? (
                <div
                  className={`relative bg-surface-container rounded-lg overflow-hidden border border-outline-variant/20 ${
                    isLarge ? "flex-1 min-h-[250px]" : "h-48 w-full order-first mb-2"
                  }`}
                >
                  <img className="absolute inset-0 w-full h-full object-cover" alt={proj.title} src={proj.img} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </main>
  );
}
