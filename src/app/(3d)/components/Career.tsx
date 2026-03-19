import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
              Led a team of 3 to build a Next.js web app with FCM and AWS S3
              integration. Developed a drag-and-drop design editor in React for
              template creation, and received the "Best Intern" award for
              exceptional performance.
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
              Led full-stack development of enterprise applications using
              Node.js, React, and TypeScript, including migrating a Java backend
              to Node.js. Built scalable backend services with NestJS, Prisma
              ORM, PostgreSQL, and Redis, and deployed Telegram mini-apps with
              real-time WebSocket features.
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
              Designing and managing a full Turbo monorepo backend architecture
              with NestJS and PostgreSQL, implementing Redis for caching and
              queueing. Ensuring 99.9% uptime across RESTful APIs serving
              multiple client applications with role-based access control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;