export default function Contact() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>📞 Contact Us</h1>

      <p>We’d love to hear from you!</p>

      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "10px", borderRadius: "5px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "10px", borderRadius: "5px" }}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ padding: "10px", borderRadius: "5px" }}
        ></textarea>

        <button
          style={{
            padding: "10px",
            background: "#14532d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>

      {/* EXTRA CONTACT INFO */}
      <p>📞 +91 98765 43210</p>
     {/* SOCIAL MEDIA */}
<div style={{ marginTop: "20px" }}>
  <h3>Follow Us</h3>

  <a
    href="https://www.instagram.com/esan_foods?igsh=MW84ZWFpOGhqMmg4Mw=="
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "10px",
      padding: "10px 20px",
      background: "#E1306C",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    📸 Follow us on Instagram
  </a>
</div> 
    </div>
  );
}