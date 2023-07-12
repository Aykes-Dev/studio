"use client";
import './price.module.css';
import { Container, Table } from "react-bootstrap";

function Price() {
  return (
    <Container fluid>
    <Container id='price_img' className="pt-5 pb-5">
        <div><h1>Наши услуги:</h1></div>
      <Table style={{ opacity: 1}}>
        <tbody>
          <tr>
            <td colSpan={3}>Пошив салона</td>
            <td className='text-end'>от 5000</td>
          </tr>
          <tr>
            <td colSpan={3}>Пошив сидений</td>
            <td className='text-end'>от 1500</td>
          </tr>
          <tr>
            <td colSpan={3}>Перетяжка потолка</td>
            <td className='text-end'>от 7000</td>
          </tr>
          <tr>
            <td colSpan={3}>Перетяжка рулей</td>
            <td className='text-end'>от 3000</td>
          </tr>
          <tr>
            <td colSpan={3}>Ремонт сидений</td>
            <td className='text-end'>от 8000</td>
          </tr>
          <tr>
            <td colSpan={3}>Реставрация салонов</td>
            <td className='text-end'>от 9000</td>
          </tr>
          <tr>
            <td colSpan={3}>Детйлинг салона</td>
            <td className='text-end'>от 4500</td>
          </tr>
          <tr>
            <td colSpan={3}>Детейлинг кузова</td>
            <td className='text-end'>от 8900</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </Container>
  );
}

export default Price;
