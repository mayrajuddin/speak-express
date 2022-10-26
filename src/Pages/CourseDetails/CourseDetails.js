import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    return (
        <div className='my-3'>
            <Container>
                <Row>
                    <Col md={8}>
                        <h4>tittle will show here </h4>
                        <h5>image show here</h5>
                        <p>course details show here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nam deserunt vitae perferendis labore necessitatibus recusandae deleniti facilis delectus asperiores ipsum, repudiandae voluptas alias! Eos dolores alias iure corporis porro!</p>
                    </Col>
                    <Col md={4}>
                        <Card className='p-3'>
                            <Card.Body>
                                <Card.Title className='fs-3'>$30</Card.Title>
                                <div className=''>
                                    <p className='text-capitalize fs-5 text-muted m-0'>language : english</p>
                                    <p className='text-capitalize fs-5 text-muted m-0'>lacture : 9</p>
                                    <span className='text-capitalize fs-5 text-muted m-0'>skill : begainer</span>
                                    <p className='text-capitalize fs-5 text-muted m-0'>duration : 80:20</p>
                                </div>
                            </Card.Body>
                            <Link to='#' className='bg-dark text-light py-2 border rounded text-center fs-4 text-decoration-none text-capitalize'>get premium</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;