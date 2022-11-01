import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import { AlumniTestimonials } from '../pageElements/home/AlumniTestimonials';
import { FeaturedGuests } from '../pageElements/home/FeaturedGuests';
import { MissionStatements } from '../pageElements/home/MissionStatements';
import { ProgramOverview } from '../pageElements/home/ProgramOverview';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <div className="px-width-clamp py-24 border-b-2 border-b-light-gray">
        <SplashScreen />
      </div>
      <div
        id="program-overview"
        className="px-width-clamp py-24 border-b-2 border-b-light-gray"
      >
        <ProgramOverview />
      </div>
      <div className="px-width-clamp py-24 border-b-2 border-b-light-gray">
        <MissionStatements />
      </div>
      <div className="px-width-clamp py-24 border-b-2 border-b-light-gray">
        <FeaturedGuests />
      </div>
      <div className="px-width-clamp py-24">
        <AlumniTestimonials />
      </div>
    </div>
  );
}
