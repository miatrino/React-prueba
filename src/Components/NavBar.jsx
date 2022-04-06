import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWidget from './CardWidget';



export default function NavBar() {
  return (
  <>
   <div>
   <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Step by Step</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Calzado Femenino</Nav.Link>
      <Nav.Link href="#features">Calzado Masculino</Nav.Link>
      <Nav.Link href="#pricing">Calzado Unisex</Nav.Link>
    </Nav>
    <CardWidget />
    </Container>
  </Navbar>
   </div>
  </>
  )
}
