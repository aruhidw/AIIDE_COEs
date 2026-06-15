import React from 'react';
import Header from '../components/Header';

const IncubationProgram = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header Banner Component */}
      <Header
        title="Incubation Program"
        subtitle="Explore our structural application workflow and cohort scaling lifecycle steps"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        
        {/* Main Section Frame */}
        <section className="pt-2 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Added text-slate-800 to ensure the text is visible on light/transparent backgrounds */}
            <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-12">
              PROCESS
            </h1>

            {/* FIRST IMAGE: Interactive Application Link Button Graphic */}
            <div className="w-full mb-8">
              <a 
                href="https://aiidecoe.accubate.app/ext/form/207/1/apply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src="/IncubationProgram/Group9.png" 
                  // FIXED: Removed brightness-0 invert so the original image colors show up instantly
                  className="w-full max-w-2xl mx-auto h-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 cursor-pointer" 
                  alt="Apply Link Process Map"
                />
              </a>
            </div>

            {/* SECOND IMAGE: Standard Structural Process Flow Diagram */}
            <div className="w-full">
              <img 
                src="IncubationProgram/process.png" 
                // FIXED: Removed brightness-0 invert here as well
                className="w-full max-w-2xl mx-auto h-auto object-contain opacity-95 transition-opacity duration-300" 
                alt="Incubation Lifecycle Workflow Diagram"
              />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default IncubationProgram;