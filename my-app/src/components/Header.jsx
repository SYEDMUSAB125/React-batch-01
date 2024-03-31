import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
     
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Link to="/" >
        <Navbar.Brand >Navbar</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
           <Link to="/home" >Home</Link> 
          <Link to="/feature">Features</Link> 
         <Link to="/pricing" >Pricing</Link>
           {/* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/feature">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link> */}
         </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
