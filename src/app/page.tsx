"use client";
// pages/Home.js
import { useTheme } from "@/components/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center ${
        darkMode ? "text-white bg-slate-700" : "text-black bg-stone-50"
      }`}
    >
      <h1 className="text-4xl font-bold text-center">Home Page</h1>
    </div>
  );
};

export default Home;
