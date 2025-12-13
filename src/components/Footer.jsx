import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-7">
        
        <div>
          <h3 className="font-bold text-xl">Shopier</h3>
          <p className="mt-3 text-gray-300">
            Minimalist. Stylish. Premium products.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>Home</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl">Contact</h3>
          <p className="mt-3 text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">📧 support@bwstore.com</p>
          <p className="text-gray-300 mt-2">📍 Chennai, India</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-6">
        © 2025 Shopier. All rights reserved.
      </p>
    </footer>
  );
}
