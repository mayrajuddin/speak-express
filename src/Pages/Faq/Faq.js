import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Faq = () => {
    return (
        <div className='my-4'>
            <Container>
                <h3 className='fs-2 fw-bold text-center my-4'>Frequently Asked Questions</h3>
                <Row className='mx-auto gy-4'>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>Who should take an Online Course?</h4>
                            <p>With the ability to study anywhere,online learners can complete coursework at home, a coffee shop, or a library. This advantage of online learning allows students to work in the environment that best suits them.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>How do I select a course?</h4>
                            <p>The first step is to identify the purpose of doing the course. Depending on your life and career stage.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>I am a high school student, can I join?</h4>
                            <p>yes anyone can join our online course.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>Can I take more than one course at a time?</h4>
                            <p>you can take more courses simultaneously if you have time .</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;