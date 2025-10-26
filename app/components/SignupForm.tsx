"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-white via-purple-50/50 to-white backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-200 text-center relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-7xl mb-6 inline-block"
          >
            🎉
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-6xl mb-4"
          >
            🌍
          </motion.div>
          <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Welcome Aboard!
          </h3>
          <p className="text-xl text-gray-700 mb-4 font-semibold">
            You&apos;re officially part of Taatom&apos;s early explorer community
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Check your email for confirmation. We&apos;ll notify you when we launch!
          </p>
          <motion.button
            onClick={() => setSuccess(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Sign up another email →
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-white via-purple-50/30 to-white backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-purple-100 relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✈️</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3 px-2">
              Join Early Access
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium px-2">
              Be among the first to explore Taatom
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm z-10 relative text-sm sm:text-base"
            placeholder="Enter your full name"
            style={{ zIndex: 10 }}
          />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm z-10 relative text-sm sm:text-base"
                placeholder="your.email@example.com"
                style={{ zIndex: 10 }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm pr-10 sm:pr-12 z-10 relative text-sm sm:text-base"
                  placeholder="Create a password (min. 6 characters)"
                  style={{ zIndex: 10 }}
                />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm pr-10 sm:pr-12 z-10 relative text-sm sm:text-base"
                  placeholder="Confirm your password"
                  style={{ zIndex: 10 }}
                />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
            </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating your account...
                </>
              ) : (
                <>
                  Join the Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </>
              )}
            </span>
          </motion.button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy. Your account will be ready when we launch! 🚀
          </p>
        </div>
        </form>
      </div>
    </motion.div>
  );
}

