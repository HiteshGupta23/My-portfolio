import React from 'react';

interface DarkModeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowgradientstart dark:focus:ring-yellowgradientend transition"
    >
      {theme === 'dark' ? (
        <svg className="w-6 h-6 text-yellowgradientend" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-navy-800" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 3v1M12 20v1M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M3 12h1M20 12h1M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;