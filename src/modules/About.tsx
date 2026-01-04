import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">About Me</h2>
          <p className="text-slate-700 leading-relaxed">
            I am a Full-Stack JavaScript developer experienced building scalable web applications using
            Next.js, Node.js, and modern front-end tooling. I focus on performance, accessibility, and
            delightful user experiences.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Primary Stack</h3>
              <p className="mt-2 text-slate-600">Next.js • React • Node.js • TypeScript • PostgreSQL • MongoDB</p>
            </div>

            <div className="p-4 rounded-lg border border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">What I value</h3>
              <p className="mt-2 text-slate-600">Performance, accessibility, clean code, and continuous learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
