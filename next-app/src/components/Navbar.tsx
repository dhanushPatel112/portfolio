import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className={`text-white bg-black body-font custom-header sticky`} id="myHeader">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Link href="#home" className="ml-3 text-xl">
            Dhanush Patel
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#about" className="mr-5">
            About
          </Link>
          <Link href="#experience" className="mr-5">
            Experience
          </Link>
          <Link href="#education" className="mr-5">
            Education
          </Link>
          <Link href="/resume/Dhanush's Resume.pdf" className="mr-5">
            Resume
          </Link>
          <Link href="http://github.com/dhanushPatel112" className="mr-5" target="_blank">
            <em className="fab fa-github fa-2x"></em>
          </Link>
          <Link href="https://linkedin.com/in/dhanush-patel-2185291ab" className="mr-5" target="_blank">
            <em className="fab fa-linkedin fa-2x"></em>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
