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
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { CommunityOverview } from 'data/overviews/communityOverview';

const MeetVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    x: 0,
  },
  hover: {
    color: 'var(--floodgate)',
    x: 10,
    textDecoration: 'underline',
  },
};

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
      <div className="overflow-hidden border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
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
          <Link href="/community">
            <motion.div
              variants={MeetVariants}
              initial="initial"
              whileHover="hover"
              className="mt-10 flex w-fit cursor-pointer flex-row whitespace-pre text-3xl"
            >
              <p className="text-inherit">Meet the Community </p>
              <p className="text-inherit">&#707;</p>
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <CoreValues />
      </div>
      <div className="overflow-hidden border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <FeaturedSpeakers />
      </div>
      <div className="overflow-hidden border-b-2 px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
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
