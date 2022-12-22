import { FC, Fragment } from 'react';
import { PROJECT_TYPE, ProjectInfo } from 'types/Project.type';
import { ProjectCard } from './ProjectCard';

import { StartupProjects } from '../../data/projects/StartupProjects';
import { HackProjects } from '../../data/projects/HackProjects';
import { SummerProjects } from 'data/projects/SummerProjects';
import { BasicCarousel } from 'components/carousel/BasicCarousel';

const allProjectInfos: {
  projectType: PROJECT_TYPE;
  projects: ProjectInfo[];
}[] = [
  {
    projectType: PROJECT_TYPE.SUMMER,
    projects: SummerProjects,
  },
  {
    projectType: PROJECT_TYPE.STARTUP,
    projects: StartupProjects,
  },
  {
    projectType: PROJECT_TYPE.HACK,
    projects: HackProjects,
  },
];

export const AllProjects: FC = () => {
  return (
    <div>
      <div className="flex flex-col">
        {allProjectInfos.map(({ projectType, projects }) => {
          return (
            <Fragment key={projectType}>
              <hr className="header-divider" />
              <div key={projectType}>
                <div className="mx-width-clamp mb-10 w-fit bg-off-black px-10 py-2">
                  <p className="text-4xl font-bold capitalize text-floodgate">
                    {projectType}
                  </p>
                </div>
                <BasicCarousel
                  carouselElements={projects.map((projectInfo) => (
                    <ProjectCard key={projectInfo.id} {...projectInfo} />
                  ))}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
