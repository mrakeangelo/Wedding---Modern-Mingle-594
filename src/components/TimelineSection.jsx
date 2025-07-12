import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiGlass, FiMusic, FiCamera } = FiIcons;

const TimelineSection = () => {
  const events = [
    {
      time: '5:00 PM',
      title: 'Ceremony',
      description: 'Join us as we exchange vows with the city skyline as our witness',
      icon: FiHeart,
      color: 'copper'
    },
    {
      time: '6:00 PM',
      title: 'Cocktail Hour',
      description: 'Mingle with champagne and canapés on the rooftop terrace',
      icon: FiGlass,
      color: 'champagne'
    },
    {
      time: '7:30 PM',
      title: 'Dinner & Toasts',
      description: 'A curated dining experience with heartfelt speeches',
      icon: FiMusic,
      color: 'steel'
    },
    {
      time: '9:00 PM',
      title: 'Afterparty',
      description: 'Dance the night away with city lights as our backdrop',
      icon: FiCamera,
      color: 'copper'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-glass-50 dark:bg-concrete-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-2xl mx-auto">
            A perfect evening celebrating love, friendship, and the city that brought us together.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-copper-500/30 hidden md:block"></div>

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-copper-500 rounded-full border-4 border-glass-50 dark:border-concrete-800 hidden md:block z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-glass-100 dark:bg-concrete-700 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full bg-${event.color}-100 dark:bg-${event.color}-900/30`}>
                      <SafeIcon 
                        icon={event.icon} 
                        className={`text-${event.color}-500`} 
                        size={24} 
                      />
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400">
                        {event.title}
                      </h3>
                      <p className="font-geometric text-copper-500 font-semibold">
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <p className="font-geometric text-concrete-600 dark:text-glass-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;