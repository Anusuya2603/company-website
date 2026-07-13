function FeatureCard({ icon, title, description }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="card h-100 border-0 shadow-lg text-center p-4"
        style={{
          borderRadius: "20px",
          transition: "0.4s",
        }}
      >
        <div
          className="mx-auto d-flex justify-content-center align-items-center mb-4"
          style={{
            width: "80px",
            height: "80px",
            background: "linear-gradient(135deg,#2563eb,#38bdf8)",
            borderRadius: "50%",
          }}
        >
          <i
            className={`${icon} text-white`}
            style={{ fontSize: "35px" }}
          ></i>
        </div>

        <h4 className="fw-bold">{title}</h4>

        <p className="text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;