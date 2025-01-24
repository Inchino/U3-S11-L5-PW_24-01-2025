import { Row, Col } from "react-bootstrap";
import SingleTrack from "./SingleTrack";
import NewTracksProps from "../types/NewTracksProps";

const NuoveUscite = ({tracks}: NewTracksProps) => {
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
        <Row xs={3}>
        {tracks.slice(0, 6).map((track) => (
        <Col key={track.id}>
          <SingleTrack track={track}/>
        </Col>
      ))}
        </Row>
    </>
  );
};

export default NuoveUscite;