"use client";
import { useState } from "react";
import { ContactBanner } from "../layout/ContactBanner";
import Image from "next/image";

const projects = [
  {
    title: "Unlock Wealth Digital",
    desc: "Analytics dashboard for businesses.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "Website",
    image: "/projects/unlockwdigital.png",
  },
  {
    title: "Thet Aung",
    desc: "Optical Management System",
    tags: ["React Native", "Expo", "SQLite"],
    category: "Mobile App",
    image: "/projects/thet_aung.png",
  },
];

const categories = ["All", "Website", "Web App", "Mobile App"];

export const WorkPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        {/* Filter Tabs — horizontal scroll on small screens */}
        <div className="-mx-4 sm:-mx-6 px-4 sm:px-6 mb-10 sm:mb-14 md:mb-16 overflow-x-auto scrollbar-none">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 min-w-max sm:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`shrink-0 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeTab === cat
                    ? "bg-[#625FFC] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:shadow-lg transition bg-white"
            >
              <div className="h-40 sm:h-48 bg-gray-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={240}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 text-gray-900">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 sm:mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-purple-50 border border-[#625FFC] text-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md text-[12px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ContactBanner />
      </div>
    </section>
  );
};
