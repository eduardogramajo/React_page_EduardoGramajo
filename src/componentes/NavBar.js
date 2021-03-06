import CartWidget from "../CartWidget"
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="danger" variant="dark" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="barra">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <NavDropdown title="CATEGORIAS" >
              <NavDropdown.Item as={Link} to="/categoria/diecast">DIECAST</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/pvc">PVC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/statue">STATUE</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MARCAS">
              <NavDropdown.Item as={Link} to="/marca/bandai">BANDAI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/banpresto">BANPRESTO</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/mcfarlane">MCFARLANE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/marca/kotobukiya">KOTOBUKIYA</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/info">INFO</Nav.Link>
            <Nav.Link as={Link} to="/contacto">CONTACTO</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar