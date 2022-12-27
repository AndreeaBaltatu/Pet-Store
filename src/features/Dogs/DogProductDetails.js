import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Dogs.module.css";

export function DogProductDetails() {
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
            <button>Adauga in cos 🛒</button>

            <button>Sterge Produs 🗑</button>
            <button>Editeaza Produs ✎</button>
          </p>
        </div>
      </section>
      <div className={styles["recenzii"]}>
        <form className={styles["recenzii"]}>
          <p>
            Scrie o recenzie despre produsul<br></br> <b>{dogproduct.title}</b>
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
