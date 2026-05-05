import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
   const [open, setOpen] = useState(false);
     
  return (
    <>
    <nav className="w-full h-28 bg-black text-white flex items-center justify-evenly  border-b border-gray-800">
      
      {/* LEFT - LOGO */}
      <div className="flex items-center sm:-ml-20 -ml-18 mt-3">
        <img
          src="/Logo_fitness5.png"
          alt="logo"
          className="h-55 w-auto object-contain "
        />
      </div>

      {/* RIGHT SIDE - MENU + BUTTON */}
      <div className="hidden md:flex items-center gap-10">
        
        {/* MENU */}
        <ul className="flex items-center gap-8  font-semibold">
          <li className="text-pink-600-600 border-b-2 hover:text-pink-600 pb-1 cursor-pointer">
            HOME
          </li>
          <li className="hover:text-pink-600 cursor-pointer">ABOUT US</li>
          <li className="hover:text-pink-600 cursor-pointer">OUR SERVICES</li>
          <li className="hover:text-pink-600 cursor-pointer">MEMBERSHIP</li>
          <li className="hover:text-pink-600 cursor-pointer">GALLERY</li>
          <li className="hover:text-pink-600 cursor-pointer">CONTACT US</li>
        </ul>

       

      </div>

      <div className="hidden sm:block">
         {/* BUTTON */}
        <button className="bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-md font-semibold transition">
          JOIN NOW
        </button>
      </div>

            {/* MOBILE MENU ICON */}
        <div className="md:hidden ">
          <button onClick={() => setOpen(true)}>
            <Menu size={38} />
          </button>
        </div>
      

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-6 px-6 mt-6 text-lg font-semibold">
          <li className="text-pink-600 cursor-pointer">HOME</li>
          <li className="hover:text-pink-600 cursor-pointer">ABOUT US</li>
          <li className="hover:text-pink-600 cursor-pointer">OUR SERVICES</li>
          <li className="hover:text-pink-600 cursor-pointer">MEMBERSHIP</li>
          <li className="hover:text-pink-600 cursor-pointer">GALLERY</li>
          <li className="hover:text-pink-600 cursor-pointer">CONTACT US</li>
        </ul>

        {/* BUTTON */}
        <div className="px-6 mt-8">
          <button className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-md font-semibold">
            JOIN NOW
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

    
    </nav>

{/* Horizontal line below the Navbar */}
      <hr className="h-0.5 border-t border-zinc-200 w-full" />

   </>  
  );
};

export default Navbar;