import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import CartPage from "./pages/CartPage";   // ⬅️ NEW

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
<Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}
