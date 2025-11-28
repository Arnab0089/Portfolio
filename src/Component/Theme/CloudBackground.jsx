import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export default function CloudBackground() {
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-auto overflow-hidden relative grid place-items-center"
    >
      {isDark ? (
        <>
          <motion.div className="fixed bottom-0 inset-0 z-0" />
          <div
            className="fixed inset-0 z-10"
            style={{
              backgroundImage: `url(/night.png)`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        </>
      ) : (
        <>
          <motion.div className="fixed bottom-0 inset-0 z-0" />
          <div
            className="fixed inset-0 z-10"
            style={{
              backgroundImage: `url(/morning.png)`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        </>
      )}
    </div>
  );
}
