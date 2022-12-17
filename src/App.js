import "./App.css";
import { Col, Row, Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function App() {
  const [shoes] = useState(data);
  const shoesList = shoes.map((a, i) => (
    <div className="col-md-4" key={i}>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
        width="80%"
      />
      <h4>{shoes[i].title}</h4>
      <p>{shoes[i].price}</p>
    </div>
  ));

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">쇼핑</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-box"></div>
      <Container>
        <Row>{shoesList}</Row>
      </Container>
    </div>
  );
}

export default App;
