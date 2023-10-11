import React from "react";
import Skills from "./Skills";

function About() {
  const milliseconds: number =
    new Date().getTime() - new Date("01/25/2004").getTime();

  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <section id="about" className="w-full min-h-screen flex items-center">
      {/* about & skills display */}

      {/* large is gonna have about | skills */}
      <div className="about-skills w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:pt-0 pt-12">
        <div className="about flex-1 lg:mb-0 mb-12 lg:mr-8 mr-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-bold lg:text-5xl text-3xl underline underline-offset-8 text-left">
            about
          </h2>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            I'm a {age}-year-old programmer studying systems analysis and
            development at FAETERJ, with a passion for programming. I like to
            create meaningful products that express my creativity through code.{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            Since childhood, I've always been passionate about everything that
            involves technology. This passion motivated me to pursue my dreams,
            and in 2022, after completing my degree, I joined the Serratec
            course, where I became a Full-Stack developer.{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            Since then, I have had the opportunity to explore and grow in this
            exciting field, pursuing my career with dedication and enthusiasm.
            My work focuses mainly on .NET, but I'm also versatile in Java and
            Javascript.{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            I am driven by a continuous desire to learn and improve, always
            seeking to be up-to-date with the latest trends and technologies. My
            journey in software development has been incredible, and I look
            forward to taking on new challenges and contributing to the
            advancement of technology.{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            Whether it's solving complex problems or creating innovative
            solutions, I'm committed to making a difference. If you would like
            to know more about my work or are interested in collaborating,
            please feel free to get in touch.{" "}
          </p>
          {/* <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            {" "}
            I am a {age}-year-old programmer in my sophomore year of high school
            (class of 2026) with a passion for software engineering. I enjoy
            building meaningful products that can express my creativity through
            code.{" "}
          </p>
          <p className="lg:mb-12 md:mb-8 mb-4 lg:text-xl md:text-lg text-base font-light">
            During my free time, I create content surrounding technology and
            programming on{" "}
            <a
              className="text-blue"
              href="https://youtube.com/c/ArpanNeupaneProductions"
              target="__blank"
            >
              YouTube
            </a>{" "}
            teaching various concepts in different languages, frameworks, and
            libraries.
          </p>
          <p className="lg:text-xl md:text-lg text-base font-light">
            When I&apos;m not programming or making content, you can find me
            playing the guitar, spending time with people, cooking, or reading.
            I&apos;m also an author at{" "}
            <a
              className="text-blue"
              href="https://themorningnews.com/news/author/arpanneupane/"
              target="__blank"
            >
              TheMorningNews
            </a>
            .
          </p> */}
        </div>
        <div className="skills flex-1 lg:ml-8 ml-0 lg:w-1/2 w-1/1">
          <h2 className="lg:mb-16 mb-8 font-bold lg:text-5xl text-3xl underline underline-offset-8 text-left">
            skills
          </h2>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
