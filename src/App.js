import "./App.css";
import { Col, Row, Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
function App() {
  let [shoes] = useState(data);

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
        <Row>
          <Com shoes={shoes}></Com>
          <Com shoes={shoes}></Com>
          <Com shoes={shoes}></Com>
        </Row>
      </Container>
    </div>
  );
}

function Com(props) {
  let [shoes] = useState(data);
  {
    shoes.map(function (a, i) {
      return (
        <Col>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="80%"
          />
          <h4>{props.shoes[0].title}</h4>
          <p>{props.shoes[0].price}원</p>
        </Col>
      );
    });
  }
}
export default App;
