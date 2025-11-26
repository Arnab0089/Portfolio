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
      const handleresizer=()=>{
        generateStars();
      }
      window.addEventListener("resize",handleresizer);
      return ()=> window.removeEventListener("resize",handleresizer);
    } else {
      generateClouds();
    }
  }, [isDark]);

 const generateClouds = () => {
  const count = 10;
  const newClouds = [];

  for (let i = 0; i < count; i++) {
    const width = Math.random() * 250 + 250;  // 250–500px
    const height = width * 0.5;               // proportional for natural look

    newClouds.push({
      id: i,
      width,
      height,
      top: Math.random() * 70,               // clouds lower for realism
      speed: Math.random() * 60 + 50,        // slower movement
      offset: Math.random() * 10 - 5         // gentle vertical drift
    });
  }

  setClouds(newClouds);
};


  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
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
        {/* ☁ LIGHT MODE: CLOUDS */}
        {!isDark &&
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-(--clouds-z)">
          {clouds.map((c) => (
            <div
             key={c.id}
            className="cloud"
            style={{
            width: `${c.width}px`,
            height: `${c.height}px`,
            top: `${c.top}%`,
            left: `-${c.width}px`,
            "--cloud-speed": `${c.speed}s`,
            "--cloud-offset": `${c.offset}px`,
              }}
            ></div>
          ))}
        </div>
        }

        {/* 🌌 DARK MODE: STARS + METEORS */}
        {isDark && 
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
      }
    </div>
  );
}
