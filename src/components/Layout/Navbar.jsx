import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      {/* <div className="d-flex w-75 my-1 mx-auto px-lg-5 p-lg-2"> */}
      <div className="container-lg p-lg-2 px-md-4 px-sm-5 ">
        <a className="navbar-brand fw-bolder" href="#">
          DORSIN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 mx-5 mb-2 mb-lg-0 fw-semibold align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item d-sm-block d-lg-none d-md-block">
              <button
                type="button"
                class="btn px-4 py-2 btn-danger rounded-pill"
              >
                Try if free
              </button>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn px-4 py-2 btn-danger rounded-pill d-none d-sm-none d-lg-block d-md-none"
        >
          Try if free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
