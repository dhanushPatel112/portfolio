/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"
// Use public path string for Next/Image to avoid type import issues
import Link from "next/link"
import coverImage from "/public/images/profile 2.jpg"

const Landing = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-white/60 to-white/80">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Dhanush Patel</h1>
          <p className="mt-3 text-lg text-slate-700">Full-stack JavaScript Developer — building fast, accessible web apps.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200">Contact Me</Link>
            <Link href="/resume/Dhanush's Resume.pdf" target="_blank" className="inline-flex items-center rounded-md border border-slate-200 text-slate-900 px-4 py-2 text-sm hover:bg-slate-50">Download Resume</Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-1 ring-slate-200">
            <Image src={coverImage} alt="Profile Pic" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
