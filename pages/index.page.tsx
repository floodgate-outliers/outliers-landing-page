// import Head from 'next/head';
import { EndCTA } from 'pageElements/home/EndCTA';
import { FeaturedProjects } from 'pageElements/home/featuredProjects/FeaturedProjects';
import { AlumniQuotes } from '../pageElements/home/alumniQuotes/AlumniQuotes';
import { FeaturedSpeakers } from '../pageElements/home/featuredSpeakers/FeaturedSpeakers';
import { CoreValues } from '../pageElements/home/CoreValues';
import { ProgramOverview } from '../pageElements/home/ProgramOverview';
import { SplashScreen } from '../pageElements/home/SplashScreen';
import { CommunityOverview } from 'pageElements/home/CommunityOverview';
// import { motion, Variants } from 'framer-motion';

// const SubSectionVariants: Variants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 3.5,
//     },
//   },
// };

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
        <ProgramOverview />
      </div>
      <div
        id="community"
        className="border-b-2 border-b-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20"
      >
        <CommunityOverview />
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
        <EndCTA />
      </div>
      {/* </motion.div> */}
    </div>
  );
}
