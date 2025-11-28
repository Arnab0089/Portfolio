// import React, { useEffect, useState } from 'react'

// export default function StarBackground() {
//     const [stars,setStars]= useState([]);
//     const [meteors,setMeteors]= useState([]);

//     useEffect(()=>{
//         generateStars();
//         generateMeteors();
//     },[])
//     const generateStars = ()=>{
//         const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);

//         const newStars= [];
//         for (let i = 0; i < numberOfStars; i++) {
//             newStars.push({
//                 id: i,
//                 size: Math.random() * 3 +1,
//                 x: Math.random() * 100,
//                 y: Math.random() * 100,
//                 opacity: Math.random() * 0.5 + 0.5,
//                 animmationDuration: Math.random() * 4 + 2,
//             });
//         }
//         setStars(newStars);
//     }
//     const generateMeteors = ()=>{
//         const numberOfMeteors = 4;
//         const newMeteors= [];
//         for (let i = 0; i < numberOfMeteors; i++) {
//             newMeteors.push({
//                 id: i,
//                 size: Math.random() * 3 +1,
//                 x: Math.random() * 100,
//                 y: Math.random() * 20,
//                 animationDelay: Math.random() * 15,
//                 animmationDuration: Math.random() * 4 + 2,
//             });
//         }
//         setMeteors(newMeteors);
//     }

//   return (
//     <div className=''>
//     <div className='fixed inset-0 overflow-hidden pointer-events-none z-(--stars-z)'>
//       {stars && stars.map(star => (
//         <div
//           key={star.id}
//           className='star animate-pulse-subtle twinkle'
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             top: `${star.y}%`,
//             left: `${star.x}%`,
//             opacity: star.opacity,
//             animation: `twinkle ${star.animmationDuration}s infinite alternate`
//           }}
//         />
//       ))}

//       {meteors && meteors.map(meteor => (
//         <div
//           key={meteor.id}
//           className='meteor animate-meteor'
//           style={{
//             width: `${meteor.size*50}px`,
//             height: `${meteor.size*3}px`,
//             top: `${meteor.y}%`,
//             left: `${meteor.x}%`,
//             animationDelay: `${meteor.animationDelay}s`,
//             animationDuration: `${meteor.animmationDuration}s`,
//           }}
//         />
//       ))}
// </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]);
  const [snow, setSnow] = useState([]);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDark) {
      generateStars();
      generateMeteors();
      const handleresizer = () => {
        generateStars();
      };
      window.addEventListener("resize", handleresizer);
      return () => window.removeEventListener("resize", handleresizer);
    } else {
      generateClouds();
      generateSnow();
    }
  }, [isDark]);

  const generateSnow = () => {
    const count = 120;
    const flakes = [];

    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100, // horizontal %
        delay: Math.random() * 5,
        fallDuration: Math.random() * 10 + 10, // 10–20s
        driftDuration: Math.random() * 4 + 3, // 3–7s
      });
    }

    setSnow(flakes);
  };

  const generateClouds = () => {
    const count = 10;
    const newClouds = [];

    for (let i = 0; i < count; i++) {
      const width = Math.random() * 300 + 300;

      newClouds.push({
        id: i,
        width,
        height: width * 0.5,
        top: Math.random() * 70,
        speed: Math.random() * 40 + 40,
        offset: Math.random() * 10 - 5,
        progress: Math.random() * 80, // random mid-animation offset
      });
    }

    setClouds(newClouds);
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animmationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDelay: Math.random() * 15,
        animmationDuration: Math.random() * 4 + 2,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="">
      {/* ☁ LIGHT MODE: CLOUDS  bg-[linear-gradient(135deg,#9bb8ff_0%,#a1e3ff_100%)]*/}
      {!isDark && (
        <>
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-[var(--clouds-z)]  bg-gradient-to-b from-[#b4c4ce] via-[#8fb0c0] via-30% via-[#046a90] via-60% via-[#145070] to-[#0c3850]">
            {clouds.map((c) => (
              <div
                key={c.id}
                className="cloud"
                style={{
                  width: `${c.width}px`,
                  height: `${c.height}px`,
                  top: `${c.top}%`,

                  // always start OFF SCREEN
                  left: `-${c.width + 200}px`,

                  "--cloud-speed": `${c.speed}s`,
                  "--cloud-offset": `${c.offset}px`,

                  // random start point in the animation
                  animationDelay: `-${c.progress}s`,
                }}
              >
                <div></div>
                <div></div>
              </div>
            ))}
          </div>
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
            {snow.map((flake) => (
              <div
                key={flake.id}
                className="snowflake"
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  left: `${flake.x}%`,
                  top: `-10vh`,
                  "--fall-duration": `${flake.fallDuration}s`,
                  "--drift-duration": `${flake.driftDuration}s`,
                  "--delay": `${flake.delay}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* 🌌 DARK MODE: STARS + METEORS */}
      {isDark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-(--stars-z)">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle twinkle"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
                opacity: star.opacity,
                animation: `twinkle ${star.animmationDuration}s infinite alternate`,
              }}
            />
          ))}

          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                width: `${meteor.size * 50}px`,
                height: `${meteor.size * 3}px`,
                top: `${meteor.y}%`,
                left: `${meteor.x}%`,
                animationDelay: `${meteor.animationDelay}s`,
                animationDuration: `${meteor.animmationDuration}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
