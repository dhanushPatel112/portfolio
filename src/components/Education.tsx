import React from "react";
import Title from "./Title";

const Education = () => {
  return (
    <div>
      <section id="education" className="text-black bg-white body-font">
        <Title id={"education"} title={"Educational Background"} />
        <div className="container flex flex-col justify-center px-5 py-20 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-black text-lg title-font font-medium mb-2">BE Computer Engineer</h2>
                <h4 className="text-black title-font mb-2">LJ Institute of Engineering And Technology</h4>
                <p className="leading-relaxed text-lg">CGPA: 9.17</p>
                <p className="leading-relaxed text-base">07/2018 - Present</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-black text-lg title-font font-medium mb-2">Higher Secondary School</h2>
                <h4 className="text-black title-font mb-2">M.B. Patel Secondary and High secondary school</h4>
                <p className="leading-relaxed text-lg">Percentile - 86.6</p>
                <p className="leading-relaxed text-base">06/2016 - 08/2018</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-black text-lg title-font font-medium mb-2">Secondary School</h2>
                <h4 className="text-black title-font mb-2">M.B. Patel Secondary and High secondary school</h4>
                <p className="leading-relaxed text-lg">Percentile - 97.59</p>
                <p className="leading-relaxed text-base">06/2014 - 03/2016</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
