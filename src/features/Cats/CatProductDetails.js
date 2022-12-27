import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cats.module.css";

export function CatProductDetails() {
  const { productId } = useParams();
  const [catProduct, setCatProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/catproducts/" + productId)
      .then((res) => res.json())
      .then((data) => setCatProduct(data));
  }, [productId]);

  if (!catProduct) {
    return <strong> Loading...</strong>;
  }

  return (
    <>
      <h1 className={styles["title"]}>{catProduct.title}</h1>
      <section className={styles["detailsContainer"]}>
        <img
          className={styles["productimage"]}
          src={catProduct.poza}
          alt={` Poza ${catProduct.title}`}
        />{" "}
        <div className={styles["container"]}>
          <p>
            {" "}
            <strong>Descriere: </strong>
            {catProduct.descriere}
          </p>
          <p>
            <strong>Beneficii: </strong> {catProduct.descriere}
          </p>
          <p>
            {" "}
            <strong>Pret: </strong> {catProduct.pret} lei
          </p>
          <p>
            <strong>Gramaj: </strong> {catProduct.gramaj}
          </p>
          <p className={styles["buttons"]}>
            <button>Adauga in cos 🛒</button>

            <button>Sterge Produs 🗑</button>
            <button>Editeaza Produs ✎</button>
          </p>
        </div>
      </section>
      <div className={styles["recenzii"]}>
        <form className={styles["recenzii"]}>
          <p>
            Scrie o recenzie despre produsul<br></br> <b>{catProduct.title}</b>
          </p>
          <label htmlFor="lastName">Nume</label>
          <input type="text"></input>
          <label>Prenume</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Scrie recenzia:</label>
          <textarea
            type="text"
            name="recenzie"
            id="recenzie"
            rows="15"
            cols="50"
          ></textarea>
          <button>Trimite recenzia</button>
        </form>
      </div>
    </>
  );
}
