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

const SignUpPage = () => {
  const { t } = useLanguage();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
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

    const result = await signup(formData.username, formData.email, formData.password);

    if (result.success) {
      toast.success(t('signup_success'));
      navigate('/');
    } else {
      if (result.error === 'username_taken') {
        toast.error(t('signup_error_username'));
      } else {
        toast.error(t('signup_error_generic'));
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{`${t('signup_title')} - SKYVANTA`}</title>
        <meta name="description" content={t('signup_subtitle')} />
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
                {t('signup_title')}
              </h1>
              <p className="text-muted-foreground">{t('signup_subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-foreground">{t('signup_username')}</Label>
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
                <Label htmlFor="email" className="text-foreground">{t('signup_email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 text-gray-900 placeholder:text-gray-400"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">{t('signup_password')}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
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
                {loading ? 'Creating account...' : t('signup_button')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-primary hover:underline">
                {t('signup_login_link')}
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SignUpPage;