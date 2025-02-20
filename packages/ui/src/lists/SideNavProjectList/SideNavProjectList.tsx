// import { Project, Members } from "@graphql/eden/generated";
import { useEffect, useState } from "react";
import { ProjectCardSmall } from "ui";

export interface SideNavProjectListProps {
  projects: any;
  // eslint-disable-next-line no-unused-vars
  onSelectProject?: (id: string) => void;
}

export const SideNavProjectList = ({
  projects,
  onSelectProject,
}: SideNavProjectListProps) => {
  const [currentProjectId, setCurrentProjectId] = useState("");

  useEffect(() => {
    if (currentProjectId && onSelectProject) {
      onSelectProject(currentProjectId);
    }
  }, [currentProjectId]);

  if (!projects) return null;
  // console.log("projects", projects);

  const projectsList = projects.map((project: any, index: number) => {
    return (
      <button
        key={index}
        onClick={() => setCurrentProjectId(project.info._id)}
        className={`mb-6`}
      >
        <ProjectCardSmall
          project={project.info}
          avatar={project.avatar || ""}
          focused={project.info._id === currentProjectId}
        />
      </button>
    );
  });

  return (
    <div className={`h-8/10 overflow-y-scroll`}>
      <div className={`mx-1 mt-4 flex flex-col`}>{projectsList}</div>
    </div>
  );
};
