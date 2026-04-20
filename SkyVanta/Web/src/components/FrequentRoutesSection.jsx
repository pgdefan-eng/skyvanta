import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { Plane, MapPin } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle.jsx';

const FrequentRoutesSection = () => {
  const { t } = useLanguage();

  const routes = [
    { label: t('route_nyc_london') },
    { label: t('route_dubai_monaco') },
    { label: t('route_tokyo_paris') },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-premium-dark text-premium-light border-t border-border/20">
      {/* Decorative background accent */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1601037295085-6c17aa4e40a7)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTitle className="text-premium-light">{t('frequent_routes_title')}</SectionTitle>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((route, index) => {
            const [departure, arrival] = route.label.split('→').map(s => s.trim());
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-card/5 border border-gold-primary/20 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-between hover:border-gold-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col items-start gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold-primary" />
                    </div>
                    <span className="text-lg font-serif font-medium text-premium-light">{departure}</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center px-4">
                    <div className="h-px w-full bg-gold-primary/30 relative">
                      <Plane className="w-5 h-5 text-gold-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-4 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold-primary" />
                    </div>
                    <span className="text-lg font-serif font-medium text-premium-light">{arrival}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentRoutesSection;