import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>

            
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ backgroundColor: "#006d77" }}
            >
                <div className="container">
                    <NavLink to="" className="navbar-brand fw-bold" >
                        Crud App
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                
                                <NavLink to="" className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                               
                                <NavLink to="/Adduser" className="nav-link"  >Add User</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white disabled" >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white disabled">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}