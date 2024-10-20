import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Piyush",
};

export default function page() {
  return (
    <main className="flex items-start justify-start max-w-full lg:max-w-[50%] mx-auto p-3 md:p-5">
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
