import React, { useState } from "react";
import Header from "../../components/Header";

const PartnerWithUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-transparent min-h-screen pb-20 relative overflow-hidden text-slate-800">
     
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none text-slate-500 font-bold text-[14vw] flex items-center justify-center rotate-[-12deg] z-0">
        AIIDE CoE
      </div>

    
      <Header
        title="Partner With Us"
        subtitle="Connect with academic milestones, industry scale models, and active state development vectors"
        image="/aiide_banner.webp"
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-16">
        
       
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 tracking-wide uppercase mb-8">
            AI Innovation Ecosystem
          </h2>
          
          <div className="text-slate-600 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
            <p>
              The Artificial intelligence Innovation ecosystem is defined as a complex community of organisms 
              and its environment functioning as an ecological unit. In an Innovation ecosystem, we talk about 
              all the stakeholders critical for innovation like state, academia, industry, entrepreneurs and 
              investors. All These play an important part in supporting and nurturing a culture of Innovation.
            </p>
            <p>
              AIIDE-CoE’s AI Innovation ecosystem will create an active flow of information and resources for 
              ideas to transform into reality. Through this ecosystem, we are building a process by which more 
              innovators and entrepreneurs can develop and launch solutions to solve real-world problems faster. 
              This process creates expertise in new areas and allows businesses to meet their customers. 
              Additionally, we will provide the means for resource sharing and creating jobs &amp; opportunities 
              in the economy. We will build new technologies that will be applied across industries and businesses. 
              AIIDE-CoE will partner with key stakeholders and turn these in-kind and financial investments into 
              tangible products that impact the way we all live, work and play.
            </p>

           
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p>
                  The ecosystem will act as an environment needed to nurture dynamic entrepreneurs, researchers, 
                  faculty members, working professionals and students working in different verticals looking to work 
                  on AI and leverage it. This will lead them to boost this ecosystem. However, to achieve the desired 
                  broad-based economic &amp; societal impact and to maximize productivity benefits, technology must be 
                  innovated, adopted at scale and diffused throughout this ecosystem. This requires strengthened 
                  collween governments, businesses, academia and civil society for unlocking its full potential.
                </p>
                <p>
                  The values created by the AIIDE-CoE’s AI innovation ecosystem lies in the access to resources for 
                  the startups through AIIDE-CoE’s resource bank which contains the latest research papers, forums for 
                  debate &amp; discussions on the latest technologies and breakthroughs in AI, mentor pool and information 
                  from all our stakeholders needed for the development of innovative and efficient solutions. This information 
                  flow creates more investment opportunities for the right institutions to connect with the right ideas 
                  for their businesses &amp; portfolios, at the right time.
                </p>
                <p className="font-medium text-slate-800">
                  The goal is to provide startups with the right kind of tools and mentorships so that their journey 
                  towards finding solutions can be facilitated.
                </p>
              </div>
            </div>
          </div>

          
          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none"
            >
              <span>{isExpanded ? "Read Less ▲" : "Read More ▼"}</span>
            </button>
          </div>
        </section>

       
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white max-w-4xl mx-auto shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase block mb-1">
                Engagement Pipeline
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide uppercase">
                Your Expression of Interest
              </h3>
            </div>
            <a
              href="https://aiidecoe.accubate.app/ext/survey/15/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-600/20 transition-all duration-200 tracking-wider uppercase text-center"
            >
              Submit Here
            </a>
          </div>
        </section>

        
        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-wide uppercase mb-4">
            Partnerships
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our partners will be able to benefit from tie-ups with world-class Institutions, work and exchange 
            ideas with local start-ups from the state, help students engage in more AI-based technology &amp; start-ups.
          </p>
        </section>

       
       
      <section className="py-3  w-full">
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-center text-slate-900 font-bold uppercase tracking-wider text-xl sm:text-2xl mb-6">
              OUR PARTNERS
            </h2>
            <img 
              src="Partner/Group11.png" 
              alt="Ecosystem Partner Logos Grid 1" 
              className="w-full h-auto mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-4 md:pt-8">
            <img 
              src="Partner/Group12.png" 
              alt="Ecosystem Partner Logos Grid 2" 
              className="w-full h-auto mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      </main>
    </div>
  );
};

export default PartnerWithUs;