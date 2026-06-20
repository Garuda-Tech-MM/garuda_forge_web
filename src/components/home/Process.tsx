export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      desc: "We understand your goals, audience, and challenges.",
      icon: "💡",
    },
    {
      number: "02",
      title: "Design",
      desc: "We craft intuitive UI/UX designs that align with your brand and users.",
      icon: "✏️",
    },
    {
      number: "03",
      title: "Develop",
      desc: "We build clean, scalable, and high-performance web solutions.",
      icon: "</>",
    },
    {
      number: "04",
      title: "Deploy & Support",
      desc: "We launch, monitor, and support to ensure long-term success.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-brand-dark py-16 sm:py-20 md:py-24 w-full text-white">
      <div className="max-w-250 mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-[#625FFC] font-bold text-lg tracking-widest uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Simple Process. Powerful Results.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6">
          {/* Connector Line — desktop only */}
          <div className="absolute top-6 left-0 w-full hidden lg:block px-12">
            <div className="w-full h-px border-t border-dashed border-gray-700"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#151921] border-2 border-gray-700 flex items-center justify-center text-xl mb-4 sm:mb-6 z-10 hover:border-[#625FFC] transition-colors">
                {step.icon}
              </div>

              <span className="text-[12px] font-bold text-[#625FFC] mb-1">
                {step.number}
              </span>
              <h3 className="text-sm sm:text-base font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-[12px] sm:text-sm leading-relaxed max-w-xs sm:max-w-37.5 mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
