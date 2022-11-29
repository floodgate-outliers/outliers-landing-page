import { FC, useEffect, useState } from 'react';
import { PROJECT_TYPE, ProjectInfo } from 'types/Project.type';
import { ProjectCard } from './ProjectCard';
import { SummerProjects } from './SummerProjects';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';

import { useMediaQueryContext } from 'contexts/MediaQueryContext';

const allProjectInfos: {
  projectType: PROJECT_TYPE;
  projects: ProjectInfo[];
}[] = [
  {
    projectType: PROJECT_TYPE.SUMMER,
    projects: SummerProjects,
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
      <h2 className="title-header">Projects</h2>
      <div>
        {allProjectInfos.map(({ projectType, projects }, index) => {
          return (
            <div key={projectType}>
              <div className="mb-10 w-fit bg-off-black px-10 py-2">
                <p className="text-4xl font-bold capitalize text-floodgate">
                  {projectType}
                </p>
              </div>
              <Swiper
                className="!overflow-visible"
                slidesPerView={slidesPerView}
                modules={[Mousewheel]}
                mousewheel={{
                  forceToAxis: true,
                }}
              >
                {projects.map((projectInfo, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ProjectCard {...projectInfo} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
