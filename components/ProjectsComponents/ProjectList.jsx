"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, itemsPerPage = 3 }) => {
  const responsiveItemsPerPage = window.innerWidth < 1024 ? 1 : itemsPerPage;

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
    <div>
      <div className="  flex flex-col gap-6  laptop:flex-row justify-center laptop:justify-start px-2 ">
        {paginatedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            status={project.status}
            coverImage={project.coverImage}
            gitLink={project.gitLink}
            deploymentLink={project.deploymentLink}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(projects.length / responsiveItemsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(projects.length / responsiveItemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
