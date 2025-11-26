import React from "react";
import Typewriter from "./Typewritter";
import Button from "../../assets/Button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 mt-16 md:mt-0 "
    >
      <div className="container max-w-7xl mx-auto text-start z-20  flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight font-primary-2 text-center md:text-start">
            <span className="opacity-0 animate-fade-in text-primary-2">
              Hi, I'm
            </span>
            <span className="text-[#ffbc4c] opacity-0 animate-fade-in-delay-1">
              {" "}
              Arnab
            </span>
            <span className="text-[#ffbc4c] opacity-0 animate-fade-in-delay-3">
              {" "}
              Kundu
            </span>
            <div className="text-2xl md:text-4xl font-medium mt-4 rainbow-text ">
              <div className="h-[20px] md:h-[40px]">
                <Typewriter
                  phrases={[
                    "Frontend Developer",
                    "Software Developer",
                    "Content Creator",
                    "Tech Enthusiast",
                  ]}
                />
              </div>
            </div>
            <hr className="w-55 md:w-full h-[3px] bg-primary-2 border-0 my-8 md:my-4 mx-auto " />

            <div className="mt-6 text-xl md:text-2xl  font-bold font-primary-2  caret  h-[20px] md:h-[40px] text-center md:text-start">
              <Typewriter />
            </div>
          </h1>
          <div className="pt-8 md:pt-4 opacity-0 animate-fade-in-delay-4 text-xl md:text-2xl justify-center md:justify-start flex">
            <Button />
          </div>
        </div>
        <div className="mt-12 md:mt-6 flex justify-center items-center md:items-start">
          <img
            src="/Profile_Pic.png"
            alt="Profile"
            className="profile-image border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}
