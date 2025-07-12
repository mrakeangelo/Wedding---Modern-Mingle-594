import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import CoupleSection from '../components/CoupleSection';
import VenueSection from '../components/VenueSection';
import TimelineSection from '../components/TimelineSection';
import RSVPSection from '../components/RSVPSection';
import GallerySection from '../components/GallerySection';
import GuestbookSection from '../components/GuestbookSection';
import CityRecommendations from '../components/CityRecommendations';
import CountdownTimer from '../components/CountdownTimer';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-concrete-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-champagne-400 text-2xl font-geometric animate-neon-pulse"
        >
          Modern Mingle
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <CoupleSection />
      <VenueSection />
      <CountdownTimer />
      <TimelineSection />
      <RSVPSection />
      <GallerySection />
      <GuestbookSection />
      <CityRecommendations />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default HomePage;