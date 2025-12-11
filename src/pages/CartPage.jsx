import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  function removeItem(id) {
    const updated = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
  }

  function clearCart() {
    if (!confirm("Clear all cart items?")) return;
    localStorage.setItem("cart", "[]");
    setCart([]);
  }

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * (item.qty || 1));
  }, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>

          {/* Cart List */}
          <div className="space-y-4">
            {cart.map(item => (
              <div 
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">₹{item.price} x {item.qty}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Clear */}
          <div className="mt-6 p-4 bg-gray-100 rounded-xl flex items-center justify-between">
            <h2 className="text-xl font-bold">Total:</h2>
            <span className="text-2xl font-bold">₹{total}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
