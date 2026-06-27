"use client";
import { ContactBanner } from "../layout/ContactBanner";
import Image from "next/image";

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web solutions built with clean code and modern frameworks.",
    image: "code.svg",
  },
  {
    title: "E-Commerce Solutions",
    description: "High-performing online stores designed to convert and scale.",
    image: "shopping_cart.svg",
  },
  {
    title: "Web Application Development",
    description:
      "Powerful, scalable web applications for complex business workflows.",
    image: "stacks.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "Seamless API solutions and third-party integrations to extend functionality.",
    image: "extension.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Speed up your website and improve Core Web Vitals for better UX.",
    image: "speed.svg",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your website secure and up-to-date.",
    image: "verified_user.svg",
  },
  {
    title: "Responsive UI/UX Design",
    description:
      "Pixel-perfect, user-centered designs that work on all devices.",
    image: "responsive_layout.svg",
  },
  {
    title: "SEO & Technical SEO",
    description:
      "Clean, optimized, and structured websites that rank and perform.",
    image: "whatshot.svg",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Reliable deployment pipeline and infrastructure to ensure uptime.",
    image: "cloud_upload.svg",
  },
];

export const ServicesPage = () => {
  return (
    <section className="bg-white py-4 sm:py-8 md:py-12">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h4 className="text-text-accent text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            What We Do
          </h4>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
            Solutions That Drive Growth
          </h2>
          <p className="text-center text-gray-400 text-sm sm:text-base">
            We combine strategy, design, and technology to build fast, scalable,
            and user-friendly websites and applications.
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:shadow-lg transition bg-white"
            >
              <div className="flex gap-5 justify-start items-center">
                <div className="w-18 h-18 sm:w-20 sm:h-20">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div>
                  <h4 className="lg:text-lg text-gray-900 font-bold mb-1.5 sm:mb-2">
                    {s.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ContactBanner />
      </div>
    </section>
  );
};
