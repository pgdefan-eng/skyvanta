import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Shield, Lock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle.jsx';

const DiscretionSecuritySection = () => {
  const { t } = useLanguage();
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-32 overflow-hidden bg-premium-dark flex items-center">
      <motion.div 
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1654588830920-92085849e384" 
          alt="Luxury private aviation terminal" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/80 to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center border border-gold-primary/20">
                <Lock className="w-5 h-5 text-gold-primary" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center border border-gold-primary/20">
                <Shield className="w-5 h-5 text-gold-primary" />
              </div>
            </div>
            
            <SectionTitle className="text-premium-light mb-6 text-left">
              {t('discretion_title')}
            </SectionTitle>
            
            <p className="text-xl text-premium-light/80 leading-relaxed font-light">
              {t('discretion_text')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscretionSecuritySection;