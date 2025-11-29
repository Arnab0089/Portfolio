// hooks/useScrollAnimation.js
import { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

export default function useScrollAnimation({
  initialX = -100,
  initialY = 0,
  initialOpacity = 0,

  finalX = 0,
  finalY = 0,
  finalOpacity = 1,

  duration = 0.4,
  delay = 0.1,
  ease = "easeInOut",

  threshold = 0.2,
} = {}) {
  const [ref, animate] = useAnimate();
  const isInView = useInView(ref, { amount: threshold });

  // Set initial styles immediately (before scroll)
  useEffect(() => {
    if (ref.current) {
      animate(
        ref.current,
        { opacity: initialOpacity, x: initialX, y: initialY },
        { duration: 0 }
      );
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      animate(
        ref.current,
        { opacity: finalOpacity, x: finalX, y: finalY },
        { delay, duration, ease }
      );
    } else {
      animate(
        ref.current,
        { opacity: initialOpacity, x: initialX, y: initialY },
        { duration: 0 }
      );
    }
  }, [isInView]);

  return ref;
}
