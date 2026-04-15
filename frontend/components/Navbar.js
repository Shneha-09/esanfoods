import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Navbar({ cartCount, setSearch }) {
  const [text, setText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef();

  const handleSearch = (e) => {
    const value = e.target.value;
    setText(value);
    setSearch(value);
  };

  const handleNavigate = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  // ✅ CLOSE MENU WHEN CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#14532d",
          padding: "20px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
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
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              background: "#0d2c0d",
            }}
          />

          <div>
            <h2 style={{ margin: 0, color: "#fff" }}>Esan Foods</h2>
            <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1" }}>
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
            style={{
              fontSize: "18px",
              color: "#f7f7f4",
              cursor: "pointer",
            }}
          >
            Login
          </div>

          {/* CART */}
          <div
            onClick={() => router.push("/cart")}
            style={{
              background: "#facc15",
              padding: "8px 15px",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            🛒 My Orders

            <span
              style={{
                background: "#dd101e",
                color: "#fff",
                borderRadius: "50%",
                padding: "5px 10px",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          </div>

          {/* MENU BUTTON */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "26px",
              color: "#e3eae4",
              cursor: "pointer",
              padding: "5px 10px",
            }}
          >
            ☰
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            right: "20px",
            top: "80px",
            background: "#103d21",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 0",
            width: "160px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            zIndex: 999,
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Location", path: "/location" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <p
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                margin: 0,
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "#1f7a4c")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "transparent")
              }
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </>
  );
}