import Countdown from "./components/Countdown";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import FeaturesShowcase from "./components/FeaturesShowcase";
import SignupForm from "./components/SignupForm";
import ScrollProgress from "./components/ScrollProgress";
import { Plane, Globe, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Join Taatom - A revolutionary travel social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide. Be among the first to experience the future of travel sharing.",
  openGraph: {
    title: "Taatom - Travel Anywhere And Take Only Memories",
    description: "Join thousands of explorers documenting their journeys, visualizing routes, and connecting worldwide. Launching soon!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taatom - Travel Anywhere And Take Only Memories",
    description: "Join thousands of explorers documenting their journeys, visualizing routes, and connecting worldwide.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taatom.com";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Taatom",
    description: "Travel Anywhere And Take Only Memories",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Taatom",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide.",
    sameAs: [
      // Add social media links when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@taatom.com",
      contactType: "Customer Service",
    },
  };

  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Taatom",
    applicationCategory: "Social Networking Application",
    operatingSystem: "iOS, Android",
    description: "A travel-focused social platform to document journeys, visualize travel routes, and connect with fellow explorers worldwide.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <main className="min-h-screen relative">
        <ScrollProgress />
        {/* Hero Countdown Section */}
        <Countdown />

        {/* Stats Section */}
        <StatsSection />

        {/* About Section */}
        <AboutSection />

        {/* Features Showcase */}
        <FeaturesShowcase />

        {/* Signup Section */}
        <section id="signup" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 via-white to-cyan-50/30 relative overflow-hidden scroll-mt-20">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-2xl mx-auto relative z-10 px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
                Be Among the First Explorers
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 px-2">
                Create your account now and be ready when we launch
              </p>
              <p className="text-xs sm:text-sm text-gray-500 px-2 flex items-center justify-center gap-1">
                Your credentials are secure and will be ready for login when we go live! 
                <Shield className="w-4 h-4 inline text-purple-600" />
              </p>
            </div>
            <SignupForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Taatom</h3>
              <p className="text-purple-300 text-base sm:text-lg">Travel Anywhere And Take Only Memories</p>
            </div>
            
          {/* Footer Links */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/copyrights" className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline">
                Copyright Consent
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/child-safety" className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline">
                Child Safety
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/contact" className="text-purple-300 hover:text-white transition-colors duration-300 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
            
            <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap">
                © 2025 Taatom. All rights reserved. 
                <Plane className="w-4 h-4 inline" />
                <Globe className="w-4 h-4 inline" />
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Your journey starts here. We&apos;ll notify you when we launch!
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
