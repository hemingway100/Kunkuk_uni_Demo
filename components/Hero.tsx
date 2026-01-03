
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[650px] w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 dark:from-zinc-950 dark:via-primary-950 dark:to-zinc-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary-400 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-sm">
          Student Council 37th
        </div>
        
        {/* Main Title Section */}
        <div className="space-y-2 sm:space-y-4">
          <p className="calligraphy text-2xl sm:text-4xl md:text-5xl text-white/90 transform -rotate-1 tracking-wide">
            함께 이루는 우리의 건국
          </p>
          <h1 className="calligraphy text-[7rem] sm:text-[12rem] md:text-[15rem] leading-[0.8] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] select-none">
            이룸
          </h1>
        </div>

        {/* Decorative Divider Line */}
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-transparent to-white/30"></div>
          <div className="h-2 w-2 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
          <div className="h-[1px] flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-transparent to-white/30"></div>
        </div>

        {/* Info & Description */}
        <div className="space-y-6">
          <div className="text-white space-y-1">
            <p className="text-sm sm:text-lg opacity-80 tracking-tight font-medium">건국대학교 글로컬캠퍼스</p>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight">제37대 이룸 총학생회</h2>
          </div>
          
          <div className="space-y-2 text-white/70 text-[14px] sm:text-base font-light leading-relaxed max-w-2xl mx-auto break-keep">
            <p className="block">학우 여러분의 목소리에 귀 기울이며, 함께 성장하는 캠퍼스를 만들어갑니다.</p>
            <p className="block">여러분의 소중한 대학 생활이 빛날 수 있도록 이룸이 늘 곁에 있겠습니다.</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce cursor-pointer">
        <span className="material-icons-outlined">keyboard_arrow_down</span>
      </div>
    </div>
  );
};

export default Hero;
