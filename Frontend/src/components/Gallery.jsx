import React, { useState } from "react";

const galleryData = [
   
  {
    title: "WORKOUT ZONE",
    images: ["/w1.png", "/w2.png", "/w3.png", "/w4.png"],
  },
  {
    title: "TRAINING SESSIONS",
    images: ["/t1.png", "/t2.png", "/t3.png", "/t4.png"],
  },
  {
    title: "GALLERY",
    images: ["/g1.png", "/g2.png", "/g3.png", "/g4.png"],
  },
    {
    title: "NUTRITION & DIET",
    images: ["/n1.png", "/n2.png", "/n3.png", "/n4.png"],
  },
 
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-black text-white  pb-8 sm:pb-14 relative">
      
      <hr className="h-0.5 border-zinc-200 w-full" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* HEADING */}
        <h2 className="text-pink-600 text-xl font-semibold tracking-wide">
          {galleryData[index].title}
        </h2>
        <div className="w-12 h-0.5 bg-pink-600 mx-auto mt-2 mb-10"></div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-pink-600 text-3xl hover:scale-125 transition"
        >
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-pink-600 text-3xl hover:scale-125 transition"
        >
          ❯
        </button>

        {/* IMAGES */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {galleryData[index].images.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-zinc-800 hover:scale-105 transition duration-300"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-2">
          {galleryData.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                i === index ? "bg-pink-600" : "bg-zinc-600"
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;