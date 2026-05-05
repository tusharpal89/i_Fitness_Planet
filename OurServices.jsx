import React from "react";
import { Dumbbell, HeartPulse, Activity, User, Apple } from "lucide-react";

const services = [
  {
    title: "WEIGHT TRAINING",
    desc: "Build strength and endurance with effective weight training programs.",
    icon: <Dumbbell />,
    img: "/weight_training.png",
  },
  {
    title: "CARDIO FITNESS",
    desc: "Improve your stamina, burn calories and stay heart-healthy.",
    icon: <HeartPulse />,
    img: "/cardio_fitness.png",
  },
  {
    title: "FUNCTIONAL TRAINING",
    desc: "Enhance movement, balance and flexibility for everyday performance.",
    icon: <Activity />,
    img: "/Functional_Training.png",
  },
  {
    title: "PERSONAL TRAINING",
    desc: "One-on-one sessions tailored to your unique fitness goals.",
    icon: <User />,
    img: "/Personal_Training.png",
  },
  {
    title: "NUTRITION GUIDANCE",
    desc: "Expert advice and custom nutrition plans to support your journey.",
    icon: <Apple />,
    img: "/Nutrition_Guidance.png",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-zinc-950 text-white pb-10">
         <hr className="border-zinc-600 border-t w-full my-0.5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADING */}
        <div className="text-center mb-12 mt-8">
          <h2 className="text-pink-600 font-semibold tracking-wide text-2xl">
            OUR SERVICES
          </h2>
          <div className="w-12 h-3px bg-pink-600 mx-auto mt-2"></div>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              
              {/* IMAGE */}
              <div className="relative h-48">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* ICON CIRCLE */}
                <div className="absolute bottom-20px left-1/2 transform -translate-x-1/2 bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg -mt-5">
                  <span className="text-white w-5 h-5">
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-8 pb-6 px-4 text-center">
                <h3 className="font-semibold text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
       <hr className="border-zinc-600 border-t w-full my-0.5" />
    </section>
  );
};

export default OurServices;