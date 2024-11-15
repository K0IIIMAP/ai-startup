import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 ">
      <div className="container">
        <div className="flex flex-col  lg:flex-row lg:items-center   gap-8">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-6 w-6" />
            <p className="font-medium">AI Startup</p>
          </div>

          <nav className="flex flex-col gap-5 lg:gap-7  lg:flex-row lg:flex-1 ">
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs transition md:text-sm"
            >
              Changelog
            </Link>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
