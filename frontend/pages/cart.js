import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter(); // ✅ Next.js router

  // Load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];

    const updated = data.map((item) => ({
      ...item,
      qty: item.qty || 1,
    }));

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }, []);

  // Increase qty
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Decrease qty
  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <Navbar cartCount={cart.length} setSearch={() => {}} />

      <div style={{ padding: "20px" }}>
        <h1>Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div style={{ display: "flex", gap: "20px" }}>
            
            {/* LEFT */}
            <div style={{ flex: 3 }}>
              {cart.map((item) => (
                <div
                  key={item._id}
                  style={{
                    display: "flex",
                    gap: "20px",
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    src={`https://esanfoods.onrender.com/uploads/${item.image}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>₹{item.price}</h4>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <button onClick={() => decreaseQty(item._id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item._id)}>+</button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item._id)}
                    style={{
                      background: "red",
                      color: "#fff",
                      border: "none",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div
              style={{
                flex: 1,
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2>Price Details</h2>
              <hr />

              <p>Total Items: {cart.length}</p>
              <h3>Total: ₹{total}</h3>

              {/* ✅ NAVIGATION FIX */}
              <button
                style={{
                  width: "100%",
                  background: "#facc15",
                  padding: "12px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() =>
                  router.push({
                    pathname: "/checkout",
                    query: {
                      cart: JSON.stringify(cart),
                      total: total,
                    },
                  })
                }
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}