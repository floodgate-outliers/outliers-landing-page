import { FC } from 'react';

import styles from './SplashScreen.module.css';

export const SplashScreen: FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['names-container'] + ' title-font'}>
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className={styles['main-title']}>
        <h1 className="xxl-title-font">Create the Future</h1>
        <h2 className="title-font">Builders x Crypto</h2>
      </div>
      <div></div>
      <div>
        <p className={styles['outliers'] + ' subtitle-font'}>Outliers</p>
      </div>
    </div>
  );
};
