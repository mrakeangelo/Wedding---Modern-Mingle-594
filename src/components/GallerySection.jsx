import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGrid, FiArrowRight, FiX } = FiIcons;

const GallerySection = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'story'
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      caption: 'First coffee date at our favorite café'
    },
    {
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Sunset walk across the Brooklyn Bridge'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      caption: 'Art gallery opening where we met'
    },
    {
      url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      caption: 'Rooftop dinner on our anniversary'
    },
    {
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      caption: 'The perfect proposal moment'
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Celebrating with champagne'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-glass-50 dark:bg-concrete-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-2xl mx-auto">
            From first meetings to forever moments, here's our story in pictures.
          </p>
        </motion.div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-glass-100 dark:bg-concrete-700 p-2 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-lg font-geometric font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-copper-500 text-glass-50'
                  : 'text-concrete-600 dark:text-glass-300 hover:text-copper-500'
              }`}
            >
              <SafeIcon icon={FiGrid} className="inline mr-2" size={16} />
              Grid View
            </button>
            <button
              onClick={() => setViewMode('story')}
              className={`px-6 py-2 rounded-lg font-geometric font-medium transition-colors ${
                viewMode === 'story'
                  ? 'bg-copper-500 text-glass-50'
                  : 'text-concrete-600 dark:text-glass-300 hover:text-copper-500'
              }`}
            >
              <SafeIcon icon={FiArrowRight} className="inline mr-2" size={16} />
              Story View
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        {viewMode === 'grid' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-glass-50 font-geometric text-sm">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex overflow-x-auto space-x-6 pb-4"
            style={{ scrollbarWidth: 'thin' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 relative cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-80 h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/80 to-transparent rounded-lg">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-glass-50 font-geometric text-sm">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-concrete-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-concrete-800/80 text-glass-50 p-2 rounded-full hover:bg-concrete-700/80 transition-colors"
              >
                <SafeIcon icon={FiX} size={24} />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-screen object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-concrete-900/80 to-transparent p-6 rounded-b-lg">
                <p className="text-glass-50 font-geometric text-lg">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;