import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header
        title="Artificial Intelligence and Innovation Driven Entrepreneurship"
        image="/aiide_banner.webp"
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://aiidecoe.accubate.app/ext/form/207/1/apply"
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="p-6 text-center">
                <img
                  src="/checklistimg.png"
                  alt=""
                  className="h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-800">
                  Apply For Enrollment
                </h3>
              </div>
            </a>

            <Link
              to="/timeline"
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="p-6 text-center">
                <img src="/timeline.png" alt="" className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800">Timeline</h3>
              </div>
            </Link>

            <Link
              to="/how-to-apply"
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="p-6 text-center">
                <img
                  src="/checklist.png"
                  alt=""
                  className="h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-800">How To Apply</h3>
              </div>
            </Link>

            <Link
              to="/downloads"
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition duration-300"
            >
              <div className="p-6 text-center">
                <img src="/file.png" alt="" className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800">Downloads</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
           
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-blue-100 shadow-xl">
              <h2 className="text-3xl font-bold text-[#012640] mb-6">
                About Us
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                Artificial Intelligence and Innovation Driven Entrepreneurship
                Center of Excellence (AIIDE-CoE) provides mentorship, networking
                opportunities, training, infrastructure, research support and
                funding opportunities for startups.
              </p>

              <p className="text-gray-700 leading-8 mb-6">
                AIIDE-CoE brings together experts, researchers, academicians,
                professors and entrepreneurs on a common platform to collaborate
                and innovate.
              </p>

              <Link
                to="/about"
                className="inline-block bg-[#012640] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Read More →
              </Link>
            </div>

           
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-blue-100 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-[#012640]">Events</h2>

                <Link
                  to="/news-events"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  All Events →
                </Link>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src="/imginfo.png"
                  alt="Events Overview Banner"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
