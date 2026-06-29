import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

const DYNAMIC_COMPONENT_DATA_CONFIGURATION = true;
// ==========================================
const UPCOMING_EVENTS = [];

const PAST_EVENTS = [
  {
    id: "p1",
    title: "Second Governing Body Meeting",
    img: "gbm.webp",
    desc: "Professor AR Harish, based on the consent of the members, took the chair of the meeting to guide performance tracks.",
  },
  {
    id: "p2",
    title: "Cohort Launch Orientation Ceremony",
    img: "cohort_launch.webp",
    desc: "We hosted our 2nd orientation ceremony of AIIDE CoE to provide deep structural details regarding the acceleration program pipeline.",
  },
  {
    id: "p3",
    title: "Mock Pitch Session by AIIDE CoE",
    img: "mock_pitch_session.webp",
    desc: "Founders rehearsed pitching structural models, building vital enterprise resilience and sharpening validation narratives before board reviews.",
  },
  {
    id: "p4",
    title: "UP Government Start-up Meeting",
    img: "up_government_incubation_meeting.webp",
    desc: "Our implementation teams connected directly with executive bodies of the UP government to parse operational insight layers.",
  },
  {
    id: "p5",
    title: "Virtual Meet with Microsoft",
    img: "microsoft.webp",
    desc: "An enterprise-grade online workshop mapping architecture layers and cloud credit structures provisioned directly for active startups.",
  },
  {
    id: "p6",
    title: "Roadshow at ABES EC",
    img: "roadshow_at_ABES.webp",
    desc: "AIIDE CoE deployed a regional awareness session directly inside the ABES Engineering College Campus platform in Ghaziabad.",
  },
  {
    id: "p7",
    title: "Entrepreneurship Skill Development Programme",
    img: "ESDP.webp",
    desc: "Hands-on specialized Artificial Intelligence acceleration training blocks being executed smoothly inside the IIT Kanpur Noida hub.",
  },
  {
    id: "p8",
    title: "UP Chief Secretary Visit",
    img: "UP_CHIEF_SECERTARY.webp",
    desc: "The Hon'ble Chief Secretary of Uttar Pradesh, Shri Durga Shankar Mishra, IAS, visited AIIDE CoE to evaluate Cohort 1 operations.",
  },
  {
    id: "p9",
    title: "Strategy Formulation with Start-ups",
    img: "STRATEGY_FORMULATION.webp",
    desc: "A collaborative corporate sprint built specifically to help structural business leads secure reliable growth milestones.",
  },
  {
    id: "p10",
    title: "MoU between Microsoft & AIIDE CoE",
    img: "MOU_SIGN.webp",
    desc: "SIIC IIT Kanpur executed an official enterprise roadmap pact on November 15, 2022, alongside executive members of Microsoft India.",
  },
  {
    id: "p11",
    title: "Online Session with IMS College",
    img: "IMS.webp",
    desc: "An educational integration briefing showing institutional engineering leads the full support apparatus of our incubator hub.",
  },
  {
    id: "p12",
    title: "Uttar Pradesh Global Investors Summit 2023",
    img: "UPGIS.webp",
    desc: "The specialized AIIDE CoE command unit actively deployed showcase configurations during the high-profile state summit event.",
  },
  {
    id: "p13",
    title: "Website Launch of AIIDE-CoE by Hon'ble Deputy CM",
    img: "pasteventimg.png",
    desc: "Inaugurated by Hon'ble Deputy Chief Minister of Uttar Pradesh, Dr. Dinesh Sharma, establishing our digital cornerstone.",
    link: "/news-events/website-launch",
  },
  {
    id: "p14",
    title: "Webinar: Future of AI in Logistics & Supply Chain",
    img: "eventfirst.png",
    desc: "An expert panel tracking smart operations, predictive path automation, and edge delivery algorithms for logistics networks.",
    link: "/news-events/healthcare-webinar",
  },
  {
    id: "p15",
    title: "Webinar: Advanced AI Architectures in Healthcare",
    img: "imgthirdeventnew.png",
    desc: "Exploring precision bio-informatics telemetry modeling, medical imaging patterns, and remote clinical assistant models.",
    link: "/news-events/healthcare-webinar",
  },
  {
    id: "p16",
    title: "Webinar: Accelerating Data & AI Solutions",
    img: "WEBSITELAUNCH.png",
    desc: "Deep-dive workshops focusing on modern ingestion structures and optimizations scaling custom enterprise intelligence data nodes.",
    link: "/news-events/data-ai-webinar",
  },
];

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="bg-transparent min-h-screen pb-20 relative overflow-hidden text-slate-800">
    
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none text-slate-500 font-bold text-[14vw] flex items-center justify-center rotate-[-12deg] z-0">
        AIIDE CoE
      </div>

      <Header
        title="News & Events"
        subtitle="Stay updated with upcoming summits, ecosystem announcements, and past milestones at AIIDE CoE"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mt-5">
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white border border-slate-200 rounded-2xl p-2.5 flex flex-row md:flex-col gap-1.5 sticky top-28 shadow-sm">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`flex-1 md:w-full text-center md:text-left px-5 py-3.5 rounded-xl text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeTab === "upcoming"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`flex-1 md:w-full text-center md:text-left px-5 py-3.5 rounded-xl text-xs lg:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeTab === "past"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === "upcoming" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <h2 className="text-xl font-bold tracking-wide text-slate-900">
                    Live & Upcoming Sessions
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {UPCOMING_EVENTS.map((event) => (
                    <div
                      key={event.id}
                      className="group bg-white border border-slate-200 hover:border-blue-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      <div className="w-full aspect-[16/9] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                        <img
                          src={`/NewsEvents${event.img.includes("/") ? event.img : `events/${event.img}`}`}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          loading="lazy"
                        />
                        {event.type && (
                          <span className="absolute top-4 right-4 bg-rose-600 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded shadow-sm uppercase">
                            {event.type}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                            {event.desc}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100">
                          <Link
                            to={event.link}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group/link"
                          >
                            <span>
                              {event.type === "PDF"
                                ? "Download Resource"
                                : "View Event Details"}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5 transform group-hover/link:translate-x-0.5 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-white/40 border border-dashed border-slate-300 rounded-2xl p-8 flex items-center justify-center min-h-[340px] hover:border-blue-400 hover:bg-white/60 transition-all duration-300 md:col-span-1">
                    <div className="text-center">
                      <span className="text-slate-400 font-bold text-xs lg:text-sm tracking-widest uppercase bg-slate-100/80 px-5 py-2.5 rounded-xl border border-slate-200/60 shadow-inner select-none">
                        Events Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "past" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <h2 className="text-xl font-bold tracking-wide text-slate-900">
                    Archived Milestones & Records
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PAST_EVENTS.map((event) => (
                    <div
                      key={event.id}
                      className="group bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      <div className="w-full aspect-[16/10] bg-slate-50 overflow-hidden border-b border-slate-100 relative">
                        <img
                          src={
                            event.img.startsWith("/") ||
                            event.img.startsWith("http")
                              ? event.img
                              : `/NewsEvents/${event.img}`
                          }
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentNode.innerHTML = `<div class="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-semibold tracking-wider uppercase px-4 text-center">AIIDE Ecosystem Record</div>`;
                          }}
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-1.5 group-hover:text-blue-600 transition-colors">
                            {event.link ? (
                              <Link
                                to={event.link}
                                className="hover:underline text-decoration-none text-inherit"
                              >
                                {event.title}
                              </Link>
                            ) : (
                              event.title
                            )}
                          </h4>
                          {event.desc && (
                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                              {event.desc}
                            </p>
                          )}
                        </div>

                        {event.link && (
                          <div className="pt-3 mt-3 border-t border-slate-100">
                            <Link
                              to={event.link}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-600 hover:text-cyan-700"
                            >
                              <span>Read Full Detail</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsEvents;
