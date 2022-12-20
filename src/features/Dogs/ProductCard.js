import styles from "./Dogs.module.css";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <article className={styles["product_box"]}>
      <Link to={`/dogproducts/${product.id}`}>
        <img
          className={styles["productImages"]}
          src={product.poza}
          alt={`${product.title} poza`}
        />{" "}
      </Link>
      <h2 className={styles["ProductTitle"]}>{product.title} </h2>
      <div className={styles["ProductPrice"]}>Pret: {product.pret} lei</div>
      <div className={styles["ProductGramaj"]}>Gramaj: {product.gramaj}</div>
      <button className={styles["addToCart"]}>Add to cart</button>
    </article>
  );
}
