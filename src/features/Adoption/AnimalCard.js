import styles from "./Adoption.module.css";
import { Link } from "react-router-dom";

export function AnimalCard({ animal }) {
  return (
    <article className={styles["product_box"]}>
      <Link to={`/products/${animal.id}`}>
        <img
          className={styles["productImages"]}
          src={animal.poza}
          alt={`${animal.title} poza`}
        />{" "}
      </Link>
      <h2 className={styles["ProductTitle"]}>{animal.title} </h2>
      <div className={styles["ProductPrice"]}>Pret: {animal.pret} lei</div>
      <div className={styles["ProductGramaj"]}>Greutate: {animal.greutate}</div>
      <button className={styles["addToCart"]}>Adopt</button>
    </article>
  );
}
