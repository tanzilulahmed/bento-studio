import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="container w-full sm:pt-20 pt-10">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-4xl sm:text-6xl">Featured Projects</h1>
      </div>
      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Story in
            Progress
          </h1>
          {/* <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[30] text-6xl sm:text-7xl font-NueueMontreal leading-none tracking-tighter">
            {"Loading".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1> */}
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-visible relative">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="featured"
              />
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[16px] flex items-center justify-center z-20 rounded-xl">
                <p className="text-zinc-400 text-sm tracking-wide">project loading...</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Story in
            Progress
          </h1>
          {/* <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[30] text-6xl sm:text-7xl font-NueueMontreal leading-none tracking-tighter">
            {"Loading".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1> */}
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-visible relative">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="featured"
              />
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[16px] flex items-center justify-center z-20 rounded-xl">
                <p className="text-zinc-400 text-sm tracking-wide">project loading...</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="m-auto rounded-full flex gap-2 justify-center w-fit bg-[#1019B3] font-NueueMontreal text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
        See all Projects
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;