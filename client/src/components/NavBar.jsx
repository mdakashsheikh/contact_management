import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="/">TODO-APP</Navbar.Brand>
            <div className='d-flex'>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                </Nav>
            </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar