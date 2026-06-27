"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRightIcon } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? "bg-brand-dark backdrop-blur-lg shadow-lg" : "bg-brand-dark/70 "}`}
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo/logo-mahogany-transparent.png"
            alt="Garuda Forge Logo"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-auto sm:h-auto object-contain"
          />

          <div className="flex flex-col items-start leading-none">
            <span className="text-white font-bold text-base sm:text-lg tracking-[0.2em]">
              GARUDA
            </span>
            <span className="text-text-accent font-bold text-[10px] sm:text-[12px] tracking-[0.8em] sm:tracking-[1.1em]">
              FORGE
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative transition-colors duration-300 ${
                  isActive
                    ? "text-text-accent"
                    : "hover:text-white focus-visible:text-white"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full flex items-center justify-center">
                    <span className="w-full h-0.5 bg-brand-red rounded-full"></span>
                    <span className="absolute w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden lg:flex items-center justify-center gap-1 text-brand-red bg-brand-light px-6 py-2 rounded-md text-sm hover:bg-brand-red hover:text-brand-light focus-visible:border-text-accent active:border-text-accent transition-colors duration-300"
        >
          Let&apos;s Talk <ArrowRightIcon width={16} height={16} />
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
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-3 rounded-lg text-sm transition-colors duration-300 focus-visible:text-white ${
                    isActive
                      ? "text-text-accent bg-brand-red/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-4 w-full flex items-center justify-center gap-1 text-center text-brand-red bg-brand-light px-6 py-3 rounded-md text-sm hover:cursor-pointer hover:bg-brand-red hover:text-brand-light focus-visible:border-text-accent active:border-text-accent transition-colors duration-300"
            >
              Let&apos;s Talk <ArrowRightIcon width={16} height={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
