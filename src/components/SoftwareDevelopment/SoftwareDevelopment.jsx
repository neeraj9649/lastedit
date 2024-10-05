import React from "react";
import WhyChooseUs from "./WhyChooseUs";

function SoftwareDevelopment() {
  return (
    <div>
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
            <p className="text-sm text-gray-600">SERVICES</p>
            <h1 className="text-3xl font-bold text-gray-800">
              SOFTWARE DEVELOPMENT
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center py-16 px-4">
        <p className="text-pink-500 text-sm">WE ARE CREATIVE</p>
        <h2 className="md:text-5xl text-3xl  font-bold">
          <span className="gradient-text">Software</span> Development Company
        </h2>
        <p className="text-gray-600 mt-4 max-w-[80vw] mx-auto">
          Versai Technology offers a wide range of software development services
          which includes ERP, CRM and Banking softwares. We developed industry
          specific softwares for different enterprises and our clients have
          never complained about a single glitch, which is a very common thing
          in softwares.
        </p>
        <p className="text-gray-600 mt-4 max-w-[80vw] mx-auto">
          Our engineers have developed softwares with the most complex mechanism
          required for performing highly analytical jobs. Software development
          is already a complex job and specific requirements make it an uphill
          task. Instead of all these odds we have delivered projects which met
          all requirements within deadline.
        </p>
        <p className="text-gray-600 mt-4 max-w-[80vw] mx-auto">
          In the age of IT and ITES services, we have helped our clients by
          developing software that can help them interact with their customers,
          solve calculations, and even in fixing bugs. We have delivered highly
          customized programs deployable among large teams and units.
        </p>
        <p className="text-gray-600 mt-4 max-w-[80vw] mx-auto">
          We specialize in developing comprehensive software which can handle
          multi-tasking without errors. Our software development services have
          set benchmarks for many. It is not just us, but the claim is
          corroborated by our clients in their testimonials. We are proud to
          have such developers in our team.
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Services Section */}
        <div className="text-center mb-8">
          <h2 className="gradient-textt md:text-5xl text-3xl  font-bold">
            Our Services
          </h2>
          <p className="text-lg leading-relaxed mt-2">
            Softwares optimized for industry-specific operations which are
            configured, structured, and composed to meet all the requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-full">
                <i className="fas fa-laptop-code text-2xl text-gray-700"></i>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl text-left font-bold text-gray-900">
                SOFTWARE CONSULTING
              </h3>
              <p className="mt-2 text-lg text-left leading-relaxed">
                Our software consulting services stand out due to our deep
                expertise across various industries. We provide tailored
                guidance to help your business thrive, delivering the solutions
                you need for growth. If you're seeking expert software
                consulting, we have the knowledge and experience to support your
                goals.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-full">
                <i className="fas fa-envelope text-2xl text-gray-700"></i>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl text-left font-bold text-gray-900">
                ERP SOLUTION
              </h3>
              <p className="mt-2 text-lg text-left leading-relaxed">
                In today’s business landscape, ERP systems are essential for
                efficient operations. Our team of specialists can help you
                harness key insights from diverse business activities, enabling
                you to meet multiple objectives and drive rapid growth. Our ERP
                solutions enhance operational efficiency and enable businesses
                to achieve timely outcomes.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-full">
                <i className="fas fa-cloud text-2xl text-gray-700"></i>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-left text-gray-900">
                SAAS DEVELOPMENT
              </h3>
              <p className="mt-2 text-lg text-left leading-relaxed">
                Software as a Service (SaaS) is a modern subscription-based
                model for software applications. We design SaaS platforms that
                integrate essential business functions, such as database
                management, accounting, and virtualization, to streamline your
                operations and drive success.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-full">
                <i className="fas fa-envelope text-2xl text-gray-700"></i>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl text-left font-bold text-gray-900">
                CRM SOLUTIONS
              </h3>
              <p className="mt-2 text-lg text-left leading-relaxed">
                Customer relationship management (CRM) software is crucial for
                any organization that handles customer data or manages
                databases. We develop customized CRM solutions and provide
                strategies to help your business expand. Our expert team can
                enhance your software's multitasking capabilities, ensuring your
                systems operate efficiently.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-4 bg-gray-100 rounded-full">
                <i className="fas fa-envelope text-2xl text-gray-700"></i>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl text-left font-bold text-gray-900">
                ENTERPRISES SOLUTION
              </h3>
              <p className="mt-2 text-lg text-left  leading-relaxed">
                We deliver business-oriented tools and strategies designed to
                boost productivity and streamline processes. Our next-generation
                solutions cover areas like online payments, business process
                management, and IT service management. With customizable
                services tailored to your company's needs, we simplify even the
                most complex aspects of enterprise tools for smooth and
                efficient use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}

export default SoftwareDevelopment;
