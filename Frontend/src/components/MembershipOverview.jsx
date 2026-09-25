import React from "react";

const MembershipOverview = () => {
  return (
   <section
  className="w-full h-62 bg-cover bg-center "
  style={{
    backgroundImage: "url('/MembershipOverview-bg.png')" 
  }}
>

         <hr className="h-0.5 border-zinc-200 w-full" />
      {/* DARK OVERLAY */}
      <div className="w-full h-full">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-6 sm:pt-12">
          
          {/* LEFT CONTENT */}
          <div className="text-white space-y-3">
            
            <p className="text-sm tracking-wide text-gray-300">
              CHOOSE YOUR PLAN
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-pink-600 leading-tight">
              START YOUR TRANSFORMATION TODAY!
            </h2>

            <div className="w-10 h-3px bg-pink-600"></div>

            <p className="text-gray-400 text-sm md:text-base">
              Flexible membership plans for every goal and lifestyle.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md font-semibold text-white transition">
              VIEW MEMBERSHIP PLANS
            </button>
          </div>

        </div>

      </div>
          <hr className="border-zinc-600 border-t w-full my-0.5" />
    </section>
  );
};

export default MembershipOverview;