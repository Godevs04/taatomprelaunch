"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🗺️",
    title: "Travel Documentation",
    description: "Comprehensive location tracking and mapping with GPS-based tagging",
  },
  {
    icon: "🌍",
    title: "Interactive Maps",
    description: "Visualize your travel routes on interactive world maps and 3D globes",
  },
  {
    icon: "📸",
    title: "Content Sharing",
    description: "Share photos, videos, and travel experiences with location tagging",
  },
  {
    icon: "🔍",
    title: "Travel Discovery",
    description: "Discover new destinations through user content and location feeds",
  },
  {
    icon: "👥",
    title: "Travel Community",
    description: "Connect with fellow travelers and locals worldwide",
  },
  {
    icon: "📊",
    title: "Travel Analytics",
    description: "Track your travel statistics, distance traveled, and milestones",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-purple-100 mb-10 sm:mb-12 md:mb-16"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
              About TeamTaatom
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-purple-600 font-semibold mb-4 sm:mb-5 md:mb-6 px-2">
              Travel Anywhere And Take Only Memories
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              TeamTaatom is a travel-focused social media platform that combines photo/video sharing 
              with comprehensive location tracking and mapping features. Built for travelers who want to 
              document their journeys, discover new places, and connect with fellow explorers through 
              location-based content.
            </p>
          </div>

          {/* Key Value Propositions */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-purple-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">🌍 Journey Visualization</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Interactive world maps showing your complete travel routes and visited locations with distance calculations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">✈️ Location Discovery</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Find and explore new places through user content, location feeds, and travel inspiration from fellow explorers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">📱 Real-Time Communication</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Connect with fellow travelers through real-time chat, location-based messaging, and collaborative trip planning.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-pink-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">📊 Travel Analytics</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Track your travel statistics, journey timeline, achievements, and visualize your travel patterns and milestones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12 px-2">
            What Makes Taatom Special
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Ready to Start Your Journey?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 opacity-90 px-2">
              Join thousands of travelers who are already documenting their adventures on Taatom
            </p>
            <button
              onClick={() => {
                const signupSection = document.getElementById("signup");
                signupSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              Get Early Access →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

