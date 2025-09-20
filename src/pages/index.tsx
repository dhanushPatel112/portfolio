import About from "@/components/About"
import Certification from "@/components/Certification"
import Education from "@/components/Education"
import Internship from "@/components/Internship"
import Landing from "@/components/Landing"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Work from "@/components/Work"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Certification />
      <Internship />
      <Education />
      {/* TODO: add contact backend function */}
      {/* <Contact /> */}
    </>
  )
}
