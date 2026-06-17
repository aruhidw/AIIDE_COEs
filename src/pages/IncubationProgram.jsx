import React from 'react';
import Header from '../components/Header';

const IncubationProgram = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
  
      <Header
        title="Incubation Program"
        subtitle="Explore our structural application workflow and cohort scaling lifecycle steps"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        
        
        <section className="pt-2 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            
           
            <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-12">
              PROCESS
            </h1>

         
            <div className="w-full mb-8">
              <a 
                href="https://aiidecoe.accubate.app/ext/form/207/1/apply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src="/IncubationProgram/Group9.png" 
                  
                  className="w-full max-w-2xl mx-auto h-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 cursor-pointer" 
                  alt="Apply Link Process Map"
                />
              </a>
            </div>

           
            <div className="w-full">
              <img 
                src="IncubationProgram/process.png" 
             
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