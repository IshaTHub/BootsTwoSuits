import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">

            <div className="container footer-top">
                <div className="row gy-4">

                    {/* About */}
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">Boots2Suits Consultancy</span>
                        </a>

                        <div className="footer-contact pt-3">
                            <p className="mt-3">
                                <strong>Phone:</strong> <span>+919910894577</span>
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <span>info@boot2suitsconsultancy.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="who-we-are.html">Who we are</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="for-veterans.html">For Veterans</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="for-cororates.html">For Corporates</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="blogs.html">Blogs</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <a href="#">Disclaimer</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>
                            Subscribe to our newsletter and receive the latest news about our
                            products and services!
                        </p>

                        <form method="post" className="php-email-form">
                            <div className="newsletter-form">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                />
                                <input type="submit" value="Subscribe" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="container copyright text-center mt-4">
                <p>
                    © 2025 <span>Copyright</span>{" "}
                    <strong className="px-1 sitename">
                        Ornate TechnoServices Pvt. Ltd.
                    </strong>{" "}
                    <span>All Rights Reserved</span>
                </p>

                <div className="credits">
                    Designed by{" "}
                    <a href="#">Ornate TechnoServices Pvt. Ltd.</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
