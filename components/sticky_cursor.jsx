"use client"
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
const StickyCursor = () => {
  const CURSOR_INNER_SIZE = 10;
  const CURSOR_OUTER_SIZE = 40;
  const mouseInnerPosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const mouseOuterPosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = {
    damping:20,
    mass:0.5,
    stiffness:300,
  }
  const smoothMousePosition = {
    x: useSpring(mouseInnerPosition.x, smoothOptions),
    y: useSpring(mouseInnerPosition.y, smoothOptions),
  }
  const [isReady, setIsReady] = useState(false);
  const manageMouseMove = (e, CURSOR_SIZE) => {
    const { clientX, clientY } = e;
    mouseInnerPosition.x.set(clientX - CURSOR_SIZE[0] / 2);
    mouseInnerPosition.y.set(clientY - CURSOR_SIZE[0] / 2);
    mouseOuterPosition.x.set(clientX - CURSOR_SIZE[1] / 2);
    mouseOuterPosition.y.set(clientY - CURSOR_SIZE[1] / 2);
  };
  const manageMouseMoveInitial = (e, CURSOR_SIZE) => {
    const { clientX, clientY } = e;
    mouseInnerPosition.x.set(clientX - CURSOR_SIZE[0] / 2);
    mouseInnerPosition.y.set(clientY - CURSOR_SIZE[0] / 2);
    mouseOuterPosition.x.set(clientX - CURSOR_SIZE[1] / 2);
    mouseOuterPosition.y.set(clientY - CURSOR_SIZE[1] / 2);
    setIsReady(true);
    window.removeEventListener("pointermove", (e) =>
      manageMouseMoveInitial(e, [CURSOR_INNER_SIZE, CURSOR_OUTER_SIZE])
    );
  };
  useEffect(() => {
    document.addEventListener(
      "pointermove",
      (e) => manageMouseMoveInitial(e, [CURSOR_INNER_SIZE, CURSOR_OUTER_SIZE]),
      { once: true }
    );
    return () =>
      document.removeEventListener("pointermove", (e) =>
        manageMouseMoveInitial(e, [CURSOR_INNER_SIZE, CURSOR_OUTER_SIZE])
      );
  }, []);
  useEffect(() => {
    document.addEventListener("pointermove", (e) =>
      manageMouseMove(e, [CURSOR_INNER_SIZE, CURSOR_OUTER_SIZE])
    );
    return () =>
      document.removeEventListener("pointermove", (e) =>
        manageMouseMove(e, [CURSOR_INNER_SIZE, CURSOR_OUTER_SIZE])
      );
  });
  const inner_class_name = `bg-black h-[10px] w-[10px] rounded-[5px] fixed pointer-events-none`;
  return (
    <div className="relative">
    {/* <motion.div style={{ top: smoothMouseOuterPosition.y, left: smoothMouseOuterPosition.x }} className={`z-50 ${outer_class_name}`}>
    </motion.div> */}
      {isReady && (
        <motion.div
          style={{ top: smoothMousePosition.y, left: smoothMousePosition.x }}
          className={`z-50 ${inner_class_name}`}
        />
      )}
    </div>
  );
};

export default StickyCursor;
