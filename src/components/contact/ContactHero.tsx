import Image from "next/image";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";
import AnimatedBackground from "../AnimatedBackground";

const contactInfo = [
  {
    icon: MessageSquare,
    text: "Quick Response",
    sub: "We reply within 24 hours",
  },
  {
    icon: ShieldCheck,
    text: "Trusted Partner",
    sub: "Your ideas are safe with us",
  },
  {
    icon: Zap,
    text: "Results Driven",
    sub: "Focused on your success",
  },
];

export const ContactHero = () => {
  return (
    <section className="relative bg-brand-dark/50 mt-25 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-15 px-4 sm:px-6 text-white overflow-hidden">
      <AnimatedBackground className="bg-brand-dark/50 w-full h-full object-cover absolute top-0 left-0 opacity-30" />
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <span className="text-text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-text-accent h-1">Amazing</span> Together
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Have a project in mind or need expert advice? We&apos;d love to hear
            from you.
          </p>

          <div className="flex gap-6">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#151921] p-4 rounded-xl border border-gray-800"
              >
                <item.icon className="text-text-accent" />
                <div>
                  <p className="font-bold text-sm">{item.text}</p>
                  <p className="text-[12px] text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" relative w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hero-img.gif"
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
