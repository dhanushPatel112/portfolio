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
    <section id="experience" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Work Experience</h2>

        <div className="space-y-6">
          {/* Codiste */}
          <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Full Stack Web Developer — Codiste</h3>
                <p className="text-sm text-slate-600">Ahmedabad, IN · 2024 – Present</p>
              </div>
              <div className="text-sm text-slate-500">Full-time</div>
            </div>

            <ul className="mt-4 list-inside list-disc text-slate-700 space-y-2">
              <li>Led full-stack development of enterprise apps using Node.js, React and TypeScript.</li>
              <li>Migrated legacy Java backend to Node.js while ensuring stability for financial transaction flows.</li>
              <li>Built scalable backend services with Express, Prisma and MySQL; implemented auth and role-based access.</li>
              <li>Implemented Telegram mini-apps and WebSocket-based real-time features.</li>
            </ul>
          </article>

          {/* Rysun Labs */}
          <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Associate Software Developer — Rysun Labs</h3>
                <p className="text-sm text-slate-600">Ahmedabad, IN · 2022 – 2024</p>
              </div>
              <div className="text-sm text-slate-500">Full-time</div>
            </div>

            <ul className="mt-4 list-inside list-disc text-slate-700 space-y-2">
              <li>Led a team of 3 to build a Next.js web app with FCM and AWS S3 integrations.</li>
              <li>Developed an integrated drag-and-drop design editor using React for template creation.</li>
              <li>Worked closely with product and QA; adopted Agile practices and improved delivery cadence.</li>
              <li>Awarded &quot;Best Intern&quot; during the internship and later contributed to production projects.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work
