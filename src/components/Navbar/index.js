import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { navicon } from "react-icons-kit/fa/navicon";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { brand, brandImage } = this.props;

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div class="container">
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
