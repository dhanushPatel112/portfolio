import "./styles/Career.css";

const Career = () => {
    return (
        <div id='career' className="career-section section-container">
            <div className="career-container">
                <h2>
                    My career <span>&</span>
                    <br /> experience
                </h2>
                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>
                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Associate Software Developer</h4>
                                <h5>Rysun Labs</h5>
                            </div>
                            <h3>2022</h3>
                        </div>
                        <p>
                            Led a team of 3 to build the admin portal of a Next.js visitor app
                            with FCM, AWS S3, and PostgreSQL on AWS. Ran Scrum and owned client
                            communication. Built a drag-and-drop React template editor with
                            dynamic PDF generation, and earned the "Best Intern" award.
                        </p>
                    </div>
                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Full Stack Web Developer</h4>
                                <h5>Codiste</h5>
                            </div>
                            <h3>2024</h3>
                        </div>
                        <p>
                            Led full-stack development across enterprise apps with Node.js,
                            NestJS, TypeScript, and React. Ran a no-downtime Java → Node.js
                            migration for a financial transactions app and moved another product
                            from MongoDB to PostgreSQL, with response-time wins from caching,
                            payload trimming, and query tuning.
                        </p>
                    </div>
                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Senior Full Stack Web Developer</h4>
                                <h5>Codiste</h5>
                            </div>
                            <h3>NOW</h3>
                        </div>
                        <p>
                            Designing a Turbo monorepo backend with NestJS and PostgreSQL, using
                            Redis for caching and background queues. Set up CI/CD with GitHub
                            Actions, NGINX, and AWS EC2 + RDS, with JWT auth and role-based
                            access control across REST APIs serving multiple client apps.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
