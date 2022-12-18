import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const HiddenImageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const TextVariants: Variants = {
  initial: {
    color: 'var(--off-white)',
    scale: 1,
    textDecoration: 'none',
  },
  hover: {
    color: 'var(--floodgate)',
    scale: 1.1,
    textDecoration: 'underline',
  },
};

const MeetVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    x: 0,
  },
  hover: {
    color: 'var(--floodgate)',
    x: 10,
    textDecoration: 'underline',
  },
};

export const CommunityIntro: FC = () => {
  const [isAutoplayDisabled, setIsAutoplayDisabled] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined);
  const [showBuildersOrMentors, setShowBuildersOrMentors] = useState<
    'mentors' | 'builders'
  >('builders');

  useMemo(() => {
    if (!isAutoplayDisabled) {
      setAutoplayInterval(
        setInterval(() => {
          setShowBuildersOrMentors((currVal) =>
            currVal === 'builders' ? 'mentors' : 'builders'
          );
        }, 2000)
      );
    } else {
      clearInterval(autoplayInterval);
    }
  }, [isAutoplayDisabled]);

  return (
    <div>
      <h2 className="title-header">The Community</h2>
      <div className="w-fill relative flex h-[60rem] flex-row justify-center tablet:h-[30rem]">
        <div className="relative z-10 mt-6 h-fit px-2 py-2 text-6xl text-off-white tablet:mt-1 tablet:text-4xl mobile:mt-6">
          <Link href="/community/builders">
            <motion.span
              variants={TextVariants}
              initial="initial"
              animate={
                showBuildersOrMentors === 'builders' ? 'hover' : 'initial'
              }
              onHoverStart={() => {
                setIsAutoplayDisabled(true);
                setShowBuildersOrMentors('builders');
              }}
              className="cursor-pointer text-off-white"
            >
              Builders
            </motion.span>
          </Link>{' '}
          x{' '}
          <Link href="/community/mentors">
            <motion.span
              variants={TextVariants}
              initial="initial"
              animate={
                showBuildersOrMentors === 'mentors' ? 'hover' : 'initial'
              }
              onHoverStart={() => {
                setIsAutoplayDisabled(true);
                setShowBuildersOrMentors('mentors');
              }}
              className="cursor-pointer text-off-white"
            >
              Mentors
            </motion.span>
          </Link>
        </div>
        <Image
          priority
          fill
          src="/community/BuildersAndMentors.jpg"
          alt="all"
          className="object-cover grayscale"
        />
        <motion.div
          variants={HiddenImageVariants}
          initial="hidden"
          animate={showBuildersOrMentors === 'builders' ? 'visible' : 'hidden'}
        >
          <Image
            priority
            fill
            src="/community/Builders.jpg"
            alt="all"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          variants={HiddenImageVariants}
          initial="hidden"
          animate={showBuildersOrMentors === 'mentors' ? 'visible' : 'hidden'}
        >
          <Image
            priority
            fill
            src="/community/Mentors.jpg"
            alt="all"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div>
        <Link href="/community">
          <motion.p
            variants={MeetVariants}
            initial="initial"
            whileHover="hover"
            className="mt-10 w-fit cursor-pointer text-5xl mobile:text-3xl"
          >
            Meet the Community &#707;
          </motion.p>
        </Link>
      </div>
    </div>
  );
};
