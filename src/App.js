import "./App.css";

import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

// import Events from "./Pages/Events";
// import Campus from "./Pages/Campus";

// import Matrimonial from "./Pages/Matrimonial";
// import Travel from "./Pages/Travel";

// import Fashion from "./Pages/Fashion";
// import Health from "./Pages/Health";
// import Realestate from "./Pages/Realestate";
// import Auto from "./Pages/Auto";
// import Immigiration from "./Pages/Immigiration";
// import ITSystems from "./Pages/ITSystems";
// import IntakePortal from "./Pages/IntakePortal";
// import AdminPortal from "./Pages/AdminPortal";

import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
// import Food from "./Pages/Food";
// import Culture from "./Pages/Culture";
import { GeoLocationProvider } from "./Components/GeoLocation";
import { FlagProvider } from "./Components/FlagContext";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import EventDetail from "./Components/EventDetail";
import Sports from "./Pages/Sports";
import IntakePortal from "./Components/IntakePortal";
import Entertainment from "./Pages/Entertainment";
import SportsDetail from "./Components/SportsDetail";
import MovieDetails from "./Components/MovieDetails";
import Health from "./Pages/Health";
import HealthDetails from "./Pages/HealthDetails";
import Footer from "./Components/Footer";
import MarketingPolicy from "./Pages/MarketingPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import MasterDetails from "./Components/MasterDetails";
import USFootball from "./Pages/USFootball";
import AndraFlood from "./Pages/AndraFlood";
import AndhraFloodDetails from "./Pages/AndhraFloodDetails";
import USOpenTennis from "./Components/USOpenTennis";
import TennisDetails from "./Components/TennisDetails";
import Cricket from "./Pages/Sports/Cricket";
import Rugby from "./Pages/Sports/Rugby";
import Chess from "./Pages/Sports/Chess";
import NBA from "./Pages/Sports/NBA";
import NFL from "./Pages/Sports/NFL";
import Hockey from "./Pages/Sports/Hockey";
import Golf from "./Pages/Sports/Golf";
import Sportss from "./Pages/Sportss";
import Blogs from "./Pages/Blogs";
import BlogDetails from "./Pages/BlogDetails";
import BlogForm from "./Pages/BlogForm";
import AchievementsTimeline from "./Components/Rattantata";
import Immigiration from "./Pages/Immigiration";
import ImmigrationDetail from "./Pages/ImmigirationDetails";
import Technology from "../src/Pages/Technology/Technology";
import ImmigirationVisa from "./Pages/Technology/ImmigirationVisa";
import CodeToInnerHTMLConverter from "./Pages/test";
import Immusa from "./Pages/Technology/Immusa";
import AustralianImmigrationGuidelines from "./Pages/Technology/immaus";
import UKVisaGuidelines from "./Pages/Technology/immuk";
import NewZealandImmigrationGuidelines from "./Pages/Technology/immnw";
import NetherlandsImmigrationGuidelines from "./Pages/Technology/immnl";
import CanadaImmigrationGuidelines from "./Pages/Technology/immca";
import JapanImmigrationGuidelines from "./Pages/Technology/immjp";
import SwitzerlandImmigrationGuidelines from "./Pages/Technology/immsl";
import GermanyImmigrationGuidelines from "./Pages/Technology/immgy";
import USImmigrationGuidelines from "./Pages/Technology/Immusa";
import Auto from "./Pages/Technology/Auto";

// import LocalEventDetail from "./Components/LocalEventDetail";
// import HealthDetails from "./Pages/HealthDetails";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://ayg.s3.us-east-2.amazonaws.com/bharat/WhatsApp+Image+2024-08-21+at+10.57.37+PM.jpeg",
    "https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0060.jpg",
    "https://ayg.s3.us-east-2.amazonaws.com/bharat/WhatsApp+Image+2024-08-21+at+10.57.37+PM.jpeg",
    "https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0059.jpg",
    "https://ayg.s3.us-east-2.amazonaws.com/bharat/IMG-20240821-WA0058.jpg",
  ];

  // useEffect hook to handle image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index, reset to 0 if it exceeds the number of images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  });

  const style = {
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased", // Use Webkit prefix
    MozOsxFontSmoothing: "grayscale", // Add this for Firefox
    backgroundColor: "white", //#e6e7ea
  };

  return (
    <div className="App" style={style}>
      <GeoLocationProvider>
        <FlagProvider>
          <BrowserRouter>
            {/* ............Banner Advertisement...................... */}
            <section style={{ backgroundColor: "rgb(238, 238, 238" }}>
              <Link to="https://forms.gle/YZ8rr4Dzpwi4R3An7">
                <Image
                  className="mx-auto d-block pt-4 pb-3"
                  src={images[currentImageIndex]}
                  fluid
                />
              </Link>
            </section>

            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/intake" element={<IntakePortal />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="home/events/:id" element={<EventDetail />} />
              <Route path="/news/:id" element={<MasterDetails />} />
              <Route path="/tennis/:id" element={<TennisDetails />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/sports/:id" element={<SportsDetail />} />
              <Route path="home/sports/:id" element={<SportsDetail />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route
                path="/entertainment/movies/:id"
                element={<MovieDetails />}
              />
              <Route path="/health" element={<Health />} />
              <Route path="/health/:id" element={<HealthDetails />} />
              <Route path="/marketing-policy" element={<MarketingPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/us-college-football" element={<USFootball />} />
              <Route path="/us-open-tennis" element={<USOpenTennis />} />
              <Route path="/cricket" element={<Cricket />} />
              <Route path="/rugby" element={<Rugby />} />
              <Route path="/chess" element={<Chess />} />
              <Route path="/golf" element={<Golf />} />
              <Route path="/nba" element={<NBA />} />
              <Route path="/nfl" element={<NFL />} />
              <Route path="/hockey" element={<Hockey />} />
              <Route
                path="/Andhra-pradesh-heavy-rain"
                element={<AndraFlood />}
              />
              <Route
                path="/andhrapradesh-flood-sep-1-2"
                element={<AndhraFloodDetails />}
              />
              <Route path="/ratan-tata" element={<AchievementsTimeline />} />
              <Route path="/sportss" element={<Sportss />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-details/:id" element={<BlogDetails />} />
              <Route path="/blog-intake" element={<BlogForm />} />
              <Route path="/technology/*" element={<Technology />} />
              <Route path="/immigiration" element={<Immigiration />} />
              <Route
                path="/immigration-details/:id"
                element={<ImmigrationDetail />}
              />
              <Route
                path="/immigiration/india"
                element={<ImmigirationVisa />}
              />
              <Route
                path="/immigiration/usa"
                element={<USImmigrationGuidelines />}
              />
              <Route path="/immigiration/uk" element={<UKVisaGuidelines />} />
              <Route
                path="/immigiration/australia"
                element={<AustralianImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/NewZealand"
                element={<NewZealandImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/Netherlands"
                element={<NetherlandsImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/canada"
                element={<CanadaImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/japan"
                element={<JapanImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/Switzerland"
                element={<SwitzerlandImmigrationGuidelines />}
              />
              <Route
                path="/immigiration/germany"
                element={<GermanyImmigrationGuidelines />}
              />
              <Route path="/test" element={<CodeToInnerHTMLConverter />} />
              <Route path="/auto" element={<Auto />} />
              {/* 
              <Route path="/campus" element={<Campus />} />
             
              <Route
                path="/entertainment/localEvent/:eventId"
                element={<LocalEventDetail />}
              />
              <Route
                path="/entertainment/movies/:eventId"
                element={<MovieDetails />}
              />
              <Route path="/matrimonial" element={<Matrimonial />} />
              <Route path="/travel" element={<Travel />} />
             
              <Route path="/sports/:id" element={<SportsDetail />} />
              <Route path="/fashion" element={<Fashion />} />
             
              <Route path="/realestate" element={<Realestate />} />
              <Route path="/auto" element={<Auto />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/food" element={<Food />} />
              <Route path="/immigiration" element={<Immigiration />} />
              <Route path="/itsystems" element={<ITSystems />} />
              <Route path="/intake" element={<IntakePortal />} />
              <Route path="/adminportal" element={<AdminPortal />} /> */}
            </Routes>
            <Footer />
          </BrowserRouter>
        </FlagProvider>
      </GeoLocationProvider>
    </div>
  );
}

export default App;
