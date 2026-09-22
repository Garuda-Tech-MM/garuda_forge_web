import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BuQuDAXss/?mibextid=wwXIfr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/garudaforge",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden
      >
        <path d="M21.927 3.638a1.3 1.3 0 0 1 1.67 1.673L20.9 19.593c-.18.842-.72 1.046-1.458.651l-4.255-3.137-2.047 1.966a.96.96 0 0 1-1.536-.315l-1.412-4.478-4.13-1.286c-.892-.279-.874-1.07.028-1.334l16.178-6.26c.581-.225 1.103-.094 1.333.432Zm-3.112 4.455-8.994 5.698c-.544.344-.953.505-1.334.506.247.313.7.5 1.451.5l6.926-4.246c.311-.191.588-.174.798.072.21.245.176.511-.084.716l-7.026 4.741 1.387 4.1 2.762-2.65 4.247 3.136 1.938-9.021Z" />
      </svg>
    ),
  },
] as const;

export const Footer = () => {
  return (
    <footer className="bg-brand-dark/70 text-white py-12 sm:py-14 md:py-16">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Logo & About */}
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-6">
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
            <p className="text-gray-400 max-w-sm leading-relaxed">
              We build high-performance web solutions for businesses that want
              to scale and succeed in the digital world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>E-Commerce</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm mb-6">
              <li>garudaforge.tech@gmail.com</li>
              <li>Yangon, Myanmar</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-text-accent transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-gray-500 text-xs">
          <p>© 2026 Garuda Forge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
