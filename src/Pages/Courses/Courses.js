import React from 'react';
import './Courses.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
const Courses = () => {
    const [languages, setLanuages] = useState([])
    const [cat, setCat] = useState(null)
    const languageDetailsAll = useLoaderData()
    const languageDetails = cat ? languageDetailsAll.filter(items => cat === items.id) : languageDetailsAll;

    useEffect(() => {
        fetch('https://speak-express-server.vercel.app/language-catagory')
            .then(res => res.json())
            .then(data => setLanuages(data))
    }, [])
    return (
        <div className='my-3'>
            <Container>
                <Row className='gy-3'>
                    <Col lg={3}>
                        <div className='rounded country-name'>
                            <h4 className='py-3 border-bottom text-center text-capitalize text-light m-0'>all language</h4>
                            <p style={{ cursor: 'pointer' }} onClick={() => { setCat(null) }} className='text-capitalize fs-5 list px-4 py-3  m-0'>ALL</p>
                            {
                                languages.map(language => <p style={{ cursor: 'pointer' }} onClick={() => { setCat(language.catagory_id) }} key={language.catagory_id} className='text-capitalize fs-5 list px-4 py-3  m-0'>{language.catagory_name}</p>)
                            }
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Row className='gy-3'>
                            {
                                languageDetails.map(lan => (
                                    <Col md={6} key={lan.id}>
                                        <Card className='p-3 cart'>
                                            <Card.Img variant="top" src={lan.img_url} style={{ height: '200px' }} />
                                            <Card.Body>
                                                <Card.Title className='cart-tle fw-bold text-capitalize'>language Name: {lan.language_name}</Card.Title>
                                                <p className='fs-5 text-capitalize'>ratings : <span className='fw-bold darkblue'>{lan.ratings} Review</span></p>
                                            </Card.Body>
                                            <Link to={`/courseDetails/${lan.id}`} className='cart-btn py-2 text-light rounded text-center fs-4 text-decoration-none'>Details</Link>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;