import React from "react";
import Header from "../components/Header"; // Reusing your layout header layout

// ==========================================
// RESOURCES DATA MATRIX (Cloud Credits & Developer Tools)
// ==========================================
const RESOURCES_DATA = [
  {
    provider: "AWS",
    type: "Cloud Credits",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
  {
    provider: "Google Cloud Startup Program",
    type: "Cloud Credits",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
  {
    provider: "Jetbrains",
    type: "Developer Tools",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
  {
    provider: "CloudQA",
    type: "Developer Tools",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
  {
    provider: "Bugsee",
    type: "Developer Tools",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
  {
    provider: "Jile",
    type: "Developer Tools",
    logo: "knowledgeCenter/FICCI_logo.webp",
  },
];

const Resources = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      {/* Header Banner Section */}
      <Header
        title="Ecosystem Resources"
        subtitle="Exclusive cloud architecture credits and premium developer tools for our cohorts"
        image="/aiide_banner.webp"
      />

      {/* Main Content Grid Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
        {/* Responsive CSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RESOURCES_DATA.map((item, index) => (
            /* Clean Card Container with Hover lift */
            <div
              key={index}
              className="bg-slate-100 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500 group"
            >
              {/* Logo Frame - Transparent or light background */}
              <div className="w-40 h-40 flex items-center justify-center mb-6 bg-white/60 backdrop-blur-xs rounded-xl p-4 border border-slate-200 transform group-hover:scale-102 transition-transform duration-300">
                <img
                  src={item.logo}
                  className="max-w-full max-h-full object-contain"
                  alt={`${item.provider} Identity`}
                  loading="lazy"
                />
              </div>

              {/* Content Texts Blocks - Flipped to dark text so it's readable */}
              <div className="flex flex-col flex-grow justify-center mt-2">
                <h4 className="text-slate-900 text-base font-bold tracking-wide mb-1.5 min-h-[48px] flex items-center justify-center group-hover:text-blue-600 transition-colors duration-200">
                  {item.provider}
                </h4>

                <h5 className="text-blue-600 text-xs font-semibold tracking-wider uppercase bg-blue-100 border border-blue-200 rounded-full px-3 py-1 inline-block">
                  {item.type}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;
