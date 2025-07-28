import jumbotron from "../assets/jumbotron.jpg"
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <main className="position-relative" style={{ minHeight: "100vh" }}>
                <img
                    src={jumbotron}
                    alt="Jumbotron"
                    className="position-absolute top-0 start-0"
                    style={{ width: "100%", height: "100vh", objectFit: "cover", zIndex: -1 }} />
                <div
                    className="position-absolute start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center"
                    style={{ top: "60%", width: "100%" }}>
                    <NavLink
                        className="nav-link"
                        to="/Products"
                        style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "rgba(255,255,255,0.7)", // bianco trasparente

                            borderRadius: "20px",
                            padding: "0.5rem 2rem",
                            textDecoration: "none"
                        }}
                    >
                        Products
                    </NavLink>

                </div>
            </main >
        </>
    )
}