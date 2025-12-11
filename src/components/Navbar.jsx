import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold text-white">
          Shopier
        </Link>

        <div className="flex items-center gap-5">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link 
            to="/products"
            className="text-gray-300 hover:text-white transition"
          >
            Products
          </Link>
         
        </div>

      </div>
    </nav>
  );
}
