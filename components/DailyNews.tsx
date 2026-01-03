
import React from 'react';
import { News } from '../types';

const newsItems: News[] = [
  {
    id: 1,
    category: 'Campus Life',
    date: '2024.05.15',
    title: '건국대학교 글로컬캠퍼스, 지역사회와 함께하는 봄 축제 개최 예정',
    description: '다가오는 5월 말, 학생들과 지역 주민들이 함께 즐길 수 있는 대규모 봄 축제가 열립니다. 다양한 공연과 부스가...',
    image: 'https://picsum.photos/seed/campus/600/400'
  },
  {
    id: 2,
    category: 'Academic',
    date: '2024.05.14',
    title: 'AI 융합대학 신설, 2025학년도부터 신입생 모집 시작',
    description: '미래 산업을 선도할 AI 전문 인재 양성을 위해 AI 융합대학이 신설됩니다. 커리큘럼과 모집 요강을 확인하세요.',
    image: 'https://picsum.photos/seed/academic/600/400'
  },
  {
    id: 3,
    category: 'Interview',
    date: '2024.05.12',
    title: '[인터뷰] "학생들의 목소리가 학교를 바꿉니다" - 총학생회장',
    description: '제37대 이룸 총학생회장이 말하는 학생 자치와 앞으로의 계획. 학생들과의 소통을 최우선으로...',
    image: 'https://picsum.photos/seed/interview/600/400'
  }
];

const DailyNews: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="material-icons-outlined text-primary-600">newspaper</span>
          데일리 뉴스
        </h2>
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-primary-700 flex items-center gap-1">
          전체보기 <span className="material-icons-outlined text-sm">chevron_right</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article 
            key={item.id} 
            className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-black/5 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-zinc-800">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  item.category === 'Campus Life' ? 'text-primary-600' :
                  item.category === 'Academic' ? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {item.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-zinc-700"></span>
                <span className="text-[10px] font-medium text-slate-400">{item.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-zinc-500 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default DailyNews;
