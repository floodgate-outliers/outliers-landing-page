import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { AlumniTestimonials } from '../pageElements/home/AlumniTestimonials';
import { FeaturedGuests } from '../pageElements/home/FeaturedGuests';
import { MissionStatements } from '../pageElements/home/MissionStatements';
import { ProgramOverview } from '../pageElements/home/ProgramOverview';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles['container']}>
      <div className={styles['section-container']}>
        <SplashScreen />
      </div>
      <div className={styles['section-container']}>
        <ProgramOverview />
      </div>
      <div className={styles['section-container']}>
        <MissionStatements />
      </div>
      <div className={styles['section-container']}>
        <FeaturedGuests />
      </div>
      <div className={styles['section-container']}>
        <AlumniTestimonials />
      </div>
    </div>
  );
}
