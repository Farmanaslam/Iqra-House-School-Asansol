import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo1 from "/logo1.png";

import { Link, NavLink } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" id="nav" data-bs-theme="success">
      <Container>
        <img
          id="im1"
          src={logo1}
          style={{ width: "3rem", marginRight: "1rem" }}
        ></img>
        <Navbar.Brand href="/">Iqra House, Asansol</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link as={Link} to="/" href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/admission" href="/admission">
              Admission
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/legal/privacy" href="/legal/privacy">
              Privacy
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbars;
