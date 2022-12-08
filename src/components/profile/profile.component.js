import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Image from 'react-bootstrap/Image';
import '../profile/profile.component.css'
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
import './profile.component.css'
import ShahadResume from './ShahadSidek Dev.pdf';


export default function Profile() {
    return (
        <div >
            <Container className="profile-container m-auto justify-content setText">
                <Row >
                    <Col className="m-auto justify-content">
                        <Row >
                            <span>
                                <h1>
                                    {" "}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Web Developer",
                                            1500,
                                            "Frontend Developer",
                                            1500,
                                            "Python Developer",
                                            1500,
                                            "Graphic Desginer",
                                            1500,
                                            "Cartoonist",
                                            1500,
                                        ]}
                                    />
                                </h1>
                                <span className='pro-text'>
                                    Ambitious Web Developer brings enthusiasm and detailed understanding of various programming languages to webpage planning, development and maintenance.
                                </span>
                            </span>
                        </Row>
                        <Row >
                            <Col><Button className="profileButton mt-4" onClick={(e) => { e.preventDefault(); window.location.replace('/#contact'); }}>Contact Me</Button></Col>
                            <Col>
                                <a href={ShahadResume} download='Shahad Sidek.pdf'>
                                    <Button className="profileButton mt-4">My Resume</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='pro-img m-2'>
                        <Image className="img-fluid roundedImage" src={require('../../img/ProfilePhoto.png')} width="300px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
