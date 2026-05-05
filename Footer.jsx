import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-zinc-800">
      <hr className="h-0.5 border-zinc-200 w-full" />
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* 1. LOGO + ABOUT */}
        <div>
          <img src="/Logo_fitness5.png" alt="logo" className="w-60 h-50 -mt-20 -ml-10" />

          <p className="text-gray-400 text-sm leading-relaxed -mt-12">
            Stronger body. Stronger you. Join a community that motivates,
            supports, and helps you become the best version of yourself.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-4">
            
            <span className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaFacebookF size={14} />
            </span>

            <span className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaInstagram size={14} />
            </span>

            <span className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaYoutube size={14} />
            </span>

          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Services</li>
            <li className="hover:text-white cursor-pointer">Membership</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* 3. SERVICES */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Weight Training</li>
            <li>Cardio Fitness</li>
            <li>Functional Training</li>
            <li>Personal Training</li>
            <li>Nutrition Guidance</li>
          </ul>
        </div>

        {/* 4. CONTACT */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">CONTACT US</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            
            <div className="flex gap-2">
              <MapPin size={16} className="text-pink-600 mt-1" />
              <p>123 Fitness Street,<br />Healthy City, HC 56001</p>
            </div>

            <div className="flex gap-2">
              <Phone size={16} className="text-pink-600 mt-1" />
              <p>+1 234 567 8900</p>
            </div>

            <div className="flex gap-2">
              <Mail size={16} className="text-pink-600 mt-1" />
              <p>info@ifitnessplanet.com</p>
            </div>

            <div className="flex gap-2">
              <Globe size={16} className="text-pink-600 mt-1" />
              <p>www.ifitnessplanet.com</p>
            </div>

          </div>
        </div>

        {/* 5. NEWSLETTER */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">NEWSLETTER</h3>

          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get updates and offers!
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-transparent border border-zinc-700 rounded-md text-sm focus:outline-none"
          />

          <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 py-2 rounded-md font-semibold transition">
            SUBSCRIBE
          </button>
        </div>

      </div>

     <hr className="h-0.5 border-zinc-200 w-full" />

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-2">
        
        <p>© 2024 I Fitness Planet. All Rights Reserved.</p>

        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;