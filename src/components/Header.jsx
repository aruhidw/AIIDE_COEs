import React from "react";

function Header({ title, subtitle = "", image }) {
  return (
    /* Outer padding wrapper: holds the component away from screen edges */
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      
      {/* Exact About Page background layout style */}
      <section 
        className="relative bg-[#012640] py-16 md:py-20 text-white overflow-hidden rounded-2xl shadow-md border border-slate-800 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Dark overlay & blur protection */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

        {/* Abstract grid structure */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Text Content Area */}
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          
          {/* TITLE: Controlled scaling across screen lengths to prevent over-sizing */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider drop-shadow-md max-w-3xl mx-auto leading-tight">
            {title}
          </h1>
          
          {/* SUBTITLE: Compact, secondary accent sizing */}
          {subtitle && (
            <p className="text-blue-400 font-semibold text-xs md:text-sm lg:text-base tracking-widest uppercase mt-3 max-w-2xl mx-auto drop-shadow-sm">
              {subtitle}
            </p>
          )}
          
          {/* Decorative bar spacer */}
          <div className="mt-4 h-1 w-16 bg-blue-500 mx-auto rounded-full shadow-sm" />
        </div>
      </section>

    </div>
  );
}

export default Header;