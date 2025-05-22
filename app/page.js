"use client";
import HeroSection from "@/components/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCursor from "@/components/sticky_cursor";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Optional: helps tune scroll range
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <main className="relative">
      <StickyCursor />
      <SmoothScroll />
      <main ref={containerRef} className="relative h-[200vh]">
        <motion.section
          style={{ opacity }}
          className="h-screen bg-black flex items-center justify-center text-9xl"
        >
          <HeroSection />
        </motion.section>
        <section id="work" className="relative h-screen bg-white"></section>
      </main>
    </main>
  );
};

export default Home;
