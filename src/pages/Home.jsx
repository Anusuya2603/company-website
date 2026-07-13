import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <section
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="display-3 fw-bold">
                Innovative Digital Solutions
              </h1>

              <p className="lead mt-4">
                I created responsive websites that help businesses establish a strong online presence and achieve their digital goals.
              </p>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <i
                className="bi bi-laptop"
                style={{
                  fontSize: "250px",
                  color: "#ffffff",
                }}
              ></i>

            </div>

          </div>
        </div>
      </section>

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Welcome to Anixz Technologies
          </h2>
        

          <p className="text-muted mt-3">
           I specialize in designing beautiful, responsive,
            and high-performance websites that empower businesses
            to achieve their digital goals.
          </p>

        </div>

      </section>

      <section className="container pb-5">

        <h2 className="text-center fw-bold mb-5">
          Why Choose Us
        </h2>

        <div className="row">

          <FeatureCard
            icon="bi bi-phone"
            title="Responsive Design"
            description="Our websites look perfect on mobile, tablet and desktop devices."
          />

          <FeatureCard
            icon="bi bi-lightning-charge"
            title="Fast Performance"
            description="Optimized websites with lightning-fast loading speeds."
          />

          <FeatureCard
            icon="bi bi-shield-check"
            title="Secure Solutions"
            description="Modern security practices to keep your business safe online."
          />

        </div>

      </section>

      <section
        className="py-5 text-white"
        style={{
          background: "#0f172a",
        }}
      >
        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">
              <h1 className="fw-bold">500+</h1>
              <p>Projects Completed</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">250+</h1>
              <p>Happy Clients</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">10+</h1>
              <p>Years Experience</p>
            </div>

            <div className="col-md-3">
              <h1 className="fw-bold">99%</h1>
              <p>Customer Satisfaction</p>
            </div>

          </div>

        </div>
      </section>

      <section className="container py-5 text-center">

        <h2 className="fw-bold">
          Ready to Build Your Next Project?
        </h2>

        <p className="text-muted mt-3">
          Let's work together to create a powerful digital presence
          for your business.
        </p>

        <button className="btn btn-primary btn-lg mt-3">
          Contact Us
        </button>

      </section>
    </>
  );
}

export default Home;