import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiCheck, FiX } = FiIcons;

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guests: '1',
    dietary: '',
    afterparty: false,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attending: '',
        guests: '1',
        dietary: '',
        afterparty: false,
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 bg-concrete-100 dark:bg-concrete-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-glass-50 dark:bg-concrete-800 p-12 rounded-lg shadow-xl"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="text-green-500" size={32} />
            </div>
            <h2 className="font-editorial text-3xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
              Thank You!
            </h2>
            <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-concrete-100 dark:bg-concrete-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
            RSVP
          </h2>
          <div className="w-24 h-1 bg-copper-500 mx-auto mb-8"></div>
          <p className="font-geometric text-lg text-concrete-600 dark:text-glass-300">
            Join us for an unforgettable evening in the city. Please respond by September 15th.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-glass-50 dark:bg-concrete-800 p-8 rounded-lg shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 text-concrete-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-3 text-concrete-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Phone and Attendance */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <SafeIcon icon={FiPhone} className="absolute left-3 top-3 text-concrete-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                  Will you attend? *
                </label>
                <select
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                {/* Number of Guests */}
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Number of Guests (including yourself)
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                {/* Dietary Restrictions */}
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                    placeholder="Any dietary restrictions or allergies?"
                  />
                </div>

                {/* Afterparty */}
                <div className="bg-copper-50 dark:bg-copper-900/20 p-6 rounded-lg">
                  <h3 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
                    Meet Us at the Bar
                  </h3>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="afterparty"
                      checked={formData.afterparty}
                      onChange={handleChange}
                      className="w-5 h-5 text-copper-500 bg-glass-100 dark:bg-concrete-700 border-concrete-300 dark:border-concrete-600 rounded focus:ring-copper-500"
                    />
                    <span className="font-geometric text-concrete-700 dark:text-glass-200">
                      Yes, I'll join the afterparty! (9:00 PM - Late)
                    </span>
                  </label>
                  <p className="font-geometric text-sm text-concrete-600 dark:text-glass-300 mt-2">
                    Continue the celebration with cocktails, dancing, and city views
                  </p>
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                placeholder="Share your well wishes or favorite memory..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;