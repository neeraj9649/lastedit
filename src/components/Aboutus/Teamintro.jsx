import React from "react";
import { Helmet } from "react-helmet";

function OurTeam() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Team</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Helmet>
      <div className="bg-white text-gray-800">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
            OurTeam
          </h1>
          <p className="text-gray-600 mb-4">
            At <b>Versai Tech Solutions </b>, we are passionate about
            transforming challenges into innovative tech solutions. Our diverse
            team of experts brings together a wealth of experience in software
            development, consulting, and systems integration. We are committed
            to understanding our clients' unique needs and delivering tailored
            solutions that drive growth and efficiency. With a focus on
            cutting-edge technologies and a client-centered approach, we strive
            to empower businesses to thrive in an ever-evolving digital
            landscape. Together, we are dedicated to shaping the future of
            technology, one solution at a time.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src="https://placehold.co/300x400"
                alt="Portrait of a person standing outdoors, wearing a dark blue shirt and smiling"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
