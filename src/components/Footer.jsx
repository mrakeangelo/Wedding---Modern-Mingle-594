import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiInstagram, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-concrete-900 dark:bg-concrete-900 text-glass-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-editorial text-2xl font-bold text-champagne-400 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-copper-400" size={20} />
                <span className="font-geometric">hello@sarahandmarcus.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-copper-400" size={20} />
                <span className="font-geometric">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiInstagram} className="text-copper-400" size={20} />
                <span className="font-geometric">@sarahandmarcus2024</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-editorial text-2xl font-bold text-champagne-400 mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a href="#story" className="block font-geometric text-glass-300 hover:text-champagne-400 transition-colors">
                Our Story
              </a>
              <a href="#venue" className="block font-geometric text-glass-300 hover:text-champagne-400 transition-colors">
                Venue Details
              </a>
              <a href="#timeline" className="block font-geometric text-glass-300 hover:text-champagne-400 transition-colors">
                Event Timeline
              </a>
              <a href="#rsvp" className="block font-geometric text-glass-300 hover:text-champagne-400 transition-colors">
                RSVP
              </a>
              <a href="#gallery" className="block font-geometric text-glass-300 hover:text-champagne-400 transition-colors">
                Photo Gallery
              </a>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-editorial text-2xl font-bold text-champagne-400 mb-6">
              Wedding Details
            </h3>
            <div className="space-y-3">
              <p className="font-geometric text-glass-300">
                <strong>Date:</strong> October 15, 2024
              </p>
              <p className="font-geometric text-glass-300">
                <strong>Time:</strong> 5:00 PM - 11:00 PM
              </p>
              <p className="font-geometric text-glass-300">
                <strong>Venue:</strong> Skyline Rooftop
              </p>
              <p className="font-geometric text-glass-300">
                <strong>Dress Code:</strong> Cocktail Attire
              </p>
              <p className="font-geometric text-glass-300">
                <strong>RSVP By:</strong> September 15, 2024
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-concrete-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SafeIcon icon={FiHeart} className="text-copper-400" size={20} />
              <span className="font-editorial text-xl font-bold text-champagne-400">
                Sarah & Marcus
              </span>
            </div>
            <p className="font-geometric text-glass-400 text-center md:text-right">
              Modern Mingle – An Urban Wedding Template by{' '}
              <span className="text-champagne-400 font-semibold">Mrake Agency</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;