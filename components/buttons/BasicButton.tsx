import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';
import { motion, Variants } from 'framer-motion';

type BasicButtonProps = {
  color: 'blue' | 'transparent';
  children: ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const buttonVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
};

export const BasicButton: FC<BasicButtonProps> = ({
  color,
  children,
  onClick,
}) => {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      onClick={onClick}
      className={clsx(
        'rounded-md px-8 py-3 text-2xl',
        color === 'blue' ? 'bg-floodgate text-off-white' : 'bg-transparent'
      )}
    >
      {children}
    </motion.button>
  );
};
