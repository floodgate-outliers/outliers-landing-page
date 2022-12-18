import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

const programDetails: { header: string; info: string }[] = [
  {
    header: '😎 Next Cohort',
    info: '~20 Builders Fom Around the World',
  },
  {
    header: '📅 Dates',
    info: 'June - August 2023, Tuesday & Thursday from 5:00-6:30pm PT',
  },
  {
    header: '📝 Application',
    info: 'January 2023',
  },
  {
    header: '🏦 Structure',
    info: 'Learn(week_0 - week_3) + Build(week_4 - week_9) + Retreat(week_10)',
  },
  {
    header: '🦾 Commitment',
    info: 'Sessions + Reading + Assignments + Final Build Project',
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
    <div>
      <h2 className="title-header">The Program</h2>
      <p className="text-3xl">
        "A cornerstone of Outliers is our 10-week, summer program designed to
        educate and empower exceptional young builders in crypto."{' '}
      </p>
      <motion.p
        initial="initial"
        whileHover="hover"
        className="mt-10 mr-20 text-2xl desktop:mr-4"
      >
        The Outliers part-time summer program serves as the launchpad for new
        Outliers entering the community. We facilitate education and mentorship
        from top industry leaders that teach you how to build and scale the{' '}
        <motion.span
          variants={emphasisVariants}
          className="font-bold underline"
        >
          next Web3 breakthrough
        </motion.span>
        . By the end of this program, you will have a solid foundation in both
        crypto AND entrepreneurship.
      </motion.p>
      <div className="mt-16 flex flex-col gap-y-5 text-xl mobile:gap-y-10 mobile:text-2xl">
        {programDetails.map(({ header, info }, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{header}</p>
            <div className="ml-12">
              <p>{info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
