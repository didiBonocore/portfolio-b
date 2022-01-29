import React from 'react';
import cafe0 from '../images/cafe_0.JPG';
import cafe1 from '../images/cafe_1.JPG';
import cafe2 from '../images/cafe_2.JPG';
import cafe5 from '../images/cafe_5.JPG';
import cafe6 from '../images/cafe_6.JPG';
import cafe8 from '../images/cafe_8.JPG';
import cafe9 from '../images/cafe_9.JPG';
import cafe11 from '../images/cafe_11.JPG';
import cafe12 from '../images/cafe_12.JPG';
import cafe13 from '../images/cafe_13.JPG';

export default function CafeProject() {
  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Albufeira Cafe Photograph and edit photos & videos
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              I took care of all social media accounts, menu and food photography and content creation for Albufeira Cafe in Newcastle.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <figure>
              <img
                className="w-full rounded-lg"
                src={cafe0}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg my-6"
                src={cafe1}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg"
                src={cafe2}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg my-6"
                src={cafe5}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg"
                src={cafe6}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg my-6"
                src={cafe8}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg"
                src={cafe9}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg my-6"
                src={cafe11}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg"
                src={cafe12}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
              <img
                className="w-full rounded-lg mt-6"
                src={cafe13}
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