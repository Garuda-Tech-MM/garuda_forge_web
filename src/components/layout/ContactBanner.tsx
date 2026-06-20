import Image from "next/image";

export const ContactBanner = () => {
  return (
    <section className="py-8 sm:py-10 md:py-13">
      <div className="max-w-300 mx-auto bg-brand-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-gray-800 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
            <Image
              src="/hero-eagle.png"
              alt="Garuda Forge Logo"
              width={50}
              height={50}
              className="w-auto h-auto object-contain"
            />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-sm">
              Let&apos;s forge something amazing together.
            </p>
          </div>
        </div>

        <button className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
          Let&apos;s Talk <span>→</span>
        </button>
      </div>
    </section>
  );
};
