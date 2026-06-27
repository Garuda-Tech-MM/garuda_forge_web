"use client";
import { ContactBanner } from "../layout/ContactBanner";
import Image from "next/image";

const techStack = [
  {
    heading: "Frontend",
    technologies: [
      {
        name: "React.js",
        description:
          "Building interactive and component-based UIs with high performance.",
        image: "react.svg",
      },
      {
        name: "NEXT.js",
        description:
          "Server-side rendering, static generation, and full-stack React applications.",
        image: "nextjs.svg",
      },
      {
        name: "TypeScript",
        description:
          "Typed JavaScript for better developer experience and code reliability.",
        image: "typescript.svg",
      },
      {
        name: "Tailwind",
        description:
          "Utility-first CSS framework for rapid UI development and consistency.",
        image: "tailwind.svg",
      },
      {
        name: "Redux",
        description:
          "Predictable state management for React applications at any scale.",
        image: "redux.svg",
      },
    ],
  },
  {
    heading: "Backend",
    technologies: [
      {
        name: "Node.js",
        description:
          "JavaScript runtime for building fast, scalable, and efficient server-side applications.",
        image: "nodejs.svg",
      },
      {
        name: "Express",
        description:
          "Minimal and flexible Node.js web framework for robust APIs and services.",
        image: "expressjs.svg",
      },
      {
        name: "PHP",
        description:
          "Powerful server-side scripting language for dynamic and reliable applications.",
        image: "php.svg",
      },
      {
        name: "Laravel",
        description:
          "Elegant PHP framework for building secure and scalable web applications.",
        image: "laravel.svg",
      },
      {
        name: "MySQL",
        description:
          "Reliable and widely used relational database for modern web apps.",
        image: "mysql.svg",
      },
    ],
  },
  {
    heading: "Tools & DevOps",
    technologies: [
      {
        name: "GitHub",
        description:
          "Version control and collaboration to streamline development workflows.",
        image: "github.svg",
      },
      {
        name: "Docker",
        description:
          "Containerization for consistent environments and easy deployment.",
        image: "docker.svg",
      },
      {
        name: "Nginx",
        description:
          "High-performance web server and reverse proxy for scalable applications.",
        image: "nginx.svg",
      },
      {
        name: "CI/CD",
        description:
          "Automated testing and deployment for faster and reliable delivery.",
        image: "cicd.svg",
      },
      {
        name: "AWS",
        description:
          "Scalable cloud infrastructure to deploy, manage, and grow with confidence.",
        image: "aws.svg",
      },
    ],
  },
];

export const TechStackPage = () => {
  return (
    <section className="bg-white py-4 sm:py-8 md:py-12">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h4 className="uppercase text-text-accent text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            Our Expertise
          </h4>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
            Full-Stack. Modern. Scalable.
          </h2>
          <p className="text-center text-gray-400 text-sm sm:text-base">
            We specialize in JavaScript and TypeScript technologies to deliver
            fast, flexible, and future-ready web applications.
          </p>
        </div>
        {/* Project Grid */}
        {techStack.map((stack) => (
          <div key={stack.heading} className="mb-10 sm:mb-14 md:mb-20">
            <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-6">
              {stack.heading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
              {stack.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:shadow-lg transition bg-white"
                >
                  <div className="flex gap-5 items-center">
                    <div className="w-12 h-12 mb-3">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={200}
                        height={200}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                    <h4 className="lg:text-lg text-gray-900 font-bold mb-1.5 sm:mb-2">
                      {tech.name}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <ContactBanner />
      </div>
    </section>
  );
};
