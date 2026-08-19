import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "Graph Developer — Associate",
    issuer: "Apollo GraphQL",
    image: "/images/apolloCertificationLogo.svg",
    link: "https://www.apollographql.com/tutorials/certifications/694cdabc-ce09-443c-bf42-1a51280515eb",
  },
  {
    title: "React.js Certification",
    issuer: "VSkills (VS-1429)",
    image: "/images/vskillsLogo.jpg",
    link: "https://www.vskills.in/certification/103121-reactjs-certification-dhanush-patel",
  },
  {
    title: "Node.js Certificate",
    issuer: "HackerRank",
    image: "/images/hackerRankLogo.png",
    link: "https://www.hackerrank.com/certificates/d375b09c44b4",
  },
  {
    title: "Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    image: "/images/googleCloudKubernetesBadge.png",
    link: "https://google.qwiklabs.com/public_profiles/65dc7869-a80a-431f-bb61-ef5b51d849d8/badges/772642",
  },
];

const Certifications = () => {
  return (
    <div className="certs-section section-container" id="certifications">
      <div className="certs-container">
        <h2 className="certs-heading">Certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <a
              className="certs-card gsap-reveal"
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              aria-label={`${cert.title} — ${cert.issuer}`}
            >
              <div className="certs-logo">
                <Image
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="certs-info">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
              </div>
              <span className="certs-arrow">
                <MdArrowOutward />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
