import "./styles/Skills.css";

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Node.js"],
  },
  {
    title: "Backend",
    items: [
      "NestJS",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
      "Turbo / PNPM Monorepo",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "AWS SES",
      "Docker",
      "NGINX",
      "GitHub Actions",
      "Vercel",
      "Firebase",
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">
          Skills <span>&amp;</span> stack
        </h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-card gsap-reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="skills-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
