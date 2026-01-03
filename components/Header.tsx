
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
      ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm' 
      : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center text-white shadow-lg shrink-0">
              <span className="material-icons-outlined text-sm">school</span>
            </div>
            <div className={`flex flex-col leading-tight transition-colors ${
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              <span className="font-bold text-xs sm:text-sm tracking-tight">Konkuk University</span>
              <span className="font-medium text-[9px] sm:text-[10px] opacity-80 uppercase tracking-widest">Global Campus</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 ${
                scrolled ? 'text-slate-600 dark:text-zinc-400' : 'text-white/80'
              }`}
            >
              <span className="material-icons-outlined">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
              scrolled 
              ? 'border-primary-700 text-primary-700 hover:bg-primary-50 dark:border-primary-500 dark:text-primary-500' 
              : 'border-white/40 text-white hover:bg-white/10'
            }`}>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
