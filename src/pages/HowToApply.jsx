import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

function HowToApply() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "What is the eligibility criteria to apply for the program?",
      a: "Startups registered in with Start in UP and DPIIT (Department for Promotion of Industry and Internal Trade) are eligible. Being registered with both of them is mandatory."
    },
    {
      q: "Can the startups submit more than 1 application?",
      a: "Yes, the startups can submit more than one application form but each application must be from a different sector. An enterprise cannot apply for 2 different products from the same sector."
    },
    {
      q: "How will the startups get notified about the status of their application?",
      a: "The startups will be notified about their status on their registered email after the timeline is complete."
    },
    {
      q: "Can NRIs or Foreign citizens staying in India as residents apply?",
      a: "Yes, foreign citizens and NRIs staying in India as residents can apply but only if their enterprise is registered with “Start in UP” and “DPIIT”. (Mandatory)"
    },
    {
      q: "What are the sectors that the program will focus on?",
      a: "Artificial Intelligence, Machine Learning, Cyber Security, Internet of Things and Augmented Reality are the 5 sectors that the program will be focusing on."
    },
    {
      q: "What is the frequency of calls for applications?",
      a: "The frequency of calls will be floated twice a year."
    },
    {
      q: "Is the duration of the program extendible?",
      a: (
        <span>
          No, it has a fixed time period of 6 months but if you wish to get incubated with IIT Kanpur you can always apply for incubation at SIIC, IIT Kanpur.{" "}
          <br className="mb-2" />
          <strong>Here is the link if you wish to apply</strong> -{" "}
          <a 
            href="https://siicincubator.com/incubation/incubation_at_siic.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all font-semibold inline-flex items-center gap-1"
          >
            https://siicincubator.com/incubation/incubation_at_siic.php
            <ArrowRight className="w-3 h-3" />
          </a>
        </span>
      )
    },
    {
      q: "Will the startups get a mentor?",
      a: "Yes, but only the startups that are selected in the Center of Excellence will be given a mentor."
    },
    {
      q: "Is it necessary to be incubated at the time of submitting the application?",
      a: "No, a startup can apply for the program whether it’s incubated with IIT Kanpur or not."
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* =========================================================
          SECTION 1: APPLICATION PROCESS FLOW BANNER
         ========================================================= */}
      <section className="w-full">
        <div className="w-full">
          <img 
            src="/howtoapplyimg.png" 
            alt="How to Apply Process Workflow Guide" 
            className="w-full h-auto object-contain mx-auto max-w-7xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* =========================================================
          SECTION 2: CORE HOW-TO-APPLY INSTRUCTIONS
         ========================================================= */}
      <section className="max-w-4xl mx-auto px-5">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#012640] mb-6 tracking-wide">
            How To Apply Guidelines
          </h2>
          <ul className="space-y-4 text-slate-700 list-none leading-relaxed text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Step 1:</strong> Click the "Apply For Enrollment" card link to access the registration form.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Step 2:</strong> Fill out your startup concept, team size, and tech stack details carefully.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Step 3:</strong> Upload the required pitching deck templates from our downloads tab.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Step 4:</strong> Submit before the cohort closing deadline listed on the timeline.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: FAQ ACCORDION ENGINE (WITH SMOOTH ROTATION)
         ========================================================= */}
      <section id="FAQ" className="py-8 max-w-4xl mx-auto px-5">
        <h3 className="text-center text-xl sm:text-2xl font-black text-slate-900 tracking-wider uppercase mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                {/* Trigger Toggle Heading Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-slate-800 text-sm sm:text-base transition-colors hover:text-blue-600 focus:outline-none"
                >
                  <span>{`Q ${index + 1}. ${faq.q}`}</span>
                  
                  {/* Smooth 180-degree rotation classes applied here */}
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180 text-blue-600" : "rotate-0"
                    }`} 
                  />
                </button>

                {/* Dynamic Height Content Container wrapper */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="p-4 sm:p-5 bg-slate-50/50 text-slate-600 text-sm sm:text-base leading-relaxed text-justify flex items-start gap-2">
                    <span className="font-bold text-blue-600 shrink-0">Ans.</span>
                    <div>{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HowToApply;