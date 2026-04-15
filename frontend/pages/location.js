export default function Location() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>📍 Our Location</h1>

      <p style={{ marginTop: "10px" }}>
        Esan Foods <br />
        2E/300, Thiraviyarathin nagar , Madathur road , 3 rd mile , Thoothukudi - 628008, Tamil Nadu, India
      </p>

      {/* GOOGLE MAP */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          src="https://www.google.com/maps/search/2E%2F300,+Thiraviyarathin+nagar++Madathur+road,++3+rd+mile,++Thoothukudi+-+628008/@8.7881752,78.0913036,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}