
import React from 'react';

const AcademicCalendar: React.FC = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const leadingDays = Array.from({ length: 3 }, (_, i) => 28 + i);
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="material-icons-outlined text-primary-600">calendar_month</span>
          학사 일정
        </h2>
        <span className="text-sm font-medium text-slate-500">May 2024</span>
      </div>

      <div className="grid grid-cols-7 text-center text-xs font-bold mb-2">
        <span className="text-red-500 py-2">S</span>
        <span className="text-slate-400 py-2">M</span>
        <span className="text-slate-400 py-2">T</span>
        <span className="text-slate-400 py-2">W</span>
        <span className="text-slate-400 py-2">T</span>
        <span className="text-slate-400 py-2">F</span>
        <span className="text-blue-500 py-2">S</span>
      </div>

      <div className="grid grid-cols-7 text-center gap-y-1">
        {leadingDays.map(d => (
          <span key={`prev-${d}`} className="text-slate-200 dark:text-zinc-800 py-2 text-sm">{d}</span>
        ))}
        {days.map(d => {
          const isToday = d === 14;
          const isEvent = d === 22;
          const isSunday = (d + 3) % 7 === 1;
          return (
            <div key={d} className="relative group cursor-pointer flex items-center justify-center aspect-square">
              <span className={`
                text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full transition-all
                ${isToday ? 'bg-primary-600 text-white shadow-lg' : 'hover:bg-slate-100 dark:hover:bg-zinc-800'}
                ${isSunday ? 'text-red-500' : 'text-slate-700 dark:text-zinc-300'}
              `}>
                {d}
              </span>
              {isEvent && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex items-start gap-4 p-3 rounded-xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100/50 dark:border-primary-800/50">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2"></div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-zinc-200">개교기념일 행사</p>
            <p className="text-[10px] text-slate-500">2024.05.14</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100/50 dark:border-blue-800/50">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-zinc-200">중간고사 성적 확인</p>
            <p className="text-[10px] text-slate-500">2024.05.22 - 2024.05.24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
