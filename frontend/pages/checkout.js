import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Checkout() {
  const router = useRouter();
  const { cart, total } = router.query;

  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, [cart]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill all fields");
      return;
    }

    try {
      await fetch("https://esanfoods.onrender.com/api/save-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          items,
          total,
          paymentMethod: "COD",
        }),
      });

      alert("✅ Order Placed Successfully!");

      localStorage.removeItem("cart");
      router.push("/");
    } catch (err) {
      alert("Error placing order");
    }
  };

  return (
    <div style={{ padding: "30px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "20px" }}>Checkout 🧾</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        
        {/* LEFT - FORM */}
        <div
          style={{
            flex: 2,
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Delivery Details</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} />
          <textarea name="address" placeholder="Full Address" onChange={handleChange} style={inputStyle} />
          <input name="city" placeholder="City" onChange={handleChange} style={inputStyle} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} style={inputStyle} />

          <div style={{ marginTop: "15px", padding: "10px", background: "#fef3c7", borderRadius: "8px" }}>
            💰 Payment Method: <b>Cash on Delivery</b>
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            height: "fit-content",
          }}
        >
          <h2>Order Summary</h2>
          <hr />

          {items.map((item, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <p style={{ margin: 0 }}>
                {item.name} × {item.qty}
              </p>
              <small>₹{item.price * item.qty}</small>
            </div>
          ))}

          <hr />

          <h3>Total: ₹{total}</h3>

          <button onClick={placeOrder} style={btnStyle}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #cccccc",
};

const btnStyle = {
  width: "100%",
  marginTop: "15px",
  padding: "12px",
  background: "#facc25",
  color: "#101010",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};