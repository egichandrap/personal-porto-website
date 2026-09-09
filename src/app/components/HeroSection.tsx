import Image from "next/image";
import { FaMapMarkerAlt, FaCheckCircle, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-t-3xl p-8 sm:p-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-16 shadow-md">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Hi, I&apos;m Egi Chandra <span role="img" aria-label="waving hand">👋</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-gray-600 dark:text-gray-400">
            Backend Engineer · Java &amp; Go
          </p>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-xl">
          I build distributed and high-scale backend systems for products used
          at national scale across telecom, fintech, and gov-tech — working
          with microservices, message brokers, and clean architecture to ship
          reliable services.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/CV.Egi-Chandra-Pratama.pdf"
            download
            className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#work"
            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
        </div>

        {/* Location and Availability */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-600 dark:text-green-400" />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600 dark:text-green-400" />
            <span>Available for new opportunity</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-gray-700 dark:text-gray-300 text-2xl">
          <a href="https://github.com/egichandrap" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/egichandrapratama/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/masegiiiiiii/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex-shrink-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Image
          src="/DSC_2362.jpeg"
          alt="Portrait of Egi Chandra Pratama"
          fill
          sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 192px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
