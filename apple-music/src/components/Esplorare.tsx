import ListItem from "./ListItem";
import { Row, Col } from "react-bootstrap";

const Esplorare = () => {
  const items = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi Artisti",
    "Hit del passato",
  ];

  return (
    <>
      <br />
      <h3>Altro da Esplorare</h3>
      <br />
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item, index) => (
          <Col key={index}>
            <ListItem info={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Esplorare;
