import { Row, Col } from "react-bootstrap";
import MusicFigure from "./MusicFigure";

const NuoviEpisodiRadio = () => {
  return (
    <>
    <br/>
      <h3>
        Nuovi Episodi Radio
        <span>
          <i className="bi bi-caret-right"></i>
        </span>
      </h3>
      <br/>
        <Row>
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
    </>
  );
};

export default NuoviEpisodiRadio;
