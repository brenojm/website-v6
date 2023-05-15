"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import { routes } from "./routes";
import { BsArrowRight } from "react-icons/bs";
function Landing() {
  const words = [
    "cool products.",
    "teaching.",
    "software.",
    "learning.",
    "business.",
    "startups.",
    "photography.",
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex lg:flex-row lg:justify-between justify-center flex-col-reverse items-center"
    >
      {/* introduction */}
      <div className="intro flex flex-col lg:text-left text-center">
        <div className="intro__name">
          <h1 className="lg:text-2xl text-lg font-light">hi! i am</h1>
          <h1 className="lg:text-6xl text-3xl font-bold tracking-widest text-purple">
            arpan neupane
          </h1>
        </div>
        <div className="intro__bio mt-6">
          <p className="lg:text-lg text-base text-orange">
            i am a self taught programmer with <br></br>an interest for{" "}
            <span className="text-purple font-semibold">
              <Typewriter
                words={words}
                loop={true}
                cursor={true}
                cursorBlinking={true}
              />
            </span>
          </p>
        </div>

        {/* nav links */}
        <div className="flex flex-wrap items-center lg:justify-start justify-center mt-4">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className="flex items-center lg:text-base text-xs py-3 px-8 border-2 hover:border-orange hover:text-orange hover:ease-out hover:duration-200 rounded-xl lg:mr-4 mr-2 my-1"
            >
              <span>{route.name}</span>
              <BsArrowRight className="ml-0.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* gif */}
      <div>
        <Image
          src="/programmer-gif.gif"
          alt="Programmer Gif"
          width={475}
          height={100}
        />
      </div>
    </section>
  );
}

export default Landing;
