import { ContactBanner } from "../layout/ContactBanner";

export const Work = () => {
  const projects = [
    { title: "Nexora", category: "SaaS, Web App" },
    { title: "Shipzy", category: "Logistics, Platform" },
    { title: "Leafy", category: "E-Commerce" },
    { title: "Inkly", category: "Marketing, Web" },
  ];

  return (
    <section className="bg-brand-light pt-12 sm:pt-16 md:pt-20 w-full">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
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
                {/* Image here */}
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="flex items-center gap-2 mx-auto px-6 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 hover:border-blue-600 transition-colors">
            View All Projects <span>→</span>
          </button>
        </div>
        <ContactBanner />
      </div>
    </section>
  );
};
