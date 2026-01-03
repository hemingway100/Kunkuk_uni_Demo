
import React from 'react';
import { Petition } from '../types';

const petitions: Petition[] = [
  {
    rank: 1,
    title: '도서관 24시간 개방 기간 연장 요청',
    date: '2024.05.10',
    agreementCount: 1245,
    status: '답변대기'
  },
  {
    rank: 2,
    title: '학생 식당 메뉴 다양화 및 품질 개선 제안',
    date: '2024.05.12',
    agreementCount: 890,
    status: '진행중'
  },
  {
    rank: 3,
    title: '교내 순환버스 배차 간격 조정 건의',
    date: '2024.05.08',
    agreementCount: 543,
    status: '진행중'
  }
];

const PetitionSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-zinc-800 shadow-sm relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 dark:bg-primary-900/5 rounded-bl-full -mr-20 -mt-20 -z-0"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="material-icons-outlined text-primary-600">campaign</span>
              이룸 신문고 HOT 청원
            </h2>
            <p className="text-sm text-slate-500 mt-1">학생들의 의견이 학교를 변화시킵니다. 가장 많은 공감을 받은 청원입니다.</p>
          </div>
          <button className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 text-white rounded-xl font-bold text-sm shadow-xl shadow-primary-700/20 hover:bg-primary-800 transition-all active:scale-95">
            청원하러 가기
            <span className="material-icons-outlined text-sm ml-2">arrow_forward</span>
          </button>
        </div>

        <div className="space-y-4">
          {petitions.map((p) => (
            <div 
              key={p.rank} 
              className="group bg-slate-50/50 dark:bg-zinc-800/50 rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-transparent hover:border-primary-100 dark:hover:border-primary-900/30 hover:bg-primary-50/30 dark:hover:bg-primary-900/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className={`
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm
                  ${p.rank === 1 ? 'bg-red-100 text-red-600 dark:bg-red-900/30' : ''}
                  ${p.rank === 2 ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' : ''}
                  ${p.rank === 3 ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30' : ''}
                `}>
                  {p.rank}위
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-zinc-100 group-hover:text-primary-700 transition-colors mb-1">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                    <span>{p.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-700"></span>
                    <span className="text-primary-600 font-bold">{p.agreementCount.toLocaleString()}명 동의</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <span className={`
                  px-4 py-1.5 rounded-full text-xs font-bold
                  ${p.status === '답변대기' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-slate-200 text-slate-600 dark:bg-zinc-700 dark:text-zinc-400'}
                `}>
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetitionSection;
