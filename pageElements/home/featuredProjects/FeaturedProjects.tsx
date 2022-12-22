import { FC, ReactElement } from 'react';
import { FeaturedProjectCard } from './FeaturedProjectCard';

import { ProjectInfo } from 'types/Project.type';
import { getProjectInfoById } from 'data/projects/SummerProjects';
import { FeaturedProjectIds } from 'data/Ids';
import { BasicCarousel } from 'components/carousel/BasicCarousel';
import { RightChevronLink } from 'components/buttons/RightChevronLink';

const FeaturedProjectsInfo: ProjectInfo[] = FeaturedProjectIds.map((p) =>
  getProjectInfoById(p)
);

export const FeaturedProjects: FC = () => {
  const FeaturedProjectComponents: ReactElement[] = FeaturedProjectsInfo.map(
    (projectInfo) => (
      <FeaturedProjectCard key={projectInfo.id} {...projectInfo} />
    )
  );

  return (
    <div>
      <h2 className="title-header px-width-clamp">Featured Projects</h2>
      <div>
        <BasicCarousel
          carouselElements={[
            ...FeaturedProjectComponents,
            <div className="flex h-full flex-row items-center pr-10">
              <RightChevronLink link="/projects" text="See More" />
            </div>,
          ]}
        />
      </div>
    </div>
  );
};
