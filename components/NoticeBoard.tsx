
import React from 'react';
import { Notice } from '../types';

const notices: Notice[] = [
  {
    id: 1,
    category: '학사',
    title: '2024학년도 제1학기 학부 및 일반대학원 강의평가 안내',
    date: '2024.05.10',
    excerpt: '2024학년도 제1학기 학부 및 일반대학원 교과목에 대한 강의평가를 아래와 같이 진행합니다. 기간 내에 반드시 참여해주시기 바랍니다.'
  },
  {
    id: 2,
    category: '채용',
    title: '삼성전자 연구직 신입사원 모집 공고',
    date: '2024.05.08',
    excerpt: '글로벌 인재를 찾습니다. 삼성전자 DS부문에서 창의적이고 도전적인 신입사원을 모집합니다.'
  },
  {
    id: 3,
    category: '장학',
    title: '2024학년도 1학기 이룸 장학생 선발 안내',
    date: '2024.05.01',
    excerpt: '학생자치활동 참여 우수자를 대상으로 이룸 장학생을 선발하오니 관심있는 학생들의 많은 지원 바랍니다.'
  }
];

const NoticeBoard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-100 dark:border-zinc-800 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="material-icons-outlined text-primary-600">notifications_active</span>
          중요 공지사항
        </h2>
        <a href="#" className="text-sm font-medium text-primary-700 hover:underline">더보기 +</a>
      </div>

      <div className="flex-grow space-y-4">
        {notices.map((notice) => (
          <a 
            key={notice.id} 
            href="#" 
            className="group block p-4 rounded-2xl border border-slate-50 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className={`
                  px-2.5 py-0.5 rounded-md text-[10px] font-bold
                  ${notice.category === '학사' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' : ''}
                  ${notice.category === '채용' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                  ${notice.category === '장학' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                `}>
                  {notice.category}
                </span>
                <h3 className="font-bold text-slate-800 dark:text-zinc-100 group-hover:text-primary-700 transition-colors line-clamp-1">
                  {notice.title}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">{notice.date}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-500 line-clamp-1 leading-relaxed">
              {notice.excerpt}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
