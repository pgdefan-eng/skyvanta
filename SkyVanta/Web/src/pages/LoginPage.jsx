import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { useAuth } from '@/contexts/AuthContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
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

    const result = await login(formData.username, formData.password);

    if (result.success) {
      navigate('/');
    } else {
      toast.error(t('login_error'));
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{`${t('login_title')} - SKYVANTA`}</title>
        <meta name="description" content={t('login_subtitle')} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                {t('login_title')}
              </h1>
              <p className="text-muted-foreground">{t('login_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-foreground">{t('login_username')}</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-2 text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">{t('login_password')}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-2 text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Logging in...' : t('login_button')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/signup" className="text-sm text-primary hover:underline">
                {t('login_signup_link')}
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LoginPage;