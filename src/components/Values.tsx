import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { VALUES } from '../data';

export const Values: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#000000]" id="values">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold block mb-4">
            Como Operamos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Desenvolvido em torno da utilidade absoluta
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
            Seguimos um paradigma de desenvolvimento estruturado. Enquanto outras startups priorizam volume estético e ruídos visuais, investimos inteiramente em estabilidade e interações fluidas.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {VALUES.map((val, idx) => {
            const IconComponent = (Icons as any)[val.iconName] || Icons.Code;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={val.title}
                className="flex gap-4 md:gap-6 items-start group"
                id={`value-item-${idx}`}
              >
                {/* Icon Column */}
                <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg text-slate-300 group-hover:text-emerald-450 group-hover:border-emerald-500/10 group-hover:bg-emerald-500/5 transition-all duration-300 shrink-0">
                  <IconComponent size={20} className="transition-transform group-hover:scale-105" />
                </div>
                
                {/* Text Column */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                    {val.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
