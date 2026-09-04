import React from 'react';
import { ShoppingBag, BookOpen, Layout, Laptop, Code2, Sparkles, Terminal, Cpu, Database, Globe } from 'lucide-react';

export const ProfileGraphic = () => {
  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] mx-auto flex items-center justify-center">
      {/* Background ambient decorative circles */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl animate-pulse-slow"></div>
      <div className="absolute -inset-4 rounded-full bg-gradient-to-bl from-cyan-500/10 via-indigo-500/20 to-violet-500/10 blur-xl"></div>

      {/* Outer spinning border ring */}
      <div className="absolute inset-2 rounded-3xl border-2 border-indigo-500/30 dark:border-indigo-400/20 transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
      
      {/* Main card container */}
      <div className="relative w-full h-full rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl shadow-indigo-500/10 overflow-hidden">
        
        {/* Top header badge */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
          </div>
          <div className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-indigo-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>CSE @ TGPCET</span>
          </div>
        </div>

        {/* Center Developer Vector / Graphic */}
        <div className="relative my-4 flex-1 flex flex-col items-center justify-center text-center">
          
          {/* Avatar Icon Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-1 shadow-xl group hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
              {/* Code matrix background detail */}
              <div className="absolute inset-0 opacity-20 text-[8px] font-mono text-indigo-400 overflow-hidden p-2 select-none">
                const dev = "Ashlesha";<br/>
                const role = "Web Dev";<br/>
                const location = "Nagpur";<br/>
                function build() &#123; return true; &#125;
              </div>
              <Laptop className="w-14 h-14 text-indigo-300 transform group-hover:scale-110 transition-transform duration-300 z-10" />
            </div>
            
            {/* Online status indicator */}
            <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 shadow-md"></span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white font-outfit">
            Ashlesha Dhopekar
          </h3>
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
            Computer Science Engineering Student
          </p>

          {/* Floating Badges */}
          <div className="absolute -left-2 top-8 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-200 animate-float">
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>React.js</span>
          </div>

          <div className="absolute -right-2 bottom-6 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-[11px] font-medium text-slate-700 dark:text-slate-200 animate-float" style={{ animationDelay: '2s' }}>
            <Terminal className="w-3.5 h-3.5 text-purple-500" />
            <span>C & Python</span>
          </div>

        </div>

        {/* Bottom stats pill */}
        <div className="z-10 grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-center">
          <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <div className="text-xs font-bold text-slate-900 dark:text-white">1st Year</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">B.Tech CSE</div>
          </div>
          <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <div className="text-xs font-bold text-slate-900 dark:text-white">Nagpur</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Location</div>
          </div>
          <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">4+ Projects</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Built</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const ProjectGraphic = ({ type }) => {
  const graphics = {
    ecommerce: {
      bg: "from-blue-600 via-indigo-600 to-purple-600",
      icon: ShoppingBag,
      title: "TECH HUB STORE",
      sub: "E-Commerce Gadget Store",
      accent: "bg-blue-400",
      badge: "React + Cart State"
    },
    portfolio: {
      bg: "from-violet-600 via-purple-600 to-pink-600",
      icon: Laptop,
      title: "DEVELOPER PORTFOLIO",
      sub: "Modern Responsive UI",
      accent: "bg-pink-400",
      badge: "React + Tailwind"
    },
    bookstore: {
      bg: "from-amber-600 via-orange-600 to-red-600",
      icon: BookOpen,
      title: "BOOKVERSE LIBRARY",
      sub: "Digital Book Catalog",
      accent: "bg-amber-400",
      badge: "Interactive Filter"
    },
    landing: {
      bg: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: Layout,
      title: "SAAS PRODUCT LANDING",
      sub: "High Conversion UI",
      accent: "bg-teal-400",
      badge: "Clean Micro-Animations"
    }
  };

  const item = graphics[type] || graphics.portfolio;
  const IconComponent = item.icon;

  return (
    <div className={`relative w-full h-48 sm:h-52 rounded-t-2xl bg-gradient-to-tr ${item.bg} p-4 overflow-hidden flex flex-col justify-between group`}>
      {/* Decorative glass shapes */}
      <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl group-hover:scale-125 transition-transform duration-500"></div>
      <div className="absolute top-2 left-10 w-20 h-20 rounded-full bg-black/10 blur-lg"></div>

      {/* Top Browser Bar mockup */}
      <div className="flex items-center justify-between z-10 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90"></span>
        </div>
        <span className="text-[10px] font-mono text-white/80 tracking-wider font-medium truncate max-w-[150px]">
          https://ashlesha.dev/{type}
        </span>
        <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white/20 text-white uppercase tracking-wider">
          Live Preview
        </span>
      </div>

      {/* Center illustration content */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center transform group-hover:scale-105 transition-transform duration-300">
        <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg mb-2">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-base font-extrabold text-white tracking-wide drop-shadow-sm font-outfit">
          {item.title}
        </h4>
        <p className="text-xs text-white/80 font-medium mt-0.5">
          {item.sub}
        </p>
      </div>

      {/* Bottom tag */}
      <div className="z-10 flex items-center justify-between text-[11px] text-white/90">
        <span className="px-2.5 py-1 rounded-md bg-black/30 backdrop-blur-sm border border-white/10 font-mono text-[10px]">
          {item.badge}
        </span>
        <span className="flex items-center gap-1 font-semibold text-white group-hover:translate-x-1 transition-transform">
          View Project &rarr;
        </span>
      </div>
    </div>
  );
};
