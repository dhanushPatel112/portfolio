import React from "react";
import Title from "./Title";
import { FaNodeJs, FaReact, FaServer, FaRegFileCode, FaPython, FaTools } from "react-icons/fa";

const About = () => {
  const skillsData = [
    { name: "Node", icon: <FaNodeJs size={24} />, level: 90, color: "#04aa6d" },
    { name: "React", icon: <FaReact size={24} />, level: 85, color: "#2196f3" },
    { name: "Nest JS", icon: <FaServer size={24} />, level: 80, color: "#36f321" },
    { name: "Next JS", icon: <FaRegFileCode size={24} />, level: 85, color: "#f44336" },
    { name: "Python", icon: <FaPython size={24} />, level: 70, color: "#808080" },
    // { name: "Other Skills", icon: <FaTools size={24} />, level: null },
  ];

  const otherSkillsList = [
    "MERN stack",
    "Redux",
    "GraphQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "MongoDB",
    "Postgres",
    "Prisma",
    "MySQL",
    "Postman",
    "Machine learning",
    "Git",
    "IOT",
    "Chrome extension development",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "SciKit learn",
  ];

  return (
    <>
      <Title id="about" title="About me" />
      <section className="text-black bg-white body-font py-10">
        <div className="container px-5 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-4/5 rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">I am a Full Stack Developer</h1>
              <p className="px-8 py-2 text-center leading-relaxed">
                A motivated JavaScript web developer with 1.5 years of industry experience and the ability to learn and collaborate in rapidly changing environments and eager to tackle web development
                challenges to achieve lasting impacts.
              </p>
            </div>
            <div className="px-8">
              {skillsData.map((skill) => (
                <div key={skill.name} className="flex items-center mb-2">
                  {skill.icon && <span className="mr-3">{skill.icon}</span>}
                  <div className="flex-1">
                    <p className="mb-1">{skill.name}</p>
                    {skill.level !== null && (
                      <div className="relative h-4 bg-gray-300 rounded-full">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" style={{ width: `${skill.level}%`, height: "100%" }}></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container center my-5">
            <h2 className="text-center">Other skill set</h2>
            <br />
            {otherSkillsList.map((skill) => (
              <button key={skill} disabled className="cursor-default btn btn-1 btn-1a">
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
