import { useRouter } from "next/router"; // ✅ ADD THIS

export default function Hero() {
  const router = useRouter(); // ✅ ADD THIS

  return (
    <div style={{
      background: "linear-gradient(to right, #042118, #1f7a4c)",
      color: "white",
      padding: "80px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap"
    }}>

      {/* LEFT CONTENT */}
      <div style={{ maxWidth: "550px" }}>
        <p style={{
          background: "#244636",
          display: "inline-block",
          padding: "8px 15px",
          borderRadius: "20px",
          fontSize: "14px"
        }}>
          🌿 100% Natural • Freshly Made
        </p>

        <h1 style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginTop: "20px",
          lineHeight: "1.2"
        }}>
          Fresh & Healthy <br />
          <span style={{ color: "#ffcc00" }}>Homemade Foods</span> <br />
          Delivered to You 🍛
        </h1>

        <p style={{
          marginTop: "20px",
          fontSize: "16px",
          color: "#d1f2e1"
        }}>
          Experience the taste of authentic homemade meals with Esan Foods.
          Prepared fresh and delivered to your doorstep.
        </p>

        {/* BUTTONS */}
        <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
          
          {/* ✅ ORDER NOW FIXED */}
          <button
            onClick={() => router.push("/cart")}
            style={{
              padding: "12px 25px",
              background: "#ffcc00",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🛒 Order Now
          </button>

          {/* ✅ LOCATE US FIXED */}
          <button
            onClick={() =>
              window.open("https://www.google.com/maps/search/2E%2F300,+Thiraviyarathin+nagar++Madathur+road,++3+rd+mile,++Thoothukudi+-+628008/@8.7881797,78.0913037,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D", "_blank")
            }
            style={{
              padding: "12px 25px",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "25px",
              color: "white",
              cursor: "pointer"
            }}
          >
            📍 Find Us
          </button>
        </div>

        {/* STATS */}
        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "40px"
        }}>
          <div>
            <h2 style={{ color: "#ffcc00" }}>100+</h2>
            <p style={{ fontSize: "12px" }}>HAPPY CUSTOMERS</p>
          </div>

          <div>
            <h2 style={{ color: "#ffcc00" }}>20+</h2>
            <p style={{ fontSize: "12px" }}>FOOD ITEMS</p>
          </div>

          <div>
            <h2 style={{ color: "#ffcc00" }}>4.8⭐</h2>
            <p style={{ fontSize: "12px" }}>CUSTOMER RATING</p>
          </div>
        </div>
      </div>

      {/* RIGHT LOGO */}
      <div style={{
        position: "relative",
        marginTop: "20px"
      }}>

        {/* GLOW */}
        <div style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(255, 204, 0, 0.25)",
          filter: "blur(50px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}></div>

        {/* BORDER */}
        <div style={{
          padding: "10px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #ffcc00, #ffffff)"
        }}>

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Esan Foods Logo"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "50%",
              background: "#fff",
            }}
          />
        </div>
      </div>

    </div>
  );
}