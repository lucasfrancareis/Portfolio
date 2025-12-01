import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-lg">Lucas França</p>
            <p className="text-slate-500 text-sm mt-1">Estudante de Sistemas de Informação - UFU</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/lucasgabrielfranca" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:lucasgabrieldosreisfranca@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Lucas França. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};