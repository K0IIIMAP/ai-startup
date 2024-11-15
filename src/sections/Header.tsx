import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import MainButton from "@/components/button";

export const Header = () => {
  return (
    <header className="py-4 max-md:py-1 border-b border-white/15 md:border-none  sticky top-0 z-10 max-md:backdrop-blur">
      <div className="md:container">
        <div className="flex justify-between items-center md:border border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur-lg">
          <div>
            <div className="border h-10 w-10 rounded-lg grid place-content-center  border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          <div className="">
            <nav className=" gap-8 text-white/70 text-sm hidden md:flex  ">
              <Link
                href="#"
                className="hover:text-white transition  duration-300"
              >
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-white transition  duration-300"
              >
                Developers
              </Link>
              <Link
                href="#"
                className="hover:text-white transition  duration-300"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="hover:text-white transition  duration-300"
              >
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <MainButton />
            <MenuIcon className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
