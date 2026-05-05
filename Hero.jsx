import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] bg-black text-white flex items-center">
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SECTION (TEXT) */}
        <div className="space-y-4">
          
          <p className="text-gray-400 font-semibold tracking-widest ">
            WELCOME TO
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 leading-tight">
            I FITNESS <br /> PLANET
          </h1>

          <div className="w-12 h-3px bg-pink-600"></div>

          <h3 className="text-white text-lg md:text-xl font-semibold">
            STRONGER BODY. STRONGER YOU.
          </h3>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Join a community that motivates, supports,
            and helps you become the best version of yourself.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md font-semibold transition">
              JOIN NOW
            </button>

            <button className="border border-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition">
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="w-full h-50 md:h-125 md:w-160 ">
          {/* YOU WILL ADD IMAGE HERE */}
          {/* Example: */}
          {
          <img
            src="/hero-bg2.png"
            alt="hero"
            className="w-full h-full object-cover"
          />
          }
        </div>

      </div>
    </section>
  );
};

export default Hero;