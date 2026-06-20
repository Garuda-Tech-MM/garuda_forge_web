import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full bg-brand-dark pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Container */}
      <div className="max-w-300 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.15]">
            We Forge Digital
            <br />
            Experiences That
            <br />
            <span className="text-blue-600">Take Flight.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-[17px] max-w-120 leading-relaxed">
            Garuda Forge is a web development company that builds fast,
            scalable, and stunning web solutions for ambitious brands and
            startups.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Let&apos;s Build Together <span>→</span>
            </button>
            <button className="border border-gray-600 text-white px-7 py-3 rounded-md font-medium hover:border-white transition-colors">
              View Our Work
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-5">
              Trusted by startups and businesses worldwide
            </p>
            <div className="flex flex-wrap items-center gap-8 text-gray-400 font-semibold text-sm opacity-70">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full inline-block"></span>{" "}
                leafy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-sm inline-block transform rotate-45"></span>{" "}
                NEXORA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full inline-block"></span>{" "}
                Shipzy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full inline-block"></span>{" "}
                ByteLab
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full inline-block"></span>{" "}
                inkly
              </span>
            </div>
          </div>
        </div>

        {/* Eagle Image */}
        <div className="w-full lg:w-[45%] mt-10 sm:mt-16 lg:mt-0 relative">
          <div className="relative w-full lg:w-[120%]">
            <Image
              src="/hero-eagle.png"
              alt="Garuda Glowing Eagle"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
