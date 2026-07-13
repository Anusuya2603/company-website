import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">Our Services</h1>

      <div className="row">

        <ServiceCard
          icon="bi bi-code-slash"
          title="Web Development"
          description="Modern, responsive and high-performance websites tailored to your business."
        />

        <ServiceCard
          icon="bi bi-phone"
          title="Mobile Responsive"
          description="Websites that provide a seamless experience across all devices."
        />

        <ServiceCard
          icon="bi bi-palette"
          title="UI/UX Design"
          description="Beautiful and user-friendly interfaces that enhance user experience."
        />

        <ServiceCard
          icon="bi bi-graph-up-arrow"
          title="Digital Marketing"
          description="Strategies to improve your online visibility and business growth."
        />

      </div>

    </div>
  );
}

export default Services;