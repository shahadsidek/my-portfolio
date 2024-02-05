import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Menubar extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand href="#">
                            Techie Learner
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link >Home</Nav.Link>
                                <Nav.Link href='#aboutMe'>   About Me</Nav.Link>
                                <Nav.Link href='#skills'>Skills</Nav.Link>
                                <Nav.Link href='#projects'>Project</Nav.Link>
                                <a href="/case-study.html" target="_blank" className="nav-link">Case Study</a>
                                <Nav.Link href='#contact'>Contact Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default Menubar;
