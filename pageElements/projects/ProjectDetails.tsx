import Image from 'next/image';
import { FC } from 'react';
import { ProjectInfo } from 'types/Project.type';
import { motion, Variants } from 'framer-motion';

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

export const ProjectDetails: FC<ProjectInfo> = ({
  projectType,
  projectName,
  builders,
  buildersTwitterHandles,
  oneLiner,
  description,
  coverImage,
  mainImage,
  projectLink,
}) => {
  // Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol with Twitter handle links

  const buildersNamesFormatted = () => {
    const twitterHandlesIncluded = builders.map((builder, index) => (
      <motion.a
        variants={BuilderNameVariants}
        initial="initial"
        whileHover="hover"
        href={`https://twitter.com/${buildersTwitterHandles[index]}`}
        target="_blank"
        rel="noreferrer"
      >
        {builder}
      </motion.a>
    ));

    return builders.length === 1
      ? twitterHandlesIncluded
      : builders.map((nameComponent, index) =>
          index === builders.length - 1 ? (
            <>and {nameComponent}</>
          ) : (
            nameComponent
          )
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
        <div className="relative h-28 w-28 flex-shrink-0 border-4 border-off-black tablet:h-20 tablet:w-20 tablet:border-2">
          <Image
            priority
            fill
            src={coverImage}
            alt=""
            className="object-cover"
          />
        </div>
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

      <p className="mt-20 border-y-2 border-gray py-16 text-3xl font-bold tablet:text-2xl">
        "{oneLiner}"
      </p>
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
