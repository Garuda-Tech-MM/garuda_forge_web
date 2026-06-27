export const Services = () => {
  const servicesData = [
    {
      title: "Custom Web Development",
      description:
        "Tailored web applications built with modern technologies to match your unique needs.",
      icon: (
        <svg
          className="w-8 h-8 text-text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "E-Commerce Solutions",
      description:
        "High-performing online stores designed to convert visitors into loyal customers.",
      icon: (
        <svg
          className="w-8 h-8 text-text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Web Performance Optimization",
      description:
        "Lightning-fast websites optimized for speed, SEO, and core web vitals.",
      icon: (
        <svg
          className="w-8 h-8 text-text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Responsive & Modern UI/UX",
      description:
        "Pixel-perfect, mobile-first designs that deliver seamless experiences.",
      icon: (
        <svg
          className="w-8 h-8 text-text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing support and maintenance to keep your website secure and up-to-date.",
      icon: (
        <svg
          className="w-8 h-8 text-text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-brand-light py-16 sm:py-20 md:py-24 w-full">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center">
          <span className="text-text-accent font-bold text-lg tracking-widest uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            End-to-End Web Development Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From idea to launch and beyond, we forge web applications that
            perform, scale, and grow with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
