import Image from "next/image";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Java", src: "/skills/java-original.svg" },
      { name: "Golang", src: "/skills/go-original.svg" },
      { name: "JavaScript", src: "/skills/javascript-original.svg" },
      { name: "PHP", src: "/skills/php-original.svg" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "PostgreSQL", src: "/skills/postgresql-original.svg" },
      { name: "MySQL", src: "/skills/mysql-original.svg" },
      { name: "Oracle", src: "/skills/oracle-original.svg" },
      { name: "Redis", src: "/skills/redis-original.svg" },
    ],
  },
  {
    label: "Messaging",
    skills: [
      { name: "Kafka", src: "/skills/apachekafka-original.svg" },
      { name: "RabbitMQ", src: "/skills/rabbitmq-original.svg" },
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      { name: "Docker", src: "/skills/docker-original.svg" },
      { name: "Kubernetes", src: "/skills/kubernetes-original.svg" },
    ],
  },
  {
    label: "Web",
    skills: [
      { name: "Next.js", src: "/skills/nextjs-original.svg" },
      { name: "Drupal", src: "/skills/drupal-original.svg" },
    ],
  },
  {
    label: "Testing",
    skills: [{ name: "K6", src: "/skills/k6-original.svg" }],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12 scroll-mt-20"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Skills
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-10 text-gray-900 dark:text-gray-100">
        The skills, tools and technologies I work with:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
