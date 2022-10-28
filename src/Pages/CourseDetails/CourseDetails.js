import React from 'react';
import './CourseDetails.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import { FaFileDownload } from "react-icons/fa";
import html2pdf from 'html2pdf.js';
const CourseDetails = () => {
    const details = useLoaderData()


    const downloadPdf = (params) => {
        html2pdf().set({
            html2canvas: { useCORS: true, scale: 2 },
            margin: [2, 5],
            jsPDF: { format: "a4", orientation: "portrait" },
        })
            .from(document.getElementById('details'))
            .save('course')
    }
    return (
        <div className='my-3 mt-4 pt-5'>
            <Container>
                <div className='btn-div'><button onClick={downloadPdf} className='download-btn border-0 text-light'><FaFileDownload size={24} /></button></div>
                <Row id='details' className='gy-3 gy-lg-0'>
                    <Col md={8}>
                        <div className='details-div px-3'>
                            <h4 className="fs-4 fw-bold py-3 text-capitalize f-color">{details.tittle}</h4>
                            <div>
                                <img src={details?.img_url} alt="" className=' details-img' />
                            </div>
                            <h4 className="fs-4 fw-bold f-color text-capitalize py-3">Name : {details.language_name}</h4>
                            <div className='border px-3 py-4'>
                                <h4 className='text-capitalize fs-4 fw-bold f-color'>what you'll learn</h4>
                                {
                                    details.faq.map(ans => <li className='fs-6 py-1'>{ans.ans}</li>)
                                }
                            </div>
                            <div>
                                <h4 className="fs-4 fw-bold py-4 text-capitalize f-color m-0">requirements</h4>
                                <li className='m-0 fs-6'>{details.requirements}</li>
                            </div>
                            <div className="py-4">
                                <h4 className="fs-4 fw-bold py-3 text-capitalize f-color">discription</h4>
                                <p>{details.details}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Card className='p-3'>
                            <Card.Body>
                                <div className=''>
                                    <p className='text-capitalize fs-5 text-muted m-0'>language : {details.language_name}</p>
                                    <p className='text-capitalize fs-5 text-muted m-0'>lacture : 32</p>
                                    <span className='text-capitalize fs-5 text-muted m-0'>skill : begainer</span>
                                    <p className='text-capitalize fs-5 text-muted m-0'>Price : {details.price} TATA</p>
                                </div>
                            </Card.Body>
                            <Link to={`/premium/${details.id}`} className='btn-link text-light py-2 rounded text-center fs-4 text-decoration-none text-capitalize'>get premium</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;