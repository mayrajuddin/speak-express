import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-4'>
            <Container>
                <Row className='mx-auto'>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>what is cors?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quia ullam illum. Voluptatem veritatis illo iusto exercitationem doloribus, eius voluptas repudiandae magnam amet veniam rerum dolore, ducimus architecto velit quia?</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div>
                            <h4 className='f-color py-3'>How does the private route work?</h4>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div>
                            <h4 className='f-color py-3'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div>
                            <h4 className='f-color py-3'>What is Node.js? How does Node work?</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;