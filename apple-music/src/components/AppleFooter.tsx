import { Container, Row, Col } from "react-bootstrap";
import PlayerXs from "./PlayerXs";

function AppleFooter() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="mb-3">
        <Row className="mb-5">
          <Col className="d-flex">
            <span>Italia</span>
            <span className="mx-2">|</span>
            <span>English (UK)</span>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p className="mb-0">
              Copyright © 2024 Apple Inc. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex flex-wrap gap-2">
              <a href="#" className="text-light text-decoration-none">
                Condizioni dei servizi internet
              </a>
              <span>|</span>
              <a href="#" className="text-light text-decoration-none">
                Apple Music e privacy
              </a>
              <span>|</span>
              <a href="#" className="text-light text-decoration-none">
                Avviso sui cookie
              </a>
              <span>|</span>
              <a href="#" className="text-light text-decoration-none">
                Supporto
              </a>
              <span>|</span>
              <a href="#" className="text-light text-decoration-none">
                Feedback
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <PlayerXs/>
    </footer>
  );
}

export default AppleFooter;
