"use client";
import {
  degularRegular,
  trumpGothicBold,
  trumpGothicBoldItalic,
  trumpGothicRegular,
} from "@/font-loader/fonts";
import React from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { ArrowDown } from "lucide-react";
import { scrollToId } from "./ScrollToID";

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // time between children
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className={`${trumpGothicBoldItalic.className} select-none flex flex-col`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center" variants={childVariants}>
        <span className="text-5xl md:text-7xl lg:text-9xl font-semibold text-center">NEXT-LEVEL</span>
      </motion.div>

      <motion.div className="text-center" variants={childVariants}>
        <span className={`text-5xl md:text-7xl lg:text-9xl font-semibold text-center text-white leading-0 ${trumpGothicBold.className}`}>DIGITAL AGENCY</span>
      </motion.div>

      <motion.p
        className={`text-center text-xl text-gray-400 mt-8 ${degularRegular.className}`}
        variants={childVariants}
      >
        A next-gen software design and engineering team that's been <br />{" "}
        learning and creating since 2010.
      </motion.p>
      <motion.div
        className={`text-center text-xl flex items-center justify-center text-gray-400 mt-8 ${degularRegular.className}`}
        variants={childVariants}
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#work");
          }}
          className="group flex text-center text-black p-3 cursor-pointer bg-gray-500 items-center gap-2 hover:bg-gray-100 transition-all duration-150 ease-in"
        >
          <span className="translate-x-[20px] group-hover:translate-x-[0px] transition-all duration-300 ease-out">
            See our work
          </span>
          <span className="invisible opacity-0 translate-y-[-4px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
            <ArrowDown />
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
