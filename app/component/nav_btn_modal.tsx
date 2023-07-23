'use client';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styles from "../component/nav.module.css";

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Заказать звонок</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Форма временно недоступна. Пожалуйста позвоните нам по тел: +7 915 439
          7440
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Nav_btn_modal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        id={styles.btn_z}
        className="me-auto"
        onClick={() => setModalShow(true)}
      >
        Заказать звонок
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
