import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import logo from "../assets/images/bento-logo.png";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#1d1f1e] rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] border-zinc-700 pb-10">
          We help brands find the right words, the right visuals, and sometimes the right amount of overthinking.
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4">Our approach:</h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
              We believe good communication doesn’t start with colours or fonts, it starts with clarity. So we ask questions, rethink ideas, and slowly shape words and visuals until everything clicks. Yes, there’s thinking involved. Sometimes a lot of it.
            </p>
            <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#1019B3] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
              Read more
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
          </div>
         <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src={logo}
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
