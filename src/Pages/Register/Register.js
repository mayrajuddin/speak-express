import React, { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUserEmailPass, updatePoofileInfo } = useContext(authContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleRgister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const info = {
            displayName: name, photoURL: photo
        }
        if (password !== confirm) {
            setError('password did not matched')
            return;
        }
        createUserEmailPass(email, password)
            .then(result => {
                setError('')
                navigate('/')
                updatePoofileInfo(info)
            }).catch(e => console.error(e))
    }
    return (
        <Container className='py-5'>
            <div className='col col-md-9 col-lg-6 mx-auto border rounded'>
                <Form onSubmit={handleRgister} className='px-4 py-4 form'>
                    <h5 className='text-center fs-3 fw-blod text-capitalize'>Register now</h5>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formphoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photo' type="text" placeholder="photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='confirm' placeholder="confirm Password" required />
                    </Form.Group>
                    <p className='text-warning my-2 text-capitalize'>{error}</p>
                    <div className='w-50 mx-auto mt-2'>
                        <Button variant="dark" type="submit" className='w-100 fs-4'>
                            Register
                        </Button>
                    </div>
                </Form>
                <p className='text-center text-capitalize my-3 text-decoretion-none'>Already have an account ? <Link to='/login'>login now</Link></p>
            </div>
        </Container>
    );
};

export default Register;