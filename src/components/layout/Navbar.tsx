"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About Us", href: "/about" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-dark w-full">
      <div className="max-w-300 mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/hero-eagle.png"
            alt="Garuda Forge Logo"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-auto sm:h-auto object-contain"
          />

          <div className="flex flex-col items-start leading-none">
            <span className="text-white font-bold text-base sm:text-lg tracking-[0.2em]">
              GARUDA
            </span>
            <span className="text-blue-800 font-bold text-[10px] sm:text-[12px] tracking-[0.8em] sm:tracking-[1.1em]">
              FORGE
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors focus-visible:text-white focus:text-white active:text-white ${
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

        <Link
          href="/contact"
          className="hidden lg:block border border-blue-300 text-white px-6 py-2 rounded-md text-sm hover:border-white focus-visible:border-white active:border-white transition"
        >
          Let&apos;s Talk →
        </Link>

        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-brand-dark">
          <div className="max-w-300 mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-sm transition-colors focus-visible:text-white focus:text-white active:text-white ${
                    isActive
                      ? "text-blue-600 bg-blue-600/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-4 w-full border border-blue-300 text-white px-6 py-3 rounded-md text-sm hover:border-white focus-visible:border-white active:border-white transition flex items-center justify-center text-center"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
