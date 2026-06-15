import React, { useState } from 'react';
import Header from '../components/Header';


const FACILITIES_CARDS = [
  {
    title: "Support for Startups",
    image: "knowledgeCenter/man.png",
    modalId: "startup",
    description: "Incubation support, business infrastructure validation, and acceleration programs targeting early-stage ventures."
  },
  {
    title: "Training Sessions",
    image: "knowledgeCenter/management.png",
    modalId: "trainings",
    description: "Hands-on academic boot camps, engineering workshops, and deep-tech executive transformation programming."
  },
  {
    title: "Pool of Experts",
    image: "knowledgeCenter/online-meeting.png",
    modalId: "PoolofExperts",
    description: "Direct connection interface targeting industry leaders, research scientists, and technology consultants."
  },
  {
    title: "Mentorship Support",
    image: "knowledgeCenter/help.png",
    modalId: "MentorsSupport",
    description: "Dedicated strategic guidance blueprints and technical architecture support systems."
  },
  {
    title: "Investors Connect",
    image: "knowledgeCenter/investing.png",
    modalId: "InvestorsConnect",
    description: "Venture capital networks, seed-funding options, and angel syndication pitch funnels."
  },
  {
    title: "Pitching Sessions",
    image: "knowledgeCenter/meeting.png",
    modalId: "PitchingSessions",
    description: "Demo day presentation schedules, slide-deck critiques, and live capital selection boards."
  }
];

const Facilities = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-transparent min-h-screen font-sans selection:bg-blue-500 selection:text-white pb-20">
      
      {/* Header Banner Section */}
      <Header
        title="Our Facilities"
        subtitle="Explore incubation ecosystems, acceleration pipelines, and advisory provisions"
        image="/aiide_banner.webp"
      />

      {/* Main Content Grid Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        
        {/* Responsive Flex/Grid Track Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {FACILITIES_CARDS.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveModal(card)}
              className="bg-[#012640] rounded-2xl shadow-lg border border-slate-800 p-6 flex flex-col items-center justify-center text-center h-48 transform hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 group cursor-pointer select-none"
            >
              {/* Graphic Logo Image Node Container */}
              <div className="w-14 h-14 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={card.image} 
                  alt={`${card.title} Icon illustration`} 
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100" 
                />
              </div>

              {/* Action Headline Header Label */}
              <h6 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug max-w-[160px] group-hover:text-blue-400 transition-colors duration-200">
                {card.title}
              </h6>
            </div>
          ))}
        </div>
      </main>

      {/* ==========================================
          INTERACTIVE FALLBACK DIALOG POPUP MODAL SCREEN
         ========================================== */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-[#012640] border border-slate-800 rounded-3xl w-full max-w-md p-6 relative shadow-2xl text-center transform scale-100 transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal contents
          >
            {/* Window Dismiss trigger */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold transition duration-200"
              aria-label="Dismiss Facility detail panel view"
            >
              ✕
            </button>

            {/* Display Graphic Node Icon */}
            <div className="w-16 h-16 mx-auto mb-4 mt-2 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center justify-center p-3">
              <img 
                src={activeModal.image} 
                alt="" 
                className="max-w-full max-h-full object-contain brightness-0 invert" 
              />
            </div>

            {/* Headline Title */}
            <h4 className="text-white text-lg font-extrabold uppercase tracking-widest mb-2 px-2">
              {activeModal.title}
            </h4>
            
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full" />

            {/* Context Narrative Block */}
            <p className="text-slate-200 text-sm font-medium leading-relaxed max-w-xs mx-auto">
              {activeModal.description}
            </p>

            {/* Affirmative Confirmation Button item */}
            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold tracking-widest uppercase transition duration-200 shadow-md shadow-blue-900/20"
            >
              Close Information View
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Facilities;