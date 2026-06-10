import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#030905] border-t border-white/[0.03] py-16 md:py-24" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16">
          
          {/* Logo & Manifesto Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo size={40} className="mb-6" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Projetamos sistemas minimalistas e robustos para descomplicar as operações de negócios. Focados em velocidade, fidedignidade e ergonomia humana. Realizado com precisão absoluta.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-6">
              Plataformas
            </span>
            <ul className="space-y-4 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => handleScrollTo('product-card-capitae')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Capitae
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('product-card-capitae-business')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Capitae Business
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('product-card-petzy')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Utilitários Petzy
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Column */}
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-6">
              Empresa
            </span>
            <ul className="space-y-4 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => handleScrollTo('about')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Nossa Tese
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('values')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Valores Fundamentais
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Trabalhe Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Standards Column */}
          <div className="md:col-span-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block mb-6">
              Diretrizes
            </span>
            <ul className="space-y-4 text-xs font-medium text-slate-400">
              <li>
                <span className="text-slate-500 block hover:text-white cursor-help">
                  Política de Privacidade
                </span>
              </li>
              <li>
                <span className="text-slate-500 block hover:text-white cursor-help">
                  Termos de Uso
                </span>
              </li>
              <li>
                <span className="text-slate-500 block hover:text-white cursor-help">
                  Status do Sistema
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator / Legal Copyright */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-mono">
            &copy; {currentYear} Capy Labs Inc. Todos os direitos reservados.
          </div>
          <div className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-widest">
            Desenvolvido com disciplina absoluta em SF &amp; SP
          </div>
        </div>

      </div>
    </footer>
  );
};
