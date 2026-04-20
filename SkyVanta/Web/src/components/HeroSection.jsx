import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
        {/* Subtle noise texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')]"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6"
          style={{ letterSpacing: '-0.02em', textBalance: 'balance' }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
        
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
            className="inline-block bg-gold-primary text-premium-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(217,160,82,0.3)] hover:shadow-[0_0_30px_rgba(217,160,82,0.5)]"
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;