"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Set launch date (change this to your actual launch date)
  const launchDate = new Date("2025-12-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleScrollToSignup = () => {
    const signupSection = document.getElementById("signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Gradient Background - stronger match to number gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-green-600/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-cyan-600/15 to-green-600/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-green-600/12 via-cyan-600/12 to-blue-600/12"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      
      {/* Animated Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.3;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
              }}
              initial={{ opacity: opacity }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                opacity: [opacity, opacity * 1.5, opacity],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
      
      {/* Animated Orbs/Glow Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/15 to-blue-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Mesh Gradient Overlay - Enhanced to match number gradient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(22,163,74,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/5"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-5 sm:mb-6 md:mb-7 relative flex justify-center items-center"
        >
          {/* Logo - merged with background */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="relative z-10"
          >
            {/* Subtle glow effect matching background gradient */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-green-600/10 rounded-full blur-2xl"></div>
            </div>
            
            {/* Logo image */}
            <div className="relative z-10">
              <Image 
                src="/assets/Logo_Only.png" 
                alt="Taatom Logo" 
                width={350}
                height={350}
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain mx-auto drop-shadow-2xl"
                priority
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(37, 99, 235, 0.15)) drop-shadow(0 10px 20px rgba(8, 145, 178, 0.1))"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[84px] mb-3 sm:mb-4 md:mb-5 tracking-normal px-2 relative inline-block uppercase font-bold leading-tight"
          style={{
            // background: "linear-gradient(to right, #2563eb, #06b6d4, #16a34a)",
            background: "linear-gradient(to right,black,black)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "var(--font-playfair), serif",
            fontWeight: "700",
            letterSpacing: "0.05em",
          }}
        >
          TAATOM
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-3 sm:mb-4 font-semibold px-2"
        >
          Travel Anywhere And Take Only Memories
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2"
        >
          Join thousands of explorers documenting their journeys, visualizing routes, and connecting worldwide
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto px-2"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-blue-200/50 shadow-xl relative overflow-hidden group hover:border-blue-300/70"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-3 tracking-tight">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 uppercase tracking-wider font-medium">
                  {unit.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <motion.button
            onClick={handleScrollToSignup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white text-purple-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-white/95 transition-all duration-300 shadow-2xl overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join the Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20"
              initial={false}
            />
          </motion.button>
          
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 backdrop-blur-md text-gray-800 border-2 border-blue-300/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-xl w-full sm:w-auto"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

