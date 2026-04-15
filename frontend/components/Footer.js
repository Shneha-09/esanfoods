export default function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.logo}>Esan Foods </h2>

      <p>Fresh • Healthy • Tasty</p>

      <p>📍 2E/300, Thiraviyarathin nagar , Madathur road, 3 rd mile, Thoothukudi - 628 008</p>

      

      <p style={styles.whatsapp}>
        📞 +91 96884 05829 || 💬 WhatsApp Us
      </p>

      <p style={styles.copy}>
        © 2026 EsanFoods. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#052e16",
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
  },
  logo: {
    color: "#facc15",
    marginBottom: "10px",
  },
  whatsapp: {
    color: "#25D366",
    cursor: "pointer",
    marginTop: "10px",
  },
  copy: {
    marginTop: "20px",
    fontSize: "12px",
    opacity: 0.7,
  },
};