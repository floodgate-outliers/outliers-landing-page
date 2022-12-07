import Image from 'next/image';
import { FC } from 'react';
import { ProjectInfo } from 'types/Project.type';
import { motion, Variants } from 'framer-motion';
import { getStudentInfoById } from 'data/people/TheStudentsInfos';

const ProjectNameVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
  },
  hover: {
    color: 'var(--floodgate)',
  },
};

const BuilderNameVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    textDecoration: 'none',
  },
  hover: {
    color: 'var(--floodgate)',
    textDecoration: 'underline',
  },
};

const CoverImageVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

export const ProjectDetails: FC<ProjectInfo> = ({
  projectType,
  projectName,
  builders,
  oneLiner,
  description,
  coverImage,
  mainImage,
  projectLink,
}) => {
  // Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol with Twitter handle links

  const buildersNamesFormatted = () => {
    const twitterHandlesIncluded = builders.map((builder) => {
      const { twitterHandle } = getStudentInfoById(builder);
      return (
        <motion.a
          key={builder}
          variants={BuilderNameVariants}
          initial="initial"
          whileHover="hover"
          href={`https://twitter.com/${twitterHandle}`}
          target="_blank"
          rel="noreferrer"
        >
          {builder}
        </motion.a>
      );
    });

    return twitterHandlesIncluded.map((nameComponent, index) =>
      index === 0 ? nameComponent : <>, {nameComponent}</>
    );
  };

  return (
    <div>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-row items-center gap-x-10"
      >
        <motion.div
          variants={CoverImageVariants}
          initial="initial"
          whileHover="hover"
          className="relative h-28 w-28 flex-shrink-0 border-4 border-off-black tablet:h-20 tablet:w-20 tablet:border-2"
        >
          <Image
            priority
            fill
            src={coverImage}
            alt=""
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-col items-start">
          <h2 className="mb-0 text-5xl font-bold tablet:text-3xl">
            <motion.span
              variants={ProjectNameVariants}
              initial="initial"
              whileHover="hover"
              className="underline"
            >
              {projectName}
            </motion.span>{' '}
            <span className="text-2xl text-gray">({projectType})</span>
          </h2>
          <div className="mt-5 text-xl">{buildersNamesFormatted()}</div>
        </div>
      </a>

      <p className="mt-20 text-3xl font-bold tablet:text-2xl">"{oneLiner}"</p>
      <hr className="header-divider" />
      <div className="mt-20 flex flex-row items-center gap-x-20 gap-y-20 tablet:flex-col">
        <div className="relative h-[40rem] w-[40rem] flex-shrink-0 border-4 border-off-black desktop:h-[35rem] desktop:w-[35rem] tablet:border-2">
          <Image
            priority
            fill
            src={mainImage}
            alt=""
            className="object-cover"
          />
        </div>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
};
