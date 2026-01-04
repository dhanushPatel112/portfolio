import Image from "next/image"
import Link from "next/link"
import Title from "./Title"

const Certification = () => {
    const certifications = [
        {
            title: "Apollo GraphQL Certified",
            image: '/images/apolloCertificationLogo.svg',
            link: "https://www.apollographql.com/tutorials/certifications/694cdabc-ce09-443c-bf42-1a51280515eb",
        },
        {
            title: "React JS",
            image: "/images/vskillsLogo.jpg",
            link: "https://www.vskills.in/certification/103121-reactjs-certification-dhanush-patel",
        },
        {
            title: "Node.js (Basic) Certificate",
            image: "/images/hackerRankLogo.png",
            link: "https://www.hackerrank.com/certificates/d375b09c44b4",
        },
        {
            title: "Node.js (Intermediate) Certificate",
            image: "/images/hackerRankLogo.png",
            link: "https://www.hackerrank.com/certificates/6f5b11b68194",
        },
        {
            title: "JavaScript (Basic) Certificate",
            image: "/images/hackerRankLogo.png",
            link: "https://www.hackerrank.com/certificates/2cea3ff61e25",
        },
        {
            title: "JavaScript (Intermediate) Certificate",
            image: "/images/hackerRankLogo.png",
            link: "https://www.hackerrank.com/certificates/fc181de15ca2",
        },
        {
            title: "Kubernetes in Google Cloud",
            image: "/images/googleCloudKubernetesBadge.png",
            link: "https://google.qwiklabs.com/public_profiles/65dc7869-a80a-431f-bb61-ef5b51d849d8/badges/772642",
            type: "Badge",
        },
        // Add more certifications as needed
    ]

    return (
        <>
            <Title id="certification" title="Certification" />

            <section className="text-black bg-white body-font py-10">
                <div className="container px-5 mx-auto flex flex-wrap items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {certifications.map((certification, index) => (
                            <div key={index} className="bg-white p-4 shadow-md rounded-md">
                                <Image
                                    src={certification.image}
                                    alt={certification.title}
                                    width={140}
                                    height={140}
                                    className="object-cover mb-4 rounded"
                                />
                                <h2 className="text-lg font-semibold mb-2">{certification.title}</h2>
                                <Link
                                    href={certification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                    aria-label={`View ${certification.title}`}
                                >
                                    View {certification?.type || "Certification"}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Certification
