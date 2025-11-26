import React, { use, useEffect, useState } from "react";
import { FaMeteor } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skill" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed  w-full z-40 transition-all duration-300  ${
        isScrolled ? "py-3 bg-[#799eff]" : "py-5 "
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold font-primary-2 text-primary-1 flex items-center "
        >
          <span className="relative z-10 ">
            <span className="text-glow text-foreground text-2xl px-2 ">
              Arnab
            </span>
            Portfolio
          </span>
        </a>

        {/* desktop */}
        {!isDark ? (
          <div
            className="hidden md:flex space-x-8 relative p-2
              bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
              before:content[''] before:absolute before:inset-0 before:rounded-2xl 
              before:border before:border-white/10 before:pointer-events-none"
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="mx-4 text-lg font-bold text-[#3C467B]   hover:border-b-2 hover:border-[#3C467B] dark:hover:border-black
              border-b-transparent border-b-2  hover:text-glow hover:text-foreground transition-colors duration-300 font-primary-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        ) : (
          <div
            className="hidden md:flex space-x-8 relative p-2
  bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
  before:content[''] before:absolute before:inset-0 before:rounded-2xl 
  before:border before:border-white/10 before:pointer-events-none font-primary-2"
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="mx-4 text-lg font-medium text-[#3C467B] dark:text-primary-1  hover:border-b-2 hover:border-[#3C467B] dark:hover:border-primary-foreground
              border-b-transparent border-b-2  hover:text-glow hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        {/* mobile */}
        <button className="z-60">
          {isMenuOpen ? (
            <IoCloseSharp
              className="md:hidden h-8 w-8 text-primary-1 hover:text-primary-foreground transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <FaMeteor
              className="md:hidden h-8 w-8 text-primary-1 hover:text-primary-foreground transition-colors duration-300"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </button>
        <div
          className={`fixed inset-0 bg-background1/90 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 md:hidden z-50 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto "
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="flex flex-col space-y-8 text-xl relative p-14
  bg-white/10 backdrop-blur-[2px] shadow-2xl rounded-2xl border border-white/10
  before:content[''] before:absolute before:inset-0 before:rounded-2xl 
  before:border before:border-white/10 before:pointer-events-none"
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="mx-4 text-lg font-medium text-primary-1  hover:border-b-2 hover:border-primary-foreground
              border-b-transparent border-b-2  hover:text-primary-foreground transition-colors duration-300 font-primary-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
