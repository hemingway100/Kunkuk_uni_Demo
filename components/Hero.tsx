
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 dark:from-zinc-950 dark:via-primary-950 dark:to-zinc-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 space-y-4 px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
          Student Council 37th
        </div>
        
        <div className="space-y-0 sm:space-y-4">
          <p className="calligraphy text-2xl sm:text-4xl md:text-5xl text-white/90 transform -rotate-1">
            함께 이루는 우리의 건국
          </p>
          <h1 className="calligraphy text-8xl sm:text-[12rem] md:text-[16rem] leading-none text-white drop-shadow-2xl select-none">
            이룸
          </h1>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/40"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/40"></div>
        </div>

        <div className="space-y-4">
          <div className="text-white text-base sm:text-xl font-medium tracking-tight break-keep flex flex-col sm:block">
            <span className="opacity-90">건국대학교 글로컬캠퍼스</span>
            <span className="sm:inline-block sm:ml-2">
              제37대 <span className="font-bold text-primary-300">이룸</span> 총학생회
            </span>
          </div>
          
          <p className="text-white/70 text-[13px] sm:text-base font-light leading-relaxed max-w-lg mx-auto break-keep px-4">
            학우 여러분의 목소리에 귀 기울이며, 함께 성장하는 캠퍼스를 만들어갑니다.<br className="hidden sm:block"/>
            여러분의 소중한 대학 생활이 빛날 수 있도록 이룸이 늘 곁에 있겠습니다.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce cursor-pointer">
        <span className="material-icons-outlined">keyboard_arrow_down</span>
      </div>
    </div>
  );
};

export default Hero;
