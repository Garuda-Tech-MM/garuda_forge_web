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
    <section className="bg-brand-dark py-24 w-full text-white">
      <div className="max-w-250 mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple Process. Powerful Results.
          </h2>
        </div>

        <div className="relative flex justify-between items-start">
          {/* Connector Line */}
          <div className="absolute top-6 left-0 w-full hidden md:block px-12">
            <div className="w-full h-px border-t border-dashed border-gray-700"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-full"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#151921] border-2 border-gray-700 flex items-center justify-center text-xl mb-6 z-10 hover:border-blue-500 transition-colors">
                {step.icon}
              </div>

              {/* Text */}
              <span className="text-[10px] font-bold text-blue-500 mb-1">
                {step.number}
              </span>
              <h3 className="text-sm font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-37.5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
