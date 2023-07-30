import About from "@/components/About";
import Education from "@/components/Education";
import Internship from "@/components/Internship";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Work />
      <Internship />
      <Education />
      <Projects />
    </>
  );
}
