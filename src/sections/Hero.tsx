"use client";
import MainButton from "@/components/button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 90,
        repeat: Infinity,

        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      {/** PLANET */}

      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border-white/20 border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/** PLANET */}
      {/** RING 1 */}

      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[344px]  w-[344px] md:h-[580px] md:w-[580px] border-white opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2   bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2   bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5   border border-white inline-flex rounded-full top-1/2 left-full -translate-x-1/2 items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      {/** RING  1*/}

      {/** RING 2 dashed */}

      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 300,
          repeta: Infinity,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      />
      {/** RING 2 dashed */}

      {/** RING 3 */}

      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 100,
          repeta: Infinity,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2   bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2   bg-white rounded-full left-full top-1/2 -translate-x-1/2"></div>
      </motion.div>
      {/** RING 3 */}

      <div className="container relative mt-16">
        <h1 className=" text-[80px] leading-none sm:text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-transparent bg-clip-text text-center bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,132,.5))]">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-2  md:mt-5 text-center  md:text-xl max-w-xl mx-auto">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>

        <div className="flex justify-center mt-5">
          <MainButton text="Join waitlist" />
        </div>
      </div>
    </motion.section>
  );
};
