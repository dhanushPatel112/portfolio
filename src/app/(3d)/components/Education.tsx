import "./styles/Education.css";

const education = [
  {
    degree: "BE — Computer Engineering",
    school: "LJ Institute of Engineering and Technology",
    score: "CGPA 9.56",
    period: "2018 – 2022",
  },
  {
    degree: "Higher Secondary School",
    school: "M.B. Patel Secondary and Higher Secondary School",
    score: "86.6 percentile",
    period: "2016 – 2018",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2 className="education-heading">Education</h2>
        <div className="education-list">
          {education.map((item) => (
            <div className="education-item gsap-reveal" key={item.degree}>
              <div className="education-main">
                <h3>{item.degree}</h3>
                <h4>{item.school}</h4>
              </div>
              <div className="education-meta">
                <span className="education-score">{item.score}</span>
                <span className="education-period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
