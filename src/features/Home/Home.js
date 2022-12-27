import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles["main"]}>
        <form className={styles["form"]}>
          <div>
            <label>Inscrie-te la newsletterul nostru:</label>

            <label>Nume si prenume</label>

            <input type="text"></input>

            <label>Email:</label>

            <input type="email"></input>
            <button type="submit">Inscrie-te!</button>
          </div>
        </form>
        <img src="https://i.imgur.com/oRD04zR.png" alt="adopt" />
      </div>
    </>
  );
}
