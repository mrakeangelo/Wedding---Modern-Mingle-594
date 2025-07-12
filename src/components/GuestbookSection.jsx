import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageSquare, FiUser, FiSend, FiHeart } = FiIcons;

const GuestbookSection = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Emma & James',
      message: 'So excited to celebrate with you both! Your love story is truly inspiring.',
      timestamp: '2 days ago'
    },
    {
      id: 2,
      name: 'The Rodriguez Family',
      message: 'Wishing you both a lifetime of happiness and adventure in the city you love!',
      timestamp: '1 week ago'
    },
    {
      id: 3,
      name: 'Michael Chen',
      message: 'From your college friend - can\'t wait to dance the night away on that rooftop!',
      timestamp: '2 weeks ago'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        timestamp: 'Just now'
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-concrete-100 dark:bg-concrete-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            Say Something Before the Toast
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300 max-w-2xl mx-auto">
            Leave us a message to remember this special day by. We'll read them all before we say "I do."
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-glass-50 dark:bg-concrete-800 p-8 rounded-lg shadow-xl mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                Your Name
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-3 text-concrete-400" size={20} />
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                Your Message
              </label>
              <div className="relative">
                <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 text-concrete-400" size={20} />
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  placeholder="Share your thoughts, memories, or well wishes..."
                  required
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiSend} size={20} />
              <span>Leave Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-glass-50 dark:bg-concrete-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-copper-100 dark:bg-copper-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUser} className="text-copper-500" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-geometric font-semibold text-concrete-800 dark:text-champagne-400">
                      {message.name}
                    </h4>
                    <span className="text-sm text-concrete-500 dark:text-glass-400">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="font-geometric text-concrete-600 dark:text-glass-300 leading-relaxed">
                    {message.message}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-copper-500 hover:text-copper-600 transition-colors"
                >
                  <SafeIcon icon={FiHeart} size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;