import { useEffect } from "react";
import { useState } from "react";
import styles from "./Adoption.module.css";
import { AnimalCard } from "./AnimalCard";

export function Adoption() {
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/adoption?_limit=30")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);
  if (!animals) {
    return <strong>Loading...</strong>;
  }

  return (
    <>
      <section className={styles["adopt_page"]}>
        <div className={styles["filterssection"]}>
          <p>Filter after:</p>
          <div className={styles["filters"]}>
            <label>
              <input type="checkbox"></input>
              Dogs
            </label>
            <label>
              <input type="checkbox"></input>
              Cats
            </label>
          </div>
        </div>
        <div className={styles["product_list"]}>
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
    </>
  );
}
