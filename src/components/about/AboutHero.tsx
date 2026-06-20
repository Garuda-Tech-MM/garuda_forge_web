import Image from "next/image";
import AnimatedBackground from "../AnimatedBackground";

export const AboutHero = () => {
  return (
    <section className="relative bg-brand-dark/50 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-15 px-4 sm:px-6 text-white overflow-hidden">
      <AnimatedBackground className="bg-brand-dark/50 w-full h-full object-cover absolute top-0 left-0 opacity-30" />
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            About <span className="text-white">Garuda</span>{" "}
            <span className="text-[#625FFC]">Forge</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            We are a team of builders, problem solvers, and innovators
            passionate about creating powerful web experiences.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hero-eagle.png"
            alt="Garuda Forge Logo"
            width={500}
            height={500}
            className="w-full max-w-60 sm:max-w-[320px] md:max-w-105 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
