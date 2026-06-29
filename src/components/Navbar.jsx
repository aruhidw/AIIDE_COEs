import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";

const AIIDENavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;
  const isGroupActive = (...paths) => paths.some((p) => pathname === p);

  const desktopLink = (path) =>
    `transition uppercase ${
      isActive(path)
        ? "text-blue-400 border-b-2 border-blue-400 pb-0.5"
        : "hover:text-blue-400"
    }`;

  const dropdownItem = (path) =>
    `block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition ${
      isActive(path) ? "bg-blue-50 text-blue-600 font-semibold" : ""
    }`;

  const mobileLink = (path) =>
    `border-b border-gray-100 pb-1 ${isActive(path) ? "text-blue-600" : ""}`;

  const mobileDropdownItem = (path) =>
    isActive(path) ? "text-blue-600 font-semibold" : "";

  return (
    <>
      <div className="w-full bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
          <div className="flex flex-row items-center justify-center gap-8 md:gap-10">
            <div className="flex items-center transition hover:opacity-90">
              <img src="/siic_logo_.png" alt="SIIC & IIT Kanpur" className="h-12 lg:h-18 object-contain transition-all" />
            </div>
            <div className="flex items-center transition hover:opacity-90">
              <img src="/AIIDE-Logo.png" alt="AIIDE CoE" className="h-12 lg:h-18 object-contain transition-all" />
            </div>
            <div className="flex items-center gap-4 md:gap-6 transition hover:opacity-90">
              <img src="/FICCI_logo.png" alt="FICCI" className="h-10 lg:h-14 object-contain transition-all" />
              <img src="/startinup.png" alt="StartInUP" className="h-10 lg:h-14 object-contain transition-all" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-[#012640] shadow-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2.5 flex items-center justify-between">

          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-white text-[11px] xl:text-xs font-bold tracking-wider">

            <Link
              to="/"
              className={`transition pr-1 flex items-center ${isActive("/") ? "text-blue-400" : "hover:text-blue-400"}`}
            >
              <Home size={16} strokeWidth={2.5} />
            </Link>

            <div className="relative group py-2">
              <button
                className={`transition flex items-center gap-1 uppercase ${
                  isGroupActive("/about", "/governing-body") ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                ABOUT US
                <ChevronDown size={12} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white text-black min-w-[200px] shadow-xl rounded-md py-2 mt-0 border border-gray-100">
                <Link to="/about" className={dropdownItem("/about")}>About Us</Link>
                <Link to="/governing-body" className={dropdownItem("/governing-body")}>Governing Body</Link>
              </div>
            </div>

            <div className="relative group py-2">
              <button
                className={`transition flex items-center gap-1 uppercase ${
                  isGroupActive("/knowledge-center", "/facilities", "/resources") ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                KNOWLEDGE CENTER
                <ChevronDown size={12} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white text-black min-w-[200px] shadow-xl rounded-md py-2 mt-0 border border-gray-100">
                <Link to="/knowledge-center" className={dropdownItem("/knowledge-center")}>Courses</Link>
                <Link to="/facilities" className={dropdownItem("/facilities")}>Facilities</Link>
                <Link to="/resources" className={dropdownItem("/resources")}>Resources</Link>
              </div>
            </div>

            <Link to="/asset-management" className={desktopLink("/asset-management")}>ASSET MANAGEMENT</Link>
            <Link to="/incubation-program" className={desktopLink("/incubation-program")}>INCUBATION PROGRAM</Link>
            <Link to="/meet-cohort" className={desktopLink("/meet-cohort")}>MEET THE COHORT</Link>
            <Link to="/news-events" className={desktopLink("/news-events")}>NEWS &amp; EVENTS</Link>
            <Link to="/partner-with-us" className={desktopLink("/partner-with-us")}>PARTNER WITH US</Link>
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://aiidecoe.accubate.app/user/login"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-[11px] font-bold tracking-wider transition"
            >
              LOGIN
            </a>
            <a
              href="https://aiidecoe.accubate.app/ext/form/2887/1/apply"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-[11px] font-bold tracking-wider transition"
            >
              APPLY
            </a>
          </div>

          <div className="w-full lg:hidden flex items-center justify-between">
            <Link to="/" className={`flex items-center ${isActive("/") ? "text-blue-400" : "text-white"}`}>
              <Home size={18} />
            </Link>
            <button
              className="text-white focus:outline-none p-1 hover:text-blue-400 transition"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <span className="font-bold text-[#012640] text-sm tracking-wide">MENU</span>
          <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-black focus:outline-none p-1">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 gap-5 overflow-y-auto h-[calc(100%-80px)] text-[#012640] font-bold text-xs tracking-wide">

          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className={`py-1 border-b border-gray-100 flex items-center gap-2 ${isActive("/") ? "text-blue-600" : ""}`}
          >
            <Home size={14} /> <span>HOME</span>
          </Link>

          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`w-full flex justify-between items-center py-1 border-b border-gray-100 text-left ${
                isGroupActive("/about", "/governing-body") ? "text-blue-600" : ""
              }`}
            >
              <span>ABOUT US</span>
              <ChevronDown size={14} className={`transform transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="flex flex-col gap-3 mt-3 ml-4 text-[11px] font-medium text-gray-600">
                <Link to="/about" onClick={() => setMobileOpen(false)} className={mobileDropdownItem("/about")}>About Us</Link>
                <Link to="/governing-body" onClick={() => setMobileOpen(false)} className={mobileDropdownItem("/governing-body")}>Governing Body</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setKnowledgeOpen(!knowledgeOpen)}
              className={`w-full flex justify-between items-center py-1 border-b border-gray-100 text-left ${
                isGroupActive("/knowledge-center", "/facilities", "/resources") ? "text-blue-600" : ""
              }`}
            >
              <span>KNOWLEDGE CENTER</span>
              <ChevronDown size={14} className={`transform transition-transform ${knowledgeOpen ? "rotate-180" : ""}`} />
            </button>
            {knowledgeOpen && (
              <div className="flex flex-col gap-3 mt-3 ml-4 text-[11px] font-medium text-gray-600">
                <Link to="/knowledge-center" onClick={() => setMobileOpen(false)} className={mobileDropdownItem("/knowledge-center")}>Courses</Link>
                <Link to="/facilities" onClick={() => setMobileOpen(false)} className={mobileDropdownItem("/facilities")}>Facilities</Link>
                <Link to="/resources" onClick={() => setMobileOpen(false)} className={mobileDropdownItem("/resources")}>Resources</Link>
              </div>
            )}
          </div>

          <Link to="/asset-management" onClick={() => setMobileOpen(false)} className={mobileLink("/asset-management")}>
            ASSET MANAGEMENT
          </Link>
          <Link to="/incubation-program" onClick={() => setMobileOpen(false)} className={mobileLink("/incubation-program")}>
            INCUBATION PROGRAM
          </Link>
          <Link to="/meet-cohort" onClick={() => setMobileOpen(false)} className={mobileLink("/meet-cohort")}>
            MEET THE COHORT
          </Link>
          <Link to="/news-events" onClick={() => setMobileOpen(false)} className={mobileLink("/news-events")}>
            NEWS &amp; EVENTS
          </Link>
          <Link to="/partner-with-us" onClick={() => setMobileOpen(false)} className={mobileLink("/partner-with-us")}>
            PARTNER WITH US
          </Link>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <a
              href="https://aiidecoe.accubate.app/user/login"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white text-center py-2.5 rounded text-xs font-bold transition active:bg-blue-700"
            >
              LOGIN
            </a>
            <a
              href="https://aiidecoe.accubate.app/ext/form/2887/1/apply"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white text-center py-2.5 rounded text-xs font-bold transition active:bg-blue-600"
            >
              APPLY
            </a>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default AIIDENavbar;
