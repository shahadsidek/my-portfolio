import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Image from 'react-bootstrap/Image';
import '../profile/profile.component.css'
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
import './profile.component.css'
import ShahadResume from './Shahad-UIUX-WebDeveloper.pdf';

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
                                            "Product Designer",
                                            1500,
                                            "UI UX Desginer",
                                            1500,
                                        ]}
                                    />
                                </h1>
                                <span className='pro-text'>

                                    Dynamic professional pivoting to Web Development, UI/UX, and Product Design, leveraging a rich background in interior design and project management. Expertise in merging creative insight with web development skills for innovative product design, focusing on user-centric and sustainable solutions. Committed to strategic planning and efficient resource use, aiming for continuous innovation in the tech field.                                
                                </span>
                            </span>
                        </Row>
                        <Row >
                            <Col><Button className="profileButton mt-4" ><a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Me</a></Button></Col>
                            <Col>
                                <a href={ShahadResume} download='Shahad Sidek.pdf'>
                                    <Button className="profileButton mt-4">My Resume</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='pro-img m-2'>
                        <Image className="img-fluid roundedImage" src={require('../../img/Shahad-Profile-Picture.png')} width="300px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}