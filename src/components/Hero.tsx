import React, { useEffect, useState } from 'react';
import { Cpu, Network, Sparkles, Binary, BrainCircuit } from 'lucide-react';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900" />
      
      {/* Neural network animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <div className="w-2 h-2 bg-cyan-400/20 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 flex flex-col items-center justify-center min-h-screen gap-16">
        <div className="animate-fade-in text-center max-w-2xl">
          <div className="overflow-hidden mb-8">
            <div className="flex items-center justify-center space-x-3 text-cyan-400 mb-6 animate-slide-up">
              <Cpu className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Making Magic with AI & Code</span>
            </div>
            <h1 className="text-white text-6xl font-bold mb-6">
              <span className="text-white">AI-Powered</span>
              <br />
              <span className="text-[#00A3FF]">Creator</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Hey there! 👋 I'm using AI superpowers to build amazing apps and websites at lightning speed. Think of me as your tech wizard who turns wild ideas into reality!
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                See What I Do
                <BrainCircuit className="w-4 h-4 animate-pulse" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white rounded-lg font-semibold transition-all hover:-translate-y-1 border border-white/10"
            >
              <span className="group-hover:text-cyan-400 transition-colors">Check Out My Work</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Glowing orb behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          
          {/* Main image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img
              src="/images/rabih-rizk.jpg"
              alt="Rabih Rizk"
              className="w-full h-full object-cover brightness-50"
            />
          </div>

          {/* Tech circles */}
          {[
            { icon: BrainCircuit, position: '-left-6 top-1/4', delay: '0s' },
            { icon: Network, position: '-right-6 top-1/2', delay: '0.2s' },
            { icon: Binary, position: 'left-1/4 -bottom-6', delay: '0.4s' }
          ].map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.position} animate-fade-in`}
              style={{ animationDelay: item.delay }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50" />
                <div className="relative bg-slate-900 p-3 rounded-full border border-cyan-500/50">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { 
              icon: BrainCircuit,
              title: 'AI Superpowers',
              desc: 'Using smart AI tools to build better apps faster than ever before'
            },
            { 
              icon: Network,
              title: 'Smart Systems',
              desc: 'Creating websites that grow with your business and adapt to your needs'
            },
            { 
              icon: Binary,
              title: 'Speed Champion',
              desc: 'Getting your ideas online in days, not months, without cutting corners'
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:-translate-y-2 animate-slide-up border border-white/10"
              style={{ animationDelay: `${0.9 + i * 0.2}s` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <item.icon className="w-10 h-10 text-cyan-400 mb-4 transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}