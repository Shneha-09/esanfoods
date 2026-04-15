export default function Features() {
  const features = [
    {
      icon: "🌿",
      title: "100% Natural",
      desc: "No artificial colours, flavours or preservatives",
    },
    {
      icon: "🔥",
      title: "Freshly Prepared",
      desc: "Every item is made fresh when you order",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick delivery to your doorstep with the charge of ₹ 40 ",
    },
    {
      icon: "📲",
      title: "Easy Ordering",
      desc: "Order in seconds with smooth checkout",
    },
  ];

  return (
    <section style={styles.container}>
      {features.map((f, i) => (
        <div key={i} style={styles.card}>
          <div style={styles.icon}>{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to right, #0f3d1e, #14532d)",
    color: "white",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    padding: "50px 20px",
    textAlign: "center",
  },
  card: {
    padding: "15px",
  },
  icon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
};