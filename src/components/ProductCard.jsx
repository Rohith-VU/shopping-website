import React from 'react';

export default function ProductCard({ p, onEdit, onDelete, onAddCart }){
  return (
    <div className="bg-white p-4 shadow rounded-xl flex flex-col">
      <div className="h-44 rounded-lg overflow-hidden mb-3">
        <img src={p.thumbnail || (p.images && p.images[0])} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm text-slate-800 mt-1 line-clamp-3">{p.description}</p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">₹{(p.price*10).toLocaleString()}</div>
        <div className="flex items-center gap-2">
          <button onClick={()=>onAddCart(p)} className="px-3 py-1 rounded bg-black text-white">Add</button>
          <button onClick={()=>onEdit(p)} className="px-3 py-1 rounded bg-slate-100">Edit</button>
          <button onClick={()=>onDelete(p.id)} className="px-3 py-1 rounded bg-rose-50 text-rose-600">Del</button>
        </div>
      </div>
    </div>
  );
}
