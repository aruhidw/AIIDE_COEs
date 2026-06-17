import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import HowToApply from "./pages/HowToApply";
import Downloads from "./pages/Downloads";

// Fixed duplicate import issue: importing our data-structured component cleanly
import AboutUs from "./pages/AboutUs";
import GoverningBody from "./pages/GoverningBody";
import Courses from "./pages/Courses";
import AIDataScience from "./pages/AIDataScience";
import CheatSheets from "./pages/CheatSheets";
import MachineLearning from "./pages/MachineLearning";
import MSExcel from "./pages/MSExcel";
import PythonResources from "./pages/PythonResources";
import SQLResources from "./pages/SQLResources";
import FutureSkills from "./pages/FutureSkills";
import Webinars from "./pages/Webinars";
import Facilities from "./pages/Facilities";
import Resources from "./pages/Resources";
import AssetManagement from "./pages/AssetManagement";
import IncubationProgram from "./pages/IncubationProgram";
import MeetCohort from "./pages/MeetCohort";
import NewsEvents from "./pages/NewsEvents/NewsEvents";
import WebsiteLaunchDetail from "./pages/NewsEvents/WebsiteLaunchDetail";
import HealthcareWebinarDetail from "./pages/NewsEvents/HealthcareWebinarDetail";
import DataAiWebinar from "./pages/NewsEvents/DataAiWebinar";
import PartnerWithUs from "./pages/Partner/PartnerWithUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    
      <div className="bg-site-bg bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex flex-col">
        <Navbar />

       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/governing-body" element={<GoverningBody />} />

            <Route path="/knowledge-center" element={<Courses />} />
            <Route path="/ai-data-science" element={<AIDataScience />} />
            <Route path="/cheat-sheets" element={<CheatSheets />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/ms-excel" element={<MSExcel />} />
            <Route path="/python" element={<PythonResources />} />
            <Route path="/sql" element={<SQLResources />} />
            <Route path="/future-skills" element={<FutureSkills />} />
            <Route path="/webinars" element={<Webinars />} />

            <Route path="/facilities" element={<Facilities />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/asset-management" element={<AssetManagement />} />
            <Route path="/incubation-program" element={<IncubationProgram />} />
            <Route path="/meet-cohort" element={<MeetCohort />} />

            {/*  news and events  */}
            <Route path="/news-events" element={<NewsEvents />} />
            <Route
              path="/news-events/website-launch"
              element={<WebsiteLaunchDetail />}
            />
            <Route
              path="/news-events/healthcare-webinar"
              element={<HealthcareWebinarDetail />}
            />
            <Route
              path="/news-events/data-ai-webinar"
              element={<DataAiWebinar />}
            />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            {/* Updated the element here to use <AboutUs /> */}
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
