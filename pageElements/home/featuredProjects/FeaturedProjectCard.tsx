import { CardWithShadow } from 'components/cards/CardWithShadow';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { FeaturedProject } from './FeaturedProjectsInfo';

const viewProjectVariants: Variants = {
  initial: {
    scale: 1,
    color: 'var(--off-black)',
  },
  hover: {
    scale: 1.05,
    color: 'var(--floodgate)',
  },
};

export const FeaturedProjectCard: FC<FeaturedProject> = ({
  coverImage,
  title,
  builders,
  description,
  projectLink,
}) => {
  const [isHoveringOverViewProject, setIsHoveringOverViewProject] =
    useState(false);

  // Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol
  const buildersString =
    builders.length === 1
      ? builders
      : builders.map((name, index) =>
          index === builders.length - 1 ? `and ${name}` : `${name}, `
        );

  return (
    <Link href={projectLink}>
      <CardWithShadow
        animateWhile={isHoveringOverViewProject ? 'always' : 'never'}
      >
        <div className="flex w-[60rem] flex-row gap-x-10 px-5 py-3 tablet:w-fit tablet:flex-col">
          <div className="relative h-[30rem] w-[30rem] flex-shrink-0 border-4 border-off-black tablet:border-2">
            <Image priority fill src={coverImage} alt="" />
          </div>
          <div className="flex flex-col tablet:mt-5">
            <p className="text-4xl underline">{title}</p>
            <p className="mt-1 text-lg">{buildersString}</p>
            <p className="mt-10 text-xl tablet:hidden">{description}</p>
            <motion.p
              variants={viewProjectVariants}
              initial="initial"
              animate={isHoveringOverViewProject ? 'hover' : 'initial'}
              onHoverStart={() => setIsHoveringOverViewProject(true)}
              onHoverEnd={() => setIsHoveringOverViewProject(false)}
              className="mt-auto ml-auto w-fit justify-self-end pt-5 pl-5 text-xl font-bold tablet:hidden"
            >
              View Project
            </motion.p>
          </div>
        </div>
      </CardWithShadow>
    </Link>
  );
};
