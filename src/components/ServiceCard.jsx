function ServiceCard({ icon, title, description }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0 text-center p-4">
        <i className={`${icon} display-4 text-primary mb-3`}></i>

        <h4>{title}</h4>

        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;