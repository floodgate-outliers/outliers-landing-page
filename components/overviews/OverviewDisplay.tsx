import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Overview } from 'types/Overview';
import { parseTextForEmphasis } from 'utils/parseTextForEmphasis';

type OverviewDisplayProps = {
  overview: Overview;
};

export const OverviewDisplay: FC<OverviewDisplayProps> = ({ overview }) => {
  const { title, quote, description, details } = overview;

  return (
    <div>
      <h2 className="title-header">{title}</h2>
      <p className="text-2xl font-bold">"{quote}"</p>
      <motion.p
        initial="initial"
        whileHover="hover"
        className="mt-10 mr-20 text-2xl desktop:mr-4"
      >
        {parseTextForEmphasis(description)}
      </motion.p>
      <div className="mt-16 flex flex-col gap-y-5 text-xl mobile:gap-y-10 mobile:text-2xl">
        {details.map(({ emoji, header, info }, index) => (
          <div key={index} className="flex flex-row gap-x-3">
            <p>{emoji}</p>
            <div>
              <p className="text-2xl font-bold">{header}</p>
              <p>{info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
