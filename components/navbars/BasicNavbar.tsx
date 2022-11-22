import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { BasicButton } from 'components/buttons/BasicButton';

type PageLink = {
  text: string;
  link: string;
};

const pageLinks: PageLink[] = [
  {
    text: 'FAQ',
    link: '/faq',
  },
  // {
  //   text: 'CONTACT',
  //   link: '/contact',
  // },
];

const peopleOptionLinks: PageLink[] = [
  {
    text: 'MENTORS',
    link: '/people/mentors',
  },
  {
    text: 'SPEAKERS',
    link: '/people/speakers',
  },
  {
    text: 'STUDENTS',
    link: '/people/students',
  },
];

const PeopleLinkPopupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const PeopleLinkVariants: Variants = {
  initial: {
    x: 0,
    color: 'var(--off-white)',
  },
  hover: {
    x: 5,
    color: 'var(--floodgate)',
  },
};

const LinkVariants: Variants = {
  initial: {
    y: 0,
    color: 'var(--off-black)',
  },
  hover: {
    y: -3,
    color: 'var(--floodgate)',
  },
};

export const BasicNavbar: FC = () => {
  const router = useRouter();

  const [showPeopleOptions, setShowPeopleOptions] = useState(false);

  // Hide options when changing paths
  useEffect(() => {
    setShowPeopleOptions(false);
  }, [router.route]);

  const PeopleOptions = () => {
    return (
      <motion.div
        variants={PeopleLinkPopupVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute top-[120%] left-0 flex flex-col gap-y-1 bg-gray px-5 py-3 tablet:gap-y-5 tablet:py-5 tablet:px-7"
      >
        {peopleOptionLinks.map(({ text, link }, index) => {
          return (
            <Link key={index} href={link}>
              <motion.p
                variants={PeopleLinkVariants}
                initial="initial"
                whileHover="hover"
                className="text-xl text-off-white tablet:text-lg"
              >
                {text}
              </motion.p>
            </Link>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-50 flex flex-row items-center justify-between border-b-2 bg-off-white px-width-clamp py-5">
      <Link href="/">
        <div className="flex flex-row items-center gap-x-5">
          <div className="relative h-12 w-12 rounded-full tablet:h-16 tablet:w-16">
            <Image priority fill src="/OutliersLogo.png" alt="Outliers" />
          </div>
          <p className="text-2xl font-bold">OUTLIERS</p>
        </div>
      </Link>
      <div className="ml-10 flex flex-row items-center gap-x-7">
        <div className="relative">
          <motion.p
            variants={LinkVariants}
            initial="initial"
            whileHover="hover"
            className="cursor-pointer text-2xl tablet:text-lg"
            onClick={() => {
              setShowPeopleOptions(!showPeopleOptions);
            }}
          >
            PEOPLE
          </motion.p>
          <AnimatePresence>
            {showPeopleOptions && PeopleOptions()}
          </AnimatePresence>
        </div>
        {pageLinks.map(({ text, link }) => {
          return (
            <Link href={link} key={link}>
              <motion.p
                variants={LinkVariants}
                initial="initial"
                whileHover="hover"
                className="cursor-pointer text-2xl tablet:text-lg"
              >
                {text}
              </motion.p>
            </Link>
          );
        })}
        <a href={process.env.APPLICATION_LINK} target="_blank" rel="noreferrer">
          <BasicButton type="button" color="blue">
            <p className="text-2xl tablet:-my-1 tablet:-mx-2 tablet:text-lg">
              Apply
            </p>
          </BasicButton>
        </a>
      </div>
    </div>
  );
};
