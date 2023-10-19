import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' className='navbar-brand'>React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to ="/" className='nav-link'>Home</NavLink>
            <NavLink to ="/shop" className='nav-link'>shop</NavLink>
            <NavLink to ="/about" className='nav-link'>About</NavLink>
            <NavLink to ="/users" className='nav-link'>Users</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header