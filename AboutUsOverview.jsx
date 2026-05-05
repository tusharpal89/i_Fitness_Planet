import React from "react";

const AboutUsOverview = () => {
  return (
    <section className="w-full bg-black text-white py-16">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE (TEXT) */}
        <div className="space-y-5">
          
          <p className="text-pink-600 font-semibold tracking-wide">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            WE DON’T JUST BUILD BODIES,
            <br />
            WE BUILD CONFIDENCE.
          </h2>

          <div className="w-12 h-3px bg-pink-600"></div>

          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            At I Fitness Planet, we believe fitness is a lifestyle.
            Our mission is to provide the right environment,
            support, and knowledge to help you achieve
            your fitness goals and maintain a healthier,
            happier life.
          </p>

          <button className="mt-4 border border-pink-600 px-6 py-3 rounded-md hover:bg-pink-600 transition">
            READ MORE
          </button>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-full h-350px md:h-450px">
          
          {/* Replace image src */}
          <img
            src="/Girl_latpull_down.png"
            alt="About Gym"
            className="w-full h-full object-cover rounded-lg border border-zinc-800 shadow-lg"
          />
          
        </div>

      </div>
    </section>
  );
};

export default AboutUsOverview;