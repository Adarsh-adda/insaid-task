import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div style={{ color: "white" }}>
      <div className="mynavbar">
        <div style={{ alignSelf: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            TechSolutions
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button class="button-62">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
