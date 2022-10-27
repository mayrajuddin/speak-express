import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
const Courses = () => {
    const [languages, setLanuages] = useState([])
    const languageDetails = useLoaderData()
    useEffect(() => {
        fetch('http://localhost:5000/language-catagory')
            .then(res => res.json())
            .then(data => setLanuages(data))
    }, [])
    return (
        <div className='my-3'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='border rounded p-4'>
                            <h4 className='pb-2 border-bottom text-center text-capitalize'>all language {languages.length}</h4>
                            {
                                languages.map(language => <p key={language.catagory_id} className='px-4 py-3 border-bottom m-0'>{language.catagory_name}</p>)
                            }
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Row className='gy-3'>
                            {
                                languageDetails.map(lan => (
                                    <Col md={6} key={lan.id}>
                                        <Card className='p-3'>
                                            <Card.Img variant="top" src={lan.img_url} style={{ height: '200px' }} />
                                            <Card.Body>
                                                <Card.Title>language Name: {lan.language_name}</Card.Title>
                                                <p className='fs-6'> <FaStar className='text-warning ' />
                                                    <FaStar className='text-warning ' /><FaStar className='text-warning ' /><FaStar className='text-warning ' /><FaStarHalfAlt className='text-warning me-2' />
                                                    {lan.ratings}</p>
                                            </Card.Body>
                                            <Link to={`/courseDetails/${lan.id}`} className='py-2 border rounded text-center fs-4 text-decoration-none'>Details</Link>
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