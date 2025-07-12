import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCoffee, FiMapPin, FiSun, FiMusic, FiExternalLink } = FiIcons;

const CityRecommendations = () => {
  const recommendations = [
    {
      category: 'Coffee & Breakfast',
      icon: FiCoffee,
      color: 'copper',
      places: [
        {
          name: 'Blue Bottle Coffee',
          description: 'Artisanal coffee in a minimalist setting',
          address: '123 Main St, Downtown',
          hours: '6:00 AM - 8:00 PM'
        },
        {
          name: 'The Breakfast Club',
          description: 'All-day breakfast with city views',
          address: '456 High St, Midtown',
          hours: '7:00 AM - 3:00 PM'
        }
      ]
    },
    {
      category: 'Rooftop Brunch',
      icon: FiSun,
      color: 'champagne',
      places: [
        {
          name: 'Sky Terrace',
          description: 'Elevated brunch experience with panoramic views',
          address: '789 Tower Ave, 30th Floor',
          hours: '9:00 AM - 3:00 PM'
        },
        {
          name: 'Garden Rooftop',
          description: 'Urban oasis with botanical-inspired dishes',
          address: '321 Garden St, Rooftop',
          hours: '10:00 AM - 4:00 PM'
        }
      ]
    },
    {
      category: 'Evening Entertainment',
      icon: FiMusic,
      color: 'steel',
      places: [
        {
          name: 'Jazz Corner',
          description: 'Intimate jazz club with craft cocktails',
          address: '654 Music Ave, Basement',
          hours: '7:00 PM - 2:00 AM'
        },
        {
          name: 'Neon Nights',
          description: 'Trendy bar with signature cocktails',
          address: '987 Night St, 2nd Floor',
          hours: '6:00 PM - 12:00 AM'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-glass-50 dark:bg-concrete-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            City Walks
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-3xl mx-auto">
            Make the most of your time in the city. Here are our favorite spots for food, 
            coffee, and post-wedding adventures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-glass-100 dark:bg-concrete-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`bg-${category.color}-100 dark:bg-${category.color}-900/30 p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-full bg-${category.color}-200 dark:bg-${category.color}-800/50`}>
                    <SafeIcon 
                      icon={category.icon} 
                      className={`text-${category.color}-600 dark:text-${category.color}-400`} 
                      size={24} 
                    />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400">
                    {category.category}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="space-y-2">
                    <h4 className="font-geometric font-semibold text-concrete-800 dark:text-glass-200">
                      {place.name}
                    </h4>
                    <p className="font-geometric text-sm text-concrete-600 dark:text-glass-300">
                      {place.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-concrete-500 dark:text-glass-400">
                      <SafeIcon icon={FiMapPin} size={14} />
                      <span>{place.address}</span>
                    </div>
                    <div className="text-sm text-concrete-500 dark:text-glass-400">
                      {place.hours}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Playlist Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-concrete-800 dark:bg-concrete-900 p-8 rounded-lg shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="font-editorial text-2xl font-bold text-champagne-400 mb-4">
              Afterparty Playlist Preview
            </h3>
            <p className="font-geometric text-glass-300">
              Get ready to dance the night away with our curated city vibes playlist
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-glass-50/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-geometric font-semibold text-champagne-400 mb-4">
                Now Playing
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiMusic} className="text-copper-400" size={20} />
                  <div>
                    <p className="font-geometric text-glass-200 font-medium">Empire State of Mind</p>
                    <p className="font-geometric text-glass-400 text-sm">Jay-Z ft. Alicia Keys</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-glass-50/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-geometric font-semibold text-champagne-400 mb-4">
                Full Playlist
              </h4>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 text-copper-400 hover:text-copper-300 font-geometric font-medium"
              >
                <span>Listen on Spotify</span>
                <SafeIcon icon={FiExternalLink} size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CityRecommendations;