import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiSun, FiMoon } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Our Story', href: '#story' },
    { name: 'Venue', href: '#venue' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Guestbook', href: '#guestbook' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-glass-50/90 dark:bg-concrete-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400"
          >
            Modern Mingle
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-concrete-600 dark:text-glass-300 hover:text-copper-500 dark:hover:text-champagne-400 transition-colors font-geometric font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-concrete-100 dark:bg-concrete-800 text-concrete-600 dark:text-champagne-400 hover:bg-concrete-200 dark:hover:bg-concrete-700 transition-colors"
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} size={20} />
            </motion.button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-concrete-100 dark:bg-concrete-800 text-concrete-600 dark:text-champagne-400"
            >
              <SafeIcon icon={isDark ? FiSun : FiMoon} size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-concrete-100 dark:bg-concrete-800 text-concrete-600 dark:text-champagne-400"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-glass-50/95 dark:bg-concrete-900/95 backdrop-blur-md border-t border-concrete-200 dark:border-concrete-700"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsOpen(false)}
                className="block text-concrete-600 dark:text-glass-300 hover:text-copper-500 dark:hover:text-champagne-400 transition-colors font-geometric font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;