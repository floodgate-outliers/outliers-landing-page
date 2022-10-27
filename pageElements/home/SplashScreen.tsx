import { FC } from 'react';

import styles from './SplashScreen.module.css';

export const SplashScreen: FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['names-container'] + ' xl-title'}>
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className={styles['main-title']}>
        <h1 className="xxl-title">Create the Future</h1>
        <h2 className="xl-title">Builders x Crypto</h2>
      </div>
      <div></div>
      <div>
        <p className={styles['outliers'] + ' title'}>Outliers</p>
      </div>
    </div>
  );
};
