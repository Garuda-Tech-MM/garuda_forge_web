"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-brand-dark w-full">
      <div className="max-w-300 mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/hero-eagle.png"
            alt="Garuda Forge Logo"
            width={50}
            height={50}
            className="w-auto h-auto object-contain"
          />

          <div className="flex flex-col items-start leading-none">
            <span className="text-white font-bold text-lg tracking-[0.2em]">
              GARUDA
            </span>
            <span className="text-blue-800 font-bold text-[12px] tracking-[1.1em]">
              FORGE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-400">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Work", href: "/work" },
            { name: "About Us", href: "/about" },
            { name: "Tech Stack", href: "/tech-stack" },
            { name: "Blog", href: "/blog" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition ${
                  isActive ? "text-blue-600" : "hover:text-white"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full flex items-center justify-center">
                    <span className="w-full h-0.5 bg-blue-600 rounded-full"></span>
                    <span className="absolute w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <button className="border border-blue-300 text-white px-6 py-2 rounded-md text-sm hover:border-white transition">
          Let&apos;s Talk →
        </button>
      </div>
    </nav>
  );
};
