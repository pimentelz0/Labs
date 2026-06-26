/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
    
    // Scroll coordinates calculation for perfect alignment with custom offset
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80; // Navbar height
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
    <div className="min-h-screen bg-[#000000] text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-white" id="main-landing-container">
      {/* Sticky high-contrast navigation bar */}
      <Navbar />

      {/* Immersive centered opening stage with custom radial ambient glow */}
      <Hero />

      {/* Interactive product portfolio with dynamic callback hook */}
      <Products onSelectProduct={handleSelectProduct} />

      {/* Structural philosophy & company about information block */}
      <About />

      {/* Distinctive engineering values grid with custom Lucide vectors */}
      <Values />

      {/* Robust custom intake portal and instant messaging touch points */}
      <Contact preselectedProduct={selectedProduct} />

      {/* Elegant, high-density minimal footer with anchor linkages */}
      <Footer />
    </div>
  );
}
