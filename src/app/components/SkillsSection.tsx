"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const firstRowSkills = skills.slice(0, 8);
  const secondRowSkills = skills.slice(8);

  const [animateUp, setAnimateUp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateUp((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Desktop: two rows with animation */}
      <div className="hidden md:flex flex-col gap-6 overflow-hidden h-[140px]">
        <div
          className={`flex gap-8 justify-center transition-transform duration-1000 ${
            animateUp ? "translate-y-0" : "-translate-y-[140px]"
          }`}
        >
          {firstRowSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] flex-shrink-0"
            >
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority={index < firstRowSkills.length}
                />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`flex gap-8 justify-center transition-transform duration-1000 ${
            animateUp ? "translate-y-[140px]" : "translate-y-0"
          }`}
        >
          {secondRowSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] flex-shrink-0"
            >
              <div className="w-16 h-16 relative mb-2">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority={index < secondRowSkills.length}
                />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: grid with 3 columns, no animation */}
      <div className="md:hidden grid grid-cols-3 gap-8 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px]"
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
