import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://esanfoods.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    const existing = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(existing.length);
  }, []);

  // ✅ FIXED: prevent duplicate items, add qty
  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem("cart")) || [];

    const found = existing.find((item) => item._id === product._id);

    if (found) {
      const updated = existing.map((item) =>
        item._id === product._id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      localStorage.setItem("cart", JSON.stringify(updated));
      setCartCount(updated.length);
    } else {
      const updated = [...existing, { ...product, qty: 1 }];

      localStorage.setItem("cart", JSON.stringify(updated));
      setCartCount(updated.length);
    }

    alert(product.name + " added to cart 🛒");
  };

  return (
    <div>
      <Navbar cartCount={cartCount} setSearch={setSearch} />
      <Hero />   {/* 👈 ADD THIS */}

      <div style={{ padding: "20px" }}>
        <h1 style={{
          textAlign:"center",
          fontFamily:"Eras Bold ITC",
          fontSize:"28px",
          fontWeight:"bold",
        }}
        >
          Welcome to Esan Foods 🛒
        </h1>
        <h2>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // ✅ FIXED
            gap: "20px",
          }}
        >
          {products
            .filter((p) => p.name && p.price && p.image) // ✅ FIXED
            .filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((p) => (
              <ProductCard
                key={p._id}
                product={p}
                addToCart={addToCart}
              />
            ))}
        </div>
      </div>
      <Features/>
      <Footer/>
    </div>
  );
}