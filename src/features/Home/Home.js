import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
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
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Home() {
  const [index, setIndex] = useState(0);
  const form = useRef();
  // const alert_message = `Programarea ta a fost trimisa!`;
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7ue6dj",
        "template_aolzofr",
        form.current,
        "KYxyvtusiDQvtKEnw"
      )
      .then(
        (result) => {
          setBasicModal(!basicModal);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={styles["carusel"]}
      >
        <Carousel.Item>
          <img
            src="https://i.imgur.com/PJcOHW6.jpg"
            alt="imagini"
            className={styles["imagini_carusel"]}
          />
          <Carousel.Caption>
            <h3>Experienta si profesionalism</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://i.imgur.com/rEgL2Ov.jpg"
            alt="imagini"
            className={styles["imagini_carusel"]}
          />
          <Carousel.Caption>
            <h3>Servicii de calitate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.imgur.com/wQXHYzO.jpg"
            alt="imagini"
            className={styles["imagini_carusel"]}
          />
          <Carousel.Caption>
            <h3>Aparatura moderna</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1> Servicii</h1>
      <div className={styles["servicii"]}>
        <Card style={{ width: "18rem" }} className={styles["cardbox"]}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/yCCxVp9.png"
            className={styles["card"]}
          />
          <Card.Body className={styles["carduri"]}>
            <Card.Title>Consultatie</Card.Title>
            <Card.Text>Bucura-te de o consulatie gratuita!</Card.Text>
            <Button variant="primary" className={styles["butoane"]}>
              Solicita programare
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={styles["cardbox"]}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/DxO1uQ2.png"
            className={styles["card"]}
          />
          <Card.Body className={styles["carduri"]}>
            <Card.Title>Chirurgie</Card.Title>
            <Card.Text>
              Extracția dentară este o intervenție chirurgicală de necessitate
              ce trebuie efectuată după epuizarea metodelor de tratament
              conservator.
            </Card.Text>
            <Button
              variant="primary"
              className={styles["butoane"]}
              href="/servicii"
            >
              Vezi mai mult
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={styles["cardbox"]}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/dnf9X7e.png"
            className={styles["card"]}
          />
          <Card.Body className={styles["carduri"]}>
            <Card.Title>Protetica</Card.Title>
            <Card.Text>
              Protetica dentară este ramura stomatologiei care se ocupă cu
              înlocuirea dinților lipsă sau reabilitarea orală complexă a
              arcadelor dentare.
            </Card.Text>
            <Button
              variant="primary"
              className={styles["butoane"]}
              href="/servicii"
            >
              Vezi mai mult
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={styles["cardbox"]}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/ekmFXuI.png"
            className={styles["card"]}
          />
          <Card.Body className={styles["carduri"]}>
            <Card.Title>Endodontie</Card.Title>
            <Card.Text>
              Endodonția este specialitatea stomatologică care se ocupă cu
              studiul și tratamentul afecțiunilor pulpei dentare (nervului) și
              al complicațiilor acestora.
            </Card.Text>
            <Button
              variant="primary"
              className={styles["butoane"]}
              href="/servicii"
            >
              Vezi mai mult
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className={styles["cardbox"]}>
          <Card.Img
            variant="top"
            src="https://i.imgur.com/JUzOuaK.png"
            className={styles["card"]}
          />
          <Card.Body className={styles["carduri"]}>
            <Card.Title>Pedodontia</Card.Title>
            <Card.Text>
              Pedodonția, numită și stomatologie pediatrică, este specialitatea
              stomatologică care desfășoară măsuri de prevenție terapeutice
              pentru copii și adolescenți, cuprinzându-i și pe cei cu necesități
              speciale de tratament.
            </Card.Text>
            <Button
              variant="primary"
              className={styles["butoane"]}
              href="/servicii"
            >
              Vezi mai mult
            </Button>
          </Card.Body>
        </Card>
      </div>
      <h1>Contact</h1>
      <div className={styles["contact"]}>
        {/* <Form className={styles["form"]}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nume</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prenume</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nume@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Numar telefon</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Motivul programarii</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-success">Trimite</Button>
        </Form> */}

        <form ref={form} onSubmit={sendEmail} className={styles["form"]}>
          <label>Nume si prenume</label>
          <input
            type="text"
            name="user_name"
            className="mb-3"
            id="user_name"
            className={styles["input"]}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="user_email"
            className="mb-3"
            placeholder="nume@example.com"
            className={styles["input"]}
          />
          <label>Numar telefon</label>
          <input
            required
            type="number"
            name="user_phone"
            className="mb-3"
            placeholder="0745 000 000"
            className={styles["input"]}
          />
          <label>Motivul programarii:</label>
          <textarea
            name="message"
            as="textarea"
            rows={3}
            className={styles["message"]}
          />
          {/* <input type="submit" value="Send" className="mb-3" /> */}

          <Button
            type="submit"
            variant="outline-success"
            value="Send"
            className="mb-3"
            className={styles["submit"]}
          >
            Trimite
          </Button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.5695636219095!2d25.33043555193417!3d45.49582079205654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b337f69c4a8927%3A0xba0abc2aa46e057!2sDN73F%20355%2C%20Moieciu%20de%20Jos%20507135!5e0!3m2!1sro!2sro!4v1702307812018!5m2!1sro!2sro"
            width="600"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br></br>
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

      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Info</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Programarea ta a fost inregistrata, vei primi confirmarea pe
              email.{" "}
            </MDBModalBody>

            <MDBModalFooter>
              <a href="/home">
                {" "}
                <MDBBtn color="secondary" onClick={toggleOpen}>
                  Inchide
                </MDBBtn>
              </a>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
