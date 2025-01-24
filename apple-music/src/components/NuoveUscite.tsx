import { Container, Row, Col } from "react-bootstrap";
import MusicFigure from "./MusicFigure";

const NuoveUscite = () => {
  return (
    <>
    <br/>
      <h3>
        Nuove Uscite
        <span>
          <i className="bi bi-caret-right"></i>
        </span>
      </h3>
      <br/>
      <Container>
        <Row xs={3}>
          <Col>
            <MusicFigure
              img="../assets/images/2a.png"
              title="Prologo con Abuelo"
            />
          </Col>
          <Col>
            <MusicFigure img="../assets/images/2b.png" title="The Wanderer" />
          </Col>
          <Col>
            <MusicFigure
              img="../assets/images/2c.png"
              title="Michael Bublé & Carly Pearce"
            />
          </Col>
          <Col>
            <MusicFigure
              img="../assets/images/2a.png"
              title="Prologo con Abuelo"
            />
          </Col>
          <Col>
            <MusicFigure img="../assets/images/2b.png" title="The Wanderer" />
          </Col>
          <Col>
            <MusicFigure
              img="../assets/images/2c.png"
              title="Michael Bublé & Carly Pearce"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NuoveUscite;