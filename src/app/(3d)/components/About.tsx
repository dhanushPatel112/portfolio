'use client';

import "./styles/About.css";

const About = () => {
    const experienceYear = new Date().getFullYear() - 2022;

    return (
        <div className="about-section" id="about">
            <div className="about-me">
                <h3 className="title">About Me</h3>
                <p className="para">
                    Full Stack Developer with {experienceYear}+ years of experience building scalable web
                    applications using React.js, Next.js, Node.js, and NestJS. Skilled
                    in microservices architecture and CMS development.
                    Passionate about creating high-performance, production-ready solutions
                    from concept to deployment.
                </p>
            </div>
        </div>
    );
};

export default About;
