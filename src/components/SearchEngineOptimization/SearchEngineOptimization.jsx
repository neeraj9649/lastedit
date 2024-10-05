
import React from "react";
import WhyWorkWithUs from "./WhyWorkWithUs";

function SearchEngineOptimization() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1920&h=400')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-600">DIGITAL MARKETING</p>
            <h1 className="text-3xl font-bold text-gray-800">SEO SERVICES</h1>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="flex justify-center px-2 py-12">
        <div className="w-full lg:w-2/3 text-center">
          <div className="common-heading">
            <h2 className="text-5xl font-bold mt-10">
              Search <span className="gradient-text">Engine</span> Optimization
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-lg">
            Search Engine Optimization (SEO): Our SEO services assist you in
            reaching out to your target audience and achieving a high ranking on
            the internet. Our SEO experts ensure that your company's name
            appears at the top of search engine results pages, resulting in more
            sales or leads.
          </p>

          <p className="mt-6 text-gray-700 text-lg">
            Over the years, Versai Technology has developed a solid,
            results-oriented SEO process that has increased the visibility of
            all of our customers around the world in search engines. We only
            mean the best White Hat SEO services that provide customers with the
            highest rankings when we say SEO. We are vehemently opposed to black
            hat SEO tactics.
          </p>

          <p className="mt-6 text-gray-700 text-lg">
            We understand that finding the right SEO company to help your
            company reach new heights isn't always easy. However, we can assure
            you that Versai Technology is the best SEO company in India and
            Dubai for various reasons that you will quickly learn about. Whether
            you are a budding entrepreneur or a well-established business, we
            guarantee that we will assist you.
          </p>
          <p className="mt-6 text-gray-700 text-lg">
            Everyone has heard of SEO, and some even know how to use it
            effectively in a growing company. However, one aspect of SEO remains
            a mystery: the algorithm's ever-changing nature. No one knows
            exactly how it works. Experts with years of experience, on the other
            hand, can deduce how to use it to your company's maximum advantage.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Why Is <span className="text-pink-600">SEO Essential for Growing Businesses?</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="flex items-start mb-8 mt-8">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                            <i className="fas fa-chart-line text-2xl text-gray-700"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Boost your search engine ranking</h2>
                            <p className="text-gray-700 mt-2 text-lg">
                                SEO optimizes the pages of your website as per the search preferences of visiting traffic. It also helps in increasing your site's domain authority while achieving top ranking in organic search results.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start mb-8">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                            <i className="fas fa-user-friends text-2xl text-gray-700"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Improved user experience</h2>
                            <p className="text-gray-700 mt-2 text-lg">
                                Mobile-friendly designs and responsive web pages improve the user experience, which helps your website rank well in search engines.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start mb-8">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                            <i className="fas fa-handshake text-2xl text-gray-700"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Boost your credibility</h2>
                            <p className="text-gray-700 mt-2 text-lg">
                                SEO helps to highlight your site at the top of search results, thus making you appear trustworthy, and buyers prefer to visit trusted websites.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <img 
                        src="https://placehold.co/600x400" 
                        alt="A group of people in a modern office setting, discussing and presenting ideas" 
                        className="rounded-lg shadow-lg mb-8" 
                    />
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-md mr-4">
                            <i className="fas fa-search text-2xl text-gray-700"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Strategizing what works and what not</h2>
                            <p className="text-gray-700 mt-2">
                                SEO can track customers' keywords and their search patterns. This data is helpful to customize the content and offerings to match the customers' needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
        <WhyWorkWithUs/>

    </div>
  );
}

export default SearchEngineOptimization;


