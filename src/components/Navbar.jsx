import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <li>
            <a href="/" className="irin">
              Irin
            </a>
          </li>
          <li>
            <a href="/" className="company">Company</a>
          </li>
          <li>
            <a href="/" className="help">
              Help
            </a>
          </li>
          <li>
            <a href="/" className="Signup">
              Signup
            </a>
          </li>
          <li>
            <a href="/" className="Login">
              Login
            </a>
          </li>
          <li>
            <a href="/" className="Products">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="en">
              EN
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;