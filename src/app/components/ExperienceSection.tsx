import Image from "next/image";

type ProjectPoint = {
  highlight: string;
  text: string;
};

type ClientEngagement = {
  client: string;
  logo: string;
  badge: string;
  badgeTheme: "red" | "emerald" | "blue";
  projects: ProjectPoint[];
};

type Experience = {
  company: string;
  logo: string;
  title: string;
  date: string;
  clients?: ClientEngagement[];
  points?: ProjectPoint[];
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      company: "SALT",
      logo: "/experience/salt-lg.svg",
      title: "Sr. Backend Engineer",
      date: "Jan 2021 - Present",
      clients: [
        {
          client: "Telkomsel",
          logo: "/experience/telkomsel.svg",
          badge: "Telecom & Digital Services",
          badgeTheme: "red",
          projects: [
            {
              highlight: "Telkomsel Mobile Loan (PEGASUS Squad)",
              text: "Developed and maintained high-availability backend services for emergency credit and data package offerings via multiple channels (*505#, SMS Blast, RoaMax international roaming) using Java Spring Boot, Kafka, RabbitMQ, Redis caching, and optimized MySQL/Oracle queries; conducted performance testing with K6.",
            },
            {
              highlight: "Telkomsel Bonus Quota Injection (PEGASUS Squad)",
              text: "Built backend systems for automated quota bonus distribution for IMEI registration, ORBIT purchases, and campaign rewards using Java Spring Boot, RESTful APIs, and Kafka event-driven architecture to handle high-traffic campaign surges.",
            },
            {
              highlight: "ProtekSi Kecil (T-Menu MyTelkomsel)",
              text: "Served as PIC Backend Engineer leading the backend team and delivery timelines; designed business process flows and system architecture, developed Go microservices with Clean Architecture, configured KrakeND API Gateway, and deployed to Kubernetes.",
            },
            {
              highlight: "Telkomsel Patricia (patricia.co.id)",
              text: "Engineered scalable backend services for a digital IoT platform focused on device management and real-time telemetry processing using Go, MQTT protocol with EMQX broker, PostgreSQL schema optimization for high-volume telemetry, and Kubernetes.",
            },
            {
              highlight: "Telkomsel SmartPay",
              text: "Developed backend microservices using Go and Clean Architecture in Kubernetes clusters, integrating pay-later credit purchasing with external lending partner services.",
            },
            {
              highlight: "Telkomsel.com Enterprise & DigiAds",
              text: "Developed enterprise backend features for Telkomsel.com (BeOne Squad) and digital advertising services for DigiAds (SG Squad) using Drupal 8, PHP, MySQL, and Docker.",
            },
            {
              highlight: "Engineering Best Practices & DevOps",
              text: "Consistently enforced Clean Architecture principles across microservices, conducted code reviews, and managed CI/CD pipelines to ensure reliable containerized deployments in Kubernetes.",
            },
          ],
        },
        {
          client: "PT Pegadaian",
          logo: "/experience/pegadaian.svg",
          badge: "Core Banking & Fintech",
          badgeTheme: "emerald",
          projects: [
            {
              highlight: "Restcore Enhancement",
              text: "Developed and enhanced existing core REST endpoints using Java and Golang to support high-reliability transaction services.",
            },
            {
              highlight: "High-Throughput Performance Tuning (>5,000 TPS)",
              text: "Executed deep performance profiling and database query tuning across PostgreSQL and IBM DB2, successfully meeting and exceeding the target threshold of 5,000 TPS per endpoint.",
            },
            {
              highlight: "Enterprise Container Deployment",
              text: "Deployed, configured, and maintained microservices workloads on Red Hat OpenShift Container Platform (OCP).",
            },
          ],
        },
      ],
    },
    {
      company: "SiPAJAK.com",
      logo: "/experience/sipajak.avif",
      title: "Backend Developer",
      date: "Jul 2020 - Dec 2020",
      points: [
        {
          highlight: "E-Filing & Tax Automation Platform",
          text: "Developed and maintained backend services for SiPAJAK.com, supporting e-filing SPT reporting, invoicing, and tax management for businesses.",
        },
        {
          highlight: "Core Features & Services",
          text: "Built tax document generation and payment management features using Java and the JHipster framework.",
        },
        {
          highlight: "Web & Database Integration",
          text: "Managed Drupal-based web modules and optimized MySQL database performance for tax reporting operations.",
        },
        {
          highlight: "Cross-Functional Collaboration",
          text: "Implemented RESTful APIs and collaborated closely with frontend developers and tax domain experts to ensure compliance and seamless integration.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12 scroll-mt-20"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Experience
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Here is a quick summary of my most recent experiences:
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-gray-50 dark:bg-gray-800 rounded-2xl shadow p-6 sm:p-8 gap-6"
          >
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-700/60 rounded-xl p-2 flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {exp.title}
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 px-3.5 py-1 rounded-full self-start sm:self-auto">
                  {exp.date}
                </span>
              </div>

              {/* Client Engagements / Sub-containers */}
              {exp.clients ? (
                <div className="flex flex-col gap-5">
                  {exp.clients.map((client) => {
                    const badgeClasses =
                      client.badgeTheme === "red"
                        ? "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900"
                        : client.badgeTheme === "emerald"
                        ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900"
                        : "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900";

                    return (
                      <div
                        key={client.client}
                        className="bg-white dark:bg-gray-900/60 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 relative flex-shrink-0 bg-white rounded-lg p-1.5 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
                              <Image
                                src={client.logo}
                                alt={`${client.client} logo`}
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                              {client.client}
                            </h4>
                          </div>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeClasses}`}
                          >
                            {client.badge}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2.5">
                          {client.projects.map((proj, i) => (
                            <li key={i} className="leading-relaxed">
                              <strong className="font-semibold text-gray-900 dark:text-white">
                                {proj.highlight}:
                              </strong>{" "}
                              {proj.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2.5">
                  {exp.points?.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        {point.highlight}:
                      </strong>{" "}
                      {point.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
