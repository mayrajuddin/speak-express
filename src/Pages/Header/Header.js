import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.png'
import './Header.css'
import { FaUser } from "react-icons/fa";
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Link to='/' className='text-decoration-none d-flex align-items-center'>
                    <span className='me-2'><img src={logo} alt="" className='logo' /></span>
                    <span className='fs-4 text-uppercase font-c fw-bold'>Speak Express</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="mx-auto nav-c">
                        <Link to='/' className='nav-link  fs-4 text-capitalize'>Courses</Link>
                        <Link to='blog' className='nav-link fs-4 text-capitalize'>Blog</Link>
                        <Link to='blog' className='nav-link fs-4 text-capitalize'>FAQ</Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <Link to='login' className='py-2 px-4 me-3 text-decoration-none bg-light font-c text-uppercase'>Login</Link>
                        <Button variant="dark" className='py-2 px-4'>Dark</Button>
                        <span> <FaUser className='fs-4 ms-2' /></span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;