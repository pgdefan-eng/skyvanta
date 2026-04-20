import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import LuxuryCard from '@/components/LuxuryCard.jsx';
import FrequentRoutesSection from '@/components/FrequentRoutesSection.jsx';
import { motion } from 'framer-motion';

const FleetPage = () => {
  const { t } = useLanguage();

  const aircraft = [
    {
      title: t('fleet_aurora_title'),
      description: t('fleet_aurora_desc'),
      image: 'https://images.unsplash.com/flagged/photo-1568098528295-ba158ae650d2'
    },
    {
      title: t('fleet_eclipse_title'),
      description: t('fleet_eclipse_desc'),
      image: 'https://images.unsplash.com/photo-1657409845132-6c3096724946'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${t('fleet_title')} - SKYVANTA`}</title>
        <meta name="description" content={t('fleet_intro')} />
      </Helmet>

      <Header />

      <main className="pt-32 min-h-screen bg-background flex flex-col">
        <div className="flex-1 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <SectionTitle className="mb-6">{t('fleet_title')}</SectionTitle>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('fleet_intro')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {aircraft.map((plane, index) => (
                <LuxuryCard
                  key={index}
                  title={plane.title}
                  description={plane.description}
                  image={plane.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <FrequentRoutesSection />
      </main>

      <Footer />
    </>
  );
};

export default FleetPage;