import React from "react";
import Typewriter from "./Typewritter";
import Button from "../../assets/Button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 mt-16 md:mt-0 "
    >
      <div className="container max-w-7xl mx-auto text-start z-20  flex flex-col-reverse md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight font-primary-2 text-center md:text-start">
            <span className="opacity-0 animate-fade-in text-primary-2">
              Hi, I'm
            </span>
            <span className="rainbow-text opacity-0 animate-fade-in-delay-1">
              {" "}
              Arnab
            </span>
            <span className="rainbow-text opacity-0 animate-fade-in-delay-3">
              {" "}
              Kundu
            </span>
            <div className="text-2xl md:text-4xl font-medium my-8 text-primary-2">
              <div className="h-[20px] md:h-[40px]">
                <Typewriter
                  phrases={[
                    "Full Stack Developer",
                    "Software Engineer",
                    "Content Creator",
                    "Tech Enthusiast",
                  ]}
                />
              </div>
            </div>
            <hr className="w-55 md:w-[95%] h-[3px] bg-primary-2 border-0 mx-auto md:mx-0 my-8 md:my-4  " />
            <div className="hidden md:block ">
              <p className="text-lg md:text-xl text-primary-2 tracking-wide leading-relaxed font-bold">
                Full-stack developer crafting fast, modern, and user-focused web
                experiences. I build clean interfaces and scalable systems using
                the latest web technologies.
              </p>
            </div>
            {/* <div className="mt-6 text-xl md:text-2xl  font-bold font-primary-2  caret  h-[20px] md:h-[40px] text-center md:text-start">
              <Typewriter />
            </div> */}
          </h1>
          <div className="pt-8 md:pt-4 opacity-0 animate-fade-in-delay-4 text-xl md:text-2xl items-center justify-center md:justify-start flex flex-col md:flex-row gap-6">
            <Button
              text="Visit My Projects"
              img="/projects.png"
              to="/#projects"
            />
            <Button
              text="Download My Resume"
              img="/download1.png"
              to="/Arnab_Kundu_Resume.pdf"
            />
          </div>
        </div>
        <div className="mb-12 md:mb-0 md:mt-6 flex justify-center items-center md:items-start">
          <div className="relative">
            <img
              src="/Profile_Pic.png"
              alt="Profile"
              className="profile-image border-2 border-white"
            />
            <div className="floating-icon top-10 right-[15px] bg-gradient-to-br from-orange-400 to-red-500">
              <img src="/coffee.png" alt="coffee" className="w-12" />
            </div>

            <div className="floating-icon bottom-4 left-[20px] bg-gradient-to-br from-orange-400 to-red-500">
              <img src="/code.png" alt="code" className="w-12" />
            </div>

            <div className="floating-icon bottom-[30px] right-10 bg-gradient-to-br from-orange-400 to-red-500">
              <img src="/music.png" alt="music" className="w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
