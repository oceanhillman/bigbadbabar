import Row from "react-bootstrap/Row";
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
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        About Online Poker
                    </NavDropdown.Item>
                </NavDropdown>
                {/* <Col className="d-flex align-items-center">
                    <Row className="flex-nowrap"> */}
                        <Navbar.Brand href="/">
                            <div id="logo-wrapper">
                                <img src={Logo} id="logo" alt="Logo"></img>
                            </div>
                            <div id="title-wrapper">
                                <p id="brand-name">BigBadBabar</p>
                                <p id="brand-slogan">Online Poker Resources</p>
                            </div>
                        </Navbar.Brand>
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