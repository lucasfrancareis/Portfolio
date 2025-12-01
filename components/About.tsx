import React from 'react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Tecnologia, Inovação e Construção de Futuro.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Tenho <strong>19 anos</strong> e sou estudante do curso de <strong>Sistemas de Informação</strong> na Universidade Federal de Uberlândia (UFU). Sou apaixonado por resolver problemas complexos através da tecnologia.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Minha jornada acadêmica e profissional é guiada pela curiosidade e pela ambição de dominar as ferramentas que moldam o futuro. Atualmente, dedico meus estudos ao ecossistema <strong>Python</strong> para desenvolvimento back-end e ciência de dados, à <strong>Inteligência Artificial</strong> e à infraestrutura em <strong>Nuvem (AWS)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-dark p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <User className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-sm text-slate-500 mb-1">Nome / Idade</h4>
              <p className="text-white font-semibold">Lucas França, 19</p>
            </div>

            <div className="bg-dark p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-sm text-slate-500 mb-1">Localização</h4>
              <p className="text-white font-semibold">Uberlândia, MG</p>
            </div>

            <div className="bg-dark p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-sm text-slate-500 mb-1">Universidade</h4>
              <p className="text-white font-semibold">UFU - Sistemas de Info.</p>
            </div>

            <div className="bg-dark p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors">
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-sm text-slate-500 mb-1">Foco Principal</h4>
              <p className="text-white font-semibold">Python, IA & AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};