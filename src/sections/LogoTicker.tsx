"use client";
import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import PulseLogo from "@/assets/logo-pulse.png";
import EchoLogo from "@/assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center md:gap-10">
          <h2 className="w-[600px] max-md:w-[150px] ">
            {" "}
            Trusted by top innovative teams
          </h2>
          <div className="max-md:flex-1 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0%",
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="flex gap-14  flex-none pr-14 "
            >
              {[
                AcmeLogo,
                ApexLogo,
                CelestialLogo,
                QuantumLogo,
                PulseLogo,
                EchoLogo,
                AcmeLogo,
                ApexLogo,
                CelestialLogo,
                QuantumLogo,
                PulseLogo,
                EchoLogo,
              ].map((logo, index) => (
                <Image
                  key={index}
                  alt={logo.src}
                  src={logo.src}
                  width={150}
                  height={50}
                  className="w-auto h-6"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
