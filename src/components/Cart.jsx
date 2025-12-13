import React from "react";

export default function Cart({ cart, onRemove, onClear, onInc, onDec }) {

  const total = cart.reduce(
    (sum, it) => sum + (it.price || 0) * (it.qty || 1),
    0
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow w-72">
      <h4 className="font-semibold text-lg">Cart</h4>

      {cart.length === 0 ? (
        <p className="text-sm text-slate-500 mt-2">No items</p>
      ) : (
        <div className="mt-3 space-y-3">

          {cart.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3">

              {/* Product Info */}
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-slate-500">
                  ₹{(it.price * 10).toLocaleString()}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDec(it.id)}
                  className="w-7 h-7 rounded-full bg-slate-200 font-bold"
                >
                  −
                </button>

                <span className="min-w-[18px] text-center font-semibold">
                  {it.qty || 1}
                </span>

                <button
                  onClick={() => onInc(it.id)}
                  className="w-7 h-7 rounded-full bg-slate-200 font-bold"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(it.id)}
                className="text-rose-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="border-t pt-2 flex items-center justify-between font-bold">
            Total
            <span>₹{(total * 10).toLocaleString()}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={onClear}
              className="flex-1 px-3 py-2 rounded bg-slate-100"
            >
              Clear
            </button>
            <button className="flex-1 px-3 py-2 rounded bg-green-600 text-white">
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
