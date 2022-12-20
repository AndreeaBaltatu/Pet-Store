import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["navlist1"]}>
        <a href="/home" className={styles["logo"]}>
          {" "}
          <img src="https://i.imgur.com/ViI4EeF.png" alt="logo"></img>
        </a>
        <li>
          <NavLink className={styles["removeunderline"]} to="/account">
            MY ACCOUNT
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/contact">
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/login">
            LOG IN
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/shopping">
            SHOPPING CART
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/shopping">
            ADMIN
          </NavLink>
        </li>
      </ul>
      <ul className={styles["navlist2"]}>
        <li>
          <NavLink className={styles["removeunderline"]} to="/dogs">
            DOGS
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/cats">
            CATS
          </NavLink>
        </li>

        <li>
          <NavLink className={styles["removeunderline"]} to="/fishes">
            FISHES
          </NavLink>
        </li>

        <li>
          <NavLink className={styles["adopt"]} to="/adoption">
            ADOPT A PET
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["removeunderline"]} to="/adopt">
            PROMOTIONS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
