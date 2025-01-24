import { Container } from "react-bootstrap";
import MusicCardProps from "../types/MusicCardProps";

function MusicCards({ svg, text }: MusicCardProps) {
  return (
    <Container fluid>
      <h6
        className="text-uppercase mb-2"
        style={{ fontSize: "12px", fontWeight: "bold" }}
      >
        Nuova Stazione Radio
      </h6>
      <p className="mb-3" style={{ fontSize: "14px", lineHeight: "1.5" }}>
        {text}
      </p>
      <img
        src={svg}
        alt="Playlist"
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />
    </Container>
  );
}

export default MusicCards;
