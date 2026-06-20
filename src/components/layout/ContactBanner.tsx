import Image from "next/image";

export const ContactBanner = () => {
  return (
    <section className="py-13 px-6">
      <div className="max-w-300 mx-auto bg-brand-dark rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-gray-800">
        {/* Left side: Icon/Logo */}
        <div className="flex items-center gap-6 mb-8 md:mb-0">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src="/hero-eagle.png"
              alt="Garuda Forge Logo"
              width={50}
              height={50}
              className="w-auto h-auto object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-sm">
              Let’s forge something amazing together.
            </p>
          </div>
        </div>

        {/* Right side: Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
          Let&apos;s Talk <span>→</span>
        </button>
      </div>
    </section>
  );
};
