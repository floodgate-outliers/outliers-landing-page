import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { BasicButton } from 'components/buttons/BasicButton';

type PageLink = {
  text: string;
  link: string;
};

const pageLinks: PageLink[] = [
  {
    text: 'COMMUNITY',
    link: '/community',
  },
  {
    text: 'PROJECTS',
    link: '/projects',
  },
  {
    text: 'FAQ',
    link: '/faq',
  },
];

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
      <div className="ml-10 flex flex-row items-center gap-x-10 tablet:gap-x-5">
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
        <a
          href={process.env.NEXT_PUBLIC_APPLICATION_LINK}
          target="_blank"
          rel="noreferrer"
          className="tablet:hidden"
        >
          <BasicButton type="button" color="blue">
            <p className="text-off-white tablet:-my-1 tablet:-mx-2 tablet:text-lg">
              Apply
            </p>
          </BasicButton>
        </a>
      </div>
    </div>
  );
};
