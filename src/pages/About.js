import React from 'react';

import Contact from '../components/Contact';
import profilePic from '../images/profile.jpg';

export default function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Barbara de Alencar Pacheco</span>{' '}
            <span className="block text-almost-green xl:inline">
              Architect & Urbanist
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            My name is Barbara and I am 26 years-old. I'm from Brazil and I moved to the UK about two years ago. I'm looking for a job opportunity. I have excellent customer service skills, I work under pressure, I work well in a team and I take on individual tasks with deadlines. I hope I can be a part of your team.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/architecture"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-almost-green hover:bg-white hover:text-almost-green md:py-4 md:text-lg md:px-10"
              >
                Check out my projects
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full lg:mt-21">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={profilePic}
          alt="Barbara Alencar"
        />
      </div>
      < Contact />
    </div>
  );
}