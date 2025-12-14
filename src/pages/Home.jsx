import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import banner from "../assets/banner.jpg";
import heroImg from "../assets/hero-img.jpg";
import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";



export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then(res => res.json())
      .then(data => {
        setFeatured(data.products.slice(0, 9));
        setOffers(data.products.slice(9,15));
      });
  }, []);

  return (
    <>
      

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r bg-black text-white py-24 px-6">
          <div className="max-w-7xl  ml-40 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Premium Products <br />
                <span className="text-yellow-400">Curated Just For You</span>
              </h1>

              <p className="mt-6 text-gray-300 text-lg mb-10">
                Explore high-quality products with exclusive festive discounts
                and a premium shopping experience.
              </p>
              <Link to="/products" className="bg-yellow-400 text-black px-4 py-2 text-xl rounded-full font-semibold hover:bg-yellow-500 transition">
                          Buy Now
                        </Link>
            </div>

            <div className="flex justify-center">
              <img
                src={heroImg}
                alt="Hero"
                className="h-80"
              />
            </div>

          </div>
          
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Products
          </h2>

          
           <div className="max-w-7xl mt-15 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featured.map(item => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow hover:shadow-2xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
                <h3 className="font-bold text-lg mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-1">
                  ₹{Math.round(item.price * 80)}
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </section>
              <BannerCarousel />


        {/* OFFER PRODUCTS (SAME UI AS FEATURED) */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-10">
            Offer Products
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {offers.map(item => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow hover:shadow-2xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
                <h3 className="font-bold text-lg mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-1">
                  ₹{Math.round(item.price * 80)}
                </p>
                <p className="text-green-600 font-semibold mt-1">
                  {item.discountPercentage}% OFF
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

            {/* BOTTOM BANNER */}
        <section className="px-6 pb-16">
          <img
            src={banner}
            alt="Bottom Banner"
            className="w-full  object-cover rounded-2xl shadow"
          />
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Happy Customers
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                name: "Ananya Sharma",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "Amazing quality and smooth shopping experience!"
              },
              {
                name: "Rahul Verma",
                img: "https://randomuser.me/api/portraits/men/46.jpg",
                text: "Premium UI and excellent product quality."
              },
              {
                name: "Priya Nair",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
                text: "Loved the festive offers and simple layout."
              }
            ].map((user, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
              >
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic">“{user.text}”</p>
                <h4 className="font-bold mt-4">{user.name}</h4>
                <p className="text-sm text-gray-500">Verified Buyer</p>
              </div>
            ))}

          </div>
        </section>

      <Footer />
    </>
  );
}
