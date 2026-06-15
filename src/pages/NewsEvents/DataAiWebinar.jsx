import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const DataAiWebinar = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20 relative overflow-hidden text-slate-800">
 
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none text-slate-500 font-bold text-[14vw] flex items-center justify-center rotate-[-12deg] z-0">
        AIIDE CoE
      </div>

      {/* Header Context Banner */}
      <Header
        title="Webinar Archive"
        subtitle="Advanced Knowledge Sharing & Industry Telemetry Portals"
        image="/aiide_banner.webp"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Navigation Breadcrumb Context Element */}
        <div className="mb-8">
          <Link
            to="/news-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to News & Events</span>
          </Link>
        </div>

        {/* Primary Event Layout Shell */}
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden p-6 sm:p-10">
          
          {/* Section Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              AIIDE-CoE informative webinar on the future of Accelerating Data &amp; AI Solutions
            </h2>
          </div>

          {/* Description Block Layout Container */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-10">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-center font-medium">
              AIIDE-CoE is bringing you an informative webinar on the future of Accelerating Data &amp; AI Solutions. 
              <span className="block mt-4 text-blue-600 font-bold">
                Mr. Girish Tonse (Head of Software — Continental)
              </span> 
              is going to take on as a speaker and throw light upon the topic. The session will outline around Accelerating Data &amp; AI Solutions and what opportunities it holds for the industry.
            </p>
          </div>

          {/* Graphical Poster Core Asset Container */}
          <div className="flex justify-center items-center">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-inner max-w-sm w-full group">
              <img
                src="/NewsEvents/WEBSITELAUNCH.png"
                alt="Accelerating Data and AI Solutions Webinar Poster"
                className="w-full h-auto rounded-xl object-contain mx-auto shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `
                    <div class="aspect-[4/5] flex flex-col items-center justify-center text-center p-6 bg-slate-100 text-slate-400 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="text-xs font-bold tracking-wider uppercase">Webinar Session Graphic</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default DataAiWebinar;