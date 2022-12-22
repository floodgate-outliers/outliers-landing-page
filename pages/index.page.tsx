// import Head from 'next/head';
// import { ComingSoonCTA } from 'pageElements/home/ComingSoonCTA';
import { FeaturedProjects } from 'pageElements/home/featuredProjects/FeaturedProjects';
import { AlumniQuotes } from '../pageElements/home/alumniQuotes/AlumniQuotes';
import { FeaturedSpeakers } from '../pageElements/home/featuredSpeakers/FeaturedSpeakers';
import { CoreValues } from '../pageElements/home/CoreValues';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import { DeadlineCTA } from 'pageElements/home/DeadlineCTA';
import { OverviewDisplay } from 'components/overviews/OverviewDisplay';
import { ProgramOverview } from 'data/overviews/programOverview';
import { CommunityOverview } from 'data/overviews/communityOverview';
import { RightChevronLink } from 'components/buttons/RightChevronLink';

export default function HomePage() {
  return (
    <div>
      <div className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <SplashScreen />
      </div>
      {/* <motion.div
        variants={SubSectionVariants}
        initial="hidden"
        animate="visible"
      > */}
      <div className="border-b-2 border-b-gray py-20 tablet:pt-24 tablet:pb-20">
        <FeaturedProjects />
      </div>
      <div
        id="program"
        className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20"
      >
        <OverviewDisplay overview={ProgramOverview} />
      </div>
      <div
        id="community"
        className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20"
      >
        <OverviewDisplay overview={CommunityOverview} />
        <div className="mt-20">
          <RightChevronLink link="/community" text="Meet the Community" />
        </div>
      </div>
      <div className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <CoreValues />
      </div>
      <div className="border-b-2 border-b-gray py-20 tablet:pt-24 tablet:pb-20">
        <FeaturedSpeakers />
      </div>
      <div className="border-b-2 py-20 tablet:pt-24 tablet:pb-20">
        <AlumniQuotes />
      </div>
      <div className="px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        {/* <ComingSoonCTA /> */}
        <DeadlineCTA />
      </div>
      {/* </motion.div> */}
    </div>
  );
}
