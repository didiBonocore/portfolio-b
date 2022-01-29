import React from 'react';

// import Project from '../components/Project';
import Contact from '../components/Contact';
import mockup from '../images/mockup.jpg';

const projects = [
  {
    title: 'Undergraduate Book Mockup',
    cover: mockup,
  },
]

export default function GraphicDesign() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {projects.map((project) => (
                <li key={project.title}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={project.cover} alt="" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Project /> */}
      <Contact />
    </div>
  );
}