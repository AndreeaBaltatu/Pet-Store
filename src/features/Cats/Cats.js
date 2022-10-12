import { useEffect } from "react";
import { useState } from "react";
import styles from "./Cats.module.css";
import { ProductCard } from "./ProductCard.js";
export function Cats() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/catproducts?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  if (!products) {
    return <strong>Loading...</strong>;
  }

  return (
    <>
      <section className={styles["product_page"]}>
        <div className={styles["filterssection"]}>
          <p>Filter after:</p>
          <div className={styles["filters"]}>
            <label>
              <input type="checkbox"></input>
              Food
            </label>
            <label>
              <input type="checkbox"></input>
              Prizes
            </label>
            <label>
              <input type="checkbox"></input>
              Toys
            </label>
            <label>
              <input type="checkbox"></input>
              Chains
            </label>
          </div>
        </div>
        <div className={styles["product_list"]}>
          {products.map((product) => (
            <ProductCard key={product.id} produs={product} />
          ))}
        </div>
      </section>
    </>
  );
}
