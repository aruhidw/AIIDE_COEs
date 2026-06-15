import React, { useState } from 'react';
import Header from '../components/Header';

// ==========================================
// MEET THE COHORT STARTUP DATA ARRAY (With Details & Website Links)
// ==========================================
const COHORT_STARTUPS = [
  { 
    id: 1, 
    img: "agrivijay.webp", 
    alt: "Agrivijay", 
    sector: "AgriTech & Renewable Energy", 
    desc: "Agrivijay works on optimizing decentralized clean-tech equipment allocation and resources for small-scale farmers to boost production efficiency.",
    website: "https://agrivijay.com" 
  },
  { 
    id: 2, 
    img: "blank.webp", 
    alt: "Cohort Startup 2", 
    sector: "To Be Updated", 
    desc: "Information regarding this portfolio placement is currently being compiled and will be updated shortly." 
  },
  { 
    id: 3, 
    img: "astute.webp", 
    alt: "Astute", 
    sector: "Enterprise Software", 
    desc: "Astute provides digital architecture management, automated data compliance systems, and operations scaling assistance across cloud networks.",
    website: "https://astute.in" 
  },
  { 
    id: 4, 
    img: "bhs.webp", 
    alt: "BHS", 
    sector: "Consumer Services & Health", 
    desc: "BHS builds tech-enabled wellness infrastructure ecosystems to integrate personalized predictive lifestyle and structural wellness patterns." 
  },
  { 
    id: 5, 
    img: "fitbuddy.webp", 
    alt: "Fitbuddy", 
    sector: "HealthTech & Fitness", 
    desc: "Fitbuddy provides real-time posture tracking solutions and smart training assistants tailored for remote fitness coaching structures.",
    website: "https://fitbuddy.co" 
  },
  { 
    id: 6, 
    img: "egyanman-tech.webp", 
    alt: "Egyanman Tech", 
    sector: "EdTech", 
    desc: "Egyanman Tech deploys interactive digital content management systems designed to bridge vernacular accessibility challenges for students." 
  },
  { 
    id: 7, 
    img: "fillit.webp", 
    alt: "Fillit", 
    sector: "Logistics & FinTech", 
    desc: "Fillit leverages micro-automation tools to systematically balance and track packaging and transactional workflows inside retail chains." 
  },
  { 
    id: 8, 
    img: "FreelanceTeams-Private-Limited.webp", 
    alt: "Freelance Teams", 
    sector: "Future of Work & HRTech", 
    desc: "FreelanceTeams curates vetted modular squads of remote technical talent, matching them automatically with mid-market enterprise initiatives.",
    website: "https://freelanceteams.com" 
  },
  { 
    id: 9, 
    img: "gigsboard.webp", 
    alt: "Gigsboard", 
    sector: "Project Management Platforms", 
    desc: "Gigsboard offers visibility platforms for distributed projects, allowing companies to accurately evaluate execution metrics across contracts." 
  },
  { 
    id: 10, 
    img: "Intellinext-Innovation-Pvt.-Ltd..webp", 
    alt: "Intellinext", 
    sector: "DeepTech & Industrial IoT", 
    desc: "Intellinext constructs smart automation telemetry overlays intended for manufacturing spaces to drastically scale maintenance operations." 
  },
  { 
    id: 11, 
    img: "LAMARR.webp", 
    alt: "Lamarr", 
    sector: "Next-Gen Retail Fashion", 
    desc: "LAMARR works with adaptive production software designs to mitigate excess overhead material waste margins inside apparel networks." 
  },
  { 
    id: 12, 
    img: "lister.webp", 
    alt: "Lister", 
    sector: "Customer Lifecycle Management", 
    desc: "Lister builds algorithmic pipelines helping consumer-facing organizations streamline hyper-personalized outreach strategies." 
  },
  { 
    id: 13, 
    img: "manodayanam.webp", 
    alt: "Manodayanam", 
    sector: "Mental Health Care", 
    desc: "Manodayanam coordinates contextual self-assessment interfaces and psychological therapy tracking options for users globally." 
  },
  { 
    id: 14, 
    img: "mayamd.webp", 
    alt: "Maya MD", 
    sector: "Healthcare Analytics", 
    desc: "Mayamd specializes in organizing clinic performance diagnostic files to help administrative leaders maximize institutional performance.",
    website: "https://mayamd.com" 
  },
  { 
    id: 15, 
    img: "nadipulse.webp", 
    alt: "Nadi Pulse", 
    sector: "Biomedical Diagnostics", 
    desc: "Nadipulse creates wearable signal-processing trackers to evaluate physiological markers using updated non-invasive sensing tools." 
  },
  { 
    id: 16, 
    img: "neurancis.webp", 
    alt: "Neurancis", 
    sector: "Neuroscience Solutions", 
    desc: "Neurancis builds analytical models tracking custom cognitive stresses to develop predictive performance layers for precision systems." 
  },
  { 
    id: 17, 
    img: "openspectrum.webp", 
    alt: "Open Spectrum", 
    sector: "Telecommunications Infrastructure", 
    desc: "Openspectrum optimizes decentralized spectrum allocation schemas to reduce throughput congestion in edge computing applications." 
  },
  { 
    id: 18, 
    img: "ouranos_robotics.webp", 
    alt: "Ouranos Robotics", 
    sector: "Autonomous Unmanned Systems", 
    desc: "Ouranos Robotics maps kinematic navigation models for industrial indoor rovers handling inventory management actions automatically.",
    website: "https://ouranosrobotics.com" 
  },
  { 
    id: 19, 
    img: "predict-ram.webp", 
    alt: "Predict Ram", 
    sector: "FinTech Algorithms", 
    desc: "Predict Ram leverages structured econometric evaluation datasets to assist multi-asset portfolio configurations with risk management mapping." 
  },
  { 
    id: 20, 
    img: "ripple-healthcare.webp", 
    alt: "Ripple Healthcare", 
    sector: "Assistive Medical Technology", 
    desc: "Ripple Healthcare creates eldercare movement physical supports outfitted with sensor nodes tracking safety distributions." 
  },
  { 
    id: 21, 
    img: "Shvaas-Sustainable-Solutions-Private-Limited.webp", 
    alt: "Shvaas Sustainable", 
    sector: "Cleantech Environmental Systems", 
    desc: "Shvaas Solutions constructs customizable structural filtration matrices engineered to strip micro-particulate emissions from commercial exhaustion ports." 
  },
  { 
    id: 22, 
    img: "sneka.webp", 
    alt: "Sneka", 
    sector: "Social Commerce Networks", 
    desc: "Sneka provides small craft merchants localized micro-store builders facilitating fast cross-channel inventory processing capabilities." 
  },
  { 
    id: 23, 
    img: "stillsweb.webp", 
    alt: "Stillsweb", 
    sector: "Media Asset Management", 
    desc: "Stillsweb designs cloud libraries backed with optimized asset tagging architecture specifically for fast content curation teams." 
  },
  { 
    id: 24, 
    img: "thumb-pay.webp", 
    alt: "Thumb Pay", 
    sector: "Bio-authentication FinTech", 
    desc: "Thumb Pay optimizes contactless biometrics integration points allowing rapid retail transaction fulfillment windows safely." 
  },
  { 
    id: 25, 
    img: "blank.webp", 
    alt: "Cohort Startup 25", 
    sector: "To Be Updated", 
    desc: "Information regarding this portfolio placement is currently being compiled and will be updated shortly." 
  },
  { 
    id: 26, 
    img: "yantram.webp", 
    alt: "Yantram", 
    sector: "Robotics & Industrial Logic", 
    desc: "Yantram designs end-of-arm custom tooling solutions built specifically to handle delicate materials inside assembly line factories.",
    website: "https://yantram.ai" 
  }
];

const MeetCohort = () => {
  const [selectedStartup, setSelectedStartup] = useState(null);

  return (
    <div className="bg-transparent min-h-screen pb-20 relative overflow-hidden">
      
      {/* Decorative Branding Watermark Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none text-slate-500 font-bold text-[14vw] flex items-center justify-center rotate-[-12deg] z-0">
        AIIDE CoE
      </div>

      {/* Header Banner Component */}
      <Header
        title="Meet Our Cohort"
        subtitle="Discover our innovative, technology-driven startup portfolios scaling at AIIDE CoE"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Dynamic Responsive Flex-Grid Blueprint */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 xl:gap-6 mt-5">
          {COHORT_STARTUPS.map((startup) => (
            <div 
              key={startup.id} 
              className="flex items-center justify-center transform hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Main Card Trigger Component */}
              <button 
                onClick={() => setSelectedStartup(startup)}
                className="group block w-full border border-slate-800/60 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer text-left focus:outline-none bg-slate-900"
              >
                {/* 
                  Logo Top Panel Layer:
                  Pure white container matching background of logos to blend seamless and look native. 
                */}
                <div className="w-full aspect-[4/3] sm:aspect-square flex items-center justify-center p-4 bg-white relative overflow-hidden">
                  <img 
                    src={`/cohart/${startup.img}`} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                    alt={startup.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center px-1">${startup.alt}</span>`;
                    }}
                  />
                </div>

                {/* 
                  Text Base Footer Strip:
                  Provides an anchor for the brand label down below the graphic image panel.
                */}
                <div className="bg-slate-950/90 border-t border-slate-800/40 p-2 text-center min-h-[44px] flex items-center justify-center">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-200 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {startup.alt}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* ==========================================
          DYNAMIC LIGHTBOX / MODAL OVERLAY MODIFIER
          ========================================== */}
      {selectedStartup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedStartup(null)}
        >
          <div 
            className="bg-[#012640] border border-slate-700/60 w-full max-w-md rounded-2xl p-6 relative shadow-2xl transform scale-100 transition-all duration-300 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button X Icon */}
            <button 
              onClick={() => setSelectedStartup(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-lg bg-slate-900/40 border border-slate-800 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Modal Contents */}
            <div className="flex flex-col items-center mt-4">
              {/* Startup Logo Container in Details Modal */}
              <div className="w-40 h-40 bg-white rounded-xl p-4 flex items-center justify-center border border-slate-800 mb-5 shadow-md">
                <img 
                  src={`/cohort/${selectedStartup.img}`} 
                  alt={selectedStartup.alt}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<span class="text-sm text-slate-500 font-bold uppercase text-center">${selectedStartup.alt}</span>`;
                  }}
                />
              </div>

              {/* Startup Name Metadata */}
              <h3 className="text-xl font-bold text-white tracking-wide text-center mb-1">
                {selectedStartup.alt}
              </h3>
              
              {/* Industry Sector Tag */}
              <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase mb-4 text-center">
                {selectedStartup.sector}
              </p>

              {/* Startup Description Details Box */}
              <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 mb-6 text-sm text-slate-300 leading-relaxed text-center">
                {selectedStartup.desc}
              </div>

              {/* Dynamic Action Trigger Conditional Website Button Block */}
              {selectedStartup.website ? (
                <a 
                  href={selectedStartup.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 group hover:-translate-y-0.5 text-decoration-none"
                >
                  <span>Visit Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <div className="w-full text-center bg-slate-900/40 text-slate-400 rounded-xl py-3 border border-slate-800 text-sm italic select-none">
                  Website portal coming soon
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MeetCohort;