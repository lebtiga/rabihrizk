import React from 'react';
import { 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiStreamlit,
  SiReplit,
  SiStackblitz,
  SiNetlify,
  // Adding new imports
} from 'react-icons/si';
import { Terminal, Bot } from 'lucide-react'; // For Cursor and Claude icons

const tools = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    iconColor: 'text-yellow-400'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    iconColor: 'text-blue-400'
  },
  {
    name: 'React',
    icon: SiReact,
    iconColor: 'text-cyan-400'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    iconColor: 'text-white'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    iconColor: 'text-cyan-400'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    iconColor: 'text-green-500'
  },
  {
    name: 'Python',
    icon: SiPython,
    iconColor: 'text-yellow-300'
  },
  {
    name: 'OpenAI',
    icon: SiOpenai,
    iconColor: 'text-green-400'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    iconColor: 'text-green-500'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    iconColor: 'text-blue-400'
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    iconColor: 'text-orange-500'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    iconColor: 'text-blue-400'
  },
  {
    name: 'Streamlit',
    icon: SiStreamlit,
    iconColor: 'text-red-500'
  },
  {
    name: 'Claude AI',
    icon: Bot,
    iconColor: 'text-purple-400'
  },
  {
    name: 'Cursor',
    icon: Terminal,
    iconColor: 'text-green-400'
  },
  {
    name: 'Replit',
    icon: SiReplit,
    iconColor: 'text-orange-400'
  },
  {
    name: 'Stackblitz',
    icon: SiStackblitz,
    iconColor: 'text-blue-500'
  },
  {
    name: 'Netlify',
    icon: SiNetlify,
    iconColor: 'text-teal-400'
  }
];

export default function Tools() {
  return (
    <section className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-colors group"
            >
              <tool.icon className={`w-12 h-12 ${tool.iconColor} group-hover:scale-110 transition-transform`} />
              <span className="mt-3 text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}