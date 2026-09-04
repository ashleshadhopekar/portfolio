import React from 'react';
import { Calendar, MapPin, Users, Award, CheckCircle2, Sparkles, Trophy, Rocket } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider">
            Leadership & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
            Experience & <span className="gradient-text">Co-Curriculars</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Event coordination, hackathons, college leadership roles, and collaborative projects.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.role}
                </h3>
                
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {item.organization}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Bullet Points */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom details */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{item.location}</span>
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {item.type}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
