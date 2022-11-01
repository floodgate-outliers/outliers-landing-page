import { FC } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

type Legend = {
  profileImageURL: string;
  name: string;
  company: string;
  bio: string;
  handle: string;
};

const legends: Legend[] = [
  {
    profileImageURL: '/legends/AnnMiuraKo.jpeg',
    name: 'Ann Miura-Ko',
    company: 'Floodgate',
    bio: 'Ann Miura-Ko is a co-founding Partner at Floodgate. A repeat member of the Forbes Midas List and the New York Times Top 20 Venture Capitalists Worldwide, Ann was also named the “Most Powerful Woman in Startups” by Forbes. Ann received her PhD in math modeling of infosec from Stanford University.',
    handle: 'annimaniac',
  },
  {
    profileImageURL: '/legends/AlokVasudev.jpg',
    name: 'Alok Vasudev',
    company: 'Standard Crypto',
    bio: 'Alok Vasudev is a Co-Founder / General Partner at Standard Crypto, a crypto-focused venture capital firm. Prior to Standard Crypto, Alok was VC with Benchmark and S28 Capital. Alok received his PhD in electrical engineering from Stanford University.',
    handle: 'alokvasudev',
  },
  {
    profileImageURL: '/legends/TylerWhittle.jpeg',
    name: 'Tyler Whittle',
    company: 'Floodgate',
    bio: 'Tyler Whittle is a Senior Associate at Floodgate. Additionally, he has been one of the co-leads at DAO Masters since its inception and leads their research arm. Tyler received his PhD in Entrepreneurship & Organizations from Stanford University.',
    handle: 'dr_dao_',
  },
  {
    profileImageURL: '/legends/BrookeMartin.jpg',
    name: 'Brooke Martin',
    company: 'Floodgate',
    bio: 'Brooke Martin is an Associate at Floodgate. She previously founded and led a consumer IoT company. Brooke received her Master’s in Management Science & Engineering from Stanford University.',
    handle: 'brookemrtn',
  },
];

const titleVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
};

const nameVariants: Variants = {
  initial: {
    scale: 1,
    color: 'var(--off-black)',
  },
  hover: {
    scale: 1.025,
    color: 'var(--floodgate)',
  },
};

export const TheLegends: FC = () => {
  return (
    <div>
      <h1 className="title-header">
        The Team{' '}
        <motion.span
          variants={titleVariants}
          initial="initial"
          animate="animate"
          className="text-floodgate"
        >
          (A.K.A Legends)
        </motion.span>
      </h1>
      <div className="flex flex-row justify-between gap-x-5 tablet:flex-col tablet:gap-y-20">
        {legends.map(({ profileImageURL, name, company, bio, handle }) => {
          return (
            <motion.div
              initial="initial"
              whileHover="hover"
              key={handle}
              className="w-80 tablet:w-full tablet:border-2 tablet:py-5 tablet:px-6"
            >
              <div className="tablet:flex tablet:flex-row tablet:items-center tablet:gap-x-5">
                <div className="relative h-96 w-full tablet:h-20 tablet:w-20 [&>img]:object-cover [&>img]:object-top tablet:[&>img]:rounded-lg">
                  <Image priority src={profileImageURL} alt="profile" fill />
                </div>
                <div>
                  <motion.a
                    href={`https://twitter.com/${handle}`}
                    target="_blank"
                    rel="noreferrer"
                    variants={nameVariants}
                    className="mt-5 inline-block text-2xl font-bold underline tablet:mt-0"
                  >
                    {name}
                  </motion.a>
                  <p className="mt-0 text-base font-bold">{company}</p>
                </div>
              </div>

              <p className="mt-5 text-lg tablet:mt-7">{bio}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
