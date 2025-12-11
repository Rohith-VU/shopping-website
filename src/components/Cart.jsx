import React from 'react';

export default function Cart({ cart, onRemove, onClear }){
  const total = cart.reduce((s,it)=>s + (it.price||0) * (it.qty||1), 0);
  return (
    <div className="bg-white p-4 rounded-xl shadow w-72">
      <h4 className="font-semibold">Cart</h4>
      {cart.length===0 ? <p className="text-sm text-slate-500 mt-2">No items</p> :
        <div className="mt-3 space-y-2">
          {cart.map((it, idx)=>(
            <div key={idx} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-slate-500">₹{(it.price*10).toLocaleString()} x {it.qty||1}</div>
              </div>
              <button onClick={()=>onRemove(it.id)} className="text-rose-600 text-sm">Remove</button>
            </div>
          ))}
          <div className="border-t pt-2 flex items-center justify-between font-bold">Total <span>₹{(total*10).toLocaleString()}</span></div>
          <div className="flex gap-2 mt-2">
            <button onClick={onClear} className="flex-1 px-3 py-2 rounded bg-slate-100">Clear</button>
            <button className="flex-1 px-3 py-2 rounded bg-green-600 text-white">Checkout</button>
          </div>
        </div>
      }
    </div>
  );
}
