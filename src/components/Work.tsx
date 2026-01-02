
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
              <li>Architect scalable backends with NestJS, Node.js, and TypeScript.</li>
              <li>Design real-time systems using WebSockets, Socket.io, and Redis.</li>
              <li>Build REST APIs and microservices with Express, Prisma, and MySQL/PostgreSQL.</li>
              <li>Implement secure auth, RBAC, queues, and caching for high-concurrency apps.</li>
              <li>Develop Telegram mini-apps/bots with gamification and referral systems.</li>
              <li>Create cloud-ready deployments on AWS with CI/CD and monitoring.</li>
              <li>Work with payment gateways and blockchain staking dashboards.</li>
              <li>Ship reliable systems (99.9%+ uptime) using clean code and testing practices.</li>
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
