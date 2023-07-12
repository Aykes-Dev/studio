/* eslint-disable @next/next/no-img-element */

import { Container, Navbar, Nav } from "react-bootstrap";

export default function NaviBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container >
        <Nav className="me-auto">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            AutoStudio
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Контакты</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/network_icon/instagram_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/network_icon/telegram_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/network_icon/vk_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/network_icon/whatsapp_512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Text>Тел. : +7 915 439 7440</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
