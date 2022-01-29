import React from 'react';
import cover from '../images/arch_project.png';
import arch1 from '../images/arch_1.png';
import arch3 from '../images/arch_3.png';
import arch4 from '../images/arch_4.png';
import arch5 from '../images/arch_5.png';

export default function ProjectSection(props) {
  return (
    <div>
      <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Architectural project
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              The High School project in Paraisopolis was a project done in partnership with architect Raoana during university. We seek to relate the building with its surroundings, making the free areas protagonists of the project. The project's premise dispels the public-private relationship in a concept treated as "break" for author Herman Hertzberger. As a premise of these spaces we suggest living areas distributed by the project and areas of permanence directly related to the street. The natural unevenness of the terrain led to a wall of about ten meters, which allowed us to add ramps for greater fluidity of space. Supported along the wall, the perception of this huge external component becomes softer and integrates with the project.The implementation was worked at the lowest level of the land, allowing proximity to the residents and being inviting to community events.
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
              <figcaption>Tutor: Kátia Teixeira | Sérgio Salles | Year: 2016 | Location: Sao Paulo</figcaption>
            </figure>
            <figure>
              <img
                className="w-full rounded-lg"
                src={arch1}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
            </figure>
            <figure>
              <img
                className="w-full rounded-lg"
                src={arch3}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
            </figure>
            <figure>
              <img
                className="w-full rounded-lg"
                src={arch4}
                alt="Undergraduate project"
                width={1310}
                height={873}
              />
            </figure>
            <figure>
              <img
                className="w-full rounded-lg"
                src={arch5}
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