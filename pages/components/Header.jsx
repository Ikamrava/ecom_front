import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartContext } from './CartContext';

function Header() {
  const {cart} = useContext(CartContext)
  
  return (
    <Navbar bg="dark" variant="dark" expand="md" >
      <Container>
        <Navbar.Brand href="/">Shophouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart" className={cart.length>0 ? "text-white": null}>Cart ({cart.length}) </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header