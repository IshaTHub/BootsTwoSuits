import React from "react";
import logo from "../../assets/img/1st logo.png";

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                {/* Logo */}
                <a href="/" className="logo d-flex align-items-center me-auto">
                    <img
                        src={logo}
                        alt="Boots2Suits"
                        className="sitename"
                    />
                </a>

                {/* Navigation */}
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <a href="/" className="active">Home</a>
                        </li>

                        <li className="dropdown">
                            <a href="#">
                                <span>About Us</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li><a href="who-we-are.html">Who We Are</a></li>
                                <li><a href="mission-and-vision.html">Mission & Vision</a></li>
                                <li><a href="why-boots2suits.html">Why Boots2Suits</a></li>
                                <li><a href="our-values.html">Our Values</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="for-veterans.html">For Veterans</a>
                        </li>

                        <li>
                            <a href="for-cororates.html">For Corporates</a>
                        </li>

                        <li className="dropdown">
                            <a href="#">
                                <span>Insights</span>{" "}
                                <i className="bi bi-chevron-down toggle-dropdown"></i>
                            </a>
                            <ul>
                                <li><a href="blogs.html">Blogs</a></li>
                                <li><a href="#">Corporate Case Studies</a></li>
                                <li><a href="#">Media & Press</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="contact-us.html">Contact</a>
                        </li>
                    </ul>

                    {/* Mobile Toggle */}
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                {/* CTA Button */}
                <a className="cta-btn" href="register.html">Register</a>

            </div>
        </header>
    );
};

export default Header;
