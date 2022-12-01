import { FC, ReactNode, useEffect, useState } from 'react';
import { motion, Transition, Variants } from 'framer-motion';

import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import clsx from 'clsx';

type CardWithShadowProps = {
  children: ReactNode;
  id?: string;
  backgroundColor?: 'off-white' | 'light-gray';
  animateWhile: 'hover' | 'inView' | 'always' | 'never';
  scale?: boolean;
  transition?: Transition;
  shadowSize?: 'large' | 'small';
  fullWidth?: boolean;
};

export const CardWithShadow: FC<CardWithShadowProps> = ({
  children,
  id,
  backgroundColor = 'off-white',
  scale = false,
  animateWhile = 'always',
  transition,
  shadowSize = 'large',
  fullWidth = false,
}) => {
  const { isDesktop, isTablet } = useMediaQueryContext();

  const [boxShadow, setBoxShadow] = useState('0px 0px var(--off-black)');

  useEffect(() => {
    if (shadowSize === 'small') {
      setBoxShadow('10px 10px var(--off-black)');
    } else if (isTablet) {
      setBoxShadow('15px 15px var(--off-black)');
    } else if (isDesktop) {
      setBoxShadow('12.5px 12.5px var(--off-black)');
    } else {
      setBoxShadow('20px 20px var(--off-black)');
    }
  }, [shadowSize, isDesktop, isTablet]);

  const cardVariants: Variants = {
    initial: {
      scale: 1,
      x: 0,
      y: 0,
      boxShadow: '0px 0px var(--off-black)',
    },
    animate: {
      scale: scale ? 1.01 : 1,
      x: -5,
      y: -5,
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
      className={clsx(
        'flex h-fit flex-col gap-y-5 rounded border-4 border-off-black bg-off-white py-5 px-7 tablet:border-2 mobile:py-5 mobile:px-6',
        fullWidth ? 'w-full' : 'w-fit'
      )}
      style={{
        backgroundColor: `var(--${backgroundColor})`,
      }}
    >
      {children}
    </motion.div>
  );
};
