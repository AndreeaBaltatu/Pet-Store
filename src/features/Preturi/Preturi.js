import styles from "./Preturi.module.css";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export function Preturi() {
  return (
    <>
      <img
        src="https://i.imgur.com/UHaUs5N.png"
        alt="preturi"
        className={styles["figure"]}
      ></img>

      <table striped bordered hover className={styles["tabel"]}>
        <thead>
          <tr>
            <th>Procedura</th>
            <th>Tarif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultatie</td>
            <td>Gratuit</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Igienizare (detartraj ultrasonic + periaj + air flow)</td>
            <td>300 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Detartraj Ultasonic + Periaj</td>
            <td>200 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Profilaxie Copii</td>
            <td>150 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Periaj Profesional</td>
            <td>150 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Sigilari de șanțuri și fosete</td>
            <td>100 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Extracție simplă monoradicular</td>
            <td>170 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Extracție simplă dinți pluri-radiculari</td>
            <td>200 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Extracție dinți parodontotici</td>
            <td>100 RON</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Extracție resturi radiculare</td>
            <td>200 RON</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <MDBFooter
          className="text-center text-white"
          style={{ backgroundColor: "#0a4275" }}
        >
          <MDBContainer className="p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">
                  Vino la cabiet pentru o consultatie gratuita!
                </span>
                <MDBBtn type="button" outline color="light" rounded>
                  Programeaza-te
                </MDBBtn>
              </p>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white" href="carpathiandentist.ro">
              Carpathian Dentist
            </a>
          </div>
        </MDBFooter>
      </footer>
    </>
  );
}
