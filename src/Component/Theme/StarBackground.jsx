import React, { useEffect, useState } from 'react'

export default function StarBackground() {
    const [stars,setStars]= useState([]);
    const [meteors,setMeteors]= useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();
    },[])
    const generateStars = ()=>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);

        const newStars= [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 +1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animmationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    }
    const generateMeteors = ()=>{
        const numberOfMeteors = 4;
        const newMeteors= [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,  
                size: Math.random() * 3 +1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                animationDelay: Math.random() * 15,
                animmationDuration: Math.random() * 4 + 2,
            });
        }
        setMeteors(newMeteors);
    }

  return (
    <div className=''>
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0  '>
      {stars && stars.map(star => (
        <div
          key={star.id}
          className='star animate-pulse-subtle twinkle'
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.animmationDuration}s infinite alternate`
          }}
        />
      ))}

      {meteors && meteors.map(meteor => (
        <div
          key={meteor.id}
          className='meteor animate-meteor'
          style={{
            width: `${meteor.size*50}px`,
            height: `${meteor.size*3}px`,
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animmationDuration}s`,
          }}
        />
      ))}
</div>
    </div>
  )
}
