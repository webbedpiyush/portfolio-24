// "use client";

// import { Project } from "@/utils/constants";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { RiExternalLinkLine, RiFolder2Line } from "react-icons/ri";
// import { TbBrandGithub } from "react-icons/tb";

// export default function ProjectItem({
//   project,
//   index,
// }: {
//   project: Project;
//   index: number;
// }) {
//   return (
//     <motion.div
//       className="mb-4 pb-6"
//       initial={{ opacity: 0, y: 0 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <h3 className="text-sm font-semibold mb-1">
//         <Link
//           href={project.liveLink}
//           className="flex items-center gap-2 underline underline-offset-2"
//         >
//           <RiFolder2Line className="text-gray-600 dark:text-gray-400 text-lg" />
//           <span>{project.title}</span>
//         </Link>
//       </h3>
//       <div className="flex flex-col md:flex-row gap-4 mb-3">
//         {project.videoUrl && (
//           <div className="flex-shrink-0">
//             <video
//               src={project.videoUrl}
//               className={`w-[300px] h-[150px] object-cover rounded-md transition-opacity duration-300 aspect-video`}
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </div>
//         )}

//         <p className="text-gray-500 text-xs md:text-sm dark:text-gray-400 mb-2 text-center">
//           {project.description}
//         </p>
//       </div>
//       <div className="mb-4 flex flex-wrap gap-1">
//         {project.technologies.map((tech, index) => (
//           <span
//             key={index}
//             className="text-xs border border-gray-500 px-2 py-1"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex gap-4">
//         <motion.a
//           href={project.liveLink}
//           target="_blank"
//           className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
//           whileHover={{ scale: 1.2 }}
//         >
//           <RiExternalLinkLine />
//         </motion.a>
//         <motion.a
//           href={project.githubLink}
//           target="_blank"
//           className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
//           whileHover={{ scale: 1.2 }}
//         >
//           <TbBrandGithub />
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// }
"use client";

import { Project } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiExternalLinkLine, RiFolder2Line } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="mb-4 pb-6"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <h3 className="text-sm font-semibold mb-1 dark:text-gray-200">
        <Link
          href={project.liveLink}
          className="flex items-center gap-2 underline underline-offset-2">
          <RiFolder2Line className="text-gray-600 dark:text-gray-400 text-lg" />
          <span>{project.title}</span>
        </Link>
      </h3>
      <div className="flex flex-col md:flex-row gap-4 mb-3">
        {project.videoUrl && (
          <div className="w-full md:w-[200px] h-[100px] flex-shrink-0">
            <video
              src={project.videoUrl}
              className="w-full h-full object-cover rounded-md"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}
        <p className="text-gray-500 text-xs md:text-sm dark:text-gray-400 mb-2 ">
          {project.description}
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-1">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs border border-gray-500 px-2 py-1 dark:text-gray-200">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          href={project.liveLink}
          target="_blank"
          className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
          whileHover={{ scale: 1.2 }}>
          <RiExternalLinkLine />
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600"
          whileHover={{ scale: 1.2 }}>
          <TbBrandGithub />
        </motion.a>
      </div>
    </motion.div>
  );
}
