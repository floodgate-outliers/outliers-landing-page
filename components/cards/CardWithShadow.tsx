import { FC, ReactNode, useEffect, useState } from 'react';
import { motion, Transition, Variants } from 'framer-motion';

import styles from './CardWithShadow.module.scss';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

type CardWithShadowProps = {
  children: ReactNode;
  id?: string;
  backgroundColor?: 'off-white' | 'light-gray';
  animateWhile: 'hover' | 'inView' | 'always';
  scale?: boolean;
  transition?: Transition;
  shadowSize?: 'large' | 'small';
};

export const CardWithShadow: FC<CardWithShadowProps> = ({
  children,
  id,
  backgroundColor = 'off-white',
  scale = false,
  animateWhile = 'always',
  transition,
  shadowSize = 'large',
}) => {
  const { isDesktop, isTablet } = useMediaQueryContext();

  const [boxShadow, setBoxShadow] = useState('0px 0px var(--off-black)');

  useEffect(() => {
    if (shadowSize === 'small') {
      setBoxShadow('10px 10px var(--off-black)');
    } else if (isDesktop) {
      setBoxShadow('15px 15px var(--off-black)');
    } else if (isDesktop) {
      setBoxShadow('12.5px 12.5px var(--off-black)');
    } else {
      setBoxShadow('30px 30px var(--off-black)');
    }
  }, [shadowSize, isDesktop, isTablet]);

  const cardVariants: Variants = {
    initial: {
      scale: 1,
      boxShadow: '0px 0px var(--off-black)',
    },
    animate: {
      scale: scale ? 1.01 : 1,
      boxShadow,
      transition: transition,
    },
  };

  return (
    <motion.div
      id={id}
      variants={cardVariants}
      initial="initial"
      animate={animateWhile === 'always' ? 'animate' : undefined}
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
