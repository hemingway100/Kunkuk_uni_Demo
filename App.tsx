
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import AcademicCalendar from './components/AcademicCalendar';
import NoticeBoard from './components/NoticeBoard';
import DailyNews from './components/DailyNews';
import PetitionSection from './components/PetitionSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Overlapping Quick Access Section */}
        <div className="relative z-20 -mt-12 px-4">
          <QuickAccess />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Calendar and Notices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <AcademicCalendar />
            </div>
            <div className="lg:col-span-8">
              <NoticeBoard />
            </div>
          </div>

          {/* Daily News Section */}
          <DailyNews />

          {/* Petitions Section */}
          <PetitionSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
