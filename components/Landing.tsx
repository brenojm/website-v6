import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { routes } from "@/utils/routes";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrNavigate } from "react-icons/gr";
import { Button } from "@mui/material";
import { LanguageProps } from "@/utils/interfaces";
import { findStringById, findStringByName } from "@/languageSupplier/languageSupplier";

function Landing() {
  const words = [
    findStringById("LandingTypeWords1"),
    findStringById("LandingTypeWords2"),
    findStringById("LandingTypeWords3"),
    findStringById("LandingTypeWords4"),
    findStringById("LandingTypeWords5"),
    findStringById("LandingTypeWords6"),
    findStringById("LandingTypeWords7"),
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex lg:flex-row lg:justify-between justify-center flex-col-reverse items-center"
    >
      {/* introduction */}
      <div className="intro flex flex-col lg:text-left text-center">
        <div className="intro-name">
          <h1 className="lg:text-2xl text-lg font-light">{findStringById("landing1")}</h1>
          <h1 className="lg:text-6xl text-3xl font-bold tracking-widest text-purple">
            {"<"}Breno Magrani{"/>"}
          </h1>
        </div>

        <div className="intro-bio mt-6">
          <p className="lg:text-lg text-base">
          {findStringById("landing2P1")}<br></br>{findStringById("landing2P2")}{" "}
            <span className="text-orange font-semibold">
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
                {findStringById(route.name)}
              </Button>
            </a>
          ))}
        </div>
      </div>

      {/* gif */}
      <div>
        <img
          src="https://cdn.dribbble.com/users/4382412/screenshots/15633275/media/085a014ebebde73e5cd510c93941f49a.gif"
          width={605}
          height={605}
        />
      </div>
    </section>
  );
}

export default Landing;
