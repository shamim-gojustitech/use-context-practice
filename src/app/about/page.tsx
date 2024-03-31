"use client";
// pages/About.js
import { useTheme } from "@/components/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center ${
        darkMode ? "text-white bg-slate-700" : "text-black bg-stone-50"
      }`}
    >
      <h1 className="text-4xl font-bold text-center ">About Page</h1>
    </div>
  );
};

export default About;
