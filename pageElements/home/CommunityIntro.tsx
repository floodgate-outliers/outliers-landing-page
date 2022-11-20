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
  const [showStudentsOrMentors, setShowStudentsOrMentors] = useState<
    'mentors' | 'students'
  >('students');

  useMemo(() => {
    if (!isAutoplayDisabled) {
      setAutoplayInterval(
        setInterval(() => {
          setShowStudentsOrMentors((currVal) =>
            currVal === 'students' ? 'mentors' : 'students'
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
          <Link href="/people/students">
            <motion.span
              variants={TextVariants}
              initial="initial"
              animate={
                showStudentsOrMentors === 'students' ? 'hover' : 'initial'
              }
              onHoverStart={() => {
                setIsAutoplayDisabled(true);
                setShowStudentsOrMentors('students');
              }}
              className="cursor-pointer text-off-white"
            >
              Students
            </motion.span>
          </Link>{' '}
          x{' '}
          <Link href="/people/mentors">
            <motion.span
              variants={TextVariants}
              initial="initial"
              animate={
                showStudentsOrMentors === 'mentors' ? 'hover' : 'initial'
              }
              onHoverStart={() => {
                setIsAutoplayDisabled(true);
                setShowStudentsOrMentors('mentors');
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
          src="/community/StudentsAndMentors.jpg"
          alt="all"
          className="object-cover grayscale"
        />
        <motion.div
          variants={HiddenImageVariants}
          initial="hidden"
          animate={showStudentsOrMentors === 'students' ? 'visible' : 'hidden'}
        >
          <Image
            priority
            fill
            src="/community/Students.jpg"
            alt="all"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          variants={HiddenImageVariants}
          initial="hidden"
          animate={showStudentsOrMentors === 'mentors' ? 'visible' : 'hidden'}
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
        <Link href="/people">
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
