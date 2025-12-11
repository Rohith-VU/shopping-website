import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [offers, setOffers] = useState([]);

  // Fetch products from Fake API
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then(res => res.json())
      .then(data => {
        setFeatured(data.products.slice(0, 3));
        setOffers(data.products.slice(3, 6));
      });
  }, []);

  return (
    <>
      <div className="bg-white text-black min-h-screen">

        {/* OFFER MARQUEE */}
        <div className="bg-black text-white py-3">
          <marquee>
            <p className="text-xl font-bold tracking-wide">
              ⚡ FESTIVAL OFFER — FLAT 50% OFF ON ALL PRODUCTS ⚡
            </p>
          </marquee>
        </div>

        {/* FULL WIDTH BANNER */}
        <section>
          <img
            src="./src/assets/banner.jpg"
            alt="banner"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-14 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {featured.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 rounded-xl p-5 shadow hover:shadow-2xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
                <h3 className="font-bold text-lg mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-1 font-medium">₹{Math.round(item.price * 80)}</p>
              </div>
            ))}

          </div>
        </section>

        {/* OFFER BANNER (HEIGHT REDUCED) */}
        <section>
          <img
            src="./src/assets/offer.jpg"
            alt="Offer Banner"
            className="w-full h-57 object-cover rounded"
          />
        </section>

        {/* OFFER PRODUCTS */}
        <section className="py-10 px-6 bg-gray-50 text-black">
          <h2 className="text-3xl font-bold text-center mb-10">Offer Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {offers.map((item) => (
              <div
                key={item.id}
                className="bg-white text-black rounded-xl p-5 shadow hover:shadow-2xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
                <h3 className="font-bold text-lg mt-4">{item.title}</h3>
                <p className="text-gray-700 mt-1 font-medium">₹{Math.round(item.price * 80)}</p>
                <p className="text-green-600 font-semibold">{item.discountPercentage}% OFF</p>
              </div>
            ))}

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
