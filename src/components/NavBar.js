import {Navbar, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import {Home} from "src/components/Home/Home.js"

export default function NavBar () {
    return (
            <div>
                <Navbar bg="dark" variant ={"dark"} expand="lg">
                    <Navbar.Brand as={Link} to={"/"}>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to={"/about"}>About Me</Nav.Link>
                                <Nav.Link as={Link} to={"/portfolio"}>Portfolio</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact Me</Nav.Link>
                                <Nav.Link as={Link} to={"/resume"}>Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
    )
}
