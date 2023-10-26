import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { routes } from "@/utils/routes";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrNavigate } from "react-icons/gr";
import { Button } from "@mui/material";

function Landing() {
  const words = [
    "aviation.",
    "teaching.",
    "software.",
    "learning.",
    "business.",
    "startups.",
    "racing.",
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex lg:flex-row lg:justify-between justify-center flex-col-reverse items-center"
    >
      {/* introduction */}
      <div className="intro flex flex-col lg:text-left text-center">
        <div className="intro-name">
          <h1 className="lg:text-2xl text-lg font-light">Hello World! My name is</h1>
          <h1 className="lg:text-6xl text-3xl font-bold tracking-widest text-orange">
            {"<"}Breno Magrani{"/>"}
          </h1>
        </div>

        <div className="intro-bio mt-6">
          <p className="lg:text-lg text-base">
            I am a full-stack web developer with <br></br>an interest for{" "}
            <span className="text-newBlue font-semibold">
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
            <a
              key={index}
              href={route.path}
              className="flex items-center lg:text-base py-3 lg:mr-4 mr-2 my-1"
            >
              <Button
                color="inherit"
                style={{
                  borderRadius: "40px",
                  fontSize: "1.2rem",
                  borderWidth: 2,
                  textTransform: "none",

                  borderColor:"#FF7C30"
                }}
                size="large"
                variant="outlined"
              >
                <BiRightArrowAlt size={16} />
                {route.name}
              </Button>
            </a>
          ))}
        </div>
      </div>

      {/* gif */}
      <div>
        <img
          src="https://i.pinimg.com/originals/b9/49/c8/b949c86a570df07a7440abe39405834c.gif"
          width={605}
          height={605}
        />
      </div>
    </section>
  );
}

export default Landing;
