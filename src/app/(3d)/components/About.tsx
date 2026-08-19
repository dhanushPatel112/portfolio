'use client';

import "./styles/About.css";

const About = () => {
    const experienceYear = new Date().getFullYear() - 2022;

    return (
        <div className="about-section" id="about">
            <div className="about-me">
                <h3 className="title">About Me</h3>
                <p className="para">
                    Full Stack Developer with {experienceYear}+ years of experience designing and
                    shipping production backend systems and web applications with Node.js, NestJS,
                    TypeScript, React, and Next.js. I lead small teams, own system design and code
                    reviews, and migrate legacy stacks to modern ones — with no downtime and
                    measurable performance gains. Comfortable across the stack and the cloud: AWS,
                    Docker, CI/CD, and NGINX.
                </p>
            </div>
        </div>
    );
};

export default About;
