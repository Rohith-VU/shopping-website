import React, { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600",
    title: "Up to 65% Off",
    subtitle: "Women's Wear from Entrepreneurs",
  },
 
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600",
    title: "Premium Collections",
    subtitle: "Exclusive Designer Picks",
  },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-[380px] md:h-[450px] relative"
          >
            {/* Image */}
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
                  {banner.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-5">
                  {banner.subtitle}
                </p>
                <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={() =>
          setIndex(index === 0 ? banners.length - 1 : index - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        ❮
      </button>

      <button
        onClick={() => setIndex((index + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-yellow-400" : "bg-white/70"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
