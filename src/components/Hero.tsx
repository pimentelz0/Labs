import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const handleScrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#040c07]" id="hero">
      {/* Premium CSS Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />

      {/* Radial Gradient Glow Accent Behind Logo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Subtle Brand Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8 text-xs font-semibold tracking-wider uppercase text-emerald-400"
        >
          <Sparkles size={12} />
          <span>Plataformas operacionais de última geração</span>
        </motion.div>

        {/* Grand Centered Representation of the Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 p-6 bg-white/[0.01] border border-white/[0.04] rounded-2xl shadow-2xl backdrop-blur-sm"
        >
          <Logo size={72} showText={false} />
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl"
        >
          Criando ferramentas simples para <span className="text-emerald-400">empresas complexas</span>
        </motion.h1>

        {/* Professional, Clear Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Projetamos softwares robustos e minimalistas para otimizar a gestão financeira, automatizar operações corporativas e simplificar o cuidado pet. Criado com precisão, sem excessos e com total fidedignidade.
        </motion.p>

        {/* Modern Interactive Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <button
            onClick={handleScrollToProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#040c07] bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all duration-200 shadow-md hover:shadow-emerald-500/20 cursor-pointer"
          >
            Explorar produtos
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] rounded-md transition-all duration-200 cursor-pointer"
          >
            Solicitar soluções sob medida
          </button>
        </motion.div>

        {/* Minimalist Dashboard/Code Preview Wireframe (Flat, Premium Design, No cheesy 3D) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="w-full max-w-4xl border border-white/[0.06] bg-[#07130b] rounded-xl overflow-hidden shadow-2xl p-4 md:p-6 text-left"
        >
          {/* Mock Console / Window Header */}
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-4 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="text-xs text-slate-500 font-mono ml-2">capy_labs_status.sh</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-500" />
                SISTEMA DURÁVEL
              </span>
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-amber-500" />
                99.99% UPTIME
              </span>
            </div>
          </div>

          {/* Clean Dashboard Elements (Code/Stats) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Column 1 - Treasury Run */}
            <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-lg">
              <div className="text-slate-500 uppercase tracking-wider mb-2">TESOURARIA CAPITAE</div>
              <div className="text-lg font-semibold text-white mb-1">R$ 341.200,00</div>
              <div className="text-[10px] text-emerald-400">● RUNWAY: 24 MESES DETECTADOS</div>
              <div className="mt-3 text-slate-600 border-t border-white/[0.03] pt-2">
                &gt; bank_reconcile --completed<br />
                &gt; push_scenario_forecast
              </div>
            </div>

            {/* Column 2 - Enterprise COGS */}
            <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-lg">
              <div className="text-slate-500 uppercase tracking-wider mb-2">CAPITAE BUSINESS</div>
              <div className="text-lg font-semibold text-emerald-400">98.4% de Eficiência</div>
              <div className="text-[10px] text-slate-400">3 MODELOS FORA DA CAIXA</div>
              <div className="mt-3 text-slate-600 border-t border-white/[0.03] pt-2">
                &gt; sync_warehouse_tokyo --success<br />
                &gt; calc_unit_economics
              </div>
            </div>

            {/* Column 3 - Companion Health */}
            <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-lg">
              <div className="text-slate-500 uppercase tracking-wider mb-2">TELEMETRIA PETZY</div>
              <div className="text-lg font-semibold text-white mb-1">Portal de Cuidados Ativo</div>
              <div className="text-[10px] text-emerald-400">● 100% DA AGENDA CUMPRIDA</div>
              <div className="mt-3 text-slate-600 border-t border-white/[0.03] pt-2">
                &gt; push_vaccine_reminders<br />
                &gt; shared_profile_family_synced
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
