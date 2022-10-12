import styles from "./Cats.module.css";
import { Link } from "react-router-dom";

export function ProductCard({ produs }) {
  return (
    <article className={styles["product_box"]}>
      <Link to={`/products/${produs.id}`}>
        <img
          className={styles["productImages"]}
          src={produs.poza}
          alt={`${produs.title} poza`}
        />{" "}
      </Link>
      <h2 className={styles["ProductTitle"]}>{produs.title} </h2>
      <div className={styles["ProductPrice"]}>Pret: {produs.pret} lei</div>
      <div className={styles["ProductGramaj"]}>Gramaj: {produs.gramaj}</div>
      <button className={styles["addToCart"]}>Add to cart</button>
    </article>
  );
}
