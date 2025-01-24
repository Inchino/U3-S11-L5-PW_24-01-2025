import { Row, Col } from "react-bootstrap"
import ListItemProps from "../types/ListItemProps";

function ListItem({info}: ListItemProps) {
  return (
        <Row className="bg-dark justify-content-center p-3 m-3 rounded">
            <Col className="text-danger d-flex">{info}</Col>
            <Col className="text-danger d-flex justify-content-end"><i className="bi bi-caret-right"></i></Col>
        </Row>
  );
}

export default ListItem;