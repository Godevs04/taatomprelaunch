"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Globe, Plane, Calendar } from "lucide-react";

const stats = [
  { label: "Early Explorers", value: 250, suffix: "+", icon: Users },
  { label: "Countries Covered", value: 150, suffix: "+", icon: Globe },
  { label: "Journeys Documented", value: 100, suffix: "+", icon: Plane },
  { label: "Launch Days", value: 365, suffix: "", icon: Calendar },
];

export default function StatsSection() {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          setCounted(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [counted]);

  return (
    <section id="stats" className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
            Join a Growing Community
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Thousands of travelers are already preparing for the journey of a lifetime
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className="mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                {counted ? (
                  <CountUpAnimation target={stat.value} />
                ) : (
                  stat.value
                )}
                {stat.suffix}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}

