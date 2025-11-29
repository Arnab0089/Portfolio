import React, { useEffect } from "react";
import { useInView, useAnimate } from "framer-motion";
import useScrollAnimation from "../../assets/Utility/UseScrollAnimation";
import Button from "../../assets/Button";

export default function AboutMe() {
  const aboutTextRef = useScrollAnimation({
    initialX: -120,
    finalX: 0,
    delay: 0.1,
    duration: 0.5,
  });

  const motto1Ref = useScrollAnimation({
    initialY: 100,
    finalY: 0,
    delay: 0.2,
    duration: 0.45,
  });

  const motto2Ref = useScrollAnimation({
    initialY: 100,
    finalY: 0,
    delay: 0.3,
  });

  const motto3Ref = useScrollAnimation({
    initialY: 100,
    finalY: 0,
    delay: 0.4,
  });
  return (
    <div className="relative z-20 w-full min-h-screen flex items-center justify-center">
      <section id="about" className="px-4 relative ">
        {" "}
        <div className="container">
          <h2 className="text-4xl md:text-6xl  font-primary-2 font-bold">
            <span className="rainbow-text">About</span>{" "}
            <span className="text-primary-2">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center mt-10 md:mt-12 font-primary-2 ">
            <div
              ref={aboutTextRef}
              className="space-y-6 col-span-2 relative p-2
              bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
              before:content[''] before:absolute before:inset-0 before:rounded-2xl 
              before:border before:border-white/10 before:pointer-events-none px-2 md:p-8"
            >
              <h3 className="text-2xl md:text-4xl rainbow-text font-medium text-center md:text-start">
                Passionate Web (Full Stack) Developer & Tech Creator
              </h3>
              <div className="text-center md:text-justify text-primary-2 space-y-4 leading-relaxed font-medium text-lg md:text-xl ">
                <p>
                  I’m a full-stack JavaScript developer skilled in React,
                  Next.js, Node.js, Express, and MongoDB, with a strong focus on
                  building clean, scalable, and user-centric web applications. I
                  enjoy creating intuitive front-end experiences and designing
                  reliable backend systems that perform in real-world production
                  environments.
                </p>
                <p>
                  My journey includes internal hackathon wins, open-source
                  contributions, and hands-on projects using API integrations,
                  real-time functionality, and responsive UI engineering. During
                  my B.Tech (CGPA 8.51), I developed solid foundations in DBMS,
                  OS, Networking, and Data Structures in C++, which strengthen
                  my problem-solving and architectural decisions.
                </p>
                <p className="rainbow-text">
                  Curiosity, clean code, and a drive to simplify complex ideas
                  are what guide my work every day.
                </p>
              </div>
            </div>
            <div className="space-y-6 col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  ref={motto1Ref}
                  className="relative flex  flex-col justify-center items-center p-2
              bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
              before:content[''] before:absolute before:inset-0 before:rounded-2xl 
              before:border before:border-white/10 before:pointer-events-none px-2 md:p-4"
                >
                  <img
                    src="/bulb.png"
                    alt="bulb"
                    className="object-cover w-25 h-25"
                  />
                  <h3 className="text-lg md:text-xl rainbow-text font-bold text-center ">
                    Build with Purpose, Learn with Curiosity
                  </h3>
                </div>
                <div
                  ref={motto2Ref}
                  className="relative p-2 flex flex-col justify-center items-center
              bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
              before:content[''] before:absolute before:inset-0 before:rounded-2xl 
              before:border before:border-white/10 before:pointer-events-none px-2 md:p-4"
                >
                  <img
                    src="/analysis.png"
                    alt="bulb"
                    className="object-cover w-25 h-25"
                  />
                  <h3 className="text-lg md:text-xl rainbow-text font-medium text-center">
                    Solve Real Problems with Clean, Scalable Code
                  </h3>
                </div>
                <div
                  ref={motto3Ref}
                  className="relative p-2 flex flex-col justify-center items-center
              bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border 
              before:content[''] before:absolute before:inset-0 before:rounded-2xl 
              before:border before:border-white/10 before:pointer-events-none px-2 md:p-4"
                >
                  <img
                    src="/cooperation.png"
                    alt="bulb"
                    className="object-cover w-25 h-25"
                  />
                  <h3 className="text-lg md:text-xl rainbow-text font-medium text-center">
                    Grow Through Collaboration and Consistency
                  </h3>
                </div>
              </div>
              <div className="flex justify-center items-center text-2xl md:mt-12">
                <Button text="See More " img="/aboutMe.png" to="/#projects" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
