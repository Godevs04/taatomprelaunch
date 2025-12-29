"use client";

import { Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              <Shield className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">Last Updated: December 25, 2025</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-purple-100 p-6 sm:p-8 lg:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Taatom (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50/50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>Account Information</strong>: Username, email address, full name, profile picture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>Content</strong>: Photos, videos, captions, location data, and other content you post</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>Device Information</strong>: Device type, operating system, unique device identifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>Location Data</strong>: GPS coordinates when you tag posts with location (optional)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Usage Data</strong>: How you interact with the app, features used, time spent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Log Data</strong>: IP address, access times, app crashes, performance data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Cookies and Tracking</strong>: Analytics data to improve app performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* App Tracking Transparency */}
          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">App Tracking Transparency (iOS)</h3>
            </div>
            <p className="text-gray-700">
              We do not track users across third-party apps or external websites without explicit user consent, in compliance with Apple App Tracking Transparency (ATT).
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="space-y-3 text-gray-700 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-xl p-6">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Process and display your posts and content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Enable social features (likes, comments, follows)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Send notifications about activity on your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Respond to your support requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Detect and prevent fraud or abuse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-purple-50/50 rounded-xl p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2">With Other Users</h3>
                <p className="text-gray-700 text-sm">Your public profile and posts are visible to other users</p>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                <p className="text-gray-700 text-sm">Third-party services that help us operate (hosting, analytics)</p>
              </div>
              <div className="bg-cyan-50/50 rounded-xl p-5 border-l-4 border-cyan-500">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700 text-sm">When required by law or to protect our rights</p>
              </div>
              <div className="bg-purple-50/50 rounded-xl p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
                <p className="text-gray-700 text-sm">In connection with a merger, acquisition, or sale</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your data:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">🔒</span>
                <span>Encryption of data in transit (HTTPS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">🔒</span>
                <span>Secure authentication and authorization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">🔒</span>
                <span>Regular security audits and updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">🔒</span>
                <span>Access controls and employee training</span>
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Access your personal data",
                "Correct inaccurate data",
                "Delete your account and data",
                "Export your data",
                "Opt-out of certain data processing",
                "Withdraw consent where applicable"
              ].map((right, idx) => (
                <div key={idx} className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                  <p className="text-gray-700 text-sm font-medium">{right}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-yellow-50/50 rounded-xl p-6 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Children&apos;s Privacy</h2>
            <p className="text-gray-700">
              Our app is not intended for users under 12 years of age. We do not knowingly collect personal information from children under 12. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
            </div>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 text-purple-100">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105"
            >
              Contact Us →
            </Link>
            <p className="mt-4 text-purple-200">Email: contact@taatom.com</p>
          </section>
        </div>

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
          <Link href="/copyrights" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Copyright Consent
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/contact" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

