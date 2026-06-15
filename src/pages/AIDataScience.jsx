import React from 'react';
import Header from '../components/Header'; // Reusing your beautiful header

// ==========================================
// DATA OBJECTS & STRUCTURES (Matching your original list)
// ==========================================
const RESOURCE_DOCUMENTS = [
  {
    title: "AI for a better future",
    pdfPath: "pdf/AI_for_a_better_future.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Big Data Case Studies",
    pdfPath: "pdf/Big_Data_Case_Studies.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Data Analysis - AI4Diversity",
    pdfPath: "pdf/Data_Analysis_AI4Diversity.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Data Mining for the Masses",
    pdfPath: "pdf/Data_Mining_for_the_Masses.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Data Science - Inforgraphics",
    pdfPath: "pdf/Data_Science_Inforgraphics.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Guide to Effective Data Collection",
    pdfPath: "pdf/Guide_to_Effective_Data_Collection.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "Principles of Data Wrangling",
    pdfPath: "pdf/Principles_of_Data_Wrangling.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  },
  {
    title: "The Data Engineering Cookbook",
    pdfPath: "https://aiidecoe.com/images/The Data Engineering Cookbook.pdf",
    coverImage: "/OIP__1_-removebg-preview.png"
  }
];

const AIDataScience = () => {
  return (
    /* Changed from bg-white to bg-transparent */
    <div className="bg-transparent min-h-screen pb-20">
      {/* Header Banner */}
      <Header
        title="Artificial Intelligence & Data Science"
        subtitle="Knowledge Center Resources"
        image="/aiide_banner.webp"
      />

      {/* Main Container mirroring your 'container py-5 d-grid gap-5' */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 bg-transparent">
        {RESOURCE_DOCUMENTS.map((doc, index) => (
          
          /* Card section changed to bg-transparent */
          <section 
            key={index}
            className="bg-transparent transition-all duration-300 hover:scale-[1.01]"
            style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "23px"
            }}
          >
            {/* Row container divided into 3 responsive columns matching your col-md-5, col-md-5, col-md-2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center bg-transparent">
              
              {/* Left Column (col-md-5 equivalent) - Cover Image */}
              <div className="md:col-span-5 flex justify-center items-center p-6 border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <img 
                  src={doc.coverImage} 
                  className="max-h-24 md:max-h-32 object-contain" 
                  alt="Resource Cover" 
                />
              </div>

              {/* Middle Column (col-md-5 equivalent) - Title Text */}
              <div className="md:col-span-5 flex justify-center items-center p-6 text-center border-b md:border-b-0 md:border-r-2 border-slate-800 h-full">
                <h4 className="text-xl md:text-2xl font-semibold text-slate-800 hover:text-blue-600 transition duration-200">
                  <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer">
                    {doc.title}
                  </a>
                </h4>
              </div>

              {/* Right Column (col-md-2 equivalent) - File Icon Link */}
              <div className="md:col-span-2 flex justify-center items-center p-8 md:py-12 h-full">
                <a 
                  href={doc.pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 md:w-20 block hover:opacity-80 transition duration-200"
                >
                  <img 
                    src="/file.png" 
                    className="w-full h-auto object-contain" 
                    alt="File Download Icon" 
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

export default AIDataScience;