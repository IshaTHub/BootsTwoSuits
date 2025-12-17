import React from "react";
//import { army-bg } from "../../../../assets/img/army-bg.jpg";

const Hero = () => {
    return (
        <section id="hero" className="hero section dark-background">

            <img
                src="/src/assets/img/army-bg.jpg"
                alt="Military background"
                data-aos="fade-in"
            />

            <div className="container d-flex flex-column align-items-center">
                <h2 data-aos="fade-up" data-aos-delay="100">
                    Military excellence boosts corporate needs
                </h2>

                <p data-aos="fade-up" data-aos-delay="200">
                    We help veterans unlock their next careers and enable corporates to
                    build disciplined, high-performing teams.
                </p>

                <div
                    className="d-flex mt-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <a href="register.html" className="btn-get-started">
                        Register Now
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
