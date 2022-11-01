import Head from 'next/head';
import Image from 'next/image';
import { EndCTA } from 'pageElements/home/EndCTA';
import { TheLegends } from 'pageElements/team/TheLegends';
import { FC } from 'react';
import { AlumniTestimonials } from '../pageElements/home/AlumniTestimonials';
import { FeaturedGuests } from '../pageElements/home/FeaturedGuests';
import { MissionStatements } from '../pageElements/home/MissionStatements';
import { ProgramOverview } from '../pageElements/home/ProgramOverview';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import styles from './index.module.scss';

export default function Team() {
  return (
    <div>
      <div className="px-width-clamp py-10 tablet:pt-10 tablet:pb-20">
        <TheLegends />
      </div>
    </div>
  );
}
