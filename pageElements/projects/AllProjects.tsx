import { FC, Fragment, useEffect, useState } from 'react';
import { PROJECT_TYPE, ProjectInfo } from 'types/Project.type';
import { ProjectCard } from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';

import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { StartupProjects } from '../../data/projects/StartupProjects';
import { HackProjects } from '../../data/projects/HackProjects';
import { SummerProjects } from 'data/projects/SummerProjects';

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
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1.35);
    } else if (isTablet) {
      setSlidesPerView(1.65);
    } else if (isLaptop) {
      setSlidesPerView(2.5);
    } else if (isDesktop) {
      setSlidesPerView(2.9);
    } else {
      setSlidesPerView(3.3);
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  return (
    <div>
      <div className="flex flex-col">
        {allProjectInfos.map(({ projectType, projects }) => {
          return (
            <Fragment key={projectType}>
              <hr className="header-divider" />
              <div key={projectType}>
                <div className="mb-10 w-fit bg-off-black px-10 py-2">
                  <p className="text-4xl font-bold capitalize text-floodgate">
                    {projectType}
                  </p>
                </div>
                <Swiper
                  className="!items-stretch !overflow-visible"
                  slidesPerView={slidesPerView}
                  modules={[Mousewheel]}
                  mousewheel={{
                    forceToAxis: true,
                  }}
                >
                  {projects.map((projectInfo) => {
                    return (
                      <SwiperSlide key={projectInfo.id}>
                        <ProjectCard {...projectInfo} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
