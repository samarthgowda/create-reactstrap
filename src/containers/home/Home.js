import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Button } from "reactstrap";

export default function Home() {
  return (
    <Jumbotron fluid className="text-center bg-dark">
      <Container className="text-white">
        <h1 className="display-3 font-weight-bold py-4">Your Main Tagline</h1>
        <h4 className="font-weight-light">Some random text</h4>
        <div className="py-3">
          <Button tag={Link} to="/" className="mx-2" color="warning">
            Click Here
          </Button>
          <Button tag={Link} to="/" className="mx-2" color="warning" outline>
            Another Button
          </Button>
        </div>
      </Container>
    </Jumbotron>
  );
}
