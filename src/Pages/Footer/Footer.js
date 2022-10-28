import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTwitter, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5'>
            <div className='fot-top'>
                <Container>
                    <Row>
                        <Col lg={5} className='my-2 my-lg-0'>
                            <h4 className='font-c fw-bold fs-4 mb-3'> <span className='hColor'>Speak</span> Express</h4>
                            <p className='pe-3'>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education! </p>
                            <div className='social-icons'>
                                <a href='https://www.facebook.com/find.mayraj/' target='blank'><FaFacebook /></a>
                                <a href='https://twitter.com/' target='blank'><FaTwitter /></a>
                                <a href='https://www.instagram.com/' target='blank'><FaInstagram /></a>
                                <Link to='https://www.linkedin.com/in/uddinmayraj/'><FaLinkedin /></Link>
                            </div>
                        </Col>
                        <Col sm={5} lg={3} className='my-2 my-lg-0'>
                            <h5 className='text-capitalize fs-4'>explore</h5>
                            <Nav className="nav-c flex-column">
                                <Link to='courses' className='nav-link fs-5 text-capitalize'>Courses</Link>
                                <Link to='blog' className='nav-link fs-5 text-capitalize'>Blog</Link>
                                <Link to='faq' className='nav-link fs-5 text-capitalize'>FAQ</Link>
                            </Nav>
                        </Col>
                        <Col sm={7} lg={4} className='my-2 my-lg-0'>
                            <h5 className='text-capitalize fs-4'>contact Us</h5>
                            <p className='fs-5 text-capitalize'><FaPhone size={17} className='font-c me-2' /> 01628649295</p>
                            <p className='fs-5 '><FaEnvelope size={17} className='font-c me-2' /> mayrajuddin03@gmail.com</p>
                            <p className='fs-5 text-capitalize'><FaMapMarker size={17} className='me-2 font-c' /> Mirsarai, Chattogram</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='border-top fot-btm'>
                <Container>
                    <p className='text-capitalize text-center m-0 fs-5 py-3 text-light'> Copyright &copy; 2022 || <span className='hColor'>Speak Express </span> . All rights reserved</p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;