import ProjectCard from "@/components/ProjectsComponents/ProjectCard";
import ProjectList from "@/components/ProjectsComponents/ProjectList";
import projects from "@/components/ProjectsComponents/projectData";
import React from "react";

const Projects = () => {
  return (
    <div className="h-screen  border-b border-gray-800 " id="Projects">
      <div className="flex flex-col  h-full py-0 md:pt-10 ">
        <div className="flex justify-end w-full">
          <div className=" bg-white text-black  laptop:w-1/2 w-full text-center laptop:text-end font-mono duration-700 ">
            <p className="laptop:text-5xl py-1 laptop:py-2 lg:text-4xl md:text-3xl text-2xl">
              Projects
            </p>
          </div>
        </div>
        <div className="h-full flex justify-center items-start mt-10  overflow-hidden ">
          {/* Project List */}
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
