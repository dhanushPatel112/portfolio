import React from "react"
import Title from "./Title"
import Link from "next/link"

const Internship = () => {
  return (
    <div>
      <Title id={"internship_experience"} title={"Internship experience"} />
      <section className="text-black bg-white body-font">
        <div className="container px-5 py-0 mx-auto">
          <section className="text-black body-font bg-white">
            <div className="h-full p-6 rounded-lg border-4 border-gray-700 flex flex-col">
              <h2 className="text-right text-md tracking-widest text-black title-font mb-1 font-medium">
                06/2021 - 11/2021
              </h2>
              <Link
                href="https://asambhav.in/"
                className="text-3xl text-black pb-4 mb-4 border-b border-gray-800 leading-none"
                target="_blank"
              >
                Asambhav Solution
              </Link>
              <h1 className="flex items-center text-1xl mt-auto text-black border-0 py-5 px-4 w-full focus:outline-none rounded">
                <b>ROLE:</b> &nbsp; JavaScript Developer
              </h1>
              <p className="flex items-center text-black py-5">
                <span className="w-2 h-2 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0"></span>
                Projects
              </p>
              <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl text-2xl text-black font-medium title-font mb-2 md:w-2/5">
                  Chrome extension:
                </h2>
                <div className="md:w-3/5 md:pl-6">
                  <p className="leading-relaxed text-base">
                    Chrome extension which can be utilized to scrape information from different sites with ReactJS
                    technology &nbsp;
                    <a
                      href="https://chrome.google.com/webstore/detail/super-scrapper-with-dom/nbhengfkabkgfldgobllnaihnejcbdei"
                      className="mr-5 hover:text-black"
                      target="_blank"
                    >
                      Link: <em className="fas fa-link"></em>
                    </a>
                  </p>
                  <div className="flex md:mt-4 mt-6">
                    <a className="text-indigo-400 inline-flex items-center ml-4">
                      Technology used &emsp;{" "}
                      <em className="fab fa-js-square fa-2x" data-te-toggle="tooltip" title="JavaScript"></em>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <em className="fab fa-react fa-2x" data-te-toggle="tooltip" title="ReactJS"></em>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 className="sm:text-3xl text-2xl text-black font-medium title-font mb-2 md:w-2/5">Hiring portal:</h2>
                <div className="md:w-3/5 md:pl-6">
                  <p className="leading-relaxed text-base">
                    Job portal is an application which connects employers and job seekers where employers are the source
                    of the resources and job seekers can find and apply for their targeted job. &nbsp;
                  </p>
                  <div className="flex md:mt-4 mt-6">
                    <a className="text-indigo-400 inline-flex items-center ml-4">
                      Technology used &emsp;
                      <em className="fab fa-node fa-2x" data-te-toggle="tooltip" title="NodeJS"></em>
                      &emsp;
                      <em data-te-toggle="tooltip" title="Prisma">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 106 128"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M105.306 97.5187L61.2843 4.03669V4.03469C60.1803 1.69769 57.8763 0.155691 55.2653 0.0126908C52.5863 -0.143309 50.1863 1.14869 48.8323 3.34769L1.08827 80.6777C-0.390728 83.0877 -0.361728 86.0597 1.17227 88.4407L24.5103 124.593C25.9013 126.751 28.3113 128 30.8163 128C31.5263 128 32.2403 127.9 32.9423 127.692L100.686 107.656C102.761 107.042 104.458 105.574 105.346 103.628C106.231 101.681 106.217 99.4527 105.306 97.5187ZM95.4493 101.529L37.9703 118.529C36.2143 119.049 34.5313 117.53 34.9003 115.759L55.4343 17.4197C55.8183 15.5807 58.3603 15.2887 59.1623 16.9917L97.1823 97.7277C97.8993 99.2507 97.0813 101.047 95.4493 101.529Z"
                            fill="#818cf8"
                          />
                        </svg>
                      </em>
                    </a>
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

export default Internship
