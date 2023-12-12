import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import styles from "./Servicii.module.css";
export function Servicii() {
  return (
    <>
      <img
        src="https://i.imgur.com/MdAeKuN.png"
        alt="servicii"
        className={styles["figure"]}
      />
      <div className={styles["servicii"]}>
        <Card className={styles["card"]}>
          <Card.Img variant="top" src="https://i.imgur.com/cpcFvAU.png" />
          <Card.Body>
            <Card.Text>
              <h2>Chirurgie</h2>
              <ul>
                Când ai nevoie de extractie? Există multe motive pentru care
                este necesară extracția unui dinte:
                <li>Dintele este foarte cariat</li>
                <li>parodontoză (dinții au mobilitate foarte mare)</li>
                <li>dintele este fracturat, încât nu mai poate fi recuperat</li>
                <li>
                  uneori, dintele trebuie extras deoarece este pozitionat gresit
                  (cum ar fi molarii de minte)
                </li>
                <li>
                  pregatirea unei arcade în vederea montarii unui aparat
                  ortodontic
                </li>
                <li>
                  infecții profunde la nivelul vârfului rădăcinii, netratabile
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Img variant="top" src="https://i.imgur.com/0ctobbG.png" />
          <Card.Body>
            <Card.Text>
              <h2>Endodontie</h2>
              Endodonția este specialitatea stomatologică care se ocupă cu
              studiul și tratamentul afecțiunilor pulpei dentare (nervului) și
              al complicațiilor acestora în țesutul situat sub dinte --
              parodonțiul apical. Fiecare dinte prezintă, în interiorul său, un
              „gol” ce se numește camera pulpară, acest spatiu prelungindu-se la
              nivelul rădăcinilor prin intermediul canalelor radiculare. În
              aceste „goluri” se găsește pulpa dentară, compusă din vase și
              nervi cu rol în inervare și hrănirea dintelui. În cazul unei
              afecțiuni dentare, ce se complică și cu afectarea pulpei, aceasta
              se inflamează și crește în volum; spațiul dentar este un spațiu
              inextensibil și astfel presiunea internă crește, ducând la
              apariția durerii.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Img variant="top" src="https://i.imgur.com/JUzOuaK.png" />
          <Card.Body>
            <Card.Text>
              <h2>Pedodontia</h2>
              Pedodonția, numită și stomatologie pediatrică, este specialitatea
              stomatologică limitată de vârstă, care desfășoară măsuri de
              prevenție terapeutice pentru copii și adolescenți, cuprinzându-i
              și pe cei cu necesități speciale de tratament. Pentru ca primele
              vizite la medical dentist să fie percepute poztiv și să crească
              încrederea copilului este recomandat ca acesta să fie consulatat
              de medicul specialist pedodont. Dintre manoperele nedureroase și
              chiar prietenoase cu cei mici, se numară periajul professional,
              sigilările șanțurilor și fosetelor sau fluorizările.Sigilarea este
              manopera de izolare a suprafeței dentare de mediul cavității
              bucale cu scopul de a preveni formarea cariilor.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles["card"]}>
          <Card.Img variant="top" src="https://i.imgur.com/pPWCqs4.png" />
          <Card.Body>
            <Card.Text>
              <h2>Protetica</h2>
              Protetica dentară este ramura stomatologiei care se ocupă cu
              înlocuirea dinților lipsă sau reabilitarea orală complexă a
              arcadelor dentare. Prin intervenții de protetică dentară se
              restabilește integritatea dentară afectată de leziuni sau
              degradare, folosind lucrarea protetică - proteza dentară - fixă
              sau mobilă, individualizată pacientului, fațetele dentare,
              coroanele dentare, incrustațiile, punțile dentare și lucrările
              complexe protetice pe implanturi.Protezarea fixă reprezintă acea
              parte a proteticii dentare care se ocupă cu restaurarea şi/sau
              substituirea dinţilor cu elemente artificiale ce nu pot fi
              mobilizati. Protezarea amovibilă (mobilizabilă) reprezintă acea
              parte a proteticii dentare ce se ocupă cu substituirea dinţilor şi
              a structurilor adiacente a pacienţilor în totalitate sau parţial
              edentaţi prin mijloace ce pot fi mobilizate în vederea
              igienizării. Prin protezare scheletata cu atachementuri se
              înţelege o proteză, fixă sau mobilă, susţinută de stâlpi dentari
              cu un sistem particular compus din două sub-unităţi (ancorare
              primară şi ancorare secundară). Proteza pe implanturi reprezintă
              acea parte a proteticii ce se ocupă cu restaurarea obţinută prin
              protezarea pe implanturi
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
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
