import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Globe, Menu, X, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t, language, changeLanguage } = useLanguage();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'de', name: 'German', native: 'Deutsch' },
    { code: 'el', name: 'Greek', native: 'Ελληνικά' },
    { code: 'it', name: 'Italian', native: 'Italiano' },
    { code: 'zh', name: 'Chinese', native: '中文' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'es', name: 'Spanish', native: 'Español' }
  ];

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    { path: '/fleet', label: t('nav_fleet') },
    { path: '/experience', label: t('nav_experience') },
    { path: '/membership', label: t('nav_membership') },
    { path: '/contact', label: t('nav_contact') }
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-foreground tracking-tight hover:text-gold-primary transition-colors duration-300">
              SKYVANTA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 right-0 h-[2px] bg-gold-primary rounded-full transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/50 transition-colors duration-300">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {language}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center justify-between cursor-pointer transition-colors duration-200 ${
                      language === lang.code ? 'bg-accent/10 text-foreground font-medium' : ''
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{lang.native}</span>
                      <span className="text-xs text-muted-foreground">{lang.name}</span>
                    </div>
                    {language === lang.code && <Check className="w-4 h-4 text-gold-primary" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {!isAuthenticated ? (
              <>
                <Link to="/member-access">
                  <Button variant="ghost" size="sm" className="hover:bg-accent/50 transition-colors duration-300">{t('nav_member_access')}</Button>
                </Link>
                <Link to="/login">
                  <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300">{t('nav_login')}</Button>
                </Link>
              </>
            ) : (
              <Button onClick={logout} variant="ghost" size="sm" className="hover:bg-accent/50 transition-colors duration-300">{t('nav_logout')}</Button>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-gold-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-3 border-t border-border space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="uppercase tracking-wider">{language}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full min-w-[200px]">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between cursor-pointer ${
                        language === lang.code ? 'bg-accent/10 text-foreground font-medium' : ''
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{lang.native}</span>
                        <span className="text-xs text-muted-foreground">{lang.name}</span>
                      </div>
                      {language === lang.code && <Check className="w-4 h-4 text-gold-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {!isAuthenticated ? (
                <>
                  <Link to="/member-access" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      {t('nav_member_access')}
                    </Button>
                  </Link>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-foreground text-background">
                      {t('nav_login')}
                    </Button>
                  </Link>
                </>
              ) : (
                <Button onClick={handleLogout} variant="ghost" size="sm" className="w-full justify-start">
                  {t('nav_logout')}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;