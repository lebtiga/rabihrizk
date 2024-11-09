import React from 'react';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 bg-slate-900/50 backdrop-blur-sm" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Hey there! 👋
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Remember when people said AI couldn't be creative? Well, I'm here to prove them wrong! 
              I've found an amazing way to team up with AI to build incredible things faster than ever before.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Think of it like having a super-smart assistant that helps me create awesome websites and apps at 
              lightning speed. But don't worry - there's still a human (that's me & my team!) making sure everything 
              looks perfect and works just right.
            </p>
            <div className="space-y-2">
              <div className="font-bold text-6xl text-cyan-400 hover:text-cyan-300 transition-colors font-['Dancing_Script']">
                Rabih Rizk
              </div>
              <p className="text-sm text-slate-400">Your AI-Powered Developer</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/rabih-rizk.jpg"
                alt="Rabih Rizk"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform">
              <p className="text-lg font-semibold">Tech Innovator & AI Expert</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Users, stat: '500+', label: 'Happy Clients' },
            { icon: Lightbulb, stat: '100+', label: 'Projects Completed' },
            { icon: Lightbulb, stat: '24', label: 'AI Tools Built' },
            { icon: TrendingUp, stat: '300%', label: 'Faster Development' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group text-center p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 transform group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.stat}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;