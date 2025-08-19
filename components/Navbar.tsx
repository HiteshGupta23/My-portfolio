import Link from 'next/link';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-0 border-b border-warmgray-300 dark:border-navy-700">
      <div className="text-lg font-serif text-yellowgradientstart dark:text-yellowgradientend font-bold cursor-pointer">
        <Link href="/">Hitesh Gupta</Link>
      </div>
      <ul className="hidden md:flex space-x-6 font-sans font-medium text-warmgray-700 dark:text-warmgray-300">
        <li><Link href="/about"><a className="hover:text-yellowgradientend transition">About</a></Link></li>
        <li><Link href="/experience"><a className="hover:text-yellowgradientend transition">Experience</a></Link></li>
        <li><Link href="/projects"><a className="hover:text-yellowgradientend transition">Projects</a></Link></li>
        <li><Link href="/contact"><a className="hover:text-yellowgradientend transition">Contact</a></Link></li>
      </ul>
      <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Navbar;