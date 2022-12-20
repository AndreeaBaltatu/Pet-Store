import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Dogs.module.css";

export function ProductDetails() {
  const { productId } = useParams();
  const [dogproduct, setDogproduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/dogproducts/" + productId)
      .then((res) => res.json())
      .then((data) => setDogproduct(data));
  }, [productId]);

  if (!dogproduct) {
    return <strong> Loading...</strong>;
  }

  return (
    <>
      <h1 className={styles["title"]}>{dogproduct.title}</h1>
      <section className={styles["detailsContainer"]}>
        <img
          className={styles["productimage"]}
          src={dogproduct.poza}
          alt={` Poza ${dogproduct.title}`}
        />{" "}
        <div className={styles["container"]}>
          <p>
            {" "}
            <strong>Descriere: </strong>
            {dogproduct.descriere}
          </p>
          <p>
            <strong>Beneficii: </strong> {dogproduct.descriere}
          </p>
          <p>
            {" "}
            <strong>Pret: </strong> {dogproduct.pret} lei
          </p>
          <p>
            <strong>Gramaj: </strong> {dogproduct.gramaj}
          </p>
          <p className={styles["buttons"]}>
            <button>Adauga in cos</button>
            <button>Scrie o recenzie despre produs</button>
            <button>Sterge Produs</button>
            <button>Editeaza Produs</button>
          </p>
        </div>
      </section>
    </>
  );
}
