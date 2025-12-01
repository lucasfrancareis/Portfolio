import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      {/* Code decoration */}
      <div className="absolute top-32 right-10 opacity-10 hidden lg:block">
        <Terminal className="w-24 h-24 text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 backdrop-blur-sm">
              <span className="text-primary text-sm font-medium tracking-wide">PORTFÓLIO & CURRÍCULO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Olá, eu sou <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">
                Lucas França
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Estudante de <strong className="text-slate-200">Sistemas de Informação</strong> na <span className="text-white font-semibold">UFU</span>.
              Desenvolvendo soluções inovadoras com foco em <span className="text-primary">Python</span>, <span className="text-primary">Inteligência Artificial</span> e <span className="text-primary">Cloud Computing</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-cyan-600 text-white font-semibold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2">
                Entre em contato <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#skills" className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2">
                Ver Certificações <Terminal className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-slate-700"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-slate-800/50 bg-slate-800">
                {/* 
                  Note: In a real deployment, replace this URL with the actual photo of Lucas França.
                  Using a professional placeholder for now.
                */}
                <img
                  src="perfil.jpg"
                  alt="Lucas França"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 -left-4 bg-secondary p-4 rounded-xl border border-slate-700 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Status Atual</p>
                    <p className="text-sm font-bold text-white">Estudante UFU</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};