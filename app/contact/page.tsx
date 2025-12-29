"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "error" | "success" } | null>(null);

  // Auto-hide toast
  const showToast = (message: string, type: "error" | "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!subject.trim()) {
      setError("Subject is required");
      return;
    }

    if (!message.trim()) {
      setError("Message is required");
      return;
    }

    if (message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      showToast("Your message has been sent successfully! We'll get back to you soon.", "success");
    } catch (err: any) {
      const errorMessage = err.message || "Failed to send message. Please try again.";
      setError(errorMessage);
      showToast(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  if (success && !error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-cyan-50/30 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-white via-purple-50/50 to-white backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-200 text-center max-w-2xl w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 inline-block"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500" />
            </motion.div>
            <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Message Sent!
            </h3>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              Thank you for contacting us
            </p>
            <p className="text-sm text-gray-500 mb-8">
              We&apos;ve received your message and will get back to you as soon as possible. Typically, we respond within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  setSuccess(false);
                  setError("");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Another Message
              </motion.button>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-cyan-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl inline-block">
              <Mail className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-6">
            Have a question or feedback? We&apos;d love to hear from you!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-purple-100 p-6 sm:p-8 lg:p-12 relative overflow-hidden group"
        >
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm text-sm sm:text-base"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none transition-all bg-white text-gray-900 placeholder-gray-400 hover:border-purple-300 shadow-sm text-sm sm:text-base resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                <p className="mt-2 text-xs text-gray-500">
                  Minimum 10 characters required
                </p>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-2">
                You can also reach us directly at:
              </p>
              <a
                href="mailto:contact@taatom.com"
                className="text-purple-600 hover:text-purple-700 font-semibold text-lg hover:underline inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                contact@taatom.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Home
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/terms" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Terms of Service
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/copyrights" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Copyright Consent
          </Link>
        </div>
      </div>
    </main>
  );
}

