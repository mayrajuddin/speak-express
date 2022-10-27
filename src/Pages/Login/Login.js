import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';
import './Login.css'

const Login = () => {
    const { userLogin, googleSign } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                navigate(from, { replace: true })
                form.reset()
            }).catch(e => console.error(e))
    }
    const handleGoogle = () => {
        googleSign()
            .then(result => {
                navigate(from, { replace: true })
            })
    }
    return (
        <Container className='py-5'>
            <div className='w-50 mx-auto border rounded py-4 '>
                <Form onSubmit={handleLogin} className='px-4 form'>
                    <h5 className='text-center fs-3 fw-blod text-capitalize'>Login now</h5>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <div className='w-50 mx-auto mt-2'>
                        <Button variant="dark" type="submit" className='w-100 fs-4'>
                            Login
                        </Button>
                    </div>
                </Form>
                <p className='fs-5 text-center text-capitalize py-3 '>- or  Login with -</p>
                <div className='text-center pb-3'>
                    <Button onClick={handleGoogle} variant="outline-secondary" className='me-3 fs-5 text-capitalize py-2 px-4'>google</Button>
                    <Button variant="outline-secondary" className=' fs-5 text-capitalize py-2 px-4'>github</Button>
                </div>
                <p className='text-center'>New to speak express? <Link to='/register'>Create New Account</Link></p>
            </div>
        </Container>
    );
};

export default Login;