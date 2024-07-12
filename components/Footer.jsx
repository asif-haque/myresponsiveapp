import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="container" style={{ paddingTop: "50px" }}>
        <h1>
          Your <span className="highlight">Hobby</span>, Your{" "}
          <span className="highlight">Community</span>...
        </h1>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "#8064A2" }}
        >
          Get Started
        </button>
        <div className="" style={{ overflow: "hidden" }}>
          <img src="/footer.png" alt="" />
        </div>
      </div>

      <footer className="footer d-lg-flex">
        <div className="footer-section">
          <h3>Hobbyque</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work With Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>How Do I</h3>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Add a Listing</a>
            </li>
            <li>
              <a href="#">Claim Listing</a>
            </li>
            <li>
              <a href="#">Post a Query</a>
            </li>
            <li>
              <a href="#">Add a Blog Post</a>
            </li>
            <li>
              <a href="#">Other Queries</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Listings</a>
            </li>
            <li>
              <a href="#">Blog Posts</a>
            </li>
            <li>
              <a href="#">Shop / Store</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul className="social-media-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
          <div className="invite-friends">
            <input type="email" placeholder="Email" />
            <button className="btn btn-primary">Invite</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
