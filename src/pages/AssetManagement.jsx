import React from 'react';
import Header from '../components/Header';
import { Rocket } from 'lucide-react';

const LABS_DATA = [
  {
    name: "C3i Hub",
    logo: "AssetManagement/c3ihub-logo_color.png",
    link: "https://c3ihub.org/",
    isExternal: true,
    isTextLogo: false
  },
  {
 
    name: "Career Accelerator",
    textLogo: "IITK", 
    link: "https://iitk.ac.in/new/data/iitk/",
    isExternal: true,
    isTextLogo: true
  },
  {
    name: "Electronics & ICT Academy",
    logo: "AssetManagement/ict-header-new@2x.png",
    link: "https://ict.iitk.ac.in/",
    isExternal: true,
    isTextLogo: false
  },
  {
    name: "I-Smriti",
    logo: "AssetManagement/ismriti.png",
    link: "https://ismriti.com/",
    isExternal: true,
    isTextLogo: false
  },
{
    name: "Computer Center",
    
    logo: "AssetManagement/CC.svg",
    link: "https://www.iitk.ac.in/cc/",
    isExternal: true,
    isTextLogo: false
  }
];

const AssetManagement = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
    
      <Header
        title="Asset Management"
        subtitle="Explore world-class infrastructure and specialized workspaces at CoE"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        
        
        <div className="max-w-3xl mx-auto mb-6 text-center">
          <p className="bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm sm:text-base font-bold uppercase tracking-widest py-4 px-6 rounded-2xl shadow-md flex items-center justify-center gap-3">
            
            <Rocket className="w-5 h-5 sm:w-6  md:w-7 md:h-7 mb-4  text-blue-400 animate-pulse" />
            World-Class Infrastructure & Labs for Product Development at CoE
          </p>
        </div>

        
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h6 className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
            Excellent workspace premium provisions matching modern operational criteria for incubated startups. 
            Offering <span className="text-blue-400 font-bold">50 structural seats</span> configured for 25 early-stage cohorts (2 dedicated workspaces per startup module).
          </h6>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {LABS_DATA.map((lab, index) => (
            <a
              key={index}
              href={lab.link}
              target={lab.isExternal ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block no-underline"
            >
              
              <div className="bg-[#012640] rounded-2xl shadow-lg border border-slate-800 p-6 flex flex-col items-center justify-center text-center h-48 transform hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 group cursor-pointer">
                
                
                {lab.isTextLogo ? (
                 
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-white font-bold mx-auto text-2xl sm:text-3xl tracking-wide group-hover:scale-110 transition-transform duration-300">
                      {lab.textLogo}
                    </h3>
                    <h6 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug pt-3 group-hover:text-blue-400 transition-colors duration-200">
                      {lab.name}
                    </h6>
                  </div>
                ) : (
                 
                  <>
                   
                    <div className="w-20 h-20 flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={lab.logo}
                        alt={lab.name}
                        className="max-w-full max-h-full object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity duration-200"
                        loading="lazy"
                      />
                    </div>

                    
                    <h6 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug min-h-[36px] flex items-center justify-center group-hover:text-blue-400 transition-colors duration-200">
                      {lab.name}
                    </h6>
                  </>
                )}

              </div>
            </a>
          ))}
        </div>

      </main>
    </div>
  );
};

export default AssetManagement;