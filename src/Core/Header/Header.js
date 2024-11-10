import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../Assets/EXOTICLOGO 1.png"
export const Header = () => {
  return (
    <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="nav-links active ">Home</Nav.Link>
                  <Nav.Link href="#action2" className="nav-links">Our Menu</Nav.Link>
                  <Nav.Link href="#action3" className="nav-links">Gallery</Nav.Link>
                  <Nav.Link href="#action4" className="nav-links">About Us</Nav.Link>
                  <Nav.Link href="#action5" className="nav-links">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
