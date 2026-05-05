import React from "react";
import { Dumbbell, Users, ClipboardList, UserCheck } from "lucide-react";

const Facilities = () => {
  return (
    
    <section className="w-full bg-black border-t  border-b ">
       <hr className="border-zinc-600 border-t w-full my-0.5" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
        
        {/* ITEM 1 */}
        <div className="flex items-start gap-4 md:border-r md:border-gray-800 pr-6">
          <Dumbbell className="text-pink-600 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              MODERN EQUIPMENT
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Train with state-of-the-art gym equipment.
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-start gap-4 md:border-r md:border-gray-800 pr-6">
          <UserCheck className="text-pink-600 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              EXPERT TRAINERS
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Get guidance from certified and experienced trainers.
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-start gap-4 md:border-r md:border-gray-800 pr-6">
          <ClipboardList className="text-pink-600 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              NUTRITION PLAN
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Personalized diet plans to fuel your goals.
            </p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-start gap-4">
          <Users className="text-pink-600 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              SUPPORTIVE COMMUNITY
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Be part of a fitness family that pushes you forward.
            </p>
          </div>
        </div>

      </div>
       <hr className="border-zinc-600 border-t w-full my-0.5" />
    </section>
  );
};

export default Facilities;