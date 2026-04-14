import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Registered Successfully ✅");
      router.push("/login");
    } else {
      alert("Fill all fields ❌");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f1f5f9"
    }}>
      <form onSubmit={handleRegister} style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Register
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#facc15",
            color: "#0c0c0c",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          Register
        </button>

        <p style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "16px"
        }}>
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            style={{ color: "Blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
}