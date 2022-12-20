import "./App.css";
import { Col, Row, Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import Card from "./component/Card.js";
import Detail from "./component/Detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
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
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
        <Route path="*" element={<div>없는페이지</div>}></Route>
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
