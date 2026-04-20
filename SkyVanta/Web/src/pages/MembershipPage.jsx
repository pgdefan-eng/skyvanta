import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Crown } from 'lucide-react';

const MembershipPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{`${t('membership_title')} - SKYVANTA`}</title>
        <meta name="description" content="Exclusive private aviation memberships." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <SectionTitle className="mb-6">{t('membership_title')}</SectionTitle>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join an exclusive circle of travelers who demand nothing less than perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Elite Tier */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-foreground" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
                {t('membership_elite')}
              </h2>
              <div className="text-4xl font-serif font-semibold text-foreground mb-2">
                {t('membership_elite_price')}
              </div>
              <p className="text-muted-foreground mb-8 border-b border-border pb-8">
                {t('membership_elite_hours')}
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Guaranteed availability within 48 hours', 'Dedicated flight advisor', 'Access to Elite fleet tier', 'Standard catering inclusions'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="/signup" className="block w-full py-4 px-6 text-center rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors">
                Request Elite Access
              </a>
            </motion.div>

            {/* Black Tier */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-premium-dark rounded-3xl p-8 lg:p-12 shadow-2xl border border-gold-primary/30 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-0 right-0 bg-gold-primary text-premium-dark text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-bl-lg">
                Invitation Only
              </div>
              <div className="w-14 h-14 rounded-full bg-gold-primary/10 flex items-center justify-center mb-6">
                <Crown className="w-7 h-7 text-gold-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-premium-light mb-2">
                {t('membership_black')}
              </h2>
              <div className="text-4xl font-serif font-semibold text-gold-primary mb-2">
                {t('membership_black_price')}
              </div>
              <p className="text-premium-light/70 mb-8 border-b border-gold-primary/20 pb-8">
                {t('membership_black_text')}
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Guaranteed availability within 12 hours', 'Personal 24/7 concierge & flight management team', 'Access to flagship long-range fleet', 'Bespoke Michelin-starred catering', 'Helicopter transfer inclusions'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-premium-light/80">
                    <CheckCircle2 className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="/signup" className="block w-full py-4 px-6 text-center rounded-lg bg-gold-primary text-premium-dark font-semibold hover:bg-gold-primary/90 transition-colors">
                Inquire for Black Tier
              </a>
            </motion.div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-12">
            * {t('membership_note')}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MembershipPage;