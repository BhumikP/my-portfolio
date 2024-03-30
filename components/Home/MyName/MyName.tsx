import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
       
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Bhumik Prajapati.
      </motion.h1>
      <motion.h2
       
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2>

      <motion.h3
        
        className="text-gray-400  text-sm md:text-lg sm:text-md mt-10 "
      >
        I&apos;m a Self Driven, Quick Starter{" "}
        <span className="text-AAsecondary">Passionate Programmer</span> With
        Curious Mind Focused and enthusiastic developer with a keen interest in
        software development and Competitive Programming. Expert in Developing and
        maintaining efficient and scalable web applications using Reactjs and
        Nextjs for our organization. I have worked in Financial, E-Commerce, and
        Insurance applications domains.
      </motion.h3>
      <motion.div
        
        className="mt-12"
      >
        <a
          href={"/Bhumik_Resume.pdf"}
          download
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
