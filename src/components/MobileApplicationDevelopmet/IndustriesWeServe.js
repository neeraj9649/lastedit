import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InddustriesWeServe = () => {
  const industries = [
    { name: 'Real Estate App', icon: 'https://placehold.co/50x50?text=Real+Estate' },
    { name: 'Tour & Travels App', icon: 'https://placehold.co/50x50?text=Tour+%26+Travels' },
    { name: 'Education App', icon: 'https://placehold.co/50x50?text=Education' },
    { name: 'Transport App', icon: 'https://placehold.co/50x50?text=Transport' },
    { name: 'Event App', icon: 'https://placehold.co/50x50?text=Event' },
    { name: 'E-Commerce App', icon: 'https://placehold.co/50x50?text=E-Commerce' },
    { name: 'Game App', icon: 'https://placehold.co/50x50?text=Game' },
    { name: 'Healthcare App', icon: 'https://placehold.co/50x50?text=Healthcare' },
    { name: 'Finance App', icon: 'https://placehold.co/50x50?text=Finance' },
    { name: 'Restaurant App', icon: 'https://placehold.co/50x50?text=Restaurant' },
    { name: 'On-Demand App', icon: 'https://placehold.co/50x50?text=On-Demand' },
    { name: 'Grocery App', icon: 'https://placehold.co/50x50?text=Grocery' },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-pink-100 font-nunito min-h-screen w-full flex flex-col items-center justify-center">
      <h2 className="text-pink-500 text-sm">WE HAVE WORKED ACROSS MULTIPLE INDUSTRIES</h2>
      <h1 className="text-4xl font-bold text-blue-900 mt-2">Industries We Serve</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 px-4">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center">
            <img src={industry.icon} alt={`${industry.name} icon`} className="w-12 h-12 mr-4" />
            <span className="text-blue-900 font-semibold">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InddustriesWeServe;
