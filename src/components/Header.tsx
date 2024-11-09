import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00E6FF] blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00E6FF] flex items-center justify-center border border-[#00A3FF]/20">
                <span className="font-['Orbitron'] font-bold text-white text-xl">R</span>
                
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-['Orbitron'] font-bold text-xl tracking-tight group-hover:text-[#00A3FF] transition-colors">
                Rabih Rizk
              </span>
              <span className="text-[#00A3FF] font-['Orbitron'] text-xs tracking-wider">
                AI-POWERED CREATOR
              </span>
            </div>
          </Link>
          <div className="flex space-x-8 font-['Orbitron']">
            <Link to="/about" className="text-gray-300 hover:text-[#00A3FF] transition-colors">
              About
            </Link>
            <Link to="/tools" className="text-gray-300 hover:text-[#00A3FF] transition-colors">
              Tools
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#00A3FF] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 