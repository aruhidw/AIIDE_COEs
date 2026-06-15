import React from 'react';
import Header from '../components/Header'; // Reusing your layout header asset wrapper


const SQL_RESOURCES_DATA = [
  {
    title: "SQL notes for professionals",
    pdfPath: "/pdf/SQL_notes_for_professionals.pdf"
  },
  {
    title: "SQL Cheatsheets",
    pdfPath: "/pdf/SQL_Cheatsheets.pdf"
  },
  {
    title: "SQL Cheatsheet",
    pdfPath: "/pdf/SQL_Cheatsheet.pdf"
  },
  {
    title: "SQL Cheat Sheet",
    pdfPath: "/pdf/SQL_Cheat_Sheet.pdf" 
  }
];

const SQLResources = () => {
  return (
    
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header Banner Section */}
      <Header
        title="SQL Databases"
        subtitle="Structured Query Language Handouts & Syntaxes"
        image="/aiide_banner.webp"
      />

      {/* Main Grid Wrapper mirroring 'container py-5 d-grid gap-5' */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 bg-transparent">
        {SQL_RESOURCES_DATA.map((item, index) => (
          
          /* Custom Section shadow config applied directly on top of transparent background */
          <section 
            key={index}
            className="bg-transparent transition-all duration-300 hover:scale-[1.01]"
            style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "23px"
            }}
          >
            {/* Grid layout splitting row columns into 5-5-2 desktop layout matrices */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-transparent">
              
              {/* Left Column (col-md-5 equivalent) - SQL Asset Graphic */}
              <div className="md:col-span-5 flex justify-center items-center p-6 border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <img 
                  src="/sql.png" 
                  className="max-h-24 md:max-h-32 object-contain" 
                  alt="SQL Database Graphic Icon" 
                />
              </div>

              {/* Middle Column (col-md-5 equivalent) - Text Title Link */}
              <div className="md:col-span-5 flex justify-center items-center p-6 text-center border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <h4 className="text-xl md:text-2xl font-semibold text-slate-800 hover:text-blue-600 transition duration-200">
                  <a href={item.pdfPath} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h4>
              </div>

              {/* Right Column (col-md-2 equivalent) - File Action Action Trigger */}
              <div className="md:col-span-2 flex justify-center items-center p-8 md:py-12 h-full">
                <a 
                  href={item.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 md:w-20 block hover:opacity-80 transition duration-200"
                >
                  <img 
                    src="/file.png" 
                    className="w-full h-auto object-contain" 
                    alt="Download Action PDF File Icon" 
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

export default SQLResources;