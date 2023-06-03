import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Main() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Private</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>
            </Navbar>
            <Outlet/>
        </>
    );
}