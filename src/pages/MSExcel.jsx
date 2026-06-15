import React from 'react';
import Header from '../components/Header'; // Reusing your beautiful header layout

// ==========================================
// DATA OBJECTS & STRUCTURES (Directly parsed from your Excel page code)
// ==========================================
const EXCEL_RESOURCES_DATA = [
  {
    title: "PIVOT Table 101",
    pdfPath: "/pdf/PIVOT_Table_101.pdf"
  },
  {
    title: "Excel Shortcuts & Formula",
    pdfPath: "/pdf/Excel_Shortcuts_&_Formula.pdf"
  },
  {
    title: "Excel Formulas Bible",
    pdfPath: "/pdf/Excel Formulas Biblet.pdf" 
  },
  {
    title: "Excel Formula Cheat sheets",
    pdfPath: "/pdf/Excel_Formula_Cheat_sheets.pdf" 
  }
];

const MSExcel = () => {
  return (
    /* Completely transparent root wrapper layout matching watermark backdrop behavior */
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header Banner Section */}
      <Header
        title="Microsoft Excel"
        subtitle="Spreadsheet Mastery & Analytical Resources"
        image="/aiide_banner.webp"
      />

      {/* Main Grid Wrapper mirroring 'container py-5 d-grid gap-5' */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 bg-transparent">
        {EXCEL_RESOURCES_DATA.map((item, index) => (
          
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
              
              {/* Left Column (col-md-5 equivalent) - MS Excel Asset Logo */}
              <div className="md:col-span-5 flex justify-center items-center p-6 border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <img 
                  src="msexcel.png" 
                  className="max-h-24 md:max-h-32 object-contain" 
                  alt="MS Excel Resource Icon" 
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

              {/* Right Column (col-md-2 equivalent) - File Download Action Trigger */}
              <div className="md:col-span-2 flex justify-center items-center p-8 md:py-12 h-full">
                <a 
                  href={item.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 md:w-20 block hover:opacity-80 transition duration-200"
                >
                  <img 
                    src="file.png" 
                    className="w-full h-auto object-contain" 
                    alt="Download PDF File Icon" 
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

export default MSExcel;