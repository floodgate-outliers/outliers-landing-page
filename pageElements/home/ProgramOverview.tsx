import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

const programDetails: { header: string; info: string }[] = [
  {
    header: '😎 Next Cohort',
    info: '~20 Builders Fom Around the World',
  },
  {
    header: '📅 Dates',
    info: 'June - August 2023',
  },
  {
    header: '📝 Application',
    info: 'January 2023',
  },
  {
    header: '🏦 Structure',
    info: 'Learn(week_0 - week_3) + Build(week_4-week_9) + Retreat(week_10)',
  },
  {
    header: '🦾 Commitment',
    info: 'Speakers + Readings + Homework',
  },
];

const emphasisVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
  },
  hover: {
    color: 'var(--floodgate)',
  },
};

export const ProgramOverview: FC = () => {
  return (
    <div className="text-2xl">
      <h2 className="title-header">The Program</h2>
      <motion.p
        initial="initial"
        whileHover="hover"
        className="text-4xl tablet:text-3xl"
      >
        "Outliers is a 10-week, summer program to empower{' '}
        <motion.span
          variants={emphasisVariants}
          className="font-bold underline"
        >
          exceptional
        </motion.span>{' '}
        young builders in crypto."
      </motion.p>
      <motion.p initial="initial" whileHover="hover" className="mt-10">
        More importantly, Outliers is an engaged community of builders from
        across the world who come together to learn and build. We facilitate
        education and mentorship from top industry leaders, and provide
        resources to build and scale the <br className="hidden mobile:inline" />
        <motion.span
          variants={emphasisVariants}
          className="font-bold underline"
        >
          next Web3 breakthrough
        </motion.span>
        .
      </motion.p>
      <div className="mt-10 flex flex-col gap-y-3 text-xl">
        {programDetails.map(({ header, info }, index) => (
          <p key={index}>
            <span className="font-bold">[{header}]</span>
            <br />
            {info}
          </p>
        ))}
      </div>
    </div>
  );
};
