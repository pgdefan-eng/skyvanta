import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SectionTitle from '@/components/SectionTitle.jsx';
import BusinessModelSection from '@/components/BusinessModelSection.jsx';
import DiscretionSecuritySection from '@/components/DiscretionSecuritySection.jsx';
import { motion } from 'framer-motion';
import { Shield, Plane, Star, Globe, Leaf, Lock, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();
  const premiumEase = [0.16, 1, 0.3, 1];

  const goals = [
    {
      icon: Shield,
      title: t('about_goal_1_title'),
      description: t('about_goal_1_text')
    },
    {
      icon: Plane,
      title: t('about_goal_2_title'),
      description: t('about_goal_2_text')
    },
    {
      icon: Star,
      title: t('about_goal_3_title'),
      description: t('about_goal_3_text')
    },
    {
      icon: Globe,
      title: t('about_goal_4_title'),
      description: t('about_goal_4_text')
    },
    {
      icon: Leaf,
      title: t('about_goal_5_title'),
      description: t('about_goal_5_text')
    },
    {
      icon: Lock,
      title: t('about_goal_6_title'),
      description: t('about_goal_6_text')
    }
  ];

  const keyBullets = [
    t('about_key_bullet_1'),
    t('about_key_bullet_2'),
    t('about_key_bullet_3'),
    t('about_key_bullet_4'),
    t('about_key_bullet_5')
  ];

  return (
    <>
      <Helmet>
        <title>{`${t('nav_about')} - SKYVANTA`}</title>
        <meta name="description" content={t('about_vision_text')} />
      </Helmet>

      <Header />

      <main className="pt-32 min-h-screen bg-background flex flex-col">
        {/* Vision Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <SectionTitle className="mb-8">{t('about_vision_title')}</SectionTitle>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic">
              "{t('about_vision_text')}"
            </p>
          </motion.div>
        </section>

        {/* Goals Section */}
        <section className="bg-secondary py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="text-center mb-16"
            >
              <SectionTitle className="text-secondary-foreground">{t('about_goals_title')}</SectionTitle>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: premiumEase }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
                    <goal.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-card-foreground mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Model & Discretion */}
        <BusinessModelSection />
        <DiscretionSecuritySection />

        {/* Key to Skyvanta Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="bg-card rounded-[2rem] p-8 md:p-14 shadow-2xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
            
            <SectionTitle className="mb-6">{t('about_key_title')}</SectionTitle>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t('about_key_intro')}
            </p>

            <ul className="space-y-6">
              {keyBullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: premiumEase }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground leading-relaxed">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutPage;