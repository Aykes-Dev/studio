import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Footer() {
  return (
    <Container fluid className="bg-dark">
      <Container>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2 text-light">Адрес: Каширское шоссе 61/3А</div>
          <div className="p-2 text-light ms-auto">© Савостьянов Андрей</div>
        </Stack>
      </Container>
    </Container>
  );
}

export default Footer;
