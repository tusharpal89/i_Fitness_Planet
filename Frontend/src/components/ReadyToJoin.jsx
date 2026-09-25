import React from "react";

const ReadyToJoin = () => { 
  return (
    <section
      className="w-full h-80 sm:h-40 bg-cover bg-center"
      style={{
        backgroundImage: "url('/ready-bg.png')"
      }}
    >
     <hr className="h-0.5 border-zinc-200 w-full" />

      {/* DARK OVERLAY */}
      <div className="w-full py-4 md:py-2 px-4 md:pr-10">
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 text-white">
            
            {/* LOGO */}
            <img
              src="/ifp_icon.png"
              alt="ifp"
              className="w-35 sm:w-28 md:w-55 object-contain md:-ml-15"
            />

            {/* TEXT */}
            <div >
              <p className="text-lg sm:text-lg md:text-4xl font-semibold text-gray-300">
                READY TO TAKE THE FIRST STEP?
              </p>

              <h2 className="text-lg sm:text-lg md:text-3xl font-bold text-pink-600">
                JOIN I FITNESS PLANET TODAY!
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
            
            {/* ARROWS */}
            <img
              src="/rightArrow.png"
              alt="arrow"
              className="hidden sm:block md:block w-34 sm:w-36 md:w-56 opacity-70"
            />

            {/* BUTTON */}
            <button className="w-27 sm:w-40 md:w-42 h-11 md:h-12 bg-pink-600 hover:bg-pink-700 rounded-md font-semibold text-white transition">
              JOIN NOW
            </button>
          </div>

        </div>

      </div>

     <hr className="h-0.5 border-t border-zinc-200 w-full" />
    </section>
  );
};

export default ReadyToJoin;