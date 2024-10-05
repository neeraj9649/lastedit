import React from "react";

const YourComponent = () => {
  return (
    <div className="bg-gray-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
            <div className="absolute top-0 left-0 w-48 h-48 bg-pink-100 rounded-full -z-10"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 -z-20"></div>
            <div className="relative">
              <img
                alt="Group of people having a discussion in an office setting"
                className="rounded-lg shadow-lg mb-4"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/jeZ4QLEd1JzEOKM12qMK5olmKFNLbnrRxz1hUvLiPXeWRfGnA.jpg"
                width="400"
              />
              <img
                alt="Group of people sitting on stairs and smiling"
                className="rounded-lg shadow-lg absolute bottom-0 left-0 transform -translate-x-16 translate-y-16"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/f97FeQecPCSdsJyhr6UCaNYwoRXWNExFfVfB6DOUChquK6bcC.jpg"
                width="300"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              We Work for
              <span className="text-pink-500"> Your Success</span>
            </h1>
            <p className="text-gray-700 mb-4">
              <strong>Blockchain technology</strong> has witnessed an
              unprecedented surge in demand after its introduction as a shared
              and secured ledger for Bitcoin by Satoshi Nakamoto. Currently it’s
              sweeping the business domains across the globe due to its
              revolutionary nature of simplifying processes while making them
              transparent, immutable, and secure.
            </p>
            <p className="text-gray-700 mb-4">
              Business sectors such as Business administration, Business order
              tracking, Supply chain, Banking and Finance, E-learning,
              Healthcare, Online shopping portals, Insurance, Travel, Music,
              Renewable energy, Contract validation, Real Estate, Government
              Services, and many other day-to-day transactions are rapidly
              turning towards Blockchain as a solution for problems that
              persisted for long with little feasible solutions.
            </p>
            <p className="text-gray-700">
              Versai Technology (OPC) Private Limited is one of the pioneers of
              providing Blockchain services and solutions. We understand the
              ever-growing demands for decentralized ecosystems that are driving
              today’s enterprises. Hence, we offer solutions that perfectly
              match the need for innovation and support for sustained growth
              across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
