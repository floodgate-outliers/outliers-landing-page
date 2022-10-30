import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import styles from './ProgramOverview.module.scss';
import { CardWithShadow } from 'components/cards/CardWithShadow';

export const ProgramOverview: FC = () => {
  const cardVariants: Variants = {
    initial: {
      boxShadow: '0px 0px #000',
    },
    inView: {
      boxShadow: '30px 30px #000',
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles['container']}>
      <CardWithShadow
        animateWhile="inView"
        backgroundColor="light-gray"
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        <div className={styles['card']}>
          <h2 className={styles['title'] + ' title-font'}>10-Week Program</h2>
          <p className="paragraph-font">
            Outliers is a 10-week, summer program to empower exceptional student
            builders in Crypto.
            <br />
            <br /> More importantly, Outliers is an engaged community of
            students from across the country who come together to learn and
            build. We facilitate education and mentorship from top industry
            leaders, and provide resources to build and scale the{' '}
            <span>next Web3 breakthrough</span>.
          </p>
        </div>
      </CardWithShadow>
    </div>
  );
};
