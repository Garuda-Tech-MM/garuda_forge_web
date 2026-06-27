import Image from "next/image";
import { ContactBanner } from "../layout/ContactBanner";

export const Work = () => {
  const projects = [
    {
      title: "Unlock Wealth Digital",
      category: "Website",
      image: "/projects/unlockwdigital.png",
    },
    {
      title: "Thet Aung",
      category: "Optical Shop Management System",
      image: "/projects/thet_aung.png",
    },
  ];

  return (
    <section className="bg-brand-light mt-25 pt-12 sm:pt-16 md:pt-20 w-full">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-text-accent font-bold text-lg tracking-widest uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
            Built with Purpose. Designed to Perform.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Card */}
              <div className="h-62.5 rounded-2xl bg-gray-100 border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <ContactBanner />
      </div>
    </section>
  );
};
