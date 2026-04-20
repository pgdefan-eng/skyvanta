import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import { Plane, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Plane,
      title: t('why_fleet_title'),
      description: t('why_fleet_text')
    },
    {
      icon: Shield,
      title: t('why_privacy_title'),
      description: t('why_privacy_text')
    },
    {
      icon: Globe,
      title: t('why_global_title'),
      description: t('why_global_text')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`SKYVANTA - ${t('hero_subtitle')}`}</title>
        <meta name="description" content={t('brand_text')} />
      </Helmet>

      <Header />

      <HeroSection
        title={t('hero_title')}
        subtitle={t('hero_subtitle')}
        ctaText={t('hero_cta')}
        ctaLink="/signup"
        backgroundImage="https://images.unsplash.com/photo-1657409845132-6c3096724946"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle>{t('brand_title')}</SectionTitle>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-prose">
                {t('brand_text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1536374969145-598a5f83b94d"
                alt="Luxury private jet interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionTitle className="text-secondary-foreground">{t('why_title')}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-secondary-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;