import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navdetails from "./components/header_section/Navdetails";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/header_section/Navbar";
import Header from "./components/Header";
import MobileAppDevelopment from "./components/MobileApplicationDevelopmet/MobileApplicationDevelopment";
import Seo from "./components/SearchEngineOptimization/SearchEngineOptimization";
import WebsiteDevelopment from "./components/WebsiteDevelopment/WebsiteDevelopment";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import EcommerceSolutions from "./components/EcommerceWebsiteDevelopment/EcommerceWebsiteDevelopment";
import CustomDevelopment from "./components/CustomDevelopmentFeatures/CustomDevelopmentFeatures";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        {" "}
        {/* Add a class for styling */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Header />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Search-Engine-Optimization" element={<Seo />} />
          {/* <Route path="/AppStoreOptimization" element={<AppStoreOptimization />} /> */}
          {/* <Route path="/Ads(SocialMedia)" element={<SocialMediaAds />} /> */}
          {/* <Route path="/PosterDesign" element={<PosterDesign />} /> */}
          <Route path="/Website-Development" element={<WebsiteDevelopment />} />
          <Route
            path="/Mobile-Application-Development"
            element={<MobileAppDevelopment />}
          />
          <Route path="/Ecommerce-Solutions" element={<EcommerceSolutions />} />
          <Route
            path="/Software-Development"
            element={<SoftwareDevelopment />}
          />
          {/* <Route path="/IOSApplicationDevelopment" element={<IOSAppDevelopment />} /> */}
          <Route path="/Custom-Development" element={<CustomDevelopment />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

{
  /* <Route path="/Mobile-App-Development" element={<Mobileapp />} />
          <Route path="/Website-Development" element={<WebsiteDevelopment />} />
          <Route path="/Search-Engine-Optmization" element={<Seo />} />
          <Route
            path="/Software-Development"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/Ecommerce-Development"
            element={<EcommerceDevelopment />}
          /> */
}
