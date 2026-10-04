import Navbar from "./components/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        {/* Espace entre Navbar et Header */}
        <h1 className="text-center mt-5 mb-5">Welcome to My React App</h1>

        {/* Cards */}
        <div className="d-flex justify-content-center gap-5 flex-wrap px-5">
          <Card style={{ width: "24rem", minHeight: "350px" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="fs-2">Card 1</Card.Title>
              <Card.Text className="fs-5">
                This is my first React card.
              </Card.Text>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", minHeight: "350px" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="fs-2">Card 2</Card.Title>
              <Card.Text className="fs-5">
                This is my second React card.
              </Card.Text>
              <Button variant="success" size="lg">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "24rem", minHeight: "350px" }}>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="fs-2">Card 3</Card.Title>
              <Card.Text className="fs-5">
                This is my third React card.
              </Card.Text>
              <Button variant="warning" size="lg">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
