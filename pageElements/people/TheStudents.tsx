import { CardWithShadow } from 'components/cards/CardWithShadow';
import {
  formatStudentsNames,
  TheStudentsInfos,
} from 'data/people/TheStudentsInfos';
import { getProjectInfoById } from 'data/projects/SummerProjects';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { StudentInfo, STUDENT_ID } from 'types/People.type';
import { ProjectInfo, PROJECT_ID } from 'types/Project.type';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import clsx from 'clsx';

// Get the students with a project
// Limit to the first 20
const StudentsWithProjects: StudentInfo[] = TheStudentsInfos.filter(
  (s) => s.projectId
).slice(0, 20);

const ProjectCardVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TheStudents: FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<PROJECT_ID>(
    StudentsWithProjects[0].projectId!
  );
  const [selectedProjectData, setSelectedProjectData] = useState<ProjectInfo>(
    getProjectInfoById(StudentsWithProjects[0].projectId!)
  );

  // Whenever a new student is selected, their corresponding project Id will be set in selectedProjectId
  // Subsequently, the data for the project must be extracted
  useEffect(() => {
    const newProjectData = getProjectInfoById(selectedProjectId);
    setSelectedProjectData(newProjectData);
  }, [selectedProjectId]);

  return (
    <div>
      <h2 className="title-header">The Students</h2>
      <div className="grid grid-cols-5 justify-between gap-5">
        {StudentsWithProjects.map(({ id, profileImageUrl, projectId }) => (
          <div
            key={id}
            onClick={() => setSelectedProjectId(projectId!)}
            className="cursor-pointer"
          >
            <div
              className={clsx(
                'relative h-72 w-full border-4 border-off-black transition-all tablet:border-2',
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
              <CardWithShadow animateWhile="hover">
                <div className="py-5 px-5">
                  <div className="flex flex-row items-center gap-x-10">
                    <div className="relative h-20 w-20 border-2 border-off-black">
                      <Image
                        priority
                        fill
                        src={selectedProjectData.coverImage}
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-4xl font-bold">
                        {selectedProjectData.projectName}
                      </p>
                      <p className="mt-3 text-xl">
                        {formatStudentsNames(selectedProjectData.builders)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="mt-10 text-2xl">
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
