import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default: follow system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} | Hitesh Gupta` : 'Hitesh Gupta - Data Analyst'}</title>
        <meta name="description" content={description || 'Portfolio of Hitesh Gupta, aspiring data analyst'} />
        <meta property="og:title" content={title || 'Hitesh Gupta - Data Analyst'} />
        <meta property="og:description" content={description || 'Portfolio of Hitesh Gupta, aspiring data analyst'} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/Inter-VariableFont_slnt,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="min-h-screen bg-warmgray-100 dark:bg-navy-900 text-navy-900 dark:text-warmgray-100 transition-colors duration-500">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="text-center py-8 text-sm text-warmgray-500 dark:text-warmgray-300">
          &copy; {new Date().getFullYear()} Hitesh Gupta. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Layout;