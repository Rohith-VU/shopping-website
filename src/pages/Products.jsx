import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

export default function Products(){
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    getProducts(12).then(res=>setProducts(res.data.products)).catch(()=>{});
  },[]);

  function addProduct(prod){
    setProducts(prev=>[{...prod, id: Date.now()}, ...prev]);
  }

  function updateProduct(id, updated){
    setProducts(prev=>prev.map(p=>p.id===id?{...p,...updated}:p));
  }

  function deleteProduct(id){
    if(!confirm('Delete product?')) return;
    setProducts(prev=>prev.filter(p=>p.id!==id));
    setCart(prev=>prev.filter(it=>it.id!==id));
  }

  function addToCart(p){
    setCart(prev=>{
      const found = prev.find(it=>it.id===p.id);
      if(found) return prev.map(it=>it.id===p.id?{...it, qty:(it.qty||1)+1}:it);
      return [{...p, qty:1}, ...prev];
    });
  }

  function removeFromCart(id){
    setCart(prev=>prev.filter(it=>it.id!==id));
  }

  function clearCart(){ if(!confirm('Clear cart?')) return; setCart([]); }

  return (
    <>
      {/* PRODUCTS + CART GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 py-10">
        
        {/* PRODUCTS SECTION */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Products</h2>

            <button 
              onClick={()=>{ setEditing(null); setModalOpen(true); }} 
              className="px-4 py-2 bg-black text-white rounded"
            >
              Add Product
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p=>(
              <ProductCard 
                key={p.id} 
                p={p} 
                onEdit={(prod)=>{ setEditing(prod); setModalOpen(true); }} 
                onDelete={deleteProduct} 
                onAddCart={addToCart} 
              />
            ))}
          </div>
        </div>

        {/* CART SECTION */}
        <aside className="lg:col-span-1">
          <Cart cart={cart} onRemove={removeFromCart} onClear={clearCart} />
        </aside>

      </div>

      {/* MODAL */}
      {modalOpen && (
        <ProductModal 
          initial={editing} 
          onClose={()=>setModalOpen(false)} 
          onSave={(data)=>{
            if(editing) updateProduct(editing.id, data);
            else addProduct(data);
            setModalOpen(false);
          }} 
        />
      )}

      {/* FULL-WIDTH FOOTER */}
      <Footer />
    </>
  );
}
