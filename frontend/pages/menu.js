import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://esanfoods.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>🍽️ Our Menu</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}