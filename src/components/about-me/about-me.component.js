import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about-me.component.css'
import aboutMe from '../../img/AboutMe6.webp'


export default function AboutMe (){
    return(
        <div className="aboutMeDiv">
        <Container>
        <Row>
        <Col className="col-6">
        <Image
            src={aboutMe}
            width="auto"
            height="400px"
            rounded
        />
        </Col>
        <Col>
            <p>
                Self-taught full stack developer well versed with JavaScript and Python. An avid learner, able to quickly grasp new technologies to design efficient and scalable products. Seeking an entry-level web developer position in a reputed company where I can use my educational background to develop my skills.
            </p>
            <h3>
                Here are a few highlight:
            </h3>
            <ul>
                <li>Frontend Developer</li>
                <li>Python Developer</li>
                <li>Database Administrator</li>
            </ul>
            </Col>
            </Row>
        </Container>
        </div>
    )
}