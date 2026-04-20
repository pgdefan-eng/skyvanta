import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 ${className}`}
      style={{ letterSpacing: '-0.01em', textBalance: 'balance' }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;