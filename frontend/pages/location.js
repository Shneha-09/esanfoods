export default function Location() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>📍 Our Location</h1>

      <p style={{ marginTop: "10px" }}>
        Esan Foods <br />
        2E/300, Thiraviyarathin Nagar, Madathur Road,
        3rd Mile, Thoothukudi - 628008, Tamil Nadu, India
      </p>

      {/* GOOGLE MAP */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          src="https://maps.google.com/maps?q=2E/300%20Thiraviyarathin%20Nagar%20Madathur%20Road%20Thoothukudi%20628008&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}