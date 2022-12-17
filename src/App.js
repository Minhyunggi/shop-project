import "./App.css";
import { Col, Row, Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

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
            <Link className="main-page" to="/">
              메인페이지
            </Link>
            <Link className="detail-page" to="/detail">
              상세페이지
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="main-box"></div>
              <Container>
                <Row>{shoesList}</Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
