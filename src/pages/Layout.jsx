import { Outlet, Link } from "react-router-dom";
function Layout(){

    return(
        <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg bg-black shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold text-light" to="/">React Routing Demo</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-light">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="contact">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid p-3">
                <Outlet></Outlet>
            </div>

            <footer className="bg-dark p-1 text-center text-white footer mt-auto">
                <p>This is the footer</p>
            </footer>
        </main>
    )
}

export default Layout;