import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-50 shadow-neonGreen font-sans">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-gray-700 text-2xl font-bold tracking-wide transition-all hover:text-primaryGreen"
        >
          🍃 GreenWeb
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-gray-700 bg-white px-4 py-2 rounded transition duration-300 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 bg-white px-4 py-2 rounded transition duration-300 hover:bg-gray-100"
          >
            About
          </Link>
          <a
            href="https://github.com/janeeshgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 bg-white px-4 py-2 rounded transition duration-300 hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 bg-white py-4 shadow-neonGreen rounded-md">
          <Link
            to="/"
            className="text-gray-700 bg-white px-4 py-2 rounded transition hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 bg-white px-4 py-2 rounded transition hover:bg-gray-100"
          >
            About
          </Link>
          <a
            href="https://github.com/janeeshgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 bg-white px-4 py-2 rounded transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
