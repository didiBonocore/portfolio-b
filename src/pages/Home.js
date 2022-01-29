import React from 'react';

import Contact from '../components/Contact';
import Cards from '../components/Cards';

export default function About() {
  return (
    <div>
      <div className="bg-almost-green">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold font-poppins uppercase text-almost-black sm:text-5xl sm:tracking-tight lg:text-6xl">
              Barbara de Alencar Pacheco
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl font-poppins text-white">
              Architect, Graphic Designer & Social Media Creator
            </p>
          </div>
        </div>
      </div>
      < Cards />
      < Contact />
    </div>
  );
}