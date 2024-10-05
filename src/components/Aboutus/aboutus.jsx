import React from "react";
import Fullteam from "./Fullteam";
import Teamgrid from "./Teamgrid";
import Teamintro from "./Teamintro";
import Whychoose from "./WhyChooseUs";
import client from "./aboutImage/client.png";
import Retention from "./aboutImage/retention.png";
import business from "./aboutImage/buisness.png";
import Support from "./aboutImage/support.png";

const AboutUsSection = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Digital Solutions</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto">
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=1920&h=400')",
              opacity: 0.3,
            }}
          ></div>
          <div className="relative z-10 text-center py-20">
            <h2 className="text-xl text-gray-600 font-semibold">ABOUT US</h2>
            <h1 className="text-xl font-bold text-gray-900">
              CONVERT CHALLENGING PROBLEMS into
              <span className="text-pink-600"> DIGITAL SOLUTIONS </span>
            </h1>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  alt="Magnifying glass over a document"
                  className="mx-auto mb-4"
                  src={business}
                  width="100"
                  height="100"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  85% Business
                </h3>
                <p className="text-gray-500">Through Customer Referrals</p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  alt="Two chat bubbles"
                  className="mx-auto mb-4"
                  src={client}
                  width="100"
                  height="100"
                />
                <h3 className="text-xl font-bold text-gray-900">95% Client</h3>
                <p className="text-gray-500">Retention Rate</p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  alt="Rocket launching from a computer screen"
                  className="mx-auto mb-4"
                  src={Retention}
                  width="100"
                  height="100"
                />
                <h3 className="text-xl font-bold text-gray-900">
                  88% Retention
                </h3>
                <p className="text-gray-500">Rate of Tech Leads</p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  alt="Shield with a checkmark"
                  className="mx-auto mb-4"
                  src={Support}
                  width="100"
                  height="100"
                />
                <h3 className="text-xl font-bold text-gray-900">24x7</h3>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Teamintro />
      <Teamgrid />
      <Whychoose />
      <Fullteam />
    </>
  );
};

export default AboutUsSection;
