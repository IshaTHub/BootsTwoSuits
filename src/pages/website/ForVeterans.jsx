const ForVeterans = () => {
    return (

        <>
            <section id="banner-all">
                <img src="/src/assets/img/bg-Veterans.png" alt="Banner Background" className="banner-bg" />
                <div className="banner-content">
                    <h1>SERVICES FOR VETERANS</h1>
                    <p>From Uniform to Executive Presence — Making the Transition Seamless</p>
                </div>
            </section>

            <section id="veterans-second-part" className="section">
                <div className="container">
                    <div className="service-grid">

                        {/* 1. Resume Writing */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/Resume-Writing.webp" alt="Resume Writing" />
                            </div>

                            <span className="service-badge paid">PAID</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-file-earmark-text-fill"></i>
                                    <h4>Resume Writing</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    Military careers are rich, impactful and full of extraordinary achievements;
                                    but the corporate world often doesn’t speak the same language. We bridge that gap.
                                </p>
                                <a href="resume-writing.html" className="view-btn">View More</a>
                            </div>
                        </div>

                        {/* 2. Coaching & Mentoring */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/Coaching & Mentoring.jpeg" alt="Coaching & Mentoring" />
                            </div>

                            <span className="service-badge free">FREE</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-people-fill"></i>
                                    <h4>Coaching & Mentoring</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    Transitioning can feel overwhelming. We’re here to ensure veterans never
                                    walk alone in the complex corporate landscape.
                                </p>
                                <a href="coaching-and-mentoring.html" className="view-btn">View More</a>
                            </div>
                        </div>

                        {/* 3. Career Counselling */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/Career Counselling.jpeg" alt="Career Counselling" />
                            </div>

                            <span className="service-badge paid">PAID</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-bar-chart-fill"></i>
                                    <h4>Career Counselling</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    Veterans next career should excite them, fit their strengths and align
                                    with their long-term aspirations. Our scientifically backed assessments
                                    reveal who they truly are and where they will thrive.
                                </p>
                                <a href="career-counselling.html" className="view-btn">View More</a>
                            </div>
                        </div>

                        {/* 4. Soft Skills Training */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/soft-skills.jpeg" alt="Soft Skills Training" />
                            </div>

                            <span className="service-badge free">FREE</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-chat-dots-fill"></i>
                                    <h4>Soft Skills Training</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    Corporate success depends not just on expertise, but on influence,
                                    presence and communication.
                                </p>
                                <a href="soft-skill-training.html" className="view-btn">View More</a>
                            </div>
                        </div>

                        {/* 5. Mock Interviews */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/Mock Interviews.jpeg" alt="Mock Interviews" />
                            </div>

                            <span className="service-badge free">FREE</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-mic-fill"></i>
                                    <h4>Mock Interviews</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    Interviews demand clarity, confidence and the ability to translate
                                    experience effectively. Our mock interviews simulate real corporate panels.
                                </p>
                                <a href="mock-interviews.html" className="view-btn">View More</a>
                            </div>
                        </div>

                        {/* 6. Placement Support */}
                        <div className="service-card">
                            <div className="service-img">
                                <img src="assets/img/placement.webp" alt="Placement Support" />
                            </div>

                            <span className="service-badge free">FREE</span>
                            <div className="service-content">
                                <div className="service-icon">
                                    <i className="bi bi-briefcase-fill"></i>
                                    <h4>Placement Support</h4>
                                </div>

                                <p className="paras-veterans-service">
                                    We partner with veteran-friendly organisations across industries
                                    to support meaningful career placements.
                                </p>
                                <a href="placement-support.html" className="view-btn">View More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ForVeterans;
