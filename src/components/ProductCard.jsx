import React from "react";

export default function ProductCard({ p, onAddCart }) {
  return (
    <div className="bg-white p-4 shadow rounded-xl flex flex-col">
      
      {/* Image */}
      <div className="h-44 rounded-lg overflow-hidden mb-3">
        <img
          src={p.thumbnail || (p.images && p.images[0])}
          alt={p.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm text-slate-800 mt-1 line-clamp-3">
          {p.description}
        </p>
      </div>

      {/* Price & Action */}
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">
          ₹{(p.price * 10).toLocaleString()}
        </div>

        <button
          onClick={() => onAddCart(p)}
          className="px-4 py-1.5 cursor-pointer rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
