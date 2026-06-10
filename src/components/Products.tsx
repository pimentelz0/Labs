import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { ProductCard } from './ProductCard';

interface ProductsProps {
  onSelectProduct: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section className="py-24 md:py-32 bg-[#050e09]" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title details */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold block mb-4">
            Nosso Ecossistema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Projetado para simplificar operações modernas
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
            Desenvolvemos softwares de alta fidedignidade e propósito claro que operam com transparência máxima. Sem curvas de aprendizado íngremes ou excesso de configurações. Conheça nossas ferramentas.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCtaClick={onSelectProduct}
            />
          ))}
        </div>

        {/* Minimal Bottom Banner info to stimulate professional trust */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 border border-white/[0.04] bg-[#07130b] rounded-lg text-center font-mono text-xs text-slate-500"
        >
          <span>Precisa de painéis logísticos sob medida ou modelagem de infraestrutura distribuída? </span>
          <button
            onClick={() => onSelectProduct('Soluções Customizadas')}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline ml-1 cursor-pointer"
          >
            Solicite uma consultoria de arquitetura de sistemas dedicada
          </button>
        </motion.div>

      </div>
    </section>
  );
};
