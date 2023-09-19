import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../logo.png";

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="d-flex align-items-center justify-content-center text-center bg-transparent">
        <Container style={{display: "flex"}}  className="d-flex justify-content-center">
        <Row>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="font-nav text-white" href="/about">About</Nav.Link>
                <NavDropdown className="font-nav" title="Resources" id="collapsible-nav-dropdown">
                    <NavDropdown.Item className="font-nav text-white" href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item className="font-nav text-white" href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="font-nav text-white" href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="font-nav text-white" href="#action/3.4">
                        About Online Poker
                    </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand className="flex items-center" href="/">
                    <div>
                        <img className="w-20 h-20" src={Logo} id="logo" alt="Logo"></img>
                    </div>
                    <div>
                        <p id="brand-name" className="font-brand text-white">BigBadBabar</p>
                        <p id="brand-slogan" className="font-slogan text-white">Online Poker Resources</p>
                    </div>
                </Navbar.Brand>
                <Nav.Link className="font-nav text-white" href="#pricing">Good Stuff</Nav.Link>
                <Nav.Link className="font-nav text-white" href="#pricing">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Row>
        </Container>
        </Navbar>
    );
}

export default Header;