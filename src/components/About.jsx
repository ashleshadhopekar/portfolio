import React from 'react';
import { BookOpen, Code2, Download, Lightbulb, MapPin, Sparkles, UserCheck, Heart, Laptop } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = ({ onOpenResume }) => {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      desc: "Passionate about building responsive, pixel-perfect frontend interfaces using React.js and modern Tailwind CSS."
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      desc: "Enthusiastic about clean typography, harmonious color palettes, micro-interactions, and accessible layouts."
    },
    {
      icon: Laptop,
      title: "CSE Core Fundamentals",
      desc: "Strong focus on C programming, Data Structures, Algorithms, and software engineering principles."
    },
    {
      icon: Heart,
      title: "Leadership & Events",
      desc: "Event Coordinator for TechXplore fest at TGPCET Nagpur, managing tech competitions and teamwork."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
            Crafting Digital Experiences with <span className="gradient-text">Code & Passion</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Get to know my academic background, interests, and what drives my journey in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/80 dark:border-slate-800 space-y-4">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                  AD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit">
                    Ashlesha Dhopekar
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    CSE Student • Tulsiramji Gaikwad Patil College of Engineering, Nagpur
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans pt-2">
                {personalInfo.aboutDetailed.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Info pills */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span><strong>Degree:</strong> B.Tech CSE (2024-2028)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span><strong>Location:</strong> Nagpur, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-indigo-500" />
                  <span><strong>College:</strong> TGPCET Nagpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span><strong>Interest:</strong> Frontend & UI/UX</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Open for Internship Opportunities 🚀
                </span>
              </div>

            </div>
          </div>

          {/* Right Cards Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-outfit">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
