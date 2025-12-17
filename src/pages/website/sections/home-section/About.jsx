import React from "react";

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">

                <div className="row row-home-about">
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img
                            src="/src/assets/img/about-img.png"
                            className="img-fluid rounded-4 mb-4"
                            alt="About Boots2Suits Consultancy"
                        />
                    </div>

                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        <div className="content ps-0 ps-lg-5">
                            <h2 className="fst-italic">
                                Unlock Your Next Success Story
                            </h2>

                            <p>
                                At Boots2Suits Consultancy, we believe every veteran carries a
                                legacy of discipline, commitment, loyalty and systematic
                                approach. The years in uniform have shaped veterans into assets
                                any organisation would be proud to have. Our mission is simple
                                yet powerful: to help veterans transform that legacy into a
                                thriving corporate career.
                            </p>

                            <p>
                                Founded by a veteran, for veterans, Boots2Suits understands the
                                emotions, uncertainties, and hopes that come with transitioning
                                from defence service to corporate life. Our approach combines
                                deep military insight, corporate expertise, and a personalised
                                mentorship model that empowers every veteran to step confidently
                                into their next Avatar.
                            </p>

                            <p>
                                For corporates, Boots2Suits delivers leadership excellence shaped
                                by real-world experience, discipline, and mission-oriented
                                thinking. Our programs help companies build stronger teams,
                                sharper leaders, and a culture driven by purpose and
                                performance.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
