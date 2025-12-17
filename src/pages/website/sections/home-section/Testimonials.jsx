import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section dark-background">

            {/* Background Image */}
            <img
                src="/src/assets/img/testimonials-bg.jpg"
                className="testimonials-bg"
                alt="Testimonials background"
            />

            <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <p className="testimonial-headings">
                    Veteran Success Stories
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    className="testimonials-slider"
                >

                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/src/assets/img/testimonials-1.png"
                                className="testimonial-img"
                                alt="Wg Cdr Tanya Singh"
                            />
                            <h3>Wg Cdr Tanya Singh</h3>
                            <h4>Veteran, Amazon SLP</h4>

                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Lt Col Ipsa O Ratha reshaped my career with her sharp guidance
                                    and unwavering belief in my potential. Her military-honed
                                    discipline and strategic clarity brings out the best in every
                                    professional she mentors. She blends compassion with
                                    commanding presence — a rare combination that inspires
                                    immediate confidence. With her mentorship, you don’t just
                                    prepare for opportunities, you evolve into your highest
                                    professional self. Boots2Suit Consultancy is a true catalyst
                                    for clarity, confidence, and career transformation.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/src/assets/img/gd-food.jpg"
                                className="testimonial-img"
                                alt="Petty Officer Sarada Prasad Barik"
                            />
                            <h3>Petty Officer Sarada Prasad Barik</h3>
                            <h4>GD Foods</h4>

                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    I am grateful to Boots2Suits Consultancy for their
                                    recommendation that played a key role in my offer from G.D
                                    Foods. The firm’s mentorship and endorsement showcased my
                                    strengths and helped me secure a better opportunity in the
                                    corporate world.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/src/assets/img/wg-prajjwalita.JPG"
                                className="testimonial-img"
                                alt="Wg Cdr Prajjwalita Boruah"
                            />
                            <h3>Wg Cdr Prajjwalita Boruah</h3>
                            <h4>Location Anchor, Tata Consulting Engineers</h4>

                            <div className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>

                            <p>
                                <i className="bi bi-quote quote-icon-left"></i>
                                <span>
                                    Transitioning from the military to the corporate world can
                                    feel overwhelming. My interaction with Boots2Suits
                                    Consultancy came at a crucial stage of my journey and
                                    provided valuable clarity and perspective. Their guidance
                                    helped me refine my approach and gain confidence during
                                    interviews.
                                </span>
                                <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;
