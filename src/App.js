import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
function App() {
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
    </div>
  );
}

export default App;
