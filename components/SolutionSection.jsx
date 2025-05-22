import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { degularRegular, trumpGothicBold, trumpGothicItalic, trumpGothicRegular } from "@/font-loader/fonts";
import { Gem } from "lucide-react";
import { MoveUpRight } from 'lucide-react';

const Card = ({ color = "black", variants }) => {
  return (
    <motion.div
      className="flex items-center rounded-[6px] w-full"
      variants={variants}
    >
      <div
        style={{ backgroundColor: color }}
        className="p-[2.5rem] flex flex-col items-center rounded-[6px] w-full"
      >
        <div
          className="h-[100px] w-[100px] rounded-[12px] flex items-center justify-center"
          style={{ background: "var(--primary-color)" }}
        >
          <Gem color="white" />
        </div>
        <span
          className={`${trumpGothicRegular.className} text-white mt-8 text-4xl font-semibold tracking-[1.5px]`}
        >
          Product Design
        </span>
        <p
          className={`text-center text-xl text-gray-400 ${degularRegular.className} mt-4`}
        >
          We’ve refined our design process and <br /> approach to collaboration.
        </p>
        <div className="mt-6">
        <MoveUpRight />
        </div>
      </div>
    </motion.div>
  );
};

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
      ref={ref}
      className="select-none flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center" variants={childVariants}>
        <span className="tracking-[4px] text-3xl md:text-5xl lg:text-7xl font-semibold text-center text-white uppercase">
          We Build{" "}
          <span
            className={`${trumpGothicItalic.className}`}
            style={{ color: "var(--primary-color)" }}
          >
            Software Solutions
          </span>
        </span>
      </motion.div>
      <motion.div className="text-center mt-8 mx-4" variants={childVariants}>
        <span className="text-xl md:text-2xl font-semibold text-center text-gray-400">
          <span
            className={`${degularRegular.className}`}
          >
            We’ve delivered solutions to hundreds of clients in too many industries to count.
          </span>
        </span>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"
        style={{ margin: "50px" }}
      >
        {[...Array(6)].map((_, i) => (
          <Card
            key={i}
            color={i % 2 === 1 ? "rgb(18,18,18)" : "black"}
            variants={childVariants}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SolutionSection;
