import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="contact section">

            {/* Section Title */}
            <div
                className="container section-title"
                data-aos="fade-up"
            >
                <h2>Contact</h2>
                <p>From Service to Success — Get in Touch</p>
            </div>
            {/* End Section Title */}

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row gy-4">

                    {/* Contact Info */}
                    <div className="col-lg-6">
                        <div className="row gy-4">

                            <div className="col-lg-12">
                                <div
                                    className="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>Boots2Suits Consultancy, India</p>
                                </div>
                            </div>
                            {/* End Info Item */}

                            <div className="col-md-6">
                                <div
                                    className="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+919910894577</p>
                                </div>
                            </div>
                            {/* End Info Item */}

                            <div className="col-md-6">
                                <div
                                    className="info-item d-flex flex-column justify-content-center align-items-center"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@boot2suitsconsultancy.com</p>
                                </div>
                            </div>
                            {/* End Info Item */}

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <form
                            action="forms/contact.php"
                            method="post"
                            className="php-email-form"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button type="submit">
                                        Send Message
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    {/* End Contact Form */}

                </div>
            </div>

        </section>
    );
};

export default Contact;
