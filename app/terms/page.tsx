"use client";

import { FileText, Scale, AlertCircle, Shield, Ban, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
              <Scale className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Terms of Service
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
          {/* Agreement to Terms */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Agreement to Terms</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Taatom (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these Terms, you may not access the App.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 mb-4">Taatom is a social media platform that allows users to:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Share photos and videos with location tags",
                "Connect with other users through follows, likes, and comments",
                "Discover travel destinations and experiences",
                "Create and manage collections of posts"
              ].map((feature, idx) => (
                <div key={idx} className="bg-purple-50/50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">User Accounts</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Creation</h3>
                <ul className="space-y-2 text-gray-700 bg-purple-50/50 rounded-xl p-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>You must be at least 12 years old to use the App</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>You must provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>You are responsible for maintaining account security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>One account per person</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
                <ul className="space-y-2 text-gray-700 bg-blue-50/50 rounded-xl p-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>You are responsible for all activity under your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>You must not share your account credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>You must notify us immediately of any unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>We reserve the right to suspend or terminate accounts that violate these Terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">User Content</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Ownership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>You retain ownership of content you post</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>By posting, you grant us a license to use, display, and distribute your content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>You represent that you have the right to post the content</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Guidelines</h3>
                <div className="bg-red-50/50 rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-gray-700 mb-3 font-semibold">You agree not to post content that:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Violates any law or regulation",
                      "Infringes on intellectual property rights",
                      "Contains hate speech, harassment, or threats",
                      "Is pornographic, sexually explicit, or violent",
                      "Promotes illegal activities",
                      "Contains spam or misleading information",
                      "Violates others' privacy"
                    ].map((guideline, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50/50 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Moderation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>We reserve the right to review, modify, or remove any content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>We may suspend or ban accounts that violate these guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Decisions regarding content are at our sole discretion</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Copyright and Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Copyright and Intellectual Property</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-purple-50/50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Responsibility</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>You are solely responsible for ensuring you have rights to use any content you post</li>
                  <li>You must not post copyrighted material without permission</li>
                  <li>You agree to indemnify us against copyright claims related to your content</li>
                </ul>
              </div>
              <div className="bg-blue-50/50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rights</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>The App and its features are protected by copyright and trademark laws</li>
                  <li>You may not copy, modify, or distribute our intellectual property without permission</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Prohibited Activities</h2>
            </div>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Use the App for any illegal purpose",
                "Attempt to gain unauthorized access to the App or other users' accounts",
                "Interfere with or disrupt the App's operation",
                "Use automated systems to access the App (bots, scrapers)",
                "Reverse engineer or attempt to extract source code",
                "Impersonate others or provide false information"
              ].map((activity, idx) => (
                <div key={idx} className="bg-red-50/50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-gray-700 text-sm">{activity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Termination */}
          <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without prior notice, for:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Violation of these Terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Illegal activity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>Fraud or abuse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span>At our discretion for any reason</span>
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">Upon termination:</p>
            <ul className="space-y-2 text-gray-700 mt-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">→</span>
                <span>Your right to use the App ceases immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">→</span>
                <span>We may delete your account and content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">→</span>
                <span>You remain liable for all obligations incurred before termination</span>
              </li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Disclaimers</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>The App is provided &quot;as is&quot; and &quot;as available&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>We do not guarantee uninterrupted or error-free service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>We may modify, suspend, or discontinue features at any time</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Accuracy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>We do not verify the accuracy of user-generated content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>We are not responsible for content posted by users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>You use the App at your own risk</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-yellow-50/50 rounded-xl p-6 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
            <p className="text-gray-700 mb-3">To the maximum extent permitted by law:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>We are not liable for any indirect, incidental, or consequential damages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Our total liability is limited to the amount you paid us (if any) in the past 12 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Some jurisdictions do not allow limitation of liability, so this may not apply to you</span>
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Dispute Resolution</h2>
            <p className="text-gray-700 mb-3">Any disputes arising from these Terms or the App will be resolved through:</p>
            <ol className="space-y-2 text-gray-700 bg-purple-50/50 rounded-xl p-6">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">1.</span>
                <span>Good faith negotiation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">2.</span>
                <span>Mediation (if negotiation fails)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">3.</span>
                <span>Binding arbitration or court proceedings (as applicable)</span>
              </li>
            </ol>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify users of material changes via in-app notification, email to registered users, or update to this page. Continued use of the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-6 text-purple-100">
              For any legal communication:
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
          <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
            Privacy Policy
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

