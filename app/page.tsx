"use client";
import { skills } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <main className="space-y-8">
        {/* Greeting */}
        <div className="mb-8">
          <h2
            className="text-2xl sm:text-3xl text-slate-800 dark:text-slate-200 mb-6 font-light italic"
            style={{
              fontFamily:
                '"Instrument Serif", "Instrument Serif Fallback", serif',
            }}>
            hello ~
          </h2>
        </div>

        {/* Main Description */}
        <div className="space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-light">
            Hey, I'm Piyush a developer passionate about building creative
            products that enhance convenience and add value through code and
            tech. When I'm not working on projects, you can find me on{" "}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              X(twitter)
            </span>{" "}
            or{" "}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              discord
            </span>
            , exploring the latest trends in{" "}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              web3
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              startups
            </span>
            .
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-light">
            Currently working at{" "}
            <a
              href="https://swades.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline decoration-dotted underline-offset-4">
              swades.ai
            </a>{" "}
            ↗.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-light">
            I'm dedicated to build products that make a difference.
          </p>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          <h3 className="text-lg font-medium mb-8 text-slate-800 dark:text-slate-200">
            Skills & Technologies
          </h3>
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="text-sm px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
