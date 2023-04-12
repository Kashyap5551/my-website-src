import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-52 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hello, I am Kash. I am an aspiring Full-Stack developer.
            <br className="hidden lg:inline-block" />I recently graduated form
            York University with a B.S. in Computer Science.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a React.js enthusiast. I am in love with Tailwind css. I am
            passionate about Full-Stack development. I am currently learning
            Redis, Elasticsearch and Apache Kafka.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl"
            >
              Hire me or Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl"
            >
              See my side projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./work.svg"
          />
        </div>
      </div>
    </section>
  );
}
