import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful");
      router.push("/");
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* LOGO */}
      <h1 style={{ marginBottom: "20px", color: "#0f172a" }}>
        Esan Foods
      </h1>

      {/* CARD */}
      <div
        style={{
          width: "350px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Sign In</h2>

        <form onSubmit={handleLogin}>
          {/* EMAIL */}
          <label style={{ fontSize: "16px", fontWeight: "500" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          {/* PASSWORD */}
          <label style={{ fontSize: "16px", fontWeight: "500" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "20px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#facc15",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>

        {/* EXTRA LINKS */}
        <p
          style={{
            marginTop: "15px",
            fontSize: "14px",
            color: "#555",
            textAlign: "center",
          }}
        >
          By continuing, you agree to Esan Foods conditions of use.
        </p>

        <hr style={{ margin: "20px 0" }} />

        <button
          onClick={() => router.push("/register")}
          style={{
            width: "100%",
            padding: "10px",
            background: "#facc15",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create your account
        </button>
      </div>
    </div>
  );
}