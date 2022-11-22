import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

const LinkVariants: Variants = {
  initial: {
    x: 0,
  },
  hover: {
    x: 20,
  },
};

const ArrowVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.25,
    },
  },
};

const UnderlineVariants: Variants = {
  initial: {
    opacity: 0,
    width: '0%',
  },
  hover: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 0.75,
    },
  },
};

const communityBreakdown: {
  group: string;
  link: string;
}[] = [
  {
    group: 'Mentors',
    link: '/people/mentors',
  },
  {
    group: 'Speakers',
    link: '/people/speakers',
  },
  {
    group: 'Students',
    link: '/people/students',
  },
];

export const AllPeope: FC = () => {
  return (
    <div>
      <h2 className="title-header">The People</h2>
      <div className="mt-24 flex h-full flex-col gap-y-16 tablet:mt-52 tablet:gap-y-3">
        {communityBreakdown.map(({ group, link }, index) => {
          return (
            <motion.div
              key={index}
              variants={LinkVariants}
              initial="initial"
              whileHover="hover"
              className="w-fit"
            >
              <Link href={link}>
                <p className="text-8xl tablet:text-7xl">
                  The {group}{' '}
                  <motion.span variants={ArrowVariants}>&#707;</motion.span>
                </p>
              </Link>
              <motion.div
                variants={UnderlineVariants}
                className="h-2 w-0 bg-off-black"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
