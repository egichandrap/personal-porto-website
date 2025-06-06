"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "SALT",
      logo: "/experience/salt-lg.svg",
      title: "Sr. Backend Engineer",
      date: "Jan 2021 - Present",
      points: [
        "Contributed as a backend engineer in PEGASUS Squad, delivering emergency credit and data package services (*505#, SMS, and international roaming) using Java, Spring Boot, MySQL, Kafka, Redis, and RabbitMQ.",
        "Developed bonus quota injection features for new IMEI activations, ORBIT packages, and Telkomsel campaigns, leveraging Go and microservices architecture.",
        "Lead backend development of ProtekSi Kecil (parental control mini-app in MyTelkomsel) using Go, PostgreSQL, Kubernetes, and Clean Architecture.",
        "Implemented Telkomsel SmartPay's backend, integrating credit-based purchases with third-party lending services, built using Go, PostgreSQL, Kafka, and CI/CD.",
        "Built enterprise features for Telkomsel.com in BeOne Squad using Drupal 8, PHP, MySQL, and Docker.",
        "Developed backend for DigiAds (Telkomsel's digital ads platform) with Drupal 8, PHP, and MySQL to support campaign and analytics services.",
        "Applied Clean Architecture principles consistently across services for better scalability, testability, and code maintainability.",
        "Utilized DevOps tools such as Docker, Kubernetes, and GitLab CI/CD to ensure smooth deployments and environment management.",
      ],
      
    },
    {
      company: "SiPajak",
      logo: "/experience/sipajak.avif",
      title: "Backend Developer",
      date: "Jul 2020 - Dec 2020",
      points: [
        "Developed and maintained backend services for SiPajak.com, a tax automation platform supporting SPT reporting, e-invoicing, and e-filing for businesses.",
        "Built core features for tax document generation including invoices, withholding receipts, and tax payments using Java and JHipster framework.",
        "Contributed to the development of Sipajak.com’s website frontend and backend integration using Drupal 8 and MySQL.",
        "Implemented RESTful APIs to support seamless user interactions and third-party service integrations for tax reporting processes.",
        "Collaborated closely with frontend developers and tax domain experts to ensure compliance and usability across features.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Experience
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Here is a quick summary of my most recent experiences:
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <div className="flex-shrink-0 w-24 h-24 mb-4 md:mb-0 md:mr-6">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
