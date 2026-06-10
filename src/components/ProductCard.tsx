import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onCtaClick: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCtaClick }) => {
  // Map string icon names to Lucide icons safely
  const IconComponent = (Icons as any)[product.iconName] || Icons.Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#07130b] border border-white/[0.04] rounded-xl hover:border-emerald-500/20 transition-all duration-300 shadow-xl overflow-hidden"
      id={`product-card-${product.id}`}
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header - Meta category & Icon */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded" id={`product-meta-${product.id}`}>
              {product.meta}
            </span>
            {product.inDevelopment && (
              <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.05]">
                Em Breve
              </span>
            )}
          </div>
          <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5 transition-all duration-300 text-slate-300 group-hover:text-emerald-400">
            <IconComponent size={20} />
          </div>
        </div>

        {/* Name and Tagline */}
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors duration-200" id={`product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-sm font-medium text-slate-300 mb-4 tracking-tight leading-relaxed">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-4 leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Features list */}
        <div className="space-y-3 mb-8 border-t border-white/[0.03] pt-6">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
              <Icons.Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="mt-auto">
        {product.inDevelopment ? (
          <div className="text-xs font-mono text-slate-500 italic select-none">
            Sistema em desenvolvimento ativo
          </div>
        ) : product.linkUrl ? (
          <a
            href={product.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors duration-200 group-auto cursor-pointer"
          >
            <span>{product.linkText}</span>
            <Icons.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <button
            onClick={() => onCtaClick(product.name)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors duration-200 group-auto cursor-pointer"
          >
            <span>{product.linkText}</span>
            <Icons.ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
