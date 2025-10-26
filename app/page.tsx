import Countdown from "./components/Countdown";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import FeaturesShowcase from "./components/FeaturesShowcase";
import SignupForm from "./components/SignupForm";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
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
            <p className="text-xs sm:text-sm text-gray-500 px-2">
              Your credentials are secure and will be ready for login when we go live! 🔒
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
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Taatom. All rights reserved. ✈️🌍
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Your journey starts here. We&apos;ll notify you when we launch!
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

