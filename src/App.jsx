import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Curtain from './components/Curtain';

import HomePage from './pages/HomePage';
import PuppiesPage from './pages/PuppiesPage';
import PuppyDetailPage from './pages/PuppyDetailPage';
import HappyFamiliesPage from './pages/HappyFamiliesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import GoneHomePage from './pages/GoneHomePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Curtain />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/puppies" element={<PuppiesPage />} />
        <Route path="/puppies.html" element={<PuppiesPage />} />
        <Route path="/puppies/:slug" element={<PuppyDetailPage />} />
        <Route path="/happy-families" element={<HappyFamiliesPage />} />
        <Route path="/happy-families.html" element={<HappyFamiliesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/how-it-works.html" element={<HowItWorksPage />} />
        <Route path="/gone-home" element={<GoneHomePage />} />
        <Route path="/gone-home.html" element={<GoneHomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq.html" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
