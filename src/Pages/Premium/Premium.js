import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Premium = () => {
    return (
        <div className='my-4'>
            <Container>
                <Row className='g-4' >
                    <Col md={6}>
                        <h3 className='fw-bold fs-3 text-capitalize '>Buy Course</h3>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <div className='border p-3'>
                            <h3 className='text-uppercase fs-4 fw-bold border-bottom pb-3'>order summery</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TRANSACTIONS ID</Form.Label>
                                    <Form.Control type="text" placeholder="enter your code" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="promoCode">
                                    <Form.Label>Promo Code</Form.Label>
                                    <Form.Control type="text" placeholder="enter your code" />
                                </Form.Group>
                                <p>Total Cost : 5000 TAKA</p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Premium;