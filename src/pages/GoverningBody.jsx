import React from "react";
import Header from "../components/Header";
const PRIORITY_MEMBERS = [
  {
    name: "Prof. Tarun Gupta",
    designation: "Dean Research & Development, IIT Kanpur",
    image: "Prog-Tarun-Gupta.png",
  },
  {
    name: "Sri Ravi Ranjan",
    designation:
      "IAS - Managing Director, Uttar Pradesh Electronics Corporation Limited",
    image: "Ravi-Ranjan-IAS-UP.png",
  },
  {
    name: "Dr. Arun Mohan Sherry",
    designation: "Director, IIIT Lucknow",
    image: "arunsherry.png",
  },
];

const REMAINING_MEMBERS = [
  {
    name: "Dr. Nalin Shrivastava",
    designation:
      'Scientist "D" Ministry of Electronics and Information Technology',
    image: "Nalin-Srivastava.png",
  },
  {
    name: "Ms. Anna Roy",
    designation: "Senior Advisor, NITI Aayog",
    image: "Msannaroy.png",
  },
  {
    name: "Shri Rishi Gupta",
    designation: "Director and COO, HP Enterprise India",
    image: "rishi_.png",
  },
  {
    name: "Shri Ankush Tiwari",
    designation: "Co-founder and CTO Mobiliya",
    image: "ankushtiwari.png",
  },
];

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center justify-between text-center transform hover:-translate-y-1.5 transition-all duration-300 h-full">
      {/* Profile Image Wrapper */}
      <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-blue-100 bg-white shadow-md flex items-center justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-all duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://cdn-icons-png.flaticon.com/512/149/149071.png";
          }}
        />
      </div>

      <div className="flex-grow flex flex-col justify-start">
        <strong className="text-[#012640] text-base md:text-lg font-bold block tracking-wide mb-1.5">
          {member.name}
        </strong>
        <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
          {member.designation}
        </p>
      </div>
    </div>
  );
};

const GoverningBody = () => {
  return (
    <div className="text-slate-800 min-h-screen font-sans selection:bg-blue-500 selection:text-white bg-slate-50/30">
      <Header
        title="Governing Body"
        subtitle="AIIDE – Center of Excellence Board of Directors"
        image="/aiide_banner.webp"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto justify-center">
            {PRIORITY_MEMBERS.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-200 w-full max-w-5xl mx-auto" />

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
            {REM_MEMBERS_MAP}
          </div>
        </div>
      </main>
    </div>
  );
};

const REM_MEMBERS_MAP = REMAINING_MEMBERS.map((member, index) => (
  <MemberCard key={index} member={member} />
));

export default GoverningBody;
