import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Shopier
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>

          <Link to="/products" className="text-gray-300 hover:text-white transition">
            Products
          </Link>

          {/* Add Product Button */}
        <Link
  to="/products"
  state={{ openAddModal: true }}
  className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
>
  + Add Product
</Link>
        </div>

      </div>
    </nav>
  );
}
