import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["navlist1"]}>
        <a href="/home" className={styles["logo"]}>
          {" "}
          <img
            src="https://i.imgur.com/ViI4EeF.png"
            alt="logo"
            className={styles["logo"]}
          ></img>
        </a>
        <li>
          <NavLink className={styles["big"]} to="/register">
            <big>REGISTER</big>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["big"]} to="/contact">
            <big>CONTACT</big>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["big"]} to="/login">
            <big>LOGIN</big>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles["big"]} to="/shopping">
            <big> 🛒</big>
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
          <NavLink className={styles["removeunderline"]} to="/adoption">
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
