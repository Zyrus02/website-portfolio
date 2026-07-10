"use client";

import { useState } from "react";
import { ChevronDown, LineChart, LayoutDashboard, BarChart3, Users } from "lucide-react";

const IconMap = {
  analytics: LineChart,
  dashboard: LayoutDashboard,
  bar_chart: BarChart3,
  groups: Users,
};

export default function ProfessionalJourney() {
  const [expandedRole, setExpandedRole] = useState(null);

  const timelineRoles = [
    {
      id: "mmc",
      company: "MMC Oil & Gas Engineering",
      title: "Trainee Executive - Data Analytics",
      period: "Present",
      badge: "Trainee Executive",
      desc: "Focused on optimizing operational efficiency through manhour allocation models and performance tracking systems.",
      color: "bg-secondary",
      badgeColor: "text-primary bg-primary-container/10",
      achievements: [
        {
          title: "Manhour Allocation Model",
          icon: "analytics",
          desc: "Developed a sophisticated manhour allocation model to forecast and track engineering resources across multi-million dollar projects, reducing resource overhead by 15%."
        },
        {
          title: "Real-time Performance Metrics",
          icon: "dashboard",
          desc: "Implemented a standardized reporting framework to bridge communication between project leads and executive management."
        }
      ],
      bullets: [
        "Analysed workforce manhour allocation across multiple concurrent engineering projects, improving resource visibility and enabling data-driven project planning and headcount forecasting.",
        "Developed an interactive resource-tracking model that aggregates multi-sheet engineering data to dynamically filter and display key metrics — project descriptions, document types, and position-specific manhour allocations — based on user-defined criteria.",
        "Built interactive Power BI dashboards with custom DAX measures and automated reporting workflows, significantly reducing manual data processing while improving reporting accuracy and executive decision-making.",
        "Recognised by management for delivering a solution that simplified complex manual workflows and improved resource planning and headcount visibility."
      ],
      tags: ["Engineering Operations", "Resource Modeling"]
    },
    {
      id: "petronas",
      company: "PETRONAS Chemical Group",
      title: "Marketing & Sales Capability Intern",
      period: "Internship",
      badge: "Marketing & Sales Capability Intern",
      desc: "Spearheaded data visualization initiatives and competency framework mapping for the regional sales team.",
      color: "bg-secondary-container",
      badgeColor: "text-primary bg-primary-container/10",
      achievements: [
        {
          title: "Power BI Dashboard Ecosystem",
          icon: "bar_chart",
          desc: "Designed and launched interactive Power BI dashboards that synthesized global market trends, enabling the marketing team to pivot strategies 20% faster."
        },
        {
          title: "Competency Mapping",
          icon: "groups",
          desc: "Developed a comprehensive competency matrix for the sales force, identifying critical skill gaps and informing the Q3/Q4 training roadmap."
        }
      ],
      bullets: [
        "Delivered monthly analytics on 1M+ records and enhanced a 10-page Power BI dashboard serving 325+ users across 10 departments, consolidating multiple data sources through Power Query and DAX.",
        "Analysed training-module completion across departments, surfacing learning-hour trends and underperformance against a 52-hour annual target while flagging anomalies and performance deviations.",
        "Conducted On-Job Training (OJT) competency-gap mapping with department heads and Commercial Transformation, aligning 378 line items across 298 unique OJT tasks with current business needs.",
        "Produced supporting documentation and process materials, demonstrating initiative across multiple professional-development workstreams."
      ],
      tags: ["Market Intelligence", "Power BI", "Capability Development"]
    }
  ];

  const handleRoleToggle = (roleId) => {
    if (expandedRole === roleId) {
      setExpandedRole(null);
    } else {
      setExpandedRole(roleId);
    }
  };

  return (
    <main className="pt-32 pb-24 px-4 md:px-10 max-w-5xl mx-auto">
      {/* Header Section */}
      <section className="mb-16 text-center">
        <h1 className="font-headline text-headline-lg text-on-surface mb-4 font-black">Professional Journey</h1>
        <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A trajectory defined by precision, data-driven decision making, and strategic execution within the energy and chemicals sector.
        </p>
      </section>

      {/* Interactive Vertical Timeline */}
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2"></div>
        
        {timelineRoles.map((role, idx) => {
          const isOpen = expandedRole === role.id;
          const isEven = idx % 2 === 0;

          return (
            <div key={role.id} className="relative mb-16 md:mb-24 group">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                {/* Date (Left Side for Even items on Desktop) */}
                <div className={`hidden md:flex flex-1 justify-end pr-12 text-right ${isEven ? "" : "order-3 text-left justify-start pl-12"}`}>
                  <div>
                    <span className={`font-label text-label-md px-3 py-1 rounded-full ${role.badgeColor}`}>
                      {role.period}
                    </span>
                    <p className="font-headline text-lg font-bold mt-2 text-on-surface">{role.badge}</p>
                  </div>
                </div>

                {/* Marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-sm flex items-center justify-center bg-secondary">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </div>

                {/* Card (Right/Left side) */}
                <div className={`flex-1 pl-12 md:pl-12 w-full ${isEven ? "" : "order-1 pr-12 pl-0 md:text-right"}`}>
                  <div
                    onClick={() => handleRoleToggle(role.id)}
                    className={`bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer text-left ${
                      isOpen ? "shadow-md" : ""
                    }`}
                  >
                    <div className={`flex justify-between items-start mb-4 ${isEven ? "" : "md:flex-row-reverse"}`}>
                      <div>
                        <h3 className="font-headline text-xl font-bold text-on-surface">{role.company}</h3>
                        <p className="font-label text-sm text-secondary font-semibold">{role.title}</p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {role.desc}
                    </p>

                    {/* Expandable Content */}
                    <div className={`space-y-6 transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}>
                      {/* Achievements */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">Key Accomplishments</h4>
                        {role.achievements.map((ach) => {
                          const IconComponent = IconMap[ach.icon];
                          return (
                            <div key={ach.title} className="flex gap-4 items-start">
                              {IconComponent && <IconComponent className="text-secondary w-5 h-5 mt-0.5 shrink-0" />}
                              <div>
                                <p className="font-label text-sm font-bold text-on-surface">{ach.title}</p>
                                <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">{ach.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Responsibilities */}
                      <div className="border-t border-outline-variant/20 pt-4">
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Responsibilities &amp; Work</h4>
                        <ul className="list-disc pl-5 space-y-2 text-on-surface-variant font-body text-sm leading-relaxed">
                          {role.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className={`mt-6 flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
                      {role.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-surface-container text-on-surface-variant font-label text-[11px] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Period Indicator (Visible only on mobile) */}
                <div className="md:hidden pl-12 mt-2">
                  <span className={`font-label text-xs px-2.5 py-0.5 rounded-full ${role.badgeColor}`}>
                    {role.period}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategic Visualizations Section */}
      <section className="mt-24">
        <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Strategic Visualizations</h2>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                My approach combines rigorous analytical engineering with clean visual storytelling. I believe data is only as valuable as the decisions it empowers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                  <p className="font-headline text-3xl font-bold text-secondary">95%</p>
                  <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">Report Accuracy</p>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                  <p className="font-headline text-3xl font-bold text-secondary">12+</p>
                  <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">Custom Dashboards</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <img
                className="w-full h-full object-cover"
                alt="Strategic workspaces"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUKmaKAc_neQ8vGCS2EXwyEjnJf84d9oXpu9z9aZ1mPT2QBD4XVjIqCQ59uvgLnoXa1ABniSU7tMBPlAfjCa6KV_AhvbbfTuL2igMpwp7h00vYiltXprg-J76RLj75PPU0soOsw91M5iEwjCUhJZArxf3BMnjbXzQhFniYKY7eher14SK7en2mIV7JOQfnUvfyPOYIDViEFKT4aD6SVWwMfN6cwNWTisXcdi7hNxTf-30QCrNROmCS"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
