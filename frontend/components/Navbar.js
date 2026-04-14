import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar({ cartCount, setSearch }) {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);
    setSearch(value);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#0f172a",
        padding: "12px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LOGO + NAME */}
      <div
        onClick={() => router.push("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            objectFit: "cover",
            background: "#040404",
          }}
        />

        <div>
          <h2 style={{ margin: 0, color: "#fff" }}>Esan Foods</h2>
          <p style={{ margin: 0, fontSize: "15px", color: "#cbd5e1" }}>
            Healthy Traditional Foods
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        value={text}
        onChange={handleSearch}
        placeholder="Search healthy products..."
        style={{
          width: "40%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div
          onClick={() => router.push("/login")}
          style={{fontSize:"18px", color: "#f7f7f4", cursor: "pointer" }}
        >
          Logout
        </div>

      
        <div
          onClick={() => router.push("/cart")}
          style={{
            background: "#facc15",
            padding: "8px 15px",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🛒 {cartCount}
        </div>
      </div>
    </div>
  );
}