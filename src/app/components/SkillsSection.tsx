"use client";

import Image from "next/image";

const skills = [
  { name: "Java", src: "/skills/java-original.svg" },
  { name: "Golang", src: "/skills/go-original.svg" },
  { name: "Javascript", src: "/skills/javascript-original.svg" },
  { name: "Kafka", src: "/skills/apachekafka-original.svg" },
  { name: "Next.js", src: "/skills/nextjs-original.svg" },
  { name: "Drupal", src: "/skills/drupal-original.svg" },
  { name: "Kubernetes", src: "/skills/kubernetes-original.svg" },
  { name: "K6", src: "/skills/k6-original.svg" },
  { name: "MySQL", src: "/skills/mysql-original.svg" },
  { name: "PostgreSQL", src: "/skills/postgresql-original.svg" },
  { name: "PHP", src: "/skills/php-original.svg" },
  { name: "Redis", src: "/skills/redis-original.svg" },
  { name: "RabbitMQ", src: "/skills/rabbitmq-original.svg" },
  { name: "Oracle", src: "/skills/oracle-original.svg" },
  { name: "Docker", src: "/skills/docker-original.svg" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Skills
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        The skills, tools and technologies I am really good at:
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-8 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] flex-shrink-0 opacity-100"
          >
            <div className="w-16 h-16 relative mb-2">
              <Image
                src={skill.src}
                alt={skill.name}
                fill
                sizes="64px"
                className="object-contain"
                priority={index < skills.length}
              />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
