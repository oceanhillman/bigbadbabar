import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../logo.png";

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" className="d-flex align-items-center justify-content-center text-center">
        <Container style={{display: "flex"}}  className="d-flex justify-content-center">
        <Row>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                <Col className="d-flex align-items-center">
                    <div id="logo-wrapper">
                        <img src={Logo} id="logo" alt="Logo"></img>
                    </div>
                </Col>
                <Col>
                    <Row className="flex-nowrap">
                        <Navbar.Brand href="#home">BigBadBabar</Navbar.Brand>
                    </Row>
                    <Row className="flex-nowrap">
                        <p id="brand-slogan">Online Poker Resources</p>
                    </Row>
                </Col>
                <Nav.Link href="#pricing">Good Stuff</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Row>
        </Container>
        </Navbar>
    );
}

export default Header;