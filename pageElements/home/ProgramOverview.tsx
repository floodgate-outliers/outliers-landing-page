import { FC } from 'react';

import styles from './ProgramOverview.module.scss';

export const ProgramOverview: FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['card'] + ' solid-shadow-animation'}>
        <h2 className={styles['title'] + ' title-font'}>10-Week Program</h2>
        <p className="paragraph-font">
          Outliers is a 10-week, summer program to empower exceptional student
          builders in Crypto.
          <br />
          <br /> More importantly, Outliers is an engaged community of students
          from across the country who come together to learn and build. We
          facilitate education and mentorship from top industry leaders, and
          provide resources to build and scale the{' '}
          <span>next Web3 breakthrough</span>.
        </p>
      </div>
    </div>
  );
};
