import React from 'react';
import { Award, GraduationCap, Trophy, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'GraduationCap': return GraduationCap;
      case 'Trophy': return Trophy;
      case 'Sparkles': return Sparkles;
      default: return Award;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 uppercase tracking-wider">
            Honors & Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Recognitions, hackathons, certifications, and technical workshops completed.
          </p>
        </div>

        {/* Grid of achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-amber-500/50 dark:hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-outfit group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {item.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-emerald-500 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
