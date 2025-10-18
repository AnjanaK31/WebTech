import { Container, Navbar, Nav } from "react-bootstrap";

// NavbarComponent to render the site's navigation bar
const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand name or logo for the website */}
        <Navbar.Brand href="#">My Blog</Navbar.Brand>
        {/* Toggle button for mobile responsiveness */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export NavbarComponent for use in other parts of the app
export default NavbarComponent;
