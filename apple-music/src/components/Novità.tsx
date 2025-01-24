import { Row, Col } from "react-bootstrap";
import MusicCards from "./MusicCard";

const Novità = () => {
  return (
    <>
      <br />
      <h3>Novità</h3>
      <hr />
      <Row>
        <Col>
          <MusicCards svg="../assets/images/1a.png" text="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"/>
        </Col>
        <Col className="d-none d-lg-block">
          <MusicCards svg="../assets/images/1b.png" text="Ecco la nuova casa della musica latina"/>
        </Col>
      </Row>
    </>
  );
};

export default Novità;
