import React from 'react';
import './Banner.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner.png'
const Banner = () => {
    return (
        <div className='banner-bg'>
            <Container>
                <div className='row align-items-center py-3 text-center text-md-start'>
                    <div className='col-md-6 d-none d-md-block'>
                        <img src={bannerImg} alt="" className='img-fluid' />
                    </div>
                    <div className='col-md-6' >
                        <h4 className='fs-1'>Achieve the Best Results with <b>Speak Express</b></h4>
                        <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur dignissimos numquam facere accusantium ullam. Tempora officia sed eveniet?</p>
                        <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                            <h5 className='me-3 text-capitalize fs-4 mb-0'>explore</h5> <Link to='courses' className='fs-4 banner-btn py-2 px-3 rounded '>Courses</Link>
                        </div>
                    </div>
                </div >
            </Container>
        </div>

    );
};

export default Banner;