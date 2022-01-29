import React from 'react';
import cover from '../images/undergraduate_cover.jpg';

export default function ProjectSection(props) {
  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Undergraduate project
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam egetaliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifendegestas fringilla sapien.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <figure>
              <img
                className="w-full rounded-lg"
                src={cover}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}