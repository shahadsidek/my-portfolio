import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about-me.component.css'
import aboutMe from '../../img/AboutMe6.webp';
import { Button } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <>
            <h2>About Me</h2>
            <Container id="aboutMe" className="aboutMeDiv">
                <Row className="row-format">

                    <Col>
                        <Image
                            src={aboutMe}
                            className="about-image"
                        />
                    </Col>
                    <Col className="about-info">
                        <p>
                            Energetic professional transitioning into Web Development, UI UX Design and product design. Backed by experience in interior design, project coordination and creative design. Skilled in web development, In the domain of product design, I synergize inventive vision with technical proficiency, emphasizing strategic planning and the optimal utilization of resources.Dedicated to continuous innovation., my focus is on developing user-centric and sustainable product solutions.
                        </p>
                        <h3>
                            Here are a few highlight:
                        </h3>
                        <ul>
                            <li>Web Developer</li>
                            <li>UI/UX Designer</li>
                            <li>Product Designer</li>
                        </ul>
                        <Button>Check My UI UX Case Studies and Design Thinking</Button>
                    </Col>
                </Row>
           
            </Container>
        </>
    )
}
