"use client";

import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 shadow-md mt-12"
    >
      {/* Left - Image */}
      <div className="flex-shrink-0 relative w-56 h-56 md:w-72 md:h-72 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Image
          src="/egi.jpeg"
          alt="About me photo"
          fill
          sizes="(max-width: 768px) 100vw, 288px"
          className="object-cover"
          priority
        />
      </div>

      {/* Right - Text Content */}
      <div className="flex-1 text-gray-900 dark:text-gray-100">
        <div className="mb-4">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
            About me
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Curious about me? Here you have it:
        </h2>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          I&apos;m a backend engineer specializing in Java and Go, with over 4 years of experience building scalable, resilient, and high-performance systems. I care deeply about clean architecture, efficient microservices, and delivering backend solutions that drive impactful digital products.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
        Since starting my professional journey in 2020, I&apos;ve contributed to national-scale products across the telecom, fintech, and gov-tech sectors—helping teams ship robust backend services for features like emergency credit, quota injection, and digital payment integrations.
        I take pride in understanding both the technical and business sides of software development—translating complex logic into maintainable code while aligning with product goals and user impact. I&apos;m a proactive problem-solver who enjoys collaborating within squads and shipping meaningful features.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
        Outside of coding, I enjoy exploring new technologies and architectural patterns, staying updated with backend engineering trends, and occasionally mentoring or supporting junior devs. I&apos;m always excited to work on challenging projects that push the boundaries of backend innovation.
        </p>
        <ul className="grid grid-cols-2 gap-4 list-disc list-inside text-base sm:text-lg">
          <li>Bachelor of Informatics Engineering</li>
          <li>Backend-first mindset</li>
          <li>Clean architecture advocate</li>
          <li>Available for meaningful collaboration opportunities</li>
        </ul>

        <p className="mt-6 text-base sm:text-lg">
          One last thing, I&apos;m available for freelance work, so feel free to
          reach out and say hello! I promise I don&apos;t bite{" "}
          <span role="img" aria-label="smiling face">
            🙂
          </span>
        </p>
      </div>
    </section>
  );
}
