import React from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <Title id="work" title="Personal Project" />

      {/* Book Store */}
      <section className="text-black bg-white body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-16 lg:flex-row md:flex-col items-center">
          <div className="lg:w-1/2 md:w-full mb-10 lg:mb-0 lg:order-first md:order-last">
            <Image src="/images/book_store.png" alt="Book Store" width={600} height={400} className="object-cover object-center rounded w-full" />
          </div>
          <div className="lg:w-1/2 lg:pl-10 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center lg:order-last md:order-first">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Book store</h1>
            <p className="mb-8 leading-relaxed">
              A MERN stack web app platform used for purchasing and selling books. Web app consist of Admin panel to manage and regulate the stock and Payment gateway with secure and encrypted PayPal
              and Credit card Support. It has also search functionality with various filters.
            </p>
            <h2 className="text-indigo-500 font-bold">
              Link:{" "}
              <Link href="https://github.com/spockpatel/Book-Store" target="_blank" rel="noopener noreferrer" className="underline">
                https://github.com/spockpatel/Book-Store
              </Link>
            </h2>
          </div>
        </div>
      </section>

      {/* Pata Tap */}
      <section className="text-black bg-white body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-16 lg:flex-row md:flex-col items-center">
          <div className="lg:w-1/2 lg:pr-10 md:pr-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Pata Tap</h1>
            <p className="mb-8 leading-relaxed">
              A fun single page website built using HTML, CSS and JavaScript with help of Canvas. It has various musical notes on pressing keyboard keys with various different animations.
            </p>
            <h2 className="text-indigo-500 font-bold">
              Link:{" "}
              <Link href="https://github.com/spockpatel/pataTap" target="_blank" rel="noopener noreferrer" className="underline">
                https://github.com/spockpatel/pataTap
              </Link>
            </h2>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image src="/images/pataTap.png" alt="Pata Tap" width={600} height={400} className="object-cover object-center rounded w-full" />
          </div>
        </div>
      </section>

      {/* Color Game */}
      <section className="text-black bg-white body-font">
        <div className="container mx-auto flex flex-wrap px-5 py-16 lg:flex-row md:flex-col items-center">
          <div className="lg:w-1/2 md:w-full mb-10 lg:mb-0 lg:order-first md:order-last">
            <Image src="/images/colurGame.png" alt="Color Game" width={600} height={400} className="object-cover object-center rounded w-full" />
          </div>
          <div className="lg:w-1/2 lg:pl-10 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center lg:order-last md:order-first">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Color Game</h1>
            <p className="mb-8 leading-relaxed">A nice responsive game in which one has to guess the hash code of color. It has different difficulty levels and built using HTML, CSS and JS.</p>
            <h2 className="text-indigo-500 font-bold">
              Link:{" "}
              <Link href="https://github.com/spockpatel/ColorGame" target="_blank" rel="noopener noreferrer" className="underline">
                https://github.com/spockpatel/ColorGame
              </Link>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
