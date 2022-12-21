import { FC } from 'react';
import { motion } from 'framer-motion';
import { Overview } from 'types/Overview';
import { parseTextForEmphasis } from 'utils/parseTextForEmphasis';
import Image from 'next/image';

type OverviewDisplayProps = {
  overview: Overview;
};

export const OverviewDisplay: FC<OverviewDisplayProps> = ({ overview }) => {
  const { title, imageUrl, quote, description, details } = overview;

  return (
    <div className="mb-20 grid grid-cols-12 tablet:mb-0">
      <h2 className="title-header col-span-12">{title}</h2>
      <p className="col-span-12 text-2xl font-bold">"{quote}"</p>
      <div className="relative col-span-5 col-start-8 row-start-4 mt-16 h-full w-full tablet:col-span-12 tablet:col-start-1 tablet:row-auto tablet:h-96">
        <Image
          fill
          alt=""
          src={imageUrl}
          className="border-4 border-off-black object-cover tablet:border-2"
        />
      </div>
      <motion.p
        initial="initial"
        whileHover="hover"
        className="col-span-12 mt-10 mr-20 text-2xl desktop:mr-4"
      >
        {parseTextForEmphasis(description)}
      </motion.p>
      <div className="col-span-6 mt-16 flex flex-col gap-y-5 text-xl tablet:col-span-12 mobile:gap-y-10 mobile:text-2xl">
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
