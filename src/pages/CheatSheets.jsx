import React from 'react';
import Header from '../components/Header'; // Reusing your beautiful header layout


const CHEAT_SHEETS_DATA = [
  {
    title: "Statictics Cheat Sheet",
    pdfPath: "/pdf/Statictics_Cheat_Sheet.pdf"
  },
  {
    title: "Shiny Cheatsheet - R studio",
    pdfPath: "/pdf/Shiny_CheatsheetR_studio.pdf"
  },
  {
    title: "Reading and Writing Data with Pandas",
    pdfPath: "/pdf/Reading_and_Writing _DatawithPandas.pdf"
  },
  {
    title: "R for Everyone",
    pdfPath: "/pdf/R_for_Everyone.pdf"
  },
  {
    title: "Neural Network Cheat Sheet",
    pdfPath: "/pdf/Neural_Network_Cheat_Sheet.pdf"
  },
  {
    title: "MongoDB notes for professionals",
    pdfPath: "/pdf/MongoDB_notes_for_professionals.pdf"
  },
  {
    title: "Linux Cheat Sheet",
    pdfPath: "/pdf/LinuxCheat_sheet.pdf"
  },
  {
    title: "Kubernetes Cheat Sheet",
    pdfPath: "/pdf/Kubernetes_Cheat_Sheet.pdf"
  },
  {
    title: "Hadoop & Mapreduce Cheat Sheet",
    pdfPath: "/pdf/Hadoop_&_Mapreduce.pdf"
  },
  {
    title: "Graphics Principles Cheat Sheet",
    pdfPath: "/pdf/Graphics_Principles.pdf"
  },
  {
    title: "Google Data Engineering",
    pdfPath: "/pdf/Google_Data_Engineering.pdf"
  },
  {
    title: "GIT Cheat Sheet",
    pdfPath: "/pdf/GIT.pdf"
  },
  {
    title: "Deep Learning Cheat Sheet",
    pdfPath: "/pdf/Deep_Learning.pdf"
  },
  {
    title: "Data Science Cheat Sheets",
    pdfPath: "/pdf/Data_Science.pdf"
  }
];

const CheatSheets = () => {
  return (
   
    <div className="bg-transparent min-h-screen pb-20">
      
    
      <Header
        title="Cheat Sheets"
        subtitle="Quick Reference Knowledge Resources"
        image="/aiide_banner.webp"
      />

    
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 bg-transparent">
        {CHEAT_SHEETS_DATA.map((sheet, index) => (
          
          
          <section 
            key={index}
            className="bg-transparent transition-all duration-300 hover:scale-[1.01]"
            style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "23px"
            }}
          >
          
            <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-transparent">
              
              
              <div className="md:col-span-5 flex justify-center items-center p-6 border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <img 
                  src="cheetsheet.png" 
                  className="max-h-24 md:max-h-32 object-contain" 
                  alt="Cheat Sheet Icon" 
                />
              </div>

            
              <div className="md:col-span-5 flex justify-center items-center p-6 text-center border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <h4 className="text-xl md:text-2xl font-semibold text-slate-800 hover:text-blue-600 transition duration-200">
                  <a href={sheet.pdfPath} target="_blank" rel="noopener noreferrer">
                    {sheet.title}
                  </a>
                </h4>
              </div>

             
              <div className="md:col-span-2 flex justify-center items-center p-8 md:py-12 h-full">
                <a 
                  href={sheet.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 md:w-20 block hover:opacity-80 transition duration-200"
                >
                  <img 
                    src="/file.png" 
                    className="w-full h-auto object-contain" 
                    alt="File Action Indicator" 
                  />
                </a>
              </div>

            </div>
          </section>
          
        ))}
      </main>
    </div>
  );
};

export default CheatSheets;