import React, { useState } from "react";
import Header from "../components/Header";

const COURSE_CARDS = [
  {
    title: "Artificial Intelligence & Data Science",
    image: "/white-paper.png",
    path: "/ai-data-science",
    isModal: false,
  },
  {
    title: "Cheat Sheets",
    image: "/research@2x.png",
    path: "/cheat-sheets",
    isModal: false,
  },
  {
    title: "Machine Learning",
    image: "/blogging.png",
    path: "/machine-learning",
    isModal: false,
  },
  {
    title: "MS Excel",
    image: "/wedding-planning@2x.png",
    path: "/ms-excel",
    isModal: false,
  },
  {
    title: "Python",
    image: "/case-study.png",
    path: "/python",
    isModal: false,
  },
  {
    title: "SQL",
    image: "/online-course@2x.png",
    path: "/sql",
    isModal: false,
  },
  {
    title: "FUTURE SKILLS",
    image: "/futureimg.png",
    path: "/future-skills",
    isModal: false,
  },
  {
    title: "WEBINARS",
    image: "/case-study.png",
    path: "/webinars",
    isModal: false,
  },
];


const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-slate-800 min-h-screen font-sans selection:bg-blue-500 selection:text-white bg-slate-50/30 pb-16">
      <Header
        title="Knowledge Center"
        subtitle="Explore our academic courses, modules, and tech resources"
        image="/aiide_banner.webp"
      />

      <main>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {COURSE_CARDS.map((card, index) => {
            const cardContent = (
              <div className="bg-[#012640] rounded-2xl shadow-lg border border-slate-800 p-6 flex flex-col items-center justify-center text-center h-48 transform hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-w-full max-h-full object-contain brightness-0 invert"
                  />
                </div>

                <h6 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider leading-snug group-hover:text-blue-400 transition-colors duration-200">
                  {card.title}
                </h6>
              </div>
            );

            if (card.isModal) {
              return (
                <div key={index} onClick={() => setIsModalOpen(true)}>
                  {cardContent}
                </div>
              );
            }

            return (
              <a href={card.path} key={index} className="block no-underline">
                {cardContent}
              </a>
            );
          })}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
       
          <div className="bg-[#012640] border border-slate-800 rounded-3xl w-full max-w-md p-6 relative shadow-2xl transform scale-100 transition-transform duration-300 text-center">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold transition duration-200"
              aria-label="Close modal"
            >
              ✕
            </button>

           
            <div className="w-20 h-20 mx-auto mb-4 mt-2 flex items-center justify-center">
              <img
                src="assets/images/logos/man.png"
                alt="Future Skills Avatar Graphic"
                className="max-w-full max-h-full object-contain brightness-0 invert opacity-90"
                onError={(e) => {
                
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                }}
              />
            </div>

            
            <h4 className="text-white text-lg font-extrabold uppercase tracking-widest border border-slate-700/60 rounded-full px-4 py-1.5 inline-block text-xs mb-4">
              Future Skills
            </h4>

            
            <p className="text-slate-200 text-sm font-medium leading-relaxed max-w-xs mx-auto">
              The course line ups from future skills will be updated soon.
            </p>

          
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold tracking-widest uppercase transition duration-200 shadow-md shadow-blue-900/20"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
