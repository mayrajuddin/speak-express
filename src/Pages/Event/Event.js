import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Event = () => {
    return (
        <div className='py-4'>
            <Container>
                <h4 className="fw-bold text-center text-capitalize pb-4">upcoming events</h4>
                <Row xs={1} sm={2} lg={4} className='gy-2'>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1905/sabelskaya190501512/128170248-online-language-course-education-people-learning-with-internet-and-web-technology-students-sitting-l.jpg" />
                            <Card.Body className='d-flex align-items-center justify-content-between'>
                                <span className='text-capitalize fw-bold'>Training</span>
                                <span className='cus-color text-light  px-2 text-capitalize text-decoretion-none'>free</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1905/sabelskaya190501512/128170248-online-language-course-education-people-learning-with-internet-and-web-technology-students-sitting-l.jpg" />
                            <Card.Body className='d-flex align-items-center justify-content-between'>
                                <span className='text-capitalize fw-bold'>Training</span>
                                <span className='cus-color text-light  px-2 text-capitalize text-decoretion-none'>free</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1905/sabelskaya190501512/128170248-online-language-course-education-people-learning-with-internet-and-web-technology-students-sitting-l.jpg" />
                            <Card.Body className='d-flex align-items-center justify-content-between'>
                                <span className='text-capitalize fw-bold'>Explore Culture</span>
                                <span className='cus-color text-light  px-2 text-capitalize text-decoretion-none'>free</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1905/sabelskaya190501512/128170248-online-language-course-education-people-learning-with-internet-and-web-technology-students-sitting-l.jpg" />
                            <Card.Body className='d-flex align-items-center justify-content-between'>
                                <span className='text-capitalize fw-bold'>giving lacture</span>
                                <span className='cus-color text-light  px-2 text-capitalize text-decoretion-none'>free</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Event;