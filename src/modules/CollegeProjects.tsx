import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Project = {
    id: string
    title: string
    summary: string
    tech: string[]
    image: string
    github?: string
    demo?: string
}

const projects: Project[] = [
    {
        id: "proj1",
        title: "Book store",
        summary:
            "A MERN stack web app for buying and selling books. Includes an admin panel, payment integration, and advanced search with filters.",
        tech: ["React", "Node.js", "Express", "MongoDB", "PayPal"],
        image: "/images/book_store.png",
        github: "https://github.com/spockpatel/Book-Store",
    },
    {
        id: "proj2",
        title: "Pata Tap",
        summary: "A fun single page website built using HTML, CSS and JavaScript with help of Canvas. It has various musical notes on pressing keyboard keys with various different animations.",
        tech: ["HTML", "CSS", "Canvas"],
        image: '/images/pataTap.png',
        github: "https://github.com/spockpatel/pataTap",
    },
    {
        id: "proj3",
        title: "Color Game",
        summary: "A nice responsive game in which one has to guess the hash code of color. It has different difficulty levels and built using HTML, CSS and JS.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/images/colurGame.png",
        github: "https://github.com/spockpatel/ColorGame",
    },
]

export default function CollegeProjects() {
    const [active, setActive] = useState<string | null>(null)
    const [tab, setTab] = useState<"all" | "frontend" | "backend">("all")

    const filtered = projects.filter((p) => {
        if (tab === "all") return true
        if (tab === "frontend") return p.tech.some((t) => ["React", "Next.js", "HTML", "CSS", "JavaScript"].includes(t))

        return p.tech.some((t) => ["Node.js", "Postgres", "Prisma", "Python"].includes(t))
    })

    return (
        <section id="college-projects" className="py-12 bg-slate-50">
            <div className="container mx-auto px-6">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">College Projects</h2>
                        <p className="text-sm text-slate-600 mt-1">A selection of college projects demonstrating applied skills.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <nav aria-label="Project filters" className="flex gap-2">
                            <button
                                onClick={() => setTab("all")}
                                className={`px-3 py-1 rounded-md text-sm ${tab === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setTab("frontend")}
                                className={`px-3 py-1 rounded-md text-sm ${tab === "frontend" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"}`}
                            >
                                Frontend
                            </button>
                            <button
                                onClick={() => setTab("backend")}
                                className={`px-3 py-1 rounded-md text-sm ${tab === "backend" ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"}`}
                            >
                                Backend
                            </button>
                        </nav>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((p) => (
                        <article
                            key={p.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 animate-fade-up"
                            tabIndex={0}
                            aria-labelledby={`${p.id}-title`}
                            onMouseEnter={() => setActive(p.id)}
                            onMouseLeave={() => setActive(null)}
                        >
                            <div className="relative w-full h-40 rounded-md overflow-hidden">
                                <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                            </div>

                            <div className="mt-4">
                                <h3 id={`${p.id}-title`} className="text-lg font-semibold text-slate-900">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-slate-600 mt-2">{p.summary}</p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <Link
                                        href={p.github || "#"}
                                        target="_blank"
                                        className="inline-flex items-center px-3 py-2 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    >
                                        View Code
                                    </Link>
                                    <button onClick={() => setActive(p.id)} className="text-sm text-slate-700 hover:underline">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
