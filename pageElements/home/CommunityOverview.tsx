import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const communityDetails: { header: string; info: string }[] = [
  {
    header: '👷‍♀️ Building Community Projects',
    info: 'New cohort NFTs, community mgmt tools, DAO bounties, etc.',
  },
  {
    header: '👨‍🎨 Marketing, Design, and Content Generation',
    info: 'Owning @outlierdao twitter, writing about Outliers projects, etc.',
  },
  {
    header: '💃 Community management',
    info: 'Organizing meetups, finding speakers, internal DAO comms, etc.',
  },
  {
    header: '🥷 Recruitment',
    info: 'Outreach materials and planning, application review, etc.',
  },
  {
    header: '🧑‍🔬 Ecosystem Research',
    info: 'Surfacing interesting new companies, leading study groups, etc.',
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

export const CommunityOverview: FC = () => {
  return (
    <div>
      <h2 className="title-header">The Community</h2>
      <p className="text-3xl">
        "The best part about Outliers is the A+ community of like-minded
        builders who are continuously pushing the bounds in crypto."{' '}
      </p>
      <motion.p
        initial="initial"
        whileHover="hover"
        className="mt-10 mr-20 text-2xl desktop:mr-4"
      >
        The summer program is just the beginning of the Outlier experience!
        Outliers is run as a collective between Floodgate, Standard Crypto, and
        the Outliers. Therefore, we ask all new Outliers to make a 1 year
        commitment to stewarding our community until passing the torch to the
        next cohort🔥
      </motion.p>
      <div className="mt-16 flex flex-col gap-y-5 text-xl mobile:gap-y-10 mobile:text-2xl">
        {communityDetails.map(({ header, info }, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{header}</p>
            <div className="ml-12">
              <p>{info}</p>
            </div>
          </div>
        ))}
        <p className="text-2xl font-bold">And much more!</p>
      </div>
      <div className="mt-20">
        <Link href="/community">
          <motion.p
            variants={MeetVariants}
            initial="initial"
            whileHover="hover"
            className="mt-10 w-fit cursor-pointer text-3xl"
          >
            Meet the Community &#707;
          </motion.p>
        </Link>
      </div>
    </div>
  );
};
