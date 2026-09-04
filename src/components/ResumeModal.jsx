import React from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Code, Award, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, educationData, skillsData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `RESUME - ${personalInfo.name.toUpperCase()}\n` +
      `Role: ${personalInfo.role}\n` +
      `Email: ${personalInfo.email} | Location: ${personalInfo.location}\n` +
      `College: ${personalInfo.college}\n` +
      `Degree: ${personalInfo.degree} (${personalInfo.year})\n\n` +
      `SUMMARY:\n${personalInfo.bio}\n\n` +
      `SKILLS:\n` + skillsData.map(s => `- ${s.name} (${s.category})`).join("\n") + "\n\n" +
      `EDUCATION:\n` + educationData.map(e => `- ${e.degree} | ${e.institution} (${e.period})`).join("\n")
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Ashlesha_Dhopekar_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white font-outfit">
              Resume Preview - Ashlesha Dhopekar
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300 font-sans">
          
          {/* Top Header Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold font-outfit tracking-wide">{personalInfo.name}</h2>
                <p className="text-indigo-300 font-medium text-sm mt-0.5">{personalInfo.role}</p>
              </div>
              <div className="text-xs text-indigo-200 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-outfit pb-2 border-b border-indigo-500/30 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>EDUCATION</span>
            </h4>
            <div className="mt-3 space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-900 dark:text-white text-sm">
                  <span>{personalInfo.degree}</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400">2024 - Present (1st Year)</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{personalInfo.college}</div>
                <p className="text-xs mt-2 text-slate-600 dark:text-slate-300">
                  Focus: Data Structures in C, Web Development, Algorithm Design & Mathematics.
                </p>
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-outfit pb-2 border-b border-indigo-500/30 flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>TECHNICAL SKILLS</span>
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillsData.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-outfit pb-2 border-b border-indigo-500/30 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>FEATURED PROJECTS</span>
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Electronic E-Commerce Website:</strong> Built gadget store web app using React.js with shopping cart, filter options, and dark mode UI.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Personal Portfolio Website:</strong> Modern responsive developer site showcasing skills, leadership, and timeline.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Bookstore Website:</strong> Digital library application with genre filtering and reading list features.
                </div>
              </li>
            </ul>
          </div>

          {/* Leadership & Event Coordination */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-outfit pb-2 border-b border-indigo-500/30">
              LEADERSHIP & ACTIVITIES
            </h4>
            <div className="mt-3 text-xs space-y-1 text-slate-600 dark:text-slate-300">
              <p>• <strong>Event Coordinator - TechXplore:</strong> Organized coding challenges & web competitions at TGPCET Nagpur.</p>
              <p>• <strong>Hackathon Competitor:</strong> Participated in rapid prototyping 24h coding competitions.</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-between items-center text-xs text-slate-500">
          <span>Ashlesha Dhopekar • CSE Student Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
