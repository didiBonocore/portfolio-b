import React from 'react';
import cover from '../images/undergraduate_cover.jpg';

export default function Undergraduate() {
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
              The project “Between urban limits: a dialogue about memory and architecture” was an intervention in the former Companhia Antarctica Factory with the preservation of its historic buildings, a cultural equipment and a park were designed. It sought to reintegrate the fragmented area through a walkway that crosses the railroad, reconnecting the project with residential areas, thus creating a path of contemplation that marks the passage of time from historical to contemporary, as well as the possibility of transforming the walkway into an urban stage for possible ones events. The elaboration of the project was conceptualized on two premises: the reactivation of the area through the memory of the cultural uses that the factory offered to its workers. Also uses based on the concepts of Jane Jacobs and Bernard Tschumi, which encourage the population to use the area, requalifying the place through flows and events, in order to reconnect the project with the current dynamics of the city. It was decided to integrate the train station's access to the park project in order to resume the historical relationship between the tracks and the factory.
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
              <figcaption>Tutor: Luciana Tombi Brasil | Year: 2017 | Location: Sao Paulo</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}