"use client";

import { motion } from "framer-motion";
import { 
  Map, 
  Navigation, 
  Camera, 
  Search, 
  MessageCircle, 
  BarChart3, 
  Users, 
  Award, 
  Globe,
  Plane,
  Target
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Interactive Travel Maps",
    description: "Visualize your complete journey on beautiful interactive world maps with 3D globe views and route tracking",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Navigation,
    title: "GPS Location Tracking",
    description: "Automatic location detection with manual tagging. Track every place you've visited with detailed coordinates",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Camera,
    title: "Rich Content Sharing",
    description: "Share photos, videos, and travel stories with automatic location tagging. Document your adventures beautifully",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Search,
    title: "Travel Discovery",
    description: "Discover hidden gems and popular destinations through location-based feeds from fellow travelers worldwide",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Connect with fellow travelers instantly. Chat with people in your location and plan trips together",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Travel Analytics",
    description: "Track your travel statistics, distance traveled, countries visited, and celebrate your travel milestones",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Travel Community",
    description: "Join groups, follow travelers, and build your network. Connect with locals and explorers globally",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Unlock travel achievements, badges, and milestones. Gamify your journey and showcase your adventures",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access travel content from 200+ countries. Explore destinations through user-generated travel content",
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function FeaturesShowcase() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-400 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6 px-2">
            Powerful Features for Modern Travelers
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Everything you need to document, share, and discover amazing travel experiences
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

