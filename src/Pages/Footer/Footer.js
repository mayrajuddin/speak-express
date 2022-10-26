import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTwitter, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5'>
            <div className='py-3'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <h4 className='font-c fw-bold fs-4 mb-3'>Speak Express</h4>
                            <p className='pe-3'>It was some time before he obtained any answer, and the reply, when made, was unpropitious. </p>
                            <div className='social-icons'>
                                <Link to=''><FaFacebook /></Link>
                                <Link to=''><FaTwitter /></Link>
                                <Link to=''><FaInstagram /></Link>
                                <Link to=''><FaLinkedin /></Link>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <h5 className='text-capitalize fs-4'>Sort Links</h5>
                            <Nav className="nav-c flex-column">
                                <Link to='/' className='nav-link fs-5 text-capitalize'>Courses</Link>
                                <Link to='blog' className='nav-link fs-5 text-capitalize'>Blog</Link>
                                <Link to='blog' className='nav-link fs-5 text-capitalize'>FAQ</Link>
                            </Nav>
                        </Col>
                        <Col lg={4}>
                            <h5 className='text-capitalize fs-4'>contact Us</h5>
                            <p className='fs-5 text-capitalize'><FaPhone size={17} className='font-c me-2' /> 01628649295</p>
                            <p className='fs-5 '><FaEnvelope size={17} className='font-c me-2' /> mayrajuddin03@gmail.com</p>
                            <p className='fs-5 text-capitalize'><FaMapMarker size={17} className='me-2 font-c' /> Mirsarai, Chattogram</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='border-top'>
                <Container>
                    <p className='text-capitalize fs-5 py-3'> Copyright &copy; 2022 || <span className='font-c'>Speak Express .</span> All rights reserved</p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;