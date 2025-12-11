import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Products() {

  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getProducts(12)
      .then(res => setProducts(res.data.products))
      .catch(() => {});
  }, []);

  function addProduct(prod) {
    setProducts(prev => [{ ...prod, id: Date.now() }, ...prev]);
  }

  function updateProduct(id, updated) {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated } : p))
    );
  }

  function deleteProduct(id) {
    if (!confirm('Delete product?')) return;
    setProducts(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Products</h2>
        <button
          onClick={() => {
            setEditing(null);
            setModalOpen(true);
          }}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add Product
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard
            key={p.id}
            p={p}
            onEdit={(prod) => {
              setEditing(prod);
              setModalOpen(true);
            }}
            onDelete={deleteProduct}
            onAddCart={() => {}} // nothing here now
          />
        ))}
      </div>

      {modalOpen && (
        <ProductModal
          initial={editing}
          onClose={() => setModalOpen(false)}
          onSave={(data) => {
            if (editing) updateProduct(editing.id, data);
            else addProduct(data);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
