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

          <Link href="https://github.com/dhanushPatel112" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6 text-slate-700 hover:text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.45-2.71 5.42-5.29 5.7.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12 24 5.65 18.35.5 12 .5z" />
            </svg>
          </Link>

          {/* LinkedIn - leave href empty for user to add */}
          <Link href="https://www.linkedin.com/in/dhanush-patel-2185291ab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="ml-2">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6 text-slate-700 hover:text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.16h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8z" />
            </svg>
          </Link>

          {/* LeetCode - leave href empty for user to add */}
          <Link href="https://leetcode.com/u/dev-d-patel" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile" className="ml-2">
            <span className="sr-only">LeetCode</span>
            {/* <svg className="w-6 h-6 text-slate-700 hover:text-slate-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M14.5 3c.28 0 .5.22.5.5v6.02c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5c0-.28.22-.5.5-.5zM19.19 6.81c.2.2.2.51 0 .71-.23.23-.61.23-.84 0-1.58-1.58-3.94-1.58-5.52 0-1.56 1.56-1.58 4.08-.05 5.67.2.2.2.51 0 .71-.2.2-.51.2-.71 0-1.89-1.89-1.86-5.02.06-7 1.75-1.75 4.58-1.75 6.33 0zM12.5 8c.28 0 .5.22.5.5v7.02c0 .28-.22.5-.5.5s-.5-.22-.5-.5V8.5c0-.28.22-.5.5-.5zM9.3 10.66c.2.2.2.51 0 .71-1.35 1.35-1.35 3.54 0 4.89.2.2.2.51 0 .71-.2.2-.51.2-.71 0-1.58-1.58-1.6-4.2-.05-5.77 1.57-1.57 3.93-1.57 5.52 0 .23.23.23.61 0 .84-.2.2-.51.2-.71 0-1.2-1.2-3.15-1.2-4.35 0-.09.09-.23.09-.32 0-.09-.09-.09-.23 0-.32 1.06-1.06 2.78-1.06 3.84 0zM4.5 13.5c.28 0 .5.22.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2.5c0-.28.22-.5.5-.5z" />
            </svg> */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="leetcode"
            >
              <path
                fill="#B3B1B0"
                d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
              />
              <path
                fill="#E7A41F"
                d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
              />
              <path
                fill="#070706"
                d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
