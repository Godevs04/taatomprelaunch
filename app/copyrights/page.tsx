"use client";

import { Copyright, AlertTriangle, Shield, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CopyrightConsent() {
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
              <Copyright className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Copyright Consent and User Responsibility
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
          {/* Overview */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Taatom is a platform for sharing user-generated content. This document explains your responsibilities regarding copyright and intellectual property when using our service.
            </p>
          </section>

          {/* Your Copyright Responsibilities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Copyright Responsibilities</h2>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-500 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">When Posting Content</h3>
              <p className="text-gray-700 mb-4 font-semibold">By uploading content to Taatom, you confirm that:</p>
              
              <div className="space-y-4">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. You Own the Content</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>The content is your original creation, OR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>You have obtained all necessary rights and permissions to use the content</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. You Have Rights to Use Audio/Media</h4>
                  <p className="text-gray-700 mb-2 text-sm">Any music, audio, or media in your posts is either:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Your original creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Licensed for your use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>In the public domain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Used with explicit permission from the copyright holder</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. No Copyright Infringement</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>You will not post copyrighted material without authorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>You understand that posting copyrighted content without permission violates copyright law</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Taatom's Position */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Taatom&apos;s Position</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50/50 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">We Do Not Provide Copyrighted Music</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Taatom does not provide or license copyrighted music for use in your posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Taatom currently does not provide a licensed music library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>You are responsible for ensuring you have rights to use any audio</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50/50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">We Are Not Responsible</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Taatom is not responsible for copyright violations in user-uploaded content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>We act as a platform and do not review content for copyright compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>You are solely liable for any copyright infringement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* What Happens If You Violate Copyright */}
          <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">What Happens If You Violate Copyright</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Removal</h3>
                <p className="text-gray-700 mb-3">If we receive a valid copyright complaint (DMCA takedown notice), we will:</p>
                <ul className="space-y-2 text-gray-700 bg-white/60 rounded-lg p-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">→</span>
                    <span>Remove the infringing content immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">→</span>
                    <span>Notify you of the removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">→</span>
                    <span>May suspend or terminate your account for repeated violations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Consequences</h3>
                <ul className="space-y-2 text-gray-700 bg-white/60 rounded-lg p-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">⚠</span>
                    <span>Copyright holders may pursue legal action against you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">⚠</span>
                    <span>You may be liable for damages, legal fees, and other costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">⚠</span>
                    <span>Taatom will cooperate with valid legal requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Report Copyright Infringement */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How to Report Copyright Infringement</h2>
            </div>
            <p className="text-gray-700 mb-4">If you believe your copyright has been infringed:</p>
            
            <div className="space-y-4">
              <div className="bg-blue-50/50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Contact Us</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Email: contact@taatom.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Include: Description of copyrighted work, location of infringing content, your contact information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50/50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. DMCA Takedown Notice</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>We comply with the Digital Millennium Copyright Act (DMCA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Submit a formal DMCA notice with required information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>We will process valid notices promptly</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">To Avoid Copyright Issues</h3>
              
              <div className="space-y-4">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Use Original Content</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Create your own photos, videos, and audio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>This is the safest way to avoid copyright issues</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Use Licensed Content</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Use content from royalty-free or Creative Commons sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Verify the license allows commercial use if applicable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Attribute content as required by the license</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Get Permission</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Contact copyright holders for explicit permission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Keep records of permissions granted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Understand the scope of permission granted</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Taatom Music Library</h4>
                  <p className="text-gray-700 text-sm">
                    Taatom currently does not provide a licensed music library. Users may upload content only if they own or have rights to the audio used.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Agreement */}
          <section className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border-2 border-purple-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Agreement</h2>
            <p className="text-gray-700 mb-4 font-semibold">By using Taatom, you agree that:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>You understand your copyright responsibilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>You will not post copyrighted content without permission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>You accept full liability for copyright violations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>You will indemnify Taatom against copyright claims related to your content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>You understand that Taatom may remove content and suspend accounts for violations</span>
              </li>
            </ul>
          </section>

          {/* Copyright Confirmation Modal */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright Confirmation Modal</h2>
            <p className="text-gray-700 mb-4">
              When uploading content with audio, you will see a copyright confirmation modal that requires you to:
            </p>
            <ul className="space-y-2 text-gray-700 bg-white/60 rounded-lg p-4">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">1.</span>
                <span>Read and understand your responsibilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">2.</span>
                <span>Confirm you have rights to use the audio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">3.</span>
                <span>Agree to take full responsibility for copyright compliance</span>
              </li>
            </ul>
            <div className="mt-4 bg-yellow-100 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-800 font-semibold">
                ⚠️ <strong>You cannot proceed with uploads until you confirm your understanding and agreement.</strong>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>
            <p className="mb-6 text-purple-100">
              For copyright communication:
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
          <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Privacy Policy
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

