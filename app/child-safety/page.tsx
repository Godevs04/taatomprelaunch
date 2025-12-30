"use client";

import { Shield, Lock, Users, AlertTriangle, Eye, Ban, CheckCircle2, FileText, Mail, Settings, MessageSquare, Copyright, Search, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ChildSafetyPage() {
  useEffect(() => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";
    
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Child Safety & Compliance",
          item: `${siteUrl}/child-safety`,
        },
      ],
    };

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Child Safety & Compliance - Taatom",
      description: "Taatom's comprehensive child safety measures, content moderation systems, privacy controls, and compliance features.",
      datePublished: "2024-12-30",
      dateModified: "2024-12-30",
      author: {
        "@type": "Organization",
        name: "Taatom",
      },
      publisher: {
        "@type": "Organization",
        name: "Taatom",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/assets/Logo_Only.PNG`,
        },
      },
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(breadcrumbJsonLd);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(articleJsonLd);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-cyan-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-5"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl inline-block shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Child Safety & Compliance
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">Last Updated: December 30, 2024</p>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-purple-100 p-5 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* Reviewer Notice - Prominent Display */}
          <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border-2 border-green-200 shadow-lg">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-emerald-200/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg shadow-md">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Content Moderation Response
                    </span>
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border-l-4 border-green-500 shadow-sm">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
                        We remove harmful content within <span className="text-green-600 font-bold">24 hours</span> after report review.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5 bg-white/90 backdrop-blur-sm rounded-lg p-3.5 border-l-4 border-emerald-500 shadow-sm">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed">
                        For urgent issues contact: <a href="mailto:contact@taatom.com" className="text-emerald-600 hover:text-emerald-700 font-bold underline decoration-2 underline-offset-2 transition-colors">contact@taatom.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="bg-gradient-to-br from-purple-50/30 to-blue-50/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-purple-100">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Executive Summary
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
              Taatom is a travel-focused social media platform that enables users to share photos, videos, and location-based content. This document provides a comprehensive overview of the child safety measures, content moderation systems, privacy controls, and compliance features currently implemented in the application.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Minimum age requirement: 12+ (COPPA compliant)",
                "Comprehensive content moderation system",
                "Multi-category user reporting system",
                "Extensive privacy controls",
                "User blocking functionality",
                "Copyright protection measures",
                "Content guidelines clearly defined",
                "Privacy policy and terms of service published",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-green-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Age Restrictions & COPPA Compliance */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Age Restrictions & COPPA Compliance
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Age Requirement</h3>
                <div className="space-y-1.5 text-gray-700 text-sm">
                  <p><strong>Minimum Age:</strong> 12+ years</p>
                  <p><strong>Statement:</strong> &quot;You must be at least 12 years old to use the App&quot;</p>
                </div>
              </div>

              <div className="bg-green-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">COPPA Compliance</h3>
                <ul className="space-y-1.5 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>App targets users 12+ (effectively 13+ for COPPA purposes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No collection of personal information from children under 13</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Terms of Service clearly state minimum age requirement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Privacy Policy addresses children&apos;s privacy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Privacy Policy Statement</h3>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  &quot;Our app is not intended for users under 12 years of age. We do not knowingly collect personal information from children under 12. If you believe we have collected information from a child, please contact us immediately.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* Content Moderation System */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Content Moderation System
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">SuperAdmin Moderation Panel</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "View all posts with comprehensive filters",
                    "Activate/Deactivate posts",
                    "Flag posts for review",
                    "Delete posts permanently",
                    "Search functionality",
                    "Filter by status",
                    "Content moderation toggle",
                    "Admin review workflow",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">User Reporting System</h3>
                <p className="text-gray-700 mb-2.5 text-sm">Report Categories:</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { category: "Inappropriate Content", desc: "Content that violates community guidelines" },
                    { category: "Spam", desc: "Spam or misleading content" },
                    { category: "Harassment", desc: "Harassment or bullying" },
                    { category: "Fake Account", desc: "Impersonation or fake accounts" },
                    { category: "Other", desc: "Other violations" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/70 rounded-lg p-3 border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.category}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 space-y-1.5">
                  <p className="text-gray-700 font-semibold text-sm">Report Management Features:</p>
                  <ul className="space-y-1 text-gray-700 text-xs sm:text-sm grid sm:grid-cols-2 gap-1.5">
                    {[
                      "Report status tracking",
                      "Priority levels (low, medium, high, critical)",
                      "Admin notes field",
                      "Resolved by tracking",
                      "Resolution timestamp",
                      "Report reason field (up to 500 characters)",
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 mt-0.5 text-xs">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-red-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-red-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Prohibited Content</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "Violates any law or regulation",
                    "Infringes on intellectual property rights",
                    "Contains hate speech, harassment, or threats",
                    "Is pornographic, sexually explicit, or violent",
                    "Promotes illegal activities",
                    "Contains spam or misleading information",
                    "Violates others' privacy",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Data Protection */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Privacy & Data Protection
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="bg-purple-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Privacy Policy</h3>
                <p className="text-gray-700 mb-2 text-sm">
                  <strong>Location:</strong> <Link href="/privacy" className="text-purple-600 hover:underline">https://taatom.com/privacy</Link>
                </p>
                <p className="text-gray-700 text-sm"><strong>Last Updated:</strong> December 25, 2025</p>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Privacy Controls</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Profile Visibility", options: ["Public", "Followers only", "Private"] },
                    { title: "Email Visibility", options: ["Show/Hide email", "Default: Hidden"] },
                    { title: "Location Sharing", options: ["Show/Hide location", "User-controlled"] },
                    { title: "Message Permissions", options: ["Everyone", "Followers only", "None"] },
                    { title: "Follow Controls", options: ["Require approval", "Allow requests"] },
                    { title: "Activity Sharing", options: ["Share activity toggle", "Control visibility"] },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/70 rounded-lg p-3 border border-blue-100">
                      <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h4>
                      <ul className="space-y-1">
                        {item.options.map((opt, optIdx) => (
                          <li key={optIdx} className="text-gray-700 text-xs flex items-start gap-1.5">
                            <span className="text-blue-600 mt-0.5">•</span>
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-green-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Data Security Measures</h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "HTTPS encryption (data in transit)",
                    "Secure authentication (JWT tokens)",
                    "Password strength requirements",
                    "Email verification required",
                    "Session timeout (30 minutes)",
                    "Maximum login attempts (5 attempts)",
                    "Rate limiting on API endpoints",
                    "Input sanitization (XSS protection)",
                    "CSRF protection",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* User Safety Features */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                User Safety Features
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-purple-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">User Blocking</h3>
                <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Block/unblock users functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Automatic removal from following/followers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Blocked users cannot interact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Self-blocking prevention</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Content Reporting</h3>
                <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Report option in post menu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Easy-to-access reporting interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Admin review workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Priority-based processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Communication Safety */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Communication Safety
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-purple-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Direct Messaging</h3>
                <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                  {[
                    "Blocked users cannot send/receive messages",
                    "Chat authentication required",
                    "Message input sanitization",
                    "Mute chat notifications",
                    "Clear chat history",
                    "Read receipts",
                    "Typing indicators",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Comments</h3>
                <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                  {[
                    "Comment functionality on posts",
                    "Real-time comment updates",
                    "Input validation",
                    "User identification in comments",
                    "Comment deletion (by author)",
                    "Input sanitization",
                    "Authentication required",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Copyright Protection */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Copyright className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Copyright Protection
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Copyright Confirmation Modal</h3>
              <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                {[
                  "Copyright confirmation modal for user uploads",
                  "Users must confirm ownership before posting",
                  "Clear copyright responsibility statement",
                  "Required acknowledgment before content upload",
                  "Users responsible for content ownership",
                  "Copyright infringement prohibited",
                  "Content removal for violations",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* System-Wide Safety Features */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                System-Wide Safety Features
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Content Moderation", status: "Enabled by default" },
                { title: "User Registration Controls", status: "Implemented" },
                { title: "Location Tracking Controls", status: "User-controlled" },
                { title: "Push Notifications Controls", status: "Implemented" },
                { title: "Analytics Tracking Controls", status: "Implemented" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-lg p-3.5 sm:p-4 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Safety Features Summary Table */}
          <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-green-200 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-5">Safety Features Summary</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Content Safety</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Content Moderation Panel",
                    "User Reporting System",
                    "Content Guidelines",
                    "Copyright Protection",
                    "Content Filtering",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-lg p-2.5 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">User Safety</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "User Blocking",
                    "Privacy Controls",
                    "Message Controls",
                    "Follow Controls",
                    "Account Security",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-lg p-2.5 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Documentation */}
          <section>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2.5 rounded-lg shadow-md">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Compliance Documentation
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-purple-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-purple-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Age Restrictions</h3>
                <p className="text-gray-700 mb-2 text-sm"><strong>Minimum Age:</strong> 12+ years</p>
                <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                  <li>• Terms of Service: Line 20</li>
                  <li>• Privacy Policy: Lines 62-64</li>
                  <li>• App Store Listing: Declared in metadata</li>
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-4 sm:p-5 border-l-4 border-blue-500">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5">Content Moderation</h3>
                <ul className="space-y-1.5 text-gray-700 text-xs sm:text-sm">
                  {[
                    "SuperAdmin moderation panel",
                    "User reporting system",
                    "Content review workflow",
                    "Content removal capability",
                    "Account suspension capability",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 sm:p-7 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Conclusion</h2>
            <p className="mb-3 sm:mb-4 text-purple-100 text-sm sm:text-base">
              Taatom has implemented comprehensive child safety measures including:
            </p>
            <ul className="space-y-1.5 text-purple-100 text-xs sm:text-sm">
              {[
                "Age Restrictions: Clear 12+ age requirement with COPPA compliance",
                "Content Moderation: Full SuperAdmin moderation panel with review workflow",
                "User Reporting: Multi-category reporting system with priority tracking",
                "Privacy Controls: Extensive privacy settings for user protection",
                "Safety Features: User blocking, content filtering, and account controls",
                "Copyright Protection: Copyright confirmation for user uploads",
                "Policies: Published Terms of Service and Privacy Policy",
                "Data Protection: Security measures and data handling disclosure",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 sm:mt-4 text-purple-200 text-xs">
              All features are currently implemented and operational in the application codebase.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 sm:p-7 text-white text-center">
            <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              <h2 className="text-xl sm:text-2xl font-bold">Contact</h2>
            </div>
            <p className="mb-5 sm:mb-6 text-purple-100 text-sm sm:text-base">
              For questions about child safety or compliance:
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-50 transition-all duration-300 hover:scale-105"
            >
              Contact Us →
            </Link>
            <p className="mt-3 sm:mt-4 text-purple-200 text-xs sm:text-sm">Email: contact@taatom.com</p>
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

