import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="px-4 sm:px-8 mt-12 mb-8 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md text-center">
        <div className="mb-4 flex justify-center">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
            Contact
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Let&apos;s work together
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
          I&apos;m open to backend engineering opportunities and freelance
          projects. The fastest way to reach me is on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/egichandrapratama/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Get in touch on LinkedIn
          </a>
          <a
            href="/CV.Egi-Chandra-Pratama.pdf"
            download
            className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8 text-gray-700 dark:text-gray-300 text-2xl">
          <a
            href="https://github.com/egichandrap"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/egichandrapratama/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/masegiiiiiii/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Egi Chandra Pratama
        </p>
      </div>
    </footer>
  );
}
