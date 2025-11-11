"use client";

import { useState, FormEvent, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Globe, Plane, Rocket, CheckCircle2, XCircle } from "lucide-react";

const PASSWORD_REQUIREMENTS = [
  { label: "At least 8 characters", test: (value: string) => value.length >= 8 },
  { label: "One uppercase letter", test: (value: string) => /[A-Z]/.test(value) },
  { label: "One lowercase letter", test: (value: string) => /[a-z]/.test(value) },
  { label: "One number", test: (value: string) => /\d/.test(value) },
  { label: "One special character", test: (value: string) => /[^A-Za-z0-9]/.test(value) },
] as const;

export default function SignupForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState<"idle" | "checking" | "available" | "taken" | "invalid">("idle");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Debounced username validation
  const checkUsername = useCallback(async (value: string) => {
    if (!value || value.length < 3) {
      setUsernameStatus("idle");
      setUsernameMessage("");
      return;
    }

    // Validate format first
    const usernameRegex = /^[a-z0-9_.]+$/i;
    if (!usernameRegex.test(value)) {
      setUsernameStatus("invalid");
      setUsernameMessage("Username can only contain letters, numbers, and underscores");
      return;
    }

    if (value.length < 3 || value.length > 30) {
      setUsernameStatus("invalid");
      setUsernameMessage("Username must be between 3 and 30 characters");
      return;
    }

    setUsernameStatus("checking");
    setUsernameMessage("Checking availability...");

    try {
      const response = await fetch("/api/check-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: value }),
      });

      const data = await response.json();

      if (data.available) {
        setUsernameStatus("available");
        setUsernameMessage("Username is available!");
      } else {
        setUsernameStatus("taken");
        setUsernameMessage(data.error || "Username already exists");
        setToast({
          message: data.error || "Username already exists. Please try another username.",
          type: "error",
        });
      }
    } catch (err) {
      setUsernameStatus("idle");
      setUsernameMessage("");
    }
  }, []);

  // Debounce username check
  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) {
        checkUsername(username);
      } else {
        setUsernameStatus("idle");
        setUsernameMessage("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username, checkUsername]);

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const unmetRequirements = PASSWORD_REQUIREMENTS.filter((requirement) => !requirement.test(password));
    if (unmetRequirements.length > 0) {
      const requirementText = unmetRequirements.map((requirement) => requirement.label.toLowerCase()).join(", ");
      setError(`Password must include ${requirementText}.`);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (usernameStatus !== "available") {
      setError("Please choose a valid and available username");
      setToast({
        message: "Username already exists. Please try another username.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordTouched(false);
      setUsernameStatus("idle");
      setUsernameMessage("");
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
            className="mb-6 inline-block"
          >
            <PartyPopper className="w-20 h-20 text-purple-600" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mb-4"
          >
            <Globe className="w-16 h-16 text-blue-600 mx-auto" />
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
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-20 left-1/2 z-50 transform -translate-x-1/2"
          >
            <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl backdrop-blur-md ${
              toast.type === "error" 
                ? "bg-red-50 border-2 border-red-300 text-red-700" 
                : "bg-green-50 border-2 border-green-300 text-green-700"
            }`}>
              {toast.type === "error" ? (
                <XCircle className="w-5 h-5" />
              ) : (
                <CheckCircle2 className="w-5 h-5" />
              )}
              <span className="font-semibold text-sm sm:text-base">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6 sm:mb-8">
            <div className="mb-3 sm:mb-4">
              <Plane className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600 mx-auto" />
            </div>
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
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, "");
                    setUsername(value);
                  }}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm pr-10 sm:pr-12 z-10 relative text-sm sm:text-base ${
                    usernameStatus === "available"
                      ? "border-green-400 focus:ring-2 focus:ring-green-500 hover:border-green-300"
                      : usernameStatus === "taken" || usernameStatus === "invalid"
                      ? "border-red-400 focus:ring-2 focus:ring-red-500 hover:border-red-300"
                      : usernameStatus === "checking"
                      ? "border-yellow-400 focus:ring-2 focus:ring-yellow-500 hover:border-yellow-300"
                      : "border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-purple-300"
                  }`}
                  placeholder="username"
                  style={{ zIndex: 10 }}
                />
                {usernameStatus === "checking" && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg className="animate-spin h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
                {usernameStatus === "available" && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                )}
                {usernameStatus === "taken" && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {usernameMessage && (
                <p className={`mt-1 text-xs ${
                  usernameStatus === "available"
                    ? "text-green-600"
                    : usernameStatus === "taken" || usernameStatus === "invalid"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}>
                  {usernameMessage}
                </p>
              )}
              {username && usernameStatus === "idle" && username.length < 3 && (
                <p className="mt-1 text-xs text-gray-500">
                  Username must be at least 3 characters
                </p>
              )}
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
                  onChange={(e) => {
                    if (!passwordTouched) {
                      setPasswordTouched(true);
                    }
                    setPassword(e.target.value);
                  }}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm pr-10 sm:pr-12 z-10 relative text-sm sm:text-base"
                  placeholder="Create a password (min. 8 characters with letters, numbers, and symbols)"
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
            {(passwordTouched || password) && (
              <ul className="mt-2 space-y-1 rounded-xl bg-white/60 p-3 text-xs sm:text-sm shadow-sm border border-gray-100">
                {PASSWORD_REQUIREMENTS.map((requirement) => {
                  const isMet = requirement.test(password);
                  return (
                    <li key={requirement.label} className="flex items-center gap-2">
                      {isMet ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400" />
                      )}
                      <span className={isMet ? "text-green-600" : "text-gray-600"}>{requirement.label}</span>
                    </li>
                  );
                })}
              </ul>
            )}

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

          <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
            By signing up, you agree to our Terms of Service and Privacy Policy. Your account will be ready when we launch! 
            <Rocket className="w-4 h-4 inline text-purple-600" />
          </p>
        </div>
        </form>
      </div>
    </motion.div>
  );
}

