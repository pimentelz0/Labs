import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#040a06] border-y border-white/[0.03]" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading/Context */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold block mb-4">
              Nossa Tese
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              A simplicidade é a segurança máxima de um software.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Fundamos a Capy Labs com uma convicção clara: sistemas complexos falham de maneiras imprevisíveis. A maioria das plataformas modernas sobrecarrega as empresas com configurações supérfluas, ferramentas infladas e monitoramentos desnecessários. Desenvolvemos soluções que priorizam a utilidade absoluta e a velocidade real acima de tudo.
            </p>
          </div>

          {/* Right Column: Statement Paragraphs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 lg:pt-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed tracking-tight"
            >
              Na Capy Labs, construímos tecnologias que funcionam de maneira invisível. Acreditamos que o software deve capacitar operadores diretamente, sem exigir especializações redundantes para configurar dashboards ou consolidar lançamentos fiscais.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm md:text-base text-slate-400 leading-relaxed"
            >
              Seja acompanhando fluxos financeiros com o <strong>Capitae</strong>, escalando faturamento e estoques com o <strong>Capitae Business</strong> ou guardando históricos médicos de companheiros pets com o <strong>Petzy</strong>, nosso ecossistema resolve problemas reais. Evitamos excesso de cores chamativas, jargões fabricados ou layouts poluídos. Escrevemos código limpo focado em humanos.
            </motion.p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/[0.04] mt-8">
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Soberania dos Dados</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold text-white">0%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Jargões Desnecessários</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
