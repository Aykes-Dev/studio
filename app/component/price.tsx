"use client";
import "./price.module.css";
import { Container, Table } from "react-bootstrap";


function Price(props: any) {
  return (
    <Container fluid>
      <Container id="price_img" className="pt-5 pb-5">
        <div>
          <h1>Наши услуги:</h1>
        </div>
        <Table style={{ opacity: 1 }}>
          <tbody>
            {props.prices!.map((price: any) => (
              <tr key={price.id}>
                <td colSpan={3}>{price.title}</td>
                <td className="text-end">{price.ot && "от "}{price.price}</td>
              </tr>
            ))}
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
