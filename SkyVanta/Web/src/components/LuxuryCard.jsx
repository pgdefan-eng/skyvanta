import React from 'react';
import { motion } from 'framer-motion';

const LuxuryCard = ({ title, description, image, index = 0 }) => {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: premiumEase }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full border border-border/50 hover:border-gold-primary/30"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden relative">
          <div className="absolute inset-0 bg-premium-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow bg-card">
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default LuxuryCard;