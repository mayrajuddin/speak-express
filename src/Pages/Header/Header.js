import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.png'
import './Header.css'
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(authContext)
    return (
        <Navbar collapseOnSelect expand="lg" className='top-nav'>
            <Container>
                <Link to='/' className='text-decoration-none d-flex align-items-center'>
                    <span className='me-2'><img src={logo} alt="" className='logo' /></span>
                    <span className='fs-4 text-uppercase font-c fw-bold'>Speak Express</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="mx-auto nav-c">
                        <Link to='courses' className='nav-link  fs-4 text-capitalize'>Courses</Link>
                        <Link to='blog' className='nav-link fs-4 text-capitalize'>Blog</Link>
                        <Link to='faq' className='nav-link fs-4 text-capitalize'>FAQ</Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <Button variant="dark" className='py-2 px-4 '>Dark</Button>
                        {user?.uid ?
                            <Button onClick={logOut} className='py-2 mx-3 px-3 text-decoration-none font-c text-uppercase'>Log Out</Button> :
                            <>
                                <Link to='login' className='login py-2 px-3 text-decoration-none bg-light font-c text-uppercase'>Login</Link>
                                <Link to='register' className='py-2 px-3 text-decoration-none register text-uppercase'>register</Link>
                            </>

                        }
                        {user?.photoURL ? <img src={user?.photoURL} alt="userImage" style={{ height: '34px' }} className='rounded-circle' /> : <img src={user?.photoURL} alt="userImage" className='d-none' />}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;