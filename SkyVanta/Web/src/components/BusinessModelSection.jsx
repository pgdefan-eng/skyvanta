import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const BusinessModelSection = () => {
  const { t } = useLanguage();
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-24 border-t border-b border-border/50 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gold-primary/50"></div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
              {t('about_business_title')}
            </h3>
            <div className="h-[1px] w-12 bg-gold-primary/50"></div>
          </div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-tight text-balance">
            {t('about_business_text_full')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModelSection;