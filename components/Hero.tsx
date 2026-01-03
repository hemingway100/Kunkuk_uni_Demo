
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 dark:from-zinc-950 dark:via-primary-950 dark:to-zinc-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary-400 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 space-y-6 px-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
          Student Council 37th
        </div>
        
        <div className="space-y-2 sm:space-y-4">
          <p className="calligraphy text-2xl sm:text-4xl md:text-5xl text-white/90 transform -rotate-1">
            함께 이루는 우리의 건국
          </p>
          <h1 className="calligraphy text-[6.5rem] sm:text-[12rem] md:text-[16rem] leading-[0.85] text-white drop-shadow-2xl select-none">
            이룸
          </h1>
        </div>

        {/* 세련된 구분선 디자인 */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/40 to-white/60"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary-300 shadow-[0_0_12px_rgba(134,239,172,0.8)]"></div>
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-white/40 to-white/60"></div>
        </div>

        <div className="space-y-6">
          <div className="text-white text-lg sm:text-2xl font-medium tracking-tight break-keep flex flex-col items-center gap-1 sm:gap-2">
            <span className="opacity-90 text-sm sm:text-xl">건국대학교 글로컬캠퍼스</span>
            <span className="font-semibold">
              제37대 <span className="text-primary-300">이룸</span> 총학생회
            </span>
          </div>
          
          <p className="text-white/70 text-[13px] sm:text-base font-light leading-relaxed max-w-md mx-auto break-keep">
            학우 여러분의 목소리에 귀 기울이며,<br className="sm:hidden"/> 함께 성장하는 캠퍼스를 만들어갑니다.<br className="hidden sm:block"/>
            여러분의 소중한 대학 생활이 빛날 수 있도록<br className="sm:hidden"/> 이룸이 늘 곁에 있겠습니다.
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
