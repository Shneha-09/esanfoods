export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #bce4cc",
      padding: "15px",
      borderRadius: "12px",
      background: "#b6e8b5"
    }}>
      <img
        src={`https://esanfoods.onrender.com/uploads/${product.image}`}
        alt={product.name}
        onError={(e) => {
          e.target.src = "/fallback.png";
        }}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#facc15", // 🟡 yellow
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "100%",
          marginTop: "10px"
        }}
      >
         Add to Cart
      </button>
    </div>
  );
}