import React from "react";
import neeraj from "./Teamimage/mee.jpg";
import bhawani from "./Teamimage/Bhawani.jpeg";
import chintu from "./Teamimage/chintu.jpg";
import prashant from "./Teamimage/prashant.jpeg";
import rk from "./Teamimage/rk.jpeg";
import dfk from "./Teamimage/dfk.jpeg";

const TeamGrid = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={neeraj}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Neeraj Verma</h2>
          <p className="text-gray-600">CEO & Co-Founder</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={dfk}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Deepak Sharma
          </h2>
          <p className="text-gray-600">Co-Founder</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={rk}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Rakshit Verma
          </h2>
          <p className="text-gray-600">Business Development Manager</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src="https://storage.googleapis.com/a1aa/image/7LIf4gsvBDWffoDEXjrxi6XxbGnjd1ttUPDeBC3Ma7YfM1bcC.jpg"
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Namisha Rani</h2>
          <p className="text-gray-600">Chief Operating Officer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src="https://storage.googleapis.com/a1aa/image/7LIf4gsvBDWffoDEXjrxi6XxbGnjd1ttUPDeBC3Ma7YfM1bcC.jpg"
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Poonam Panchariya
          </h2>
          <p className="text-gray-600">HR & General Manager</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a blue shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={chintu}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Lalit Kumar</h2>
          <p className="text-gray-600">FullStack Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a white shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={bhawani}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Bhawani Shankar
          </h2>
          <p className="text-gray-600">FullStack Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a man in a white shirt"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src={prashant}
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Prashant Chaudhary
          </h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src="https://storage.googleapis.com/a1aa/image/l2H1FlrxJzrBJV80arWkmVfewVar5dvbn9bPyYwVxazopeGnA.jpg"
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Bhavik Duggal
          </h2>
          <p className="text-gray-600">BackEnd Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src="https://storage.googleapis.com/a1aa/image/l2H1FlrxJzrBJV80arWkmVfewVar5dvbn9bPyYwVxazopeGnA.jpg"
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Shubham Singh
          </h2>
          <p className="text-gray-600">FrontEnd Developer</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-lg">
          <img
            alt="Portrait of a woman in a black blazer"
            className="w-[300px] h-[300px] object-cover rounded-t-lg"
            src="https://storage.googleapis.com/a1aa/image/l2H1FlrxJzrBJV80arWkmVfewVar5dvbn9bPyYwVxazopeGnA.jpg"
            width="300"
            height="300"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">T. Sujith</h2>
          <p className="text-gray-600">FrontEnd Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
