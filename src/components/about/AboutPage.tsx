import { Target, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { ContactBanner } from "../layout/ContactBanner";

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

      {/* 3. Stats Section */}
      <section className="py-10 px-6 bg-brand-light">
        <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", val: "25+" },
            { label: "Happy Clients", val: "15+" },
            { label: "Years Experience", val: "4+" },
            { label: "Team Members", val: "8" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-gray-200 rounded-2xl border"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.val}</h3>
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-10 px-6 max-w-300 mx-auto">
        <h5 className="text-blue-700 text-center uppercase font-bold">
          Our Values
        </h5>
        <h2 className="text-center text-3xl font-bold mb-12 text-black">
          The Principles That Drive Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-6">
                <item.icon size={24} />
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <h4 className="font-bold text-lg mb-2 text-black">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};
