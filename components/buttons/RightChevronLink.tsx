import { FC } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const LinkVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    x: 0,
    borderBottom: '2px solid transparent',
  },
  hover: {
    color: 'var(--floodgate)',
    x: 10,
    borderBottom: '2px solid var(--floodgate)',
  },
};

type RightChevronLinkProps = {
  link: string;
  text: string;
};

export const RightChevronLink: FC<RightChevronLinkProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <motion.div
        variants={LinkVariants}
        initial="initial"
        whileHover="hover"
        className="flex w-max cursor-pointer flex-row gap-x-2 whitespace-pre text-3xl"
      >
        <p className="text-inherit">{text}</p>
        <p className="text-inherit">&#707;</p>
      </motion.div>
    </Link>
  );
};
