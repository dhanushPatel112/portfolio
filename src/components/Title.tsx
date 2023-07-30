import React from "react";

const Title = ({ id, title }: { id: string; title: string }) => {
  return (
    <section id={id} className="text-black bg-white body-font">
      <div className="container px-5 py-5 mx-auto items-center">
        <section className="flex-col flex content-center text-black body-font bg-white">
          <div className="mb-10"></div>
          <h1 className="text-center sm:text-3xl text-2xl font-medium title-font text-black">{title}</h1>
          <div className="flex justify-center">
            <div className="h-2 w-80 p-0 bg-black rounded"></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Title;
