import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      title: t('experience_dining_title'),
      desc: t('experience_dining_desc'),
      image: "https://images.unsplash.com/photo-1702818818041-bcb320ec6ba3"
    },
    {
      title: t('experience_cabins_title'),
      desc: t('experience_cabins_desc'),
      image: "https://images.unsplash.com/photo-1700811476854-52f99a9f2ec1"
    },
    {
      title: t('experience_wifi_title'),
      desc: t('experience_wifi_desc'),
      image: "https://images.unsplash.com/photo-1661258199912-3d5baa9e85cd"
    },
    {
      title: t('experience_attendants_title'),
      desc: t('experience_attendants_desc'),
      image: null // Rendered elegantly without image for balance if needed, or we just handle it textually.
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${t('experience_title')} - SKYVANTA`}</title>
        <meta name="description" content={t('experience_onboard_text')} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <SectionTitle className="mb-6">{t('experience_title')}</SectionTitle>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('experience_onboard_text')}
            </p>
          </motion.div>

          <div className="space-y-24">
            {amenities.map((item, index) => {
              const isEven = index % 2 === 0;
              // If no image, we render a full width text block
              if (!item.image) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-secondary rounded-3xl p-12 text-center border border-border"
                  >
                    <h3 className="text-3xl font-serif font-bold text-secondary-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              }

              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                      <div className="absolute inset-0 bg-premium-dark/10 z-10 mix-blend-overlay"></div>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                  >
                    <div className="w-12 h-1 bg-gold-primary mb-6"></div>
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ExperiencePage;