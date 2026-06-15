import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HealthcareWebinarDetail = () => {
  // Safe array mapping your three webinar event images from the asset directory
  const webinarImages = [
    "imgthirdeventnew.png",
    "imgthirdeventsecond.png",
    "imgthirdeventsthird.png"
  ];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col relative overflow-hidden text-slate-800">
      {/* Premium Watermark Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none text-slate-500 font-bold text-[14vw] flex items-center justify-center rotate-[-12deg] z-0">
        AIIDE CoE
      </div>

      {/* Main Panel Banner Header Component */}
      <Header
        title="Knowledge Series"
        subtitle="Exploring domain transformations driven by artificial intelligence technologies"
        image="/aiide_banner.webp"
      />

      {/* Center Layout Canvas Container */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Navigation Breadcrumb Link */}
        <div className="mb-8">
          <a 
            href="/news-events" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News & Events
          </a>
        </div>

        {/* Content Card Panel */}
        <article className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          {/* Main Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-emerald-50 text-emerald-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-emerald-100">
              Expert Webinar Event
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              AIIDE-CoE Informative Webinar Series <br />
              <span className="text-blue-600 font-semibold text-xl sm:text-2xl block mt-2">
                Topic: AI in Healthcare
              </span>
            </h1>
          </div>

          <hr className="border-slate-100 my-8" />

          {/* Description Text Container */}
          <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
            <p className="font-medium text-slate-900 text-center text-base sm:text-lg mb-8 leading-normal">
              To boost the innovation and entrepreneurship ecosystem by leveraging AI/ML, the Government of Uttar Pradesh has entrusted Indian Institute of Technology, Kanpur, and FICCI to establish a world-class Centre of Excellence in Noida. Startup Incubation and Innovation Centre, IIT Kanpur is glad to announce the launch of the AIIDE-CoE website -{" "}
              <a 
                href="http://aiidecoe.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 underline hover:text-blue-700 font-semibold break-all"
              >
                http://aiidecoe.com
              </a>
            </p>

            <p>
              AIIDE will support 250 startups from the AI/ML domain over a period of 5 years. The startups will have access to world-class infrastructure and lab facilities, mentors, and investors to help accelerate their product development.
            </p>

            <p>
              With the launch of the AIIDE website by Honorable Deputy Chief Minister of Uttar Pradesh Dr. Dinesh Sharma, we have opened the call for applications for startups in the field of AI/ML.
            </p>
          </div>

          {/* Clean Unified Responsive Image Grid replacing legacy duplicated sections */}
          <div className="mt-12">
            <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 text-center sm:text-left">
              Session Event Documentation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinarImages.map((imageName, index) => (
                <div 
                  key={index} 
                  className="group aspect-[4/3] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative"
                >
                  <img 
                    src={`/NewsEvents/${imageName}`} 
                    alt={`AI in Healthcare Session Presentation Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span class="text-[10px] font-bold tracking-wider uppercase text-slate-400">Presentation Record</span>
                        </div>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </article>
      </main>

     
    </div>
  );
};

export default HealthcareWebinarDetail;