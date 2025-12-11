import React, { useState } from 'react';

export default function ProductModal({ initial, onClose, onSave }){
  const [title, setTitle] = useState(initial?.title || '');
  const [desc, setDesc] = useState(initial?.description || '');
  const [price, setPrice] = useState(initial?.price || '');
  const [image, setImage] = useState(initial?.thumbnail || '');

  function save(){
    onSave({
      title: title || 'Untitled',
      description: desc,
      price: Number(price) || 0,
      thumbnail: image
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{initial ? 'Edit Product' : 'Add Product'}</h3>
          <button onClick={onClose} className="text-slate-500">✕</button>
        </div>

        <div className="mt-4 space-y-3">
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded" placeholder="Title" />
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} className="w-full border p-2 rounded" placeholder="Description" />
          <input value={price} onChange={e=>setPrice(e.target.value)} type="number" className="w-full border p-2 rounded" placeholder="Price (number)" />
          <input value={image} onChange={e=>setImage(e.target.value)} className="w-full border p-2 rounded" placeholder="Image URL" />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-slate-100">Cancel</button>
          <button onClick={save} className="px-4 py-2 rounded bg-indigo-600 text-white">Save</button>
        </div>
      </div>
    </div>
  );
}
