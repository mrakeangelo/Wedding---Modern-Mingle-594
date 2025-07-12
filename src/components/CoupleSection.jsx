import React from 'react';
import { motion } from 'framer-motion';

const CoupleSection = () => {
  return (
    <section id="story" className="py-20 bg-glass-50 dark:bg-concrete-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            Our City Story
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-3xl mx-auto">
            From coffee shops to rooftop bars, our love story unfolded in the heart of the city. 
            Here's how two urban souls found their perfect match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sarah's Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Sarah"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-glass-50">
                <h3 className="font-editorial text-2xl font-bold">Sarah</h3>
                <p className="font-geometric text-champagne-300">Art Director & Coffee Enthusiast</p>
              </div>
            </div>
            <div className="bg-glass-100 dark:bg-concrete-700 p-6 rounded-lg">
              <p className="font-geometric text-concrete-700 dark:text-glass-200 leading-relaxed">
                "I've always been drawn to the energy of the city - the way morning light hits the glass buildings, 
                the buzz of creativity in every corner. When I met Marcus at that little gallery opening in SoHo, 
                I knew I'd found someone who sees the city the same way I do."
              </p>
            </div>
          </motion.div>

          {/* Marcus's Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Marcus"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-glass-50">
                <h3 className="font-editorial text-2xl font-bold">Marcus</h3>
                <p className="font-geometric text-champagne-300">Architect & Rooftop Explorer</p>
              </div>
            </div>
            <div className="bg-glass-100 dark:bg-concrete-700 p-6 rounded-lg">
              <p className="font-geometric text-concrete-700 dark:text-glass-200 leading-relaxed">
                "Architecture taught me to appreciate the beauty in urban landscapes, but Sarah showed me 
                how to feel it. Our first date was a sunset walk across the Brooklyn Bridge - cliché, maybe, 
                but perfect for us. We've been exploring the city together ever since."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Together Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Sarah and Marcus together"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/70 to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8 text-glass-50">
              <h3 className="font-editorial text-3xl font-bold mb-4">Together</h3>
              <p className="font-geometric text-lg text-champagne-200">
                Three years, countless rooftop dinners, and one perfect proposal later, 
                we're ready to celebrate our love story with all of you in the city that brought us together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;