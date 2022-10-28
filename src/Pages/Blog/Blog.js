import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <div className='my-4'>
            <Container>
                <h3 className='text-center fs-2 fw-bold f-color mb-4'>Blog</h3>
                <Row className='mx-auto'>
                    <Col md={8} className='mx-auto'>
                        <div className='border blog-div mb-4'>
                            <h4 className='font-c py-3 blog-tle ps-4'>1. what is cors?</h4>
                            <p className='px-4 f-color fw-normal'><b>Cross-Origin Resource Sharing (CORS)</b> is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border blog-div mb-4'>
                            <h4 className='font-c py-3 blog-tle ps-4'>2. How does the private route work?</h4>
                            <p className="px-4 f-color fw-normal">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized . </p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border blog-div mb-4'>
                            <h4 className='font-c py-3 blog-tle px-4'>3. Why are you using firebase? What other options do you have to implement authentication?</h4>
                            <p className="px-4 f-color fw-normal">Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                        </div>
                    </Col>
                    <Col md={8} className='mx-auto'>
                        <div className='border blog-div'>
                            <h4 className='font-c py-3 blog-tle ps-4'>4. What is Node.js? How does Node work?</h4>
                            <p className="px-4 f-color fw-normal">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;