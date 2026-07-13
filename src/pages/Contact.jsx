function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4">Send Us a Message</h3>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="card shadow-sm border-0 p-4">
            <h3>Company Address</h3>

            <p className="mt-3">
              <strong>WEB PROJECT</strong>
            </p>

            <p>
              64,Varippilankulam,
              <br />
              Tuticorin, Tamil Nadu-628704
              <br />
              India
            </p>

            <p>
              📧 info@webproject.com
            </p>

            <p>
              📞 +91 9677****17
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;