import React, { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUserEmailPass } = useContext(authContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleRgister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setError('password did not matched')
            return;
        }
        createUserEmailPass(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
            }).catch(e => console.error(e))
    }
    return (
        <Container className='py-5'>
            <div className='w-50 mx-auto'>
                <h5 className='fs-4 text-capitalize py-3'>register now</h5>
                <Form onSubmit={handleRgister} className='border rounded px-3 py-4'>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='confirm' placeholder="confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <span className='text-warning'>{error}</span>
                <p className='text-center text-capitalize my-3 text-decoretion-none'>Already have an account ? <Link to='/register'>login now</Link></p>
            </div>
        </Container>
    );
};

export default Register;