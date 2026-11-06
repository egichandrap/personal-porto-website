import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 shadow-md mt-12 scroll-mt-20"
    >
      {/* Left - Image */}
      <div className="flex-shrink-0 relative w-56 h-56 md:w-72 md:h-72 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Image
          src="/egi.jpeg"
          alt="About me photo"
          fill
          sizes="(min-width: 768px) 288px, 224px"
          className="object-cover"
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
          I&apos;m a backend engineer with 5+ years of experience building scalable, resilient, and high-performance systems in enterprise and high-traffic environments. Specializing in Java (Spring Boot) and Go, I bring strong expertise in microservices architecture, event-driven systems (Kafka, RabbitMQ, MQTT), Kubernetes orchestration, and Clean Architecture principles.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          Since beginning my career in 2020, I have led backend initiatives and delivered production-ready systems across the telecom, fintech, IoT, and gov-tech sectors. My work includes engineering high-availability services for Telkomsel—such as emergency credit channels (*505#, SMS blast, RoaMax roaming), automated bonus quota injections, pay-later lending integrations (SmartPay), and real-time IoT telemetry pipelines (Patricia)—as well as enhancing and performance-tuning Pegadaian&apos;s restcore services to achieve high-throughput benchmarks exceeding 5,000 TPS per endpoint.
        </p>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          Beyond writing reliable code, I take pride in leading backend initiatives as PIC—from business process modeling, schema and query optimization across PostgreSQL, IBM DB2, MySQL, and Oracle, to configuring API Gateways (KrakeND) and managing containerized deployments across Kubernetes and OpenShift (OCP). I enjoy collaborating within cross-functional squads, running K6 performance benchmarks, and ensuring systems remain robust under national-scale demand.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-base sm:text-lg">
          <li>5+ years in high-scale &amp; enterprise backend</li>
          <li>High-throughput tuning (&gt;5,000 TPS per endpoint)</li>
          <li>Event-driven architecture (Kafka, RabbitMQ, MQTT)</li>
          <li>Kubernetes &amp; OpenShift (OCP) orchestration</li>
          <li>Clean Architecture &amp; DDD advocate</li>
          <li>B.S. in Informatics Engineering (GPA: 3.58 / 4.00)</li>
        </ul>

        <p className="mt-6 text-base sm:text-lg">
          One last thing, I&apos;m available for freelance work, so feel free to{" "}
          <a
            href="https://www.linkedin.com/in/egichandrapratama/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 dark:text-white underline underline-offset-4 decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-900 dark:hover:decoration-gray-300 transition-colors"
          >
            reach out
          </a>{" "}
          and say hello! I promise I don&apos;t bite{" "}
          <span role="img" aria-label="smiling face">
            🙂
          </span>
        </p>
      </div>
    </section>
  );
}
