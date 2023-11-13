import "./navbar2.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar2() {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav2"
		);
	};


    return (
        <header>
        <h3><img src="/images/logo.png" /></h3>
        <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/invest">Invest</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/invest">Contact</Link>
            <button
                className="nav-btn2 nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn2"
            onClick={showNavbar}>
            <FaBars />
        </button>
    </header>

    )
}

export default Navbar2;