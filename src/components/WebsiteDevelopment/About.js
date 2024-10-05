import React from "react";
import dotBg from './Images/shape/dot_bg.png'
const About = () => {
  return (
    <section className="about-agency relative overflow-hidden px-4 md:px-8 lg:px-36 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 text-center">
            <div className="common-heading">
              <span className=" sm:text-lg font-semibold text-2xl md:text-3xl lg:text-4xl text-[#e6047b]">We Are Creative</span>
              <h2 className="mb-4 mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">Website Development Company</h2>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-left text-[#736a8e]">
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Versai Technology is a leading web development company that provides high-quality services. The websites we've built are not only visually appealing, but they also provide all of the information a user needs. Using a user's perspective, we design the layout of the web pages.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Despite the fact that we place a high value on user convenience, we design our websites to meet the specific needs of our clients and deliver exactly what they expect. The tiniest details are taken care of by our highly skilled team, and there is no room for error.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              We don't like to brag about our abilities, but our clients are more than happy to do so. The projects we've completed so far are flawless examples of craftsmanship and precision. As long as we stick to the fundamentals, we'll let the innovative side grow.
            </p>
            <p className="mb-4 text-sm sm:text-base md:text-lg">
              Users can expect a mix of innovation and familiarity in our work. When it comes to their work, our team of expert web developers and designers has no fear. We've completed some of the most difficult projects in our history, and it's in our nature to take on new challenges and then succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${dotBg})` }}></div>
    </section>
  );
};

export default About;
