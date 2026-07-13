function About() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">About Us</h1>

      <div className="card shadow-sm p-4 mb-4">
        <h3>Company Introduction</h3>
        <p className="text-muted">
          Anixz Technologies is a modern web development company focused on creating
          responsive, user-friendly, and innovative websites. Our team is
          dedicated to delivering high-quality digital solutions that help
          businesses establish a strong online presence.
        </p>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h3>Our Mission</h3>
        <p className="text-muted">
          Our mission is to provide reliable, creative, and affordable web
          solutions that empower businesses to grow through technology.
        </p>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h3>Our Vision</h3>
        <p className="text-muted">
          Our vision is to become a trusted technology partner by delivering
          innovative digital experiences and exceeding client expectations.
        </p>
      </div>

      <div className="card shadow-sm p-4">
        <h3>Why Choose Us?</h3>

        <ul className="mt-3">
          <li>✔ Experienced and dedicated team</li>
          <li>✔ Modern and responsive website designs</li>
          <li>✔ Fast and secure web applications</li>
          <li>✔ Customer-focused approach</li>
          <li>✔ Affordable and quality services</li>
        </ul>
      </div>

    </div>
  );
}

export default About;