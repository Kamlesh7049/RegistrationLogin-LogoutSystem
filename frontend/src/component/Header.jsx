import {Link}from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header=()=>{
    return(
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact us</Nav.Link>
            <Nav.Link as={Link} to="dashboard">DashBoard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}
export default Header;