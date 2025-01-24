import { Container, Row, Col, Card } from "react-bootstrap";

const Novità = () => {
  return (
    <>
      <h1>Novità</h1>
      <hr />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h6>NUOVA STAZIONE RADIO</h6>
                </Card.Title>
                <Card.Text>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src="..\assets\images\1a.png" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h6>NUOVA STAZIONE RADIO</h6>
                </Card.Title>
                <Card.Text>
                  Ecco la nuova casa della musica latina
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src="..\assets\images\1b.png" />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Novità;
