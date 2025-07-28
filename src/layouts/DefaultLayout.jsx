import { Outlet, NavLink } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-fixed-transparent">
                <div className="container">
                    <h2>SHOP</h2>
                    <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}