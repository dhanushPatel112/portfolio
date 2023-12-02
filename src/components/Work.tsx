import React from "react"
import Title from "./Title"
import Link from "next/link"
import Image from "next/image"
import nextJsImage from "public/images/nextjs.svg"
import nestJsImage from "public/images/nestjs.svg"
import postgreSQLLogo from "public/images/postgreSQLLogo.svg"
import nextJsLogo from "public/images/nextJsLogo.svg"
import mongoDBLogo from "public/images/mongoDBLogo.svg"

const Work = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      <Title id={"experience"} title={"Work Experience"} />
      <section className="text-black bg-white body-font">
        <div className="container px-5 py-0 mx-auto">
          <section className="text-black body-font bg-white">
            <div className="h-full p-6 rounded-lg border-4 border-gray-700 flex flex-col">
              <h2 className="text-right text-md tracking-widest text-black title-font mb-1 font-medium">
                02/2022 - Present
              </h2>
              <Link
                href="https://www.rysun.com/"
                className="text-3xl text-black pb-2  border-b border-gray-800 leading-none"
                target="_blank"
              >
                Rysun
              </Link>
              <h1 className="flex items-center text-black text-lg sm:text-l md:text-xl lg:text-2xl mt-auto border-0 py-3 px-4 w-full focus:outline-none rounded">
                <b>ROLE:</b> &nbsp; Full stack JavaScript Developer
              </h1>

              {/* Technology */}
              <p className="flex items-center text-black text-lg sm:text-l md:text-xl lg:text-2xl">
                <span className="w-2 h-2 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                Technology worked on
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div data-te-toggle="tooltip" title="NextJS" className="py-0 px-4">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <Image src={nextJsImage} alt="NextJS" width={130} height={130} />
                  </div>
                </div>
                <div data-te-toggle="tooltip" title="ReactJS" className="py-0 px-4">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <Image src="https://cdn.cdnlogo.com/logos/r/21/react.svg" alt="ReactJS" width={130} height={130} />
                  </div>
                </div>
                <div data-te-toggle="tooltip" title="NodeJS" className="py-0 px-4">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <Image src="https://cdn.cdnlogo.com/logos/n/79/node-js.svg" alt="NodeJS" width={150} height={150} />
                  </div>
                </div>
                <div data-te-toggle="tooltip" title="NestJS" className="py-0 px-4">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <Image src={nestJsImage} alt="NestJS" width={80} height={80} />
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="py-5">
                <p className="flex items-center text-black text-lg sm:text-l md:text-xl lg:text-2xl">
                  <span className="w-2 h-2 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                  Projects
                </p>

                {/* Akshardham Visitor's app Project */}
                <div className="container px-5 mx-auto">
                  <h2 className="sm:text-xl text-2xl text-black font-medium title-font mb-2">
                    Akshardham Visitor&apos;s app :
                  </h2>
                  <ul className="text-sm sm:text-sm md:text-base lg:text-lg">
                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Led a team of 3 backend developers to create an Admin panel using Next.js, Postgres, and AWS,
                      improving data configuration for a mobile application.
                    </li>
                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Implemented Scrum and Agile methodologies for efficient development, fostering collaboration
                      within the team and ensuring timely deliveries.
                    </li>

                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Developed Firebase Cloud Messaging (FCM) for recurring & scheduled push notifications, enhancing
                      user engagement.
                    </li>
                  </ul>
                  <div className="flex mt-4">
                    <div className="text-gray-400 inline-flex items-center ml-4">
                      Technology used &emsp; &emsp;
                      <em data-te-toggle="tooltip" title="Postgres">
                        <Image width={30} height={30} src={postgreSQLLogo} alt="Postgres" />
                      </em>
                      &nbsp;
                      <em data-te-toggle="tooltip" title="NextJS">
                        <Image width={30} height={30} src={nextJsLogo} alt="NextJS" />
                      </em>
                    </div>
                  </div>
                </div>

                {/* ECard Project */}
                <div className="container px-5 mx-auto">
                  <h2 className="sm:text-xl text-2xl text-black font-medium title-font mb-2">ECard :</h2>
                  <ul className="text-sm sm:text-sm md:text-base lg:text-lg">
                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      A web app built with Next JS and MongoDB as a Database serves users a platform to create ID cards
                      with a drag and drop editor built-in. Also, they can choose a ready-made template with various
                      product variants such as RFID and 1k Mifare chip type, glossy and matt material type, etc. It
                      provides the facility to preview how they would look and download it as a PDF.
                    </li>

                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Contributed to a dynamic team of 7 developers in building a cutting-edge web application using
                      NextJS for printing digital ID cards.
                    </li>

                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Implemented drag & drop functionality by integrating an open-source editor for creating ID card
                      templates.
                    </li>

                    <li className="leading-relaxed">
                      <span className="w-1 h-1 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                      Developed a cost-effective algorithm to minimize white gaps in printed paper, optimizing
                      production efficiency.
                    </li>
                  </ul>
                  <div className="flex mt-4">
                    <div className="text-gray-400 inline-flex items-center ml-4">
                      Technology used &emsp; &emsp;
                      <em data-te-toggle="tooltip" title="MongoDB">
                        <Image width={40} height={40} src={mongoDBLogo} alt="MongoDB" />
                      </em>
                      &nbsp;
                      <em data-te-toggle="tooltip" title="NextJS">
                        <Image width={30} height={30} src={nextJsLogo} alt="NextJS" />
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Work
