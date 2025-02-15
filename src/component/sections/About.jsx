import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkilles = ["HTML", "CSS", "React", "TailwindCSS"];
  const backendSkilles = ["Python", "Python With AI"];
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20"
      id="about"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer wait experience in building scalable
              application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkilles.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Backtend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkilles.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Computer Scince</strong>- FreeCodeCamp Univarsity 😜
                </li>
                <li>Relevant Coursework: FrontEnd Dev, AI Dev</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Softer Engineer at ABC crop (2020-presnt)
                  </h4>
                  <p>Developed And maintained TagPix Ai and promptifyURL</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intern at DEF (2019)</h4>
                  <p>Assisted in building FrontEnd components and REST APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
