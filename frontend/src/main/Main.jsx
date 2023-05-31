import { Link, Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </>
    );
}