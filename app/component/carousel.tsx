"use client";
/* eslint-disable @next/next/no-img-element */
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

function Carousels() {
  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item style={{ maxHeight: "35rem" }}>
          <img className="d-block w-100" src="images/1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Пертяжка сидений</h3>
            <p>Такое комфортное сиденье Вам больше нигде не сделают.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "35rem" }}>
          <img
            className="d-block w-100"
            src="images/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Пошив салона</h3>
            <p>Сделает красиво. На любой вкус и любого цвета.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "35rem" }}>
          <img className="d-block w-100" src="images/3.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Перетяжка руля</h3>
            <p>Вы не захотите его отпускать ближайщие 10 лет.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carousels;
