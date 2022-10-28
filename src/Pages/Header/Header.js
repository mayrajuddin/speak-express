import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../src/logo.png'
import './Header.css'
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(authContext)
    const [toggle, setToggole] = useState(true)

    const location = useLocation()
    const menuitems = [{
        path: "/",
        Name: "Home"
    },
    {
        path: "/courses",
        Name: "Courses"
    },

    {
        path: "/blog",
        Name: "Blog"
    },

    {
        path: "/faq",
        Name: "FAQ"
    },
    ]
    return (
        <Navbar collapseOnSelect expand="lg" className='top-nav'>
            <Container>
                <Link to='/' className='text-decoration-none d-flex align-items-center'>
                    <span className='me-2'><img src={logo} alt="" className='logo' /></span>
                    <span className='fs-4 text-uppercase font-c fw-bold'> <span className='hColor'>Speak</span> Express</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="mx-auto nav-c">
                        {menuitems.map(item => (
                            <Link to={item.path} className={`nav-link  fs-4 text-capitalize ${location.pathname == item.path && "active"} `}>{item.Name}</Link>
                        ))}

                    </Nav>
                    <Nav className='align-items-center'>
                        <b> <span>{toggle ? "Dark" : "Light"}</span></b>
                        <label onChange={() => {
                            setToggole(!toggle)
                        }} class="switch ms-2">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        {user?.uid ?
                            <button type="button" onClick={logOut} className='logout  border-0 py-2 mx-3 px-3 text-decoration-none text-capitalize text-light'>Log Out</button> :
                            <>
                                <Link to='login' className='login py-2 px-3 text-decoration-none text-uppercase'>Login</Link>
                                <Link to='register' className='py-2 px-3 text-decoration-none text-light register text-uppercase'>register</Link>
                            </>

                        }
                        {user?.photoURL ? <img src={user?.photoURL} alt="userImage" title={user?.displayName} style={{ height: '34px' }} className='rounded-circle' /> : <img src={user?.photoURL} alt="userImage" className='d-none' />}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;