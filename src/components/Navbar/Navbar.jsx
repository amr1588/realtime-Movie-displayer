import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid try mx-4">
          <Link className="navbar-brand fw-medium fs-4 movieTitle" to={""}>
            Movie App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ul1">
                <Link className="nav-link" aria-current="page" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item ul2 ms-md-4">
                <Link className="nav-link" to={"favorites"}>
                  Favorites
                </Link>
              </li>

              <li className="nav-item ul2 ms-md-4">
                <Link className="nav-link logOut" to={"/login"}>
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
