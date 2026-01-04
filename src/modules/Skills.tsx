import React from 'react'

const skillBuckets = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Postgres', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Prisma', 'Postman'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skillBuckets.map((bucket) => (
            <div key={bucket.title} className="p-4 bg-white rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-slate-900">{bucket.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                {bucket.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-900 block" aria-hidden />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
