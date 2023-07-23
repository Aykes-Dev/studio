"use client";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container fluid className="bg-dark">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="p-2 text-light" sm={5}>
              Адрес:
              <br />
              <br />
              142714, село Молоково, Московская область,<br />
              Революционная улица, 156
            </Col>
            <Col className="p-2 text-light" sm={5}>
              График работы:
              <br />
              <br />
              ПН-СБ: с 10:00 до 20:00
              <br />
              ВС: Выходной
            </Col>
            <Col className="p-2 text-light me-auto col-xs-1" sm={2}>
              Телефон:
              <br />
              <br />
              +7 915 439 7440
            </Col>
          </Row>
          <div className="p-2 text-light text-center">
            <br />
            <small>Powered by Савостьянов Андрей(Frontend, Backend), Сергей Сон(Backend, Telegram bot), Олег Алексеев(Design).</small>
          </div>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
