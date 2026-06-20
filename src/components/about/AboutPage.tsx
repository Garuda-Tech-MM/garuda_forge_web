import { Target, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { ContactBanner } from "../layout/ContactBanner";

const values = [
  {
    title: "Craftsmanship",
    icon: Target,
    desc: "We write clean, efficient, and maintainable code.",
  },
  {
    title: "Collaboration",
    icon: Users,
    desc: "We work closely with our clients as partners.",
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We value transparency, honesty, and commitment.",
  },
  {
    title: "Impact",
    icon: TrendingUp,
    desc: "We build solutions that create real impact.",
  },
];

const stats = [
  { label: "Projects Completed", val: "25+" },
  { label: "Happy Clients", val: "15+" },
  { label: "Years Experience", val: "4+" },
  { label: "Team Members", val: "8" },
];

export const AboutPage = () => {
  return (
    <div className="bg-brand-light">
      {/* 2. Building Digital Solutions Section */}
      <section className="py-20 px-6 max-w-300 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-black">
            Building Digital Solutions That Make an Impact
          </h2>
          <p className="text-gray-600 mb-4">
            At Garuda Forge, we turn ideas into digital solutions that help
            businesses grow faster, build high-quality, scable web products and
            deliver value.
          </p>
          <p className="text-gray-600 mb-4">
            We combine modern technologies, clean code and thoughtful desgin to
            deliver products that users love and bussiness rely on.
          </p>
        </div>
        <div className="h-64 bg-gray-200 rounded-3xl" /> {/* Image */}
      </section>

      {/* 3. Values Section */}
      <section className="py-10 px-6 bg-brand-dark">
        <div className="max-w-300 mx-auto">
          <h5 className="text-[#625FFC] text-lg text-center uppercase font-bold mb-3">
            Our Values
          </h5>
          <h2 className="text-center text-3xl font-bold mb-12">
            The Principles That Drive Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-6 border border-gray-800 rounded-2xl hover:shadow-lg transition-all"
              >
                {/* Icon Container */}
                <div className="flex gap-3 items-center mb-5">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-50 text-[#625FFC] rounded-xl">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                </div>

                {/* Text Container */}
                {/* <div className="flex flex-col"> */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-10 px-6">
        <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-purple-50 rounded-2xl border"
            >
              <h3 className="text-3xl font-bold text-[#625FFC] tracking-wider">
                {stat.val}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};
