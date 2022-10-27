import React from 'react';
import './CourseDetails.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div className='my-3'>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className='border px-3'>
                            <h4>tittle will show here</h4>
                            <div>
                                <img src={details?.img_url} alt="" className=' details-img' />
                            </div>
                            <h5>{details.language_name}</h5>
                            <p>{details.details}</p>
                            <div>
                                {
                                    details.faq.map(ans => <li className='fs-6 py-1'>{ans.ans}</li>)
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Card className='p-3'>
                            <Card.Body>
                                <Card.Title className='fs-3'>$30</Card.Title>
                                <div className=''>
                                    <p className='text-capitalize fs-5 text-muted m-0'>language : {details.language_name}</p>
                                    <p className='text-capitalize fs-5 text-muted m-0'>lacture : 9</p>
                                    <span className='text-capitalize fs-5 text-muted m-0'>skill : begainer</span>
                                    <p className='text-capitalize fs-5 text-muted m-0'>duration : 80:20</p>
                                </div>
                            </Card.Body>
                            <Link to='/premium' className='bg-dark text-light py-2 border rounded text-center fs-4 text-decoration-none text-capitalize'>get premium</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;