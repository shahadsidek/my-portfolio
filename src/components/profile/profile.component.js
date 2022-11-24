import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Image from 'react-bootstrap/Image';
import '../profile/profile.component.css'
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';


export default function Profile() {
    return (
        <div className="setText" style={{backgroundColor:"#243b4e"}}>
            <Container  fluid="md">
                <Row>
                    <Col className="m-auto justify-content">
                        <Row>
                        <span>
                                <h1>
                                {" "}
                                    <Typical
                                        loop = {Infinity}
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
                                <span>
                                    Ambitious Web Developer brings enthusiasm and detailed understanding of various programming languages to webpage planning, development and maintenance.
                                </span>
                            </span>
                        </Row>
                        <Row >
                            <Col><Button className="mt-4">Contact Me</Button></Col>
                            <Col> <Button className="mt-4">Download My Resume</Button></Col>
                        </Row>
                    </Col>
                    <Col className='m-2'>
                        <Image className="roundedImage" src= {require('../../img/ProfilePhoto.png')} width="300px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
