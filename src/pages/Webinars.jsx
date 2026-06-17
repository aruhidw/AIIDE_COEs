import React from 'react';
import Header from '../components/Header'; 


const WEBINAR_VIDEOS = [
  {
    embedUrl: "https://www.youtube.com/embed/qWScVkOv1jI",
    title: "Webinar Session 1"
  },
  {
    embedUrl: "https://www.youtube.com/embed/kYGJkYZ4TN8",
    title: "Webinar Session 2"
  }
];

const Webinars = () => {
  return (
    <div className="bg-transparent min-h-screen pb-20">
      
  
      <Header
        title="Featured Webinars"
        subtitle="Watch recorded streaming masterclasses and industry sessions"
        image="/aiide_banner.webp"
      />

      
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 bg-transparent">
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {WEBINAR_VIDEOS.map((video, index) => (
            
            
            <div 
              key={index}
              className="bg-transparent overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                borderRadius: "23px"
              }}
            >
             
              <div className="relative w-full aspect-video bg-slate-950">
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

          ))}
        </div>

      </main>
    </div>
  );
};

export default Webinars;