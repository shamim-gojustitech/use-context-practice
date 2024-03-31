// components/ThemeToggle.js
import { FaMoon, FaSun } from "react-icons/fa"; // Import FontAwesome icons
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className={`w-36 h-10 rounded-xl flex items-center justify-center ${
        darkMode ? "text-slate-900 bg-white" : "text-white bg-slate-900"
      }`}
      onClick={toggleTheme}
    >
      {/* Conditionally render sun or moon icon based on dark mode */}
      {darkMode ? <FaSun className="mr-1" /> : <FaMoon className="mr-1" />}
      {/* Display text indicating the current mode */}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
