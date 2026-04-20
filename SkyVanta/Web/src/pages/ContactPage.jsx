import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const { t } = useLanguage();
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <>
      <Helmet>
        <title>{`${t('nav_contact')} - SKYVANTA`}</title>
        <meta name="description" content="Get in touch with SKYVANTA private aviation." />
      </Helmet>

      <Header />

      <main className="min-h-[100dvh] flex flex-col bg-background">
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-premium-dark flex-grow flex items-center">
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053" 
              alt="Luxury private jet over clouds" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: premiumEase }}
              >
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-gold-primary/50"></div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-primary">
                    {t('contact_hero_title')}
                  </h3>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-premium-light mb-6 leading-tight">
                  {t('contact_title')}
                </h1>
                <p className="text-xl text-premium-light/80 leading-relaxed max-w-lg">
                  Submit your confidential request, and our dedicated concierge team will arrange your bespoke journey with uncompromising attention to detail.
                </p>
              </motion.div>

              <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 relative">
                {/* Decorative glow behind form */}
                <div className="absolute inset-0 bg-gold-primary/10 rounded-[2rem] blur-3xl transform -translate-y-4"></div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;