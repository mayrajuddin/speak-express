import React, { useState } from 'react';

import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const Premium = () => {
    const cart = useLoaderData();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='my-4'>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className='text-center'>
                    success
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='btn-link text-light py-2 border-0 px-4 rounded text-center fs-4 text-decoration-none text-capitalize'>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
            <Container>
                <h3 className='fw-bold fs-3 text-capitalize py-3'>Buy Course</h3>
                <Row className='g-4' >
                    <Col md={6}>
                        <Card className='premium-cart'>
                            <div className='py-3 ps-3'>
                                <img src={cart?.img_url} alt="" className='details-img rounded' />
                            </div>
                            <Card.Body>
                                <Card.Title>{cart.tittle}</Card.Title>
                                <b className='py-2'>Price: {cart.price}</b>
                                <Card.Text>
                                    {cart.details}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <div className='border p-3'>
                            <h3 className='text-uppercase fs-4 fw-bold border-bottom pb-3'>order summery</h3>
                            <Form className='form'>
                                <h4 className="fw-bold text-capitalize fs-5 f-color mt-1">contact information</h4>
                                <Form.Control className='mb-2' type="email" placeholder="your email" required />
                                <Form.Control className='mb-3' type="number" placeholder="Phone Number" required />
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TRANSACTIONS ID</Form.Label>
                                    <Form.Control type="text" placeholder="enter your code" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="promoCode">
                                    <Form.Label>Promo Code</Form.Label>
                                    <Form.Control type="text" placeholder="enter your code" />
                                </Form.Group>
                                <p>Total Cost : {cart.price} TAKA</p>
                                <button onClick={handleShow} className='btn-link text-light py-2 border-0 px-4 rounded text-center fs-4 text-decoration-none text-capitalize' type="submit">
                                    Submit
                                </button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Premium;