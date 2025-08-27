import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-200" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="flex items-center gap-3 text-slate-900" aria-label="Homepage">
          <span className="font-semibold text-lg">Dhanush Patel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <Link href="#about" className="text-sm text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded">About</Link>
          <Link href="#skills" className="text-sm text-slate-700 hover:text-slate-900">Skills</Link>
          <Link href="#experience" className="text-sm text-slate-700 hover:text-slate-900">Experience</Link>
          <Link href="#projects" className="text-sm text-slate-700 hover:text-slate-900">Projects</Link>
          <Link href="#contact" className="text-sm text-slate-700 hover:text-slate-900">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/resume/Dhanush's Resume.pdf" target="_blank" aria-label="Download resume">
            <Button variant="outline" size="sm">Resume</Button>
          </Link>

          <Link href="https://github.com/dhanushPatel112" target="_blank" aria-label="GitHub profile">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6 text-slate-700 hover:text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.45-2.71 5.42-5.29 5.7.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12 24 5.65 18.35.5 12 .5z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
