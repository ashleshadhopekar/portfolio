import React, { useState } from 'react';
import { 
  Code2, Palette, FileCode2, Atom, Layers, Terminal, 
  Binary, GitBranch, Layout, Figma, Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Languages', 'Tools', 'Design'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Palette': return Palette;
      case 'FileCode2': return FileCode2;
      case 'Atom': return Atom;
      case 'Layers': return Layers;
      case 'Terminal': return Terminal;
      case 'Binary': return Binary;
      case 'GitBranch': return GitBranch;
      case 'Layout': return Layout;
      case 'Figma': return Figma;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 uppercase tracking-wider">
            My Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Technical competencies and design skills I utilize to build modern web solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${skill.color} p-2.5 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-extrabold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                      {skill.level}% Proficiency
                    </span>
                  </div>

                  {/* Skill Title & Category */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    {skill.category}
                  </span>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
