"use client";
import MainButton from "@/components/button";
import StarsBg from "@/assets/stars.png";
import GridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const imageMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24 max-md:px-3">
      <motion.div
        ref={borderedDivRef}
        animate={{
          backgroundPositionX: StarsBg.width,
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="container border border-white/15 py-12 sm:py-24 rounded-xl overflow-hidden relative group"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          backgroundPositionY,
        }}
      >
        <div
          className="absolute  inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-500 "
          style={{
            backgroundImage: `url(${GridLines.src})`,
          }}
        ></div>
        <motion.div
          className="absolute  inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group-hover:opacity-100 transition duration-500  "
          style={{
            maskImage: imageMask,
            backgroundImage: `url(${GridLines.src})`,
          }}
        />

        <div className="relative">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium tracking-tighter text-center">
            AI-driven SEO for everyone
          </h2>
          <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
            Achieve clear, impactful results without the complexity
          </p>
          <div className="flex justify-center mt-8">
            <MainButton />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
