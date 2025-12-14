import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api/productsAPI";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Cart from "../components/Cart";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();

  // Fetch products
  useEffect(() => {
    getProducts(12)
      .then(res => setProducts(res.data.products))
      .catch(() => {});
  }, []);

  // Open modal from navbar
  useEffect(() => {
    if (location.state?.openAddModal) {
      setEditing(null);
      setModalOpen(true);
    }
  }, [location.state]);

  /* ---------------- CART FUNCTIONS ---------------- */

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: (p.qty || 1) + 1 }
            : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function incQty(id) {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, qty: (p.qty || 1) + 1 } : p
      )
    );
  }

  function decQty(id) {
    setCart(prev =>
      prev
        .map(p =>
          p.id === id
            ? { ...p, qty: (p.qty || 1) - 1 }
            : p
        )
        .filter(p => p.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  /* ---------------- PRODUCTS CRUD ---------------- */

  function addProduct(prod) {
    setProducts(prev => [{ ...prod, id: Date.now() }, ...prev]);
  }

  function updateProduct(id, updated) {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated } : p))
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

      {/* PRODUCTS SECTION */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Products</h2>
         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard
              key={p.id}
              p={p}
              onAddCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* CART SECTION */}
      <Cart
        cart={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
        onInc={incQty}
        onDec={decQty}
      />

      {/* MODAL */}
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
