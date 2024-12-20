"use client";
import { skills } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <div className="flex w-full text-justify text-[14px] sm:text-[16px]">
          Hey, I'm Piyush a developer passionate about building creative
          products that enhance convenience and add value through code and tech.
          When I'm not working on projects, you can find me X(twitter) or
          discord, exploring the latest trends in web3 and startups. I'm
          dedicated to build products that make a difference.
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25 }}
        >
          <h2 className="text-md font-semibold mb-6">Skills & Technologies</h2>
          <div className="flex gap-1 flex-wrap">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="text-xs border border-gray-500 px-2 py-2 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: index * 0.09 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
