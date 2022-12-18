import "./App.css";
import { Col, Row, Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Card, Detail } from "./component.js";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to={"/"}>
              메인페이지
            </Link>
            <Link className="link" to={"/detail"}>
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
              <div className="main-box"></div>
              <Container>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i}></Card>;
                })}
              </Container>
            </>
          }
        ></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
