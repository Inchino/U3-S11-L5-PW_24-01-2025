import { Row, Col } from "react-bootstrap";
import SingleTrack from "./SingleTrack";
import NewTracksProps from "../types/NewTracksProps";

const NuoveUscite = ({ tracks }: NewTracksProps) => {
  return (
    <>
      <br />
      <h3 className="text-start">
        Nuove Uscite
        <span>
          <i className="bi bi-caret-right"></i>
        </span>
      </h3>
      <br />
      <Row xs={3} md={4} lg={5} xl={6} className="g-4">
        {tracks.slice(0, 12).map((track) => (
          <Col key={track.id}>
            <SingleTrack track={track} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NuoveUscite;


