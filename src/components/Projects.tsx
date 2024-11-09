import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Rule Your Day',
    description: 'AI-powered daily planner and productivity tool',
    url: 'https://ruleyour.day/',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'SaaSperity',
    description: 'Complete SaaS business management platform',
    url: 'https://saasperity.com/',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'MapPack Toolbox',
    description: 'Local SEO optimization suite',
    url: 'https://mappacktoolbox.com/',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'BlogStorm AI',
    description: 'AI-powered content generation platform',
    url: 'https://blogstorm.ai/',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Concrete Calculator Pro',
    description: 'Professional concrete estimation tools',
    url: 'https://concretecalculator.pro/',
    gradient: 'from-slate-500 to-zinc-500'
  },
  {
    title: 'Email Sneak',
    description: 'Email marketing and automation platform',
    url: 'https://emailsneak.com/',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    title: 'Cast My Blog',
    description: 'Blog to podcast conversion service',
    url: 'https://castmyblog.com/',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Free Local SEO Tools',
    description: 'Suite of free local SEO optimization tools',
    url: 'https://freelocalseotools.com/',
    gradient: 'from-teal-500 to-cyan-500'
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My SaaS Projects
          </h2>
          <p className="text-lg text-gray-400">
            A collection of AI-powered tools and services I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 