"use client";

import Image from "next/image";

export default function WorkSection() {
  const projects = [
    {
      name: "Fiskil",
      image: "/work/background.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        "React",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      name: "Project 2",
      image: "/work/background.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "Project 3",
      image: "/work/background.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      tags: ["Vue", "Firebase", "Tailwindcss"],
    },
    {
      name: "Project 4",
      image: "/work/background.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      tags: ["Angular", "TypeScript", "Sass"],
    },
    {
      name: "Project 5",
      image: "/work/background.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      tags: ["React Native", "Expo", "GraphQL"],
    },
  ];

  return (
    <section
      id="work"
      className="w-full max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-16 shadow-md mt-12"
    >
      <div className="mb-4 flex justify-center">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1 text-xs font-semibold">
          Work
        </span>
      </div>
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Some of the noteworthy projects I have built:
      </h2>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <div className="flex-shrink-0 w-full md:w-1/2 h-48 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
