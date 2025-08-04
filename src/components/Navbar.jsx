import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const navLinks = (
    <>
      <Link to="hero" smooth duration={500} onClick={() => setIsOpen(false)} className="block py-2 hover:text-accent cursor-pointer">Home</Link>
      <Link to="about" smooth duration={500} onClick={() => setIsOpen(false)} className="block py-2 hover:text-accent cursor-pointer">About</Link>
      <Link to="projects" smooth duration={500} onClick={() => setIsOpen(false)} className="block py-2 hover:text-accent cursor-pointer">Projects</Link>
      <Link to="resume" smooth duration={500} onClick={() => setIsOpen(false)} className="block py-2 hover:text-accent cursor-pointer">Resume</Link>
      <Link to="contact" smooth duration={500} onClick={() => setIsOpen(false)} className="block py-2 hover:text-accent cursor-pointer">Contact</Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 z-50 shadow-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-black dark:text-white">
        <h1 className="text-xl font-bold text-primary">Connor Murray</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm">{navLinks}</div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="hover:text-accent transition">
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 text-sm">
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
