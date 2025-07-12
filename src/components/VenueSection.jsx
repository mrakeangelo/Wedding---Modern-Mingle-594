import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiUsers, FiExternalLink } = FiIcons;

const VenueSection = () => {
  return (
    <section id="venue" className="py-20 bg-concrete-100 dark:bg-concrete-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            Our Venue
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-3xl mx-auto">
            Join us at the stunning Skyline Rooftop, where the city becomes our backdrop 
            for an unforgettable celebration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
                alt="Rooftop venue"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-glass-50">
                <h3 className="font-editorial text-2xl font-bold">Skyline Rooftop</h3>
                <p className="font-geometric text-champagne-300">Downtown Manhattan</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Venue interior"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="City view"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-glass-50 dark:bg-concrete-800 p-8 rounded-lg shadow-lg">
              <h3 className="font-editorial text-2xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
                Venue Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="text-copper-500 mt-1" size={20} />
                  <div>
                    <p className="font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Address
                    </p>
                    <p className="font-geometric text-concrete-600 dark:text-glass-300">
                      123 Skyline Drive, 45th Floor<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiClock} className="text-copper-500 mt-1" size={20} />
                  <div>
                    <p className="font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Time
                    </p>
                    <p className="font-geometric text-concrete-600 dark:text-glass-300">
                      Ceremony: 5:00 PM<br />
                      Reception: 6:30 PM - 11:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiUsers} className="text-copper-500 mt-1" size={20} />
                  <div>
                    <p className="font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Capacity
                    </p>
                    <p className="font-geometric text-concrete-600 dark:text-glass-300">
                      150 guests with panoramic city views
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div className="bg-glass-50 dark:bg-concrete-800 p-8 rounded-lg shadow-lg">
              <h3 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
                Getting There
              </h3>
              <div className="space-y-4">
                <div className="bg-concrete-200 dark:bg-concrete-700 h-48 rounded-lg flex items-center justify-center">
                  <p className="font-geometric text-concrete-600 dark:text-glass-300">
                    Interactive Map Placeholder
                  </p>
                </div>
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center space-x-2 text-copper-500 hover:text-copper-600 font-geometric font-medium"
                >
                  <span>Open in Google Maps</span>
                  <SafeIcon icon={FiExternalLink} size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;