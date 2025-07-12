import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMessageSquare, FiX } = FiIcons;

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRSVP = () => {
    document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  const handleTextUs = () => {
    window.open('sms:+1234567890', '_blank');
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-4 space-y-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRSVP}
                  className="block w-full bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
                >
                  <SafeIcon icon={FiHeart} className="inline mr-2" size={16} />
                  RSVP Now
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleTextUs}
                  className="block w-full bg-steel-500 hover:bg-steel-600 text-glass-50 font-geometric font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
                >
                  <SafeIcon icon={FiMessageSquare} className="inline mr-2" size={16} />
                  Text Us
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-champagne-500 hover:bg-champagne-600 text-glass-50 rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <SafeIcon 
              icon={isExpanded ? FiX : FiHeart} 
              size={24} 
              className={isExpanded ? '' : 'animate-pulse'}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;