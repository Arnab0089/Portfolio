import { div } from "framer-motion/client";
import React from "react";

export default function Skill() {
  return (
    <div className="relative z-20 md:container md:max-w-5xl md:mx-auto  min-h-screen flex flex-col items-center justify-center ">
      {" "}
      <div
        id="skill"
        className="flex flex-wrap items-center justify-center gap-2 md:gap-6 px-2"
      >
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/HTML.png" alt="HTML" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            HTML
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/CSS.png" alt="CSS" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            CSS
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/JS.png" alt="JS" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            JS
          </p>
        </div>
        <div className="glow-image w-[108px]  md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/React.png" alt="React" className="w-20 rotate-infinite" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            React
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            Tailwind
            <p>CSS</p>
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/python.png" alt="Python" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            Python
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/git.png" alt="Git" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            Git
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/Node.png" alt="Node" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            Node JS
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/C++.png" alt="C++" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            C++
          </p>
        </div>
        <div className="glow-image w-[108px] md:w-auto h-[130px] md:h-auto rounded-lg justify-center items-center bg-primary-3 flex flex-col gap-4 p-6 border-2 glow-fallback shadow-2xl">
          <img src="/database.png" alt="SQL" className="w-20" />
          <p className="text-text-col font-medium font-primary-2 text-lg md:text-xl">
            SQL
          </p>
        </div>
      </div>
    </div>
  );
}
