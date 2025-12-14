import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Cloud, Code, Award, CheckCircle2, Clock, Zap } from 'lucide-react';
import { Certificate, Skill } from '../types';

const skills: Skill[] = [
  { name: 'Python', level: 'Aprofundado', category: 'Tech', icon: <Code className="w-6 h-6" /> },
  { name: 'Inteligência Artificial', level: 'Intermediário', category: 'Tech', icon: <Brain className="w-6 h-6" /> },
  { name: 'AWS Cloud', level: 'Iniciante', category: 'Cloud', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Inglês', level: 'Intermediário', category: 'Idiomas', icon: <Zap className="w-6 h-6" /> },
  { name: 'Português', level: 'Aprofundado', category: 'Idiomas', icon: <Zap className="w-6 h-6" /> },
  { name: 'Ruby on Rails', level: 'Iniciante', category: 'Tech', icon: <Zap className="w-6 h-6" /> },
  { name: 'Node.js', level: 'Iniciante', category: 'Tech', icon: <Zap className="w-6 h-6" /> }
];

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Python Development Professional',
    issuer: 'Certificação Técnica',
    date: 'Concluído',
    status: 'Concluído',
    imageUrl: 'CertificadoPython.jpg',
  },
  {
    id: 2,
    title: 'Fundamentals of AI',
    issuer: 'Tech Academy',
    date: 'Concluído',
    status: 'Concluído',
    imageUrl: 'CertificadoIA.png',
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Concluído',
    status: 'Concluído',
    imageUrl: 'AWS Cloud Practitioner Essentials.jpg.png',
  },
];

export const Skills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === certificates.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Skills Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Habilidades & Competências</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400">Minha stack tecnológica principal focada em inovação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20 group hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${skill.level === 'Aprofundado' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                    skill.level === 'Intermediário' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                      'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
                    }`}>
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Carousel Section */}
        <div id="certificates" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Galeria de Certificações</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400">Minha jornada de aprendizado contínuo.</p>
          </div>

          <div className="max-w-4xl mx-auto relative group">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 aspect-[3/2] bg-secondary shadow-2xl">
              {/* Image */}
              <img
                src={certificates[currentIndex].imageUrl}
                alt={certificates[currentIndex].title}
                className="w-full h-full object-cover opacity-100 transition-all duration-700 hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold tracking-wider text-xs uppercase">{certificates[currentIndex].issuer}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{certificates[currentIndex].title}</h3>
                    <p className="text-slate-400 text-sm">Status: {certificates[currentIndex].date}</p>
                  </div>

                  <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-md self-start md:self-end ${certificates[currentIndex].status === 'Concluído'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                    }`}>
                    {certificates[currentIndex].status === 'Concluído' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    <span className="font-bold text-sm">{certificates[currentIndex].status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-primary backdrop-blur-sm transition-all cursor-pointer border border-white/10 hover:border-primary z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-primary backdrop-blur-sm transition-all cursor-pointer border border-white/10 hover:border-primary z-10"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {certificates.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-8 bg-primary' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  aria-label={`Ir para certificado ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};