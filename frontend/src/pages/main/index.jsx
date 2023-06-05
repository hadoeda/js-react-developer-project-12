import { Link, Outlet } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

export default function Main() {
    return (
        <div className="d-flex flex-column h-100">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="container" as={Link} to="/">Private</Navbar.Brand>
            </Navbar>
            <Container fluid className="h-100">
                <Outlet/>
            </Container>
        </div>
    );
}