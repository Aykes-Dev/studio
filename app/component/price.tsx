"use client";
import "./price.module.css";
import { Container, Table } from "react-bootstrap";

function Price() {
  return (
    <Container fluid>
      <Container id="price_img" className="pt-5 pb-5">
        <div>
          <h1>Наши услуги:</h1>
        </div>
        <Table style={{ opacity: 1 }}>
          <tbody>
            <tr>
              <td colSpan={3}>Химчистка салона</td>
              <td className="text-end">от 8000</td>
            </tr>
            <tr>
              <td colSpan={3}>Полировка авто</td>
              <td className="text-end">от 8000</td>
            </tr>
            <tr>
              <td colSpan={3}>Восстановление геометрии сидения</td>
              <td className="text-end">от 3000</td>
            </tr>
            <tr>
              <td colSpan={3}>Ремонт сидения</td>
              <td className="text-end">от 5000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перетяжка руля экокожа</td>
              <td className="text-end">5000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перетяжка руля кожа</td>
              <td className="text-end">9000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перешив сидения</td>
              <td className="text-end">от 20000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перешив салона</td>
              <td className="text-end">от 70000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перетяжка потолка</td>
              <td className="text-end">от 22000</td>
            </tr>
            <tr>
              <td colSpan={3}>Перетяжка подлокотника</td>
              <td className="text-end">от 3000</td>
            </tr>
            <tr>
              <td colSpan={3}>Покраска кожи</td>
              <td className="text-end">от 1000</td>
            </tr>
          </tbody>
        </Table>
        <small className="text-muted">
          * все цены приведены для ориентира, для уточнения стоимости и сроков
          работ уточняйте по телефону или мессенджерам.
        </small>
      </Container>
    </Container>
  );
}

export default Price;
