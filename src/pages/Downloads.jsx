import React from "react";
import { FileText, Download } from "lucide-react";

function Downloads() {
  const resources = [
    {
      title: "AIIDE-CoE Brochure",
      pdfPath: "/pdf/AIIDE_COE_Brochure.pdf",
      imagePath: "/broucher.png",
      alt: "AIIDE-CoE Brochure Thumbnail"
    },
    {
      title: "Start in UP-Policy-2020",
      pdfPath: "/pdf/Startinup-Policy-2020.pdf",
      imagePath: "/Startup_.png",
      alt: "Start in UP Policy Thumbnail"
    }
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-5">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] p-6 sm:p-8 border border-blue-100">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-[#012640] mb-8 tracking-wide">
          Resource Center &amp; Downloads
        </h2>

        <div className="space-y-6">
          {resources.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-md group"
            >
          
              <div className="w-full md:w-1/4 bg-slate-50 p-4 flex justify-center items-center md:border-r border-slate-200">
                <img 
                  src={item.imagePath} 
                  alt={item.alt}
                  className="h-28 w-auto object-contain rounded shadow-sm transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

             
              <div className="w-full md:w-2/3 p-6 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 shrink-0 hidden sm:block" />
                <a 
                  href={item.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </a>
              </div>

             
              <div className="w-full md:w-1/6 p-4 md:p-0 flex justify-center items-center md:border-l border-slate-200 self-stretch bg-slate-50/50 md:bg-transparent">
                <a 
                  href={item.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm"
                  title={`Download ${item.title}`}
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Downloads;