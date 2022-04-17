import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const closeNavbar = () => {
        setIsOpen(false);
    }

    const openNavbar = () => {
        setIsOpen(true);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-scroll fixed-top bg-primary bg-gradient">
            <div className="container-fluid" style={{ maxWidth: "1200px" }}>
                <Link to="/" className="navbar-brand text-light">
                    ShoppingMx
                </Link>
                {isOpen
                    ?
                    <button
                        className="navbar-toggler text-light collapsed"
                        onClick={closeNavbar}
                    >
                        <FaTimes />
                    </button>
                    :
                    <button
                        className="navbar-toggler text-light"
                        onClick={openNavbar}
                    >
                        <FaBars />
                    </button>
                }
                <div className={`navbar-collapse collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-light"
                                onClick={closeNavbar}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-link text-light"
                                onClick={closeNavbar}
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row gap-2">
                        <li className="nav-item me-3 me-lg-0">
                            <Link
                                to="/cart"
                                className="nav-link text-light fw-bold"
                                onClick={closeNavbar}
                            >
                                <FaShoppingCart />
                            </Link>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <Link
                                to="/login"
                                className="nav-link text-light fw-bold"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar