import React, { useState } from "react";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navicon } from "react-icons-kit/fa/navicon";

const Navbar = ({ brand, brandImage, data, alignItem = "mr-auto" }) => {
  const [item, setItem] = useState(false);

  const classOne = item
    ? "collapse navbar-collapse show"
    : "collapse navbar-collapse";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        {brand && brandImage ? (
          <Link className="navbar-brand" to="/">
            <img src={brandImage} alt="Brand Logo" className="brand-image" />
            {brand}
          </Link>
        ) : brandImage ? (
          <Link className="navbar-brand" to="/">
            <img
              src={brandImage}
              alt="Brand Logo"
              className="brand-image mr-0"
            />
          </Link>
        ) : (
          <Link className="navbar-brand" to="/">
            {brand}
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          onClick={() => setItem(!item)}
        >
          <Icon size="20" icon={navicon} />
        </button>
        <div className={classOne}>
          <ul className={`navbar-nav mb-2 mb-lg-0 ${alignItem}`}>
            {data &&
              data.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
