import React from "react";

export default function AboutMe() {
  return (
    <div className="relative z-20 w-full h-screen flex items-center justify-center ">
      <section id="about" className="px-4 relative ">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl  font-primary-2 font-bold">
            <span className="rainbow-text">About</span>{" "}
            <span className="text-primary-2">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3>Passionate Web Developer & Tech Creator</h3>
              <div className="text-justify">
                <p>
                  I’m a full-stack JavaScript developer with hands-on experience
                  in React, Next.js, Node.js, Express, MongoDB, and modern UI
                  frameworks. I enjoy crafting smooth user experiences,
                  designing scalable backend systems, and shipping
                  production-ready features.{" "}
                </p>
                <p>
                  My background includes competitive hackathon participation,
                  open-source contributions, and projects involving API
                  integrations, real-time features, and responsive front-end
                  engineering. Alongside development, I’ve built strong
                  fundamentals in core CS subjects like DBMS, OS, Networking,
                  and Data Structures in C++ during my B.Tech journey (CGPA
                  8.51) .
                </p>
                <p>
                  I’m driven by curiosity, clean code, and the challenge of
                  turning complex problems into simple, usable solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
