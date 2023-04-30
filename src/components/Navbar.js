import {Container, Navbar} from "react-bootstrap";


const NavbarDiv = () => {
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
            Mobilicis 
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarDiv;