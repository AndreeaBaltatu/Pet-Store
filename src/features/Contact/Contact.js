import styles from "./Contact.module.css";
import { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
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

export function Contact() {
  const form = useRef();

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

  return (
    <>
      <img
        src="https://i.imgur.com/BIWKNrM.png"
        alt="contact"
        className={styles["figure"]}
      />

      <div className={styles["contact"]}>
        {}

        <form ref={form} onSubmit={sendEmail} className={styles["form"]}>
          <label>Nume si prenume</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className={styles["input"]}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="user_email"
            placeholder="nume@example.com"
            className={styles["input"]}
          />
          <label>Numar telefon</label>
          <input
            required
            type="number"
            name="user_phone"
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

          <newButton
            type="submit"
            variant="outline-success"
            value="Send"
            className={styles["submit"]}
          >
            Trimite
          </newButton>
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
          <MDBContainer className="p-4 pb-4">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <div className="me-3">
                  Vino la cabiet pentru o consultatie gratuita! sau
                  programeaza-te online!
                </div>
              </p>
              <div>Adresa: Moieciu de Jos, Brasov</div>
              <div>tel: 0757088840</div>
              <div>email: dr.cosmin.musuroi@gmail.com</div>
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
