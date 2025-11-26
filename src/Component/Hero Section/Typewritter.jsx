import React, { useEffect, useState } from "react";

export default function Typewriter({
  phrases = [
    "I design clean, modern, and user-friendly websites.",
    "I turn ideas into pixel-perfect digital products.",
    "I build fast and responsive interfaces with React & Tailwind.",
    "I create smooth user experiences with thoughtful UI/UX.",
  ],
  typeSpeed = 80,
  deleteSpeed = 60,
  pauseBetween = 1200,
}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setDeleting(true), pauseBetween);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }
  }, [
    charIndex,
    deleting,
    phraseIndex,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseBetween,
  ]);

  return <div className="">{text}</div>;
}
