import React from "react"
import Title from "./Title"
import Link from "next/link"

const Internship = () => {
  return (
    <div>
      <Title id={"internship_experience"} title={"Internship experience"} />
      <section className="text-slate-900 bg-white body-font py-12">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold">Asambhav Solution — JavaScript Developer</h3>
            <p className="text-sm text-slate-600">06/2021 - 11/2021</p>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-medium">Chrome extension</h4>
                <p className="text-slate-700">Built a Chrome extension to scrape information across websites using React.</p>
                <p className="mt-2 text-sm">Link: <a href="https://chrome.google.com/webstore/detail/super-scrapper-with-dom/nbhengfkabkgfldgobllnaihnejcbdei" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Chrome Web Store</a></p>
              </div>

              <div>
                <h4 className="font-medium">Hiring portal</h4>
                <p className="text-slate-700">Worked on a job portal connecting employers and job seekers; implemented backend APIs and integrations.</p>
              </div>

              <div>
                <p className="text-slate-700">Technologies: JavaScript, React, Node.js, Prisma</p>
              </div>

              <div>
                <p className="text-slate-700">Received recognition as Best Intern for performance and teamwork.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Internship
