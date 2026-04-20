import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-primary">SKYVANTA</span>
            <p className="text-sm text-secondary-foreground/80 mt-2">{t('footer_copyright')}</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300">
              {t('nav_contact')}
            </Link>
            <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300">
              {t('footer_privacy')}
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-all duration-300">
              {t('footer_terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;