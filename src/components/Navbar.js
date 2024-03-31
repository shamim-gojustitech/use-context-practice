// components/Navbar.js
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
const Navbar = () => {
  const { darkMode } = useTheme();

  return (
    <nav className={`${darkMode ? "bg-stone-900" : "bg-blue-200"} py-4`}>
      <div className="flex mx-auto container justify-between items-center ">
        <div className='flex gap-4'>
          <Link
            href="/"
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-lg font-bold`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`ml-4 text-${
              darkMode ? "white" : "black"
            } text-lg font-bold`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`ml-4 text-${
              darkMode ? "white" : "black"
            } text-lg font-bold`}
          >
            Contact
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
