import { degularRegular, trumpGothicItalic } from "@/font-loader/fonts";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
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
    <motion.div className="bg-neutral-800" variants={containerVariants}>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </motion.div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[rgb(18,18,18)]">
        <div className="sticky top-0 flex flex-col items-start overflow-hidden p-8">
        <motion.div className="text-center">
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
      <motion.div className="text-center mt-8 mx-4">
        <span className="text-xl md:text-2xl font-semibold text-center text-gray-400">
          <span
            className={`${degularRegular.className}`}
          >
            We’ve delivered solutions to hundreds of clients in too many industries to count.
          </span>
        </span>
      </motion.div>
        </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
        <img src={card.image} alt="" className="h-full w-full object-cover"/>
      {/* <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Example;

const cards = [
  {
    image: "https://html.themewant.com/zeniq/assets/images/projects/01.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    image: "https://html.themewant.com/zeniq/assets/images/projects/02.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    image: "https://html.themewant.com/zeniq/assets/images/projects/03.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    image: "https://html.themewant.com/zeniq/assets/images/projects/04.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    image: "https://html.themewant.com/zeniq/assets/images/projects/05.jpg",
    title: "Title 5",
    id: 5,
  },
];