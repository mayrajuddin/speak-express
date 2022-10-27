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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quia ullam illum. Voluptatem veritatis illo iusto exercitationem doloribus, eius voluptas repudiandae magnam amet veniam rerum dolore, ducimus architecto velit quia?</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>How do I select a course?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni, deserunt dolor consectetur sequi iste illum quasi numquam ad obcaecati corporis molestiae non sint minus. Dignissimos ullam eveniet commodi. Distinctio.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>I am a high school student, can I join?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci maiores illum fugit asperiores aspernatur obcaecati, minus voluptatibus dignissimos praesentium corrupti quisquam, eius, laborum aliquam accusamus! Fugiat quibusdam placeat esse.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border px-3'>
                            <h4 className='f-color py-3'>Can I take more than one course at a time?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia rem facilis voluptatem, explicabo rerum accusantium et repellat laudantium distinctio quo dolorum reprehenderit corrupti eos eligendi! Facilis cupiditate blanditiis alias?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Faq;