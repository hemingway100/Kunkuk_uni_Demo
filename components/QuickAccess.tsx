
import React from 'react';

const quickLinks = [
  { label: '학생회 소개', icon: 'groups', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' },
  { label: '학교 건물소개', icon: 'apartment', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { label: '학교지도', icon: 'map', color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
  { label: '이룸 신문고', icon: 'campaign', color: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
  { label: '학생회원 소개', icon: 'badge', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
  { label: 'Q&A', icon: 'quiz', color: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
];

const QuickAccess: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-black/10 p-6 sm:p-8 border border-slate-100 dark:border-zinc-800">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
        {quickLinks.map((link, idx) => (
          <a 
            key={idx} 
            href="#" 
            className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${link.color} flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-lg`}>
              <span className="material-icons-outlined text-3xl">{link.icon}</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-zinc-400 group-hover:text-primary-700 transition-colors">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
