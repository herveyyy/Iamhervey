"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import ProjectCard from "./ProjectCard";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowCircleRight,
} from "react-icons/fa";
import Modal from "../Modal";

const ProjectList = ({ projects, itemsPerPage = 1 }) => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [screen, setScreen] = useState(1024);
  const [responsiveItemsPerPage, setResponsiveItemsPerPage] = useState();
  useEffect(() => {
    setScreen(window.innerWidth);
    console.log(screen, "Screen");
    const resizeResult = () => {
      let screenSize;
      return (screenSize = screen > 1024 ? 3 : itemsPerPage);
    };
    setResponsiveItemsPerPage(resizeResult());
  }, [screen]);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getProjectsForPage = (
    projects,
    currentPage,
    responsiveItemsPerPage
  ) => {
    const startIndex = (currentPage - 1) * responsiveItemsPerPage;
    const endIndex = startIndex + responsiveItemsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const paginatedProjects = getProjectsForPage(
    projects,
    currentPage,
    responsiveItemsPerPage
  );

  return (
    <div className=" ">
      <Modal
        isClose={() => setOpen(!open)}
        isOpen={open}
        data={selectedProject}
      />
      <div className="  flex flex-col gap-6  laptop:flex-row justify-center laptop:justify-start px-2 ">
        {paginatedProjects.map((project) => (
          <button
            onClick={() => {
              setOpen(!open);
              setSelectedProject(project);
            }}
          >
            <ProjectCard
              key={project.title}
              title={project.title}
              status={project.status}
              coverImage={project.coverImage}
              gitLink={project.gitLink}
              deploymentLink={project.deploymentLink}
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-x-4 items-center mt-4 ">
        <button
          className={`justify-center cursor-pointer  p-2 gap-2 items-center translate-x-0 hover:-translate-x-1 duration-700 flex`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft className="h-5 w-5" />
          Prev
        </button>

        <button
          className="flex justify-center p-2 gap-2  cursor-pointer items-center translate-x-0 hover:translate-x-1 duration-700"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(projects.length / responsiveItemsPerPage)
          }
        >
          Next
          <FaArrowAltCircleRight className="h-5 w-5 " />
        </button>
      </div>
      <p className="  text-center w-full">
        Page {currentPage} of{" "}
        {Math.ceil(projects.length / responsiveItemsPerPage)}
      </p>
    </div>
  );
};

export default ProjectList;
