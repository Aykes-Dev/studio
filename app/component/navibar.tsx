/* eslint-disable @next/next/no-img-element */
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Nav_btn_modal from "./nav_btn_modal";

export default function NaviBar() {
  function alert_a(){
    alert("Скоро появится. А пока воспользуйтесь ссылками на WhatsApp и Telegram.")
  }
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/logo.png"
              height="28"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto mt-2">
            <Nav.Link href="#home">Главная</Nav.Link>
          </Nav>
          <Navbar.Brand href="https://t.me/+79154397440">
            <img
              alt=""
              src="images/network_icon/telegram_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="https://l.clck.bar/40116">
            <img
              alt=""
              src="images/network_icon/whatsapp_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-3">
            <Navbar.Text>Тел. : +7 915 439 7440</Navbar.Text>
          </Nav>
          <Nav>
            <Nav_btn_modal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
