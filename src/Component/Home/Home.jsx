import React from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import StarBackground from "../Theme/StarBackground";
import Navbar from "./Navbar";
import Hero from "../Hero Section/Hero";
import CloudBackground from "../Theme/CloudBackground";
import AboutMe from "../About/AboutMe";
import Skill from "../Skill/Skill";

export default function Home() {
  return (
    <div className="min-h-screen bg-background1 text-foreground overflow-x-hidden">
      <ThemeToggle />
      <CloudBackground />

      <StarBackground />
      <Navbar />

      <main>
        <Hero />
        <AboutMe />
        <Skill />
      </main>
    </div>
  );
}
