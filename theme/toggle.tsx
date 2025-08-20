import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isDark ? 180 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <SunIcon className="w-5 h-5 text-brand-yellow" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <MoonIcon className="w-5 h-5 text-brand-teal" />
      </motion.div>
      
      {/* Invisible spacer to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <SunIcon className="w-5 h-5" />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;