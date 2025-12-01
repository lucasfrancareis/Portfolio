import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Estou disponível para oportunidades de estágio e projetos em tecnologia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Phone */}
          <div className="bg-dark p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-transparent hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Telefone / WhatsApp</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Disponível para chamadas
            </p>
            <button 
              onClick={() => handleCopy('(34) 98856-7326', 'phone')}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
            >
              {copied === 'phone' ? (
                <><Check className="w-4 h-4 text-green-400" /> Copiado</>
              ) : (
                <><span className="truncate">(34) 98856-7326</span> <Copy className="w-3 h-3 text-slate-400" /></>
              )}
            </button>
          </div>

          {/* Email */}
          <div className="bg-dark p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-transparent hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Contato profissional
            </p>
            <a 
              href="mailto:lucasgabrieldosreisfranca@gmail.com"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700 flex items-center justify-center gap-2"
              title="lucasgabrieldosreisfranca@gmail.com"
            >
              <span className="truncate max-w-[180px]">Enviar Email</span> <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-dark p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-transparent hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400 mb-6 text-sm flex-grow">
              Conecte-se comigo
            </p>
            <a 
              href="https://www.linkedin.com/in/lucasgabrielfranca"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2.5 rounded-lg bg-primary hover:bg-cyan-600 text-white font-medium text-sm transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              Ver Perfil <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};