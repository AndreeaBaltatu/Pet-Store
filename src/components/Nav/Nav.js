import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Nav.module.css";
export function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg " id="headerNav">
      <div class="container-fluid">
        <a class="navbar-brand d-block d-lg-none" href="#">
          <img src="https://i.imgur.com/Pga889e.png" height="80" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/servicii">
                Servicii
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a class="nav-link mx-2" href="/home">
                <img src="https://i.imgur.com/Pga889e.png" height="80" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/preturi">
                Preturi
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
