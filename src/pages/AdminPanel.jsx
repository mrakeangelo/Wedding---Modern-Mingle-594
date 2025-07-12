import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiEye, FiEyeOff, FiSave, FiEdit, FiSettings } = FiIcons;

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication check (in real app, this would be more secure)
    if (loginData.email === 'admin@sarahandmarcus.com' && loginData.password === 'wedding2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-concrete-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-concrete-800 p-8 rounded-lg shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-copper-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="text-glass-50" size={32} />
            </div>
            <h1 className="font-editorial text-2xl font-bold text-champagne-400">
              Admin Login
            </h1>
            <p className="font-geometric text-glass-300 mt-2">
              Access the wedding website admin panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-geometric font-semibold text-glass-200 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full py-3 px-4 bg-concrete-700 border border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-glass-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-geometric font-semibold text-glass-200 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full py-3 px-4 pr-12 bg-concrete-700 border border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-glass-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-glass-400 hover:text-glass-200"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} size={20} />
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-geometric text-glass-400 text-sm">
              Demo credentials:<br />
              Email: admin@sarahandmarcus.com<br />
              Password: wedding2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-glass-50 dark:bg-concrete-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-editorial text-3xl font-bold text-concrete-800 dark:text-champagne-400 mb-2">
            Wedding Website Admin
          </h1>
          <p className="font-geometric text-concrete-600 dark:text-glass-300">
            Manage your wedding website content and settings
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'content', label: 'Content', icon: FiEdit },
              { id: 'rsvp', label: 'RSVP Management', icon: FiSettings },
              { id: 'preview', label: 'Preview', icon: FiEye }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-geometric font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-copper-500 text-glass-50'
                    : 'text-concrete-600 dark:text-glass-300 hover:text-copper-500'
                }`}
              >
                <SafeIcon icon={tab.icon} size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Management */}
        {activeTab === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-glass-50 dark:bg-concrete-800 p-6 rounded-lg shadow-lg">
              <h2 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
                Hero Section
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Couple Names
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah & Marcus"
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  />
                </div>
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2024-10-15"
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  />
                </div>
              </div>
            </div>

            <div className="bg-glass-50 dark:bg-concrete-800 p-6 rounded-lg shadow-lg">
              <h2 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
                Venue Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Skyline Rooftop"
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  />
                </div>
                <div>
                  <label className="block font-geometric font-semibold text-concrete-700 dark:text-glass-200 mb-2">
                    Address
                  </label>
                  <textarea
                    defaultValue="123 Skyline Drive, 45th Floor&#10;New York, NY 10001"
                    rows="3"
                    className="w-full py-3 px-4 bg-glass-100 dark:bg-concrete-700 border border-concrete-300 dark:border-concrete-600 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent text-concrete-800 dark:text-glass-200"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg flex items-center space-x-2"
            >
              <SafeIcon icon={FiSave} size={20} />
              <span>Save Changes</span>
            </motion.button>
          </motion.div>
        )}

        {/* RSVP Management */}
        {activeTab === 'rsvp' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-glass-50 dark:bg-concrete-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-6">
              RSVP Responses
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-concrete-200 dark:border-concrete-700">
                    <th className="text-left py-3 px-4 font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Attending
                    </th>
                    <th className="text-left py-3 px-4 font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Guests
                    </th>
                    <th className="text-left py-3 px-4 font-geometric font-semibold text-concrete-700 dark:text-glass-200">
                      Afterparty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-concrete-100 dark:border-concrete-700">
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      Emma Johnson
                    </td>
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      emma@example.com
                    </td>
                    <td className="py-3 px-4 font-geometric text-green-600 dark:text-green-400">
                      Yes
                    </td>
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      2
                    </td>
                    <td className="py-3 px-4 font-geometric text-green-600 dark:text-green-400">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-b border-concrete-100 dark:border-concrete-700">
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      Michael Chen
                    </td>
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      michael@example.com
                    </td>
                    <td className="py-3 px-4 font-geometric text-green-600 dark:text-green-400">
                      Yes
                    </td>
                    <td className="py-3 px-4 font-geometric text-concrete-800 dark:text-glass-200">
                      1
                    </td>
                    <td className="py-3 px-4 font-geometric text-red-600 dark:text-red-400">
                      No
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Preview */}
        {activeTab === 'preview' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-glass-50 dark:bg-concrete-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="font-editorial text-xl font-bold text-concrete-800 dark:text-champagne-400 mb-4">
              Website Preview
            </h2>
            <p className="font-geometric text-concrete-600 dark:text-glass-300 mb-6">
              Preview your wedding website as guests will see it
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-copper-500 hover:bg-copper-600 text-glass-50 font-geometric font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              <SafeIcon icon={FiEye} className="inline mr-2" size={20} />
              View Website
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;