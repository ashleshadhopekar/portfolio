import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Award, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfileGraphic } from './VisualGraphics';

export const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Glow ambient background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>{personalInfo.greeting}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight leading-[1.15]">
              Computer Science Engineering Student &{' '}
              <span className="gradient-text">Aspiring Web Developer</span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              I am a 1st-year CSE student at <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.college}</strong> passionate about building responsive, modern web applications, beautiful UI/UX designs, and clean frontend experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 font-bold text-sm border border-indigo-200 dark:border-indigo-800 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Resume</span>
              </button>

            </div>

            {/* Quick Location & Social Quick Links */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center">
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white font-outfit">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Column (Developer Illustration Avatar) */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};
