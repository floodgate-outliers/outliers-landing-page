import { FC, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

import styles from './CardWithShadow.module.scss';

type CardWithShadowProps = {
  children: ReactNode;
  id?: string;
  backgroundColor?: 'off-white' | 'light-gray';
  animateWhile: 'hover' | 'inView' | 'always';
  scale?: boolean;
  delay?: number;
  duration?: number;
};

export const CardWithShadow: FC<CardWithShadowProps> = ({
  children,
  id,
  backgroundColor = 'off-white',
  scale = false,
  animateWhile = 'always',
}) => {
  const cardVariants: Variants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px #000',
    },
    animate: {
      scale: scale ? 1.01 : 1,
      boxShadow: '15px 15px #000',
    },
  };

  return (
    <motion.div
      id={id}
      variants={cardVariants}
      initial="initial"
      whileHover={animateWhile === 'hover' ? 'animate' : undefined}
      whileInView={animateWhile === 'inView' ? 'animate' : undefined}
      className={styles['card']}
      style={{
        backgroundColor: `var(--${backgroundColor})`,
      }}
    >
      {children}
    </motion.div>
  );
};
