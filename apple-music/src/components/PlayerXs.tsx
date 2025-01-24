import { Container, Button } from "react-bootstrap";

function PlayerXs() {
  return (
    <Container
      fluid
      className="bg-dark p-2 d-flex align-items-center"
      style={{
        backgroundColor: "#000",
        borderRadius: "15px",
        maxWidth: "500px",
        height: "60px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center bg-secondary"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "10px",
        }}
      >
        <i
          className="bi bi-music-note text-light"
          style={{ fontSize: "20px" }}
        ></i>
      </div>

      <div className="flex-grow-1 ms-3"></div>

      <div className="d-flex gap-2">
        <Button
          variant="outline-secondary"
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <i
            className="bi bi-play-fill text-light"
            style={{ fontSize: "16px" }}
          ></i>
        </Button>
        <Button
          variant="outline-secondary"
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <i
            className="bi bi-skip-forward-fill text-light"
            style={{ fontSize: "16px" }}
          ></i>
        </Button>
      </div>
    </Container>
  );
}

export default PlayerXs;
