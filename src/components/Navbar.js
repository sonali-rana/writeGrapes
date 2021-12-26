import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="mt-1" style={{ border: "30px solid white" }}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
         <Link className="navbar-brand" to="#">
            WriteGrapes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
             <Link className="nav-link active " to="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
