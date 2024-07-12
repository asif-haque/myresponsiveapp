import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import SignInJoinInForm from "./SigninJoininForm";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light px-3 container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </a>
        <div className="d-md-flex">
          <input
            className="form-control d-none d-md-block"
            style={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
            type="search"
            placeholder="Search here..."
            aria-label="Search"
          />
          <button
            className="btn"
            style={{
              backgroundColor: "#8064A2",
              color: "white",
            }}
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <ul className={`d-flex me-3 ms-auto ${styles.nav}`}>
          <li className="nav-item dropdown d-none d-lg-block">
            <a
              className="nav-link dropdown-toggle"
              href="#explore"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-compass"></i> Explore
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  People - Community
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Places - Venues
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Programs - Events
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Products - Store
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown d-none d-lg-block">
            <a
              className="nav-link dropdown-toggle"
              href="#hobbies"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-star"></i> Hobbies
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link" href="#bookmark">
              <i className="bi bi-bookmark"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#notifications"
              style={{ fontSize: "20px", margin: "auto" }}
            >
              <i className="bi bi-bell"></i>
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link" href="#cart">
              <i className="bi bi-cart"></i>
            </a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a
              className="btn ms-3"
              href="#signin"
              style={{ backgroundColor: "#8064A2", color: "white" }}
            >
              Sign In
            </a>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-lg-none" style={{ padding: "20px" }}>
            <SignInJoinInForm />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
