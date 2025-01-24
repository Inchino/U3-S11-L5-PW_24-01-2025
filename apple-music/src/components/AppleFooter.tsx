import { Container, Row, Col } from "react-bootstrap";

function AppleFooter() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        {/* Prima riga: Sezione Lingue */}
        <Row className="mb-2">
          <Col className="d-flex justify-content-start">
            <span>Italia</span>
            <span className="mx-2">|</span>
            <span>English (UK)</span>
          </Col>
        </Row>

        {/* Seconda riga: Copyright */}
        <Row className="mb-2">
          <Col className="text-center">
            <p className="mb-0">
              Copyright © 2024 Apple Inc. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>

        {/* Terza riga: Link */}
        <Row>
          <Col>
            <div className="d-flex flex-wrap justify-content-center gap-2">
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
    </footer>
  );
}

export default AppleFooter;
