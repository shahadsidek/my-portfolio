import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Menubar extends Component{
    render(){
        return (
            <>
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand href="#">
                            Techie Learner
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About Me</Nav.Link>
                                <Nav.Link href="#">Skills</Nav.Link>
                                <Nav.Link href="#">Project</Nav.Link>
                                <Nav.Link href="#">Contact Me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
export default Menubar;

