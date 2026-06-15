import React from "react";

// 1. Core Contact & Link Data structured at the top for easy maintenance
const CONTACT_INFO = {
  address: "IIT Kanpur Outreach Center, FIRST Innovation Hub 1 (2nd floor), C-20/1A/8 Block C, Sector 62 Noida, Pin Code - 201309",
  email: "aiidecoemailbox@gmail.com",
  phone: "01203678725",
  grievanceLink: "https://aiidecoe.accubate.app/ext/grievance/register",
  faqLink: "https://aiidecoe.com/Howtoapply.php#FAQ",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.1590151832!2d77.3577253!3d28.613581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x889c998c126ad68c!2sIndian%20Institute%20of%20Technology%20Kanpur%20Outreach%20Center!5e0!3m2!1sen!2sin!4v1637050865763!5m2!1sen!2sin"
};

function Footer() {
  return (
    // Replaced background with your custom branding color (#012640) and kept it relative z-40
    <footer className="w-full bg-[#012640] text-slate-400 border-t border-slate-800 pt-16 pb-8 relative z-40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12 text-left">
          
          {/* Column 1: Location Address */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-4 tracking-wide">Locate Us</h5>
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">Address:</span>
              {CONTACT_INFO.address}
            </p>
          </div>

          {/* Column 2: Contact Information & Interactive Action CTA Buttons */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-4 tracking-wide">Contact Us</h5>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-slate-300">Email ID:</span>{" "}
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-300">Phone:</span>{" "}
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>

            {/* Quick Navigation Action Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href={CONTACT_INFO.grievanceLink} 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-500 transition-colors text-center flex-1"
              >
                Grievance
              </a>
              <a 
                href={CONTACT_INFO.faqLink} 
                className="px-4 py-2 bg-slate-800 text-white border border-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-700 transition-colors text-center flex-1"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Column 3: Live Embedded Google Map Frame */}
          <div className="w-full h-44 rounded-xl overflow-hidden shadow-md border border-slate-800">
            <iframe 
              src={CONTACT_INFO.mapEmbedUrl} 
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              allowFullScreen="" 
              loading="lazy"
              title="IIT Kanpur Noida Outreach Map location"
            />
          </div>
        </div>

        {/* Bottom Copyright Row using native dynamic year generation */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="font-medium tracking-wide">
            © {new Date().getFullYear()} AIIDE-CoE. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}

export default Footer;