import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Send, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedProduct = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        message: `Olá equipe da HEFESTUS! Gostaríamos de entender mais sobre integrações com o ${preselectedProduct} em nossa operação. Vamos conversar.`,
      }));
    }
  }, [preselectedProduct]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const salesEmail = 'inquire@hefestus.com';
  const whatsappNumber = '5511999999999'; // Example standard structure

  return (
    <section className="py-24 md:py-32 bg-[#000000] border-t border-white/[0.03]" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Direct Communication details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold block mb-4">
                Contato Direto
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Inicie sua atualização de sistema
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
                Tem perguntas sobre implantações customizadas, integrações de APIs ou deseja conhecer nossas ofertas corporativas? Envie uma breve mensagem ou chame nossos engenheiros imediatamente.
              </p>

              {/* Actionable buttons */}
              <div className="space-y-4">
                {/* Email container */}
                <div className="p-4 bg-white/[0.01] border border-white/[0.04] rounded-lg flex items-center justify-between group hover:border-white/[0.08] transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/10 rounded-md text-emerald-400">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Corporate Email</div>
                      <a href={`mailto:${salesEmail}`} className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                        {salesEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(salesEmail)}
                    className="p-2 text-slate-500 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <span className="text-xs text-emerald-400 font-mono">Copiado!</span> : <Copy size={14} />}
                  </button>
                </div>

                {/* WhatsApp Button */}
                <div className="p-4 bg-white/[0.01] border border-white/[0.04] rounded-lg flex items-center justify-between group hover:border-white/[0.08] transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/10 rounded-md text-emerald-400">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Mensagem Direta</div>
                      <span className="text-sm font-semibold text-white">Fale direto via WhatsApp</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Olá%20equipe%20HEFESTUS%21%20Tenho%20interesse%20nas%20soluções.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-semibold rounded transition-colors cursor-pointer"
                  >
                    Abrir chat
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Response Commitment */}
            <div className="mt-12 lg:mt-0 p-4 border-l-2 border-emerald-500/30 bg-emerald-500/[0.01] text-xs text-slate-400 max-w-sm">
              <strong>Nosso Compromisso:</strong> Não utilizamos respostas automáticas robóticas genéricas. Um engenheiro sênior de sistemas avaliará sua proposta pessoalmente e retornará em até 12 horas úteis.
            </div>
          </div>

          {/* Right Column: Beautiful intake form */}
          <div className="lg:col-span-7 bg-[#1e293b]/50 backdrop-blur-md border border-white/[0.04] p-8 md:p-10 rounded-xl relative overflow-hidden flex flex-col justify-center">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center justify-center"
              >
                <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-6 font-semibold">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Solicitação enviada com segurança</h3>
                <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                  Obrigado por entrar em contato com a HEFESTUS. Registramos sua proposta com sucesso, e os dados foram transmitidos diretamente para nossa mesa de engenharia de soluções.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Seu nome *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Elena Rostova"
                      className="w-full bg-[#000000]/60 border border-white/[0.06] focus:border-emerald-500/30 px-4 py-3 rounded-md text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200 font-sans"
                    />
                  </div>
 
                  {/* Company Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Empresa (Opcional)</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Acme Logística"
                      className="w-full bg-[#000000]/60 border border-white/[0.06] focus:border-emerald-500/30 px-4 py-3 rounded-md text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200 font-sans"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] uppercase font-mono tracking-wider text-slate-500">E-mail Corporativo *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: elena@acme.com"
                    className="w-full bg-[#000000]/60 border border-white/[0.06] focus:border-emerald-500/30 px-4 py-3 rounded-md text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200 font-sans"
                  />
                </div>
 
                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Conte-nos sobre o seu projeto *</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva de forma simples suas necessidades ou gargalos operacionais..."
                    className="w-full bg-[#000000]/60 border border-white/[0.06] focus:border-emerald-500/30 px-4 py-3 rounded-md text-sm text-white placeholder-slate-600 focus:outline-none transition-colors duration-200 font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide uppercase text-[#000000] bg-emerald-400 hover:bg-emerald-300 disabled:bg-emerald-800 disabled:text-slate-400 rounded-md transition-all duration-200 cursor-pointer shadow-md shadow-emerald-500/10"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-emerald-950" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        TRANSMITINDO DADOS AO SISTEMA...
                      </span>
                    ) : (
                      <>
                        <span>Transmitir Proposta</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
