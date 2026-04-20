import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';

const MemberAccessPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await pb.collection('users').authWithPassword(formData.email, formData.password, { $autoCancel: false });
      toast.success('Access Granted', {
        description: 'Welcome to the SKYVANTA Private Portal.',
      });
      navigate('/');
    } catch (error) {
      toast.error('Access Denied', {
        description: 'Invalid credentials. Please verify your membership details.',
      });
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{`${t('member_access_title')} - SKYVANTA`}</title>
        <meta name="description" content={t('member_access_subtitle')} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-screen bg-premium-dark flex items-center justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/5 backdrop-blur-xl border border-gold-primary/20 rounded-2xl p-10 shadow-2xl"
          >
            <div className="text-center mb-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gold-primary/10 flex items-center justify-center mb-6">
                <LockKeyhole className="w-8 h-8 text-gold-primary" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-premium-light tracking-tight mb-3">
                {t('member_access_title')}
              </h1>
              <p className="text-premium-light/70">{t('member_access_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-premium-light/90 tracking-wide uppercase text-xs font-semibold">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-premium-dark/50 border-gold-primary/20 text-premium-light placeholder:text-premium-light/30 focus-visible:ring-gold-primary/50 focus-visible:border-gold-primary"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-premium-light/90 tracking-wide uppercase text-xs font-semibold">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-premium-dark/50 border-gold-primary/20 text-premium-light placeholder:text-premium-light/30 focus-visible:ring-gold-primary/50 focus-visible:border-gold-primary"
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold-primary text-premium-dark hover:bg-gold-primary/90 font-semibold tracking-wide"
                disabled={loading}
                size="lg"
              >
                {loading ? 'Authenticating...' : t('member_access_enter')}
              </Button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MemberAccessPage;