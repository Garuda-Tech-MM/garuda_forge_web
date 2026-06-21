import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "../AnimatedBackground";

export const Hero = () => {
  return (
    <section className="relative w-full mt-25 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <AnimatedBackground className="bg-brand-dark/50 w-full h-full object-cover absolute top-0 left-0 opacity-30" />
      {/* Container */}
      <div className="max-w-300 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.15]">
            We Forge Digital
            <br />
            Experiences That
            <br />
            <span className="text-[#625FFC]">Take Flight.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-[17px] max-w-120 leading-relaxed">
            Garuda Forge is a web development company that builds fast,
            scalable, and stunning web solutions for ambitious brands and
            startups.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-[#625FFC] text-white px-7 py-3 rounded-md font-medium hover:bg-[#4a4dc8] transition-colors flex items-center justify-center gap-2"
            >
              Let&apos;s Build Together <span>→</span>
            </Link>

            <Link
              href="/work"
              className="border border-gray-600 text-white px-7 py-3 rounded-md font-medium hover:border-white transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-5">
              Partnering with visionary startups and businesses globally.
            </p>
            <div className="flex flex-wrap items-center gap-8 text-gray-400 font-semibold text-sm opacity-70">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded-full inline-block"></span>{" "}
                Unlock Wealth Digital
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
