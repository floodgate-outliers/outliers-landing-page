import { CardWithShadow } from 'components/cards/CardWithShadow';
import {
  formatBuildersNames,
  TheBuildersInfos,
} from 'data/community/TheBuildersInfos';
import { getProjectInfoById } from 'data/projects/SummerProjects';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { BuilderInfo } from 'types/Community';
import { ProjectInfo } from 'types/Project.type';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { PROJECT_ID } from 'data/Ids';

// Get the builders with a project
// Limit to the first 12
const BuildersWithProjects: BuilderInfo[] = TheBuildersInfos.filter(
  (s) => s.projectId
).slice(0, 14);

const ProjectCardVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TheBuilders: FC = () => {
  const { isTablet, isMobile } = useMediaQueryContext();

  const [selectedProjectId, setSelectedProjectId] = useState<PROJECT_ID>(
    BuildersWithProjects[0].projectId!
  );
  const [selectedProjectData, setSelectedProjectData] = useState<ProjectInfo>(
    getProjectInfoById(BuildersWithProjects[0].projectId!)
  );

  // Whenever a new builder is selected, their corresponding project Id will be set in selectedProjectId
  // Subsequently, the data for the project must be extracted
  useEffect(() => {
    const newProjectData = getProjectInfoById(selectedProjectId);
    setSelectedProjectData(newProjectData);
  }, [selectedProjectId]);

  return (
    <div>
      <h2 className="title-header">The Outliers</h2>
      <div className="grid grid-cols-6 justify-between gap-5 laptop:grid-cols-4">
        {BuildersWithProjects.map(({ id, profileImageUrl, projectId }) => (
          <div
            key={id}
            onClick={() => setSelectedProjectId(projectId!)}
            className="cursor-pointer"
          >
            <div
              className={clsx(
                'relative h-60 w-full border-4 border-off-black transition-all desktop:h-64 laptop:h-80 tablet:h-48 tablet:border-2 mobile:h-36',
                selectedProjectData.builders.includes(id)
                  ? 'grayscale-0'
                  : 'grayscale'
              )}
            >
              <Image
                priority
                fill
                src={profileImageUrl}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        ))}
        <p className="my-auto ml-3 text-5xl font-bold tablet:text-3xl">...</p>
      </div>
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            variants={ProjectCardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={selectedProjectId}
          >
            <Link
              href={`/projects/${selectedProjectData.id}`}
              className="mx-auto block w-fit"
            >
              <CardWithShadow
                fullWidth={isMobile || isTablet}
                animateWhile="hover"
              >
                <div className="py-5 px-5 tablet:py-2 tablet:px-2">
                  <div className="flex flex-row items-center gap-x-10">
                    <div className="relative h-20 w-20 flex-shrink-0 border-2 border-off-black">
                      <Image
                        priority
                        fill
                        src={selectedProjectData.coverImage}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-4xl font-bold line-clamp-2">
                        {selectedProjectData.projectName}
                      </p>
                      <p className="mt-3 text-xl tablet:mt-1">
                        {formatBuildersNames(selectedProjectData.builders)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="mt-10 text-2xl tablet:mt-5">
                      "{selectedProjectData.oneLiner}"
                    </p>
                  </div>
                </div>
              </CardWithShadow>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
