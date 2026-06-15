import React, { useState, useEffect } from 'react';
// 💡 Imported your global Header component to unify your design system across Home and About
import Header from '../components/Header'; 

// ==========================================
// 1. DATA OBJECTS & STRUCTURES (Top of File)
// ==========================================

const ABOUT_CONTENT = {
  title: "About Us", 
  subtitle: "AIIDE – Center of Excellence",
  introParagraph: "Artificial Intelligence has become an integral part of our life, from predicting diseases to solving major socio-economic problems, developing smart mobility & transportation, enhancing education to minimizing the reach barriers and increasing the quality, transforming healthcare by offering deeper insights to have a better patient diagnosis. It is estimated that India being the fastest growing economy with the second largest population in the world, has a major role to play in the AI revolution. While keeping these important points in place, the Government of Uttar Pradesh under its Startup policy 2020 envisioned to establish a center of excellence and to exploit the above advantage they drew upon the following steps.",
  expandedParagraphs: [
    "The government awarded the responsibility to establish a center of excellence in the domain of AI/ML to FIRST IIT Kanpur in collaboration with FICCI. This Center of Excellence is an initiative of the Uttar Pradesh Government where startups can showcase and develop their innovative products and solutions at large and make Uttar Pradesh a hub for Artificial Intelligence and Machine Learning. Through this center, the government aims to create employment opportunities for the youth which in turn will lead to the growth of the state’s GDP. Augmenting all this Artificial Intelligence and Innovation Driven Entrepreneurship - CoE (Center of Excellence) [AIIDE-CoE] AI is established.",
    "Artificial Intelligence and Innovation Driven Entrepreneurship - CoE (Center of Excellence) is a domain-specific facility that provides Mentorship, Networking opportunities, training, research & development, Infrastructure, funding opportunities to the start-ups. “FIRST” - IIT Kanpur (Foundation for Research in Science and Technology) in collaboration with “FICCI” (Federation of Indian Chambers of Commerce and Industry) has come together to establish this Center of Excellence here in Noida.",
    "At AIIDE-CoE, we have pooled all of our experts, professors, researchers, academicians and students to a common platform, so that they can collaborate and work upon their ideas. Partnerships will be forged with national and international institutions that are working in the field of AI to extend help to our startups. AIIDE-CoE aims to nurture an AI innovation ecosystem, which leads to satisfying the following objectives:"
  ],
  objectives: [
    'Supporting innovative enterprises', 
    'Technology facilitation', 
    'Networking & Collaboration Mentoring support from industry experts', 
    'Data-Driven advisory', 
    'Establishing Industry connect', 
    'Business Development support'
  ],
  closingParagraph: "A special resource bank has been created where all the research published, best practices, program code, module, designing, algorithm and leadership developed over the years has been made accessible to the startups. A highly qualified team is functioning day in and out for smooth functioning of the center, which is monitored periodically by the governing body."
};

const CORE_AREAS = [
  { title: "Artificial Intelligence", color: "bg-red-500", img: "artificial-intelligence.png" },
  { title: "Machine Learning", color: "bg-amber-500", img: "machine-learning.png", link: "https://www.prithvi.ai/" },
  { title: "Internet Of Things", color: "bg-orange-500", img: "internet-of-things.png" },
  { title: "Cyber Security", color: "bg-blue-600", img: "cyber-security.png", link: "https://www.prithvi.ai/" },
  { title: "Augmented Reality", color: "bg-emerald-600", img: "augmented-reality.png" }
];

const TESTIMONIALS = [
  {
    text: "FIRST’s CoE for AI/ML will be a bright spot in the UP Startup ecosystem due to a confluence of the brilliance of young entrepreneurs, the wisdom of IIT Kanpur professors, business mentorship by leading professionals & business promotion by FICCI.",
    author: "Prof. Amitabha Bandyopadhyay",
    designation: "Professor In-charge, Incubation & Innovation, IIT Kanpur"
  },
  {
    text: "AIIDE CoE, an Initiative of FIRST IIT Kanpur and FICCI will build NextGen intelligent systems and nurture startups to be the best in the world. This centre will work with 250 startups in the next 5 years to bring solutions to solve the problems of the future.",
    author: "Dr. Nikhil Agarwal",
    designation: "CEO, AIIDE-Center Of Excellence"
  }
];

// ==========================================
// 2. SUB-COMPONENTS & PROPS
// ==========================================

const CoreAreaCard = ({ card }) => {
  const CardBody = () => (
    <div className={`${card.color} h-full rounded-2xl p-5 shadow-lg text-center flex flex-col items-center justify-center transform hover:-translate-y-1.5 transition-all duration-300 group`}>
      <div className="bg-white/10 p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={`/${card.img}`} 
          className="h-12 w-12 object-contain filter brightness-0 invert" 
          alt={card.title} 
        />
      </div>
      <strong className="text-white text-sm md:text-base font-semibold block tracking-wide">{card.title}</strong>
    </div>
  );

  return card.link ? (
    <a href={card.link} target="_blank" rel="noreferrer" className="block group">
      <CardBody />
    </a>
  ) : (
    <div><CardBody /></div>
  );
};

const TestimonialCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-[#012640] text-white rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-between">
      <div className="transition-all duration-500 ease-in-out">
        <p className="text-center text-base md:text-lg italic leading-relaxed text-slate-300 mb-6">
          "{slides[currentSlide].text}"
        </p>
        <div className="text-center">
          <h4 className="text-blue-400 font-bold text-lg">{slides[currentSlide].author}</h4>
          <p className="text-slate-400 text-xs md:text-sm mt-1 whitespace-pre-line">{slides[currentSlide].designation}</p>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-blue-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT EXPORT
// ==========================================

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-slate-800 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 💡 REUSED GLOBAL HEADER COMPONENT
          Replaces the manual section with the authentic app header structure.
          We pass the correct internal text variants down as props. */}
      <Header
        title={ABOUT_CONTENT.title}
        subtitle={ABOUT_CONTENT.subtitle}
        image="/aiide_banner.webp"
      />

      {/* Main Content Layout Block */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100 transition-all duration-300">
          
          <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-6 font-medium">
            {ABOUT_CONTENT.introParagraph}
          </p>

          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {ABOUT_CONTENT.expandedParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed text-slate-600 mb-6 pt-2">
                {paragraph}
              </p>
            ))}

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 bg-blue-50/40 rounded-xl p-6 border border-blue-100/50">
              {ABOUT_CONTENT.objectives.map((item, idx) => (
                <li key={idx} className="flex items-start text-slate-700 font-medium">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-4">
              {ABOUT_CONTENT.closingParagraph}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#012640] text-white rounded-full text-sm font-semibold tracking-wide shadow-md hover:bg-blue-600 active:scale-95 transition-all duration-200"
            >
              {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
            </button>
          </div>
        </div>
      </main>

      {/* Core Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-10 tracking-tight uppercase">Core Areas of Focus</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CORE_AREAS.map((card, index) => (
            <CoreAreaCard key={index} card={card} />
          ))}
        </div>
      </section>

      {/* MVV Block */}
      <section className="bg-slate-100/60 py-16 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10 tracking-tight uppercase">
            Mission, Vision & Values
          </h2>
          
          <div className="w-full max-w-4xl">
            <img 
              src="/MISSION_VISION_VALUE.png" 
              alt="Mission, Vision, and Values Diagram" 
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

        </div>
      </section>

      {/* Testimonial Messages Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-10 uppercase tracking-widest">Messages</h2>
        <TestimonialCarousel slides={TESTIMONIALS} />
      </section>
      
    </div>
  );
};

export default AboutUs;