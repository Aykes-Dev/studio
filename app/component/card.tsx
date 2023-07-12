import { Card, Col, Container, Row } from "react-bootstrap";

export default function Cards() {
  return (
    <Container fluid className="bg-light">
      <Container className="pt-5 pb-5">
        <div>
          <h2>Наши работы</h2>
          <br />
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card style={{ minHeight: "20em"}}>
              <Card.Img variant="top" src="images/example_works/1.jpeg" style={{ minHeight: "17.5em"}} />
              <Card.Body>
                <Card.Title>Пошив салона</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ minHeight: "20em"}}>
              <Card.Img variant="top" src="images/example_works/2.jpeg" style={{ minHeight: "17.5em"}} />
              <Card.Body>
                <Card.Title>Пошив сидений</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ minHeight: "21.5em"}}>
              <Card.Img variant="top" src="images/example_works/3.jpeg" style={{ minHeight: "17.5em"}}/>
              <Card.Body>
                <Card.Title>Пошив салона</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ minHeight: "21.5em"}}>
              <Card.Img variant="top" src="images/example_works/4.jpg" style={{ minHeight: "17.5em", maxHeight: "17.5em"}}/>
              <Card.Body>
                <Card.Title>Пошив руля</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ minHeight: "21.5em"}}>
              <Card.Img variant="top" src="images/example_works/5.jpg" style={{ minHeight: "17.5em", maxHeight: "17.5em"}}/>
              <Card.Body>
                <Card.Title>Детейлинг кузова</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ minHeight: "21.5em"}}>
              <Card.Img variant="top" src="images/example_works/6.jpg" style={{ minHeight: "17.5em", maxHeight: "17.5em"}}/>
              <Card.Body>
                <Card.Title>Детейлинг салона</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
