import { Row, Col } from "react-bootstrap";
import ListItemProps from "../types/ListItemProps";

function ListItem({ info }: ListItemProps) {
  return (
    <Row className="bg-dark justify-content-center p-3 m-3 rounded">
      <Col className="text-danger d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>
        {info}
      </Col>
      <Col
        className="text-danger d-flex justify-content-end align-items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <i className="bi bi-caret-right"></i>
      </Col>
    </Row>
  );
}

export default ListItem;
