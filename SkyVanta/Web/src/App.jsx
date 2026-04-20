import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext.jsx';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import FleetPage from '@/pages/FleetPage.jsx';
import ExperiencePage from '@/pages/ExperiencePage.jsx';
import SignUpPage from '@/pages/SignUpPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import MemberAccessPage from '@/pages/MemberAccessPage.jsx';
import MembershipPage from '@/pages/MembershipPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/member-access" element={<MemberAccessPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;