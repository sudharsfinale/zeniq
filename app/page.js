"use client";
import HeroSection from "@/components/HeroSection";
import Example from "@/components/HoriCarousel";
import SmoothScroll from "@/components/SmoothScroll";
import SolutionSection from "@/components/SolutionSection";
import StickyCursor from "@/components/sticky_cursor";
import VideoSection from "@/components/VideoSection";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Optional: helps tune scroll range
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <main className="relative bg-black">
      <StickyCursor />
      <SmoothScroll />
      <main ref={containerRef} className="relative h-[200vh]">
        <motion.section
          style={{ opacity }}
          className="h-screen bg-black flex items-center justify-center text-9xl"
        >
          <HeroSection />
        </motion.section>
        <VideoSection />
      </main>
      <section  id="work" className="bg-black">
        <SolutionSection />
      </section>
      <section  id="work" className="bg-black">
        <Example />
      </section>
    </main>
  );
};

export default Home;
