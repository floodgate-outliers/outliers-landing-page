import { CardWithShadow } from 'components/cards/CardWithShadow';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { formatStudentsNames } from 'data/people/TheStudentsInfos';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { ProjectInfo } from 'types/Project.type';

const viewProjectVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
  },
  hover: {
    color: 'var(--floodgate)',
  },
};

export const FeaturedProjectCard: FC<ProjectInfo> = ({
  id,
  projectName,
  builders,
  description,
  coverImage,
}) => {
  return (
    <Link href={`/projects/${id}`}>
      <CardWithShadow animateWhile="hover">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="flex w-[60rem] flex-row gap-x-10 px-5 py-3 tablet:w-fit tablet:flex-col"
        >
          <div className="relative h-[25rem] w-[25rem] flex-shrink-0 border-4 border-off-black tablet:border-2">
            <Image
              priority
              fill
              src={coverImage}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="flex flex-col tablet:mt-5">
            <p className="text-4xl underline tablet:text-3xl">{projectName}</p>
            <p className="mt-1 text-lg">{formatStudentsNames(builders)}</p>
            <p className="mt-10 text-xl line-clamp-6 tablet:hidden">
              {description}
            </p>
            <motion.p
              variants={viewProjectVariants}
              className="mt-auto ml-auto w-fit justify-self-end pt-5 pl-5 text-xl font-bold tablet:hidden"
            >
              View Project
            </motion.p>
          </div>
        </motion.div>
      </CardWithShadow>
    </Link>
  );
};
