import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white sticky-top shadow-sm"
      style={{ zIndex: 1000 }}
    >
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">Anixz</span> Technologies
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-primary px-4">
                Get Quote
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;