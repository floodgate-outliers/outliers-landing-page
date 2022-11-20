// import Head from 'next/head';
import { EndCTA } from 'pageElements/home/EndCTA';
import { FeaturedProjects } from 'pageElements/home/featuredProjects/FeaturedProjects';
import { AlumniTestimonials } from '../pageElements/home/AlumniTestimonials';
import { FeaturedGuests } from '../pageElements/home/FeaturedGuests';
import { CoreValues } from '../pageElements/home/CoreValues';
import { ProgramOverview } from '../pageElements/home/ProgramOverview';
import { SplashScreen } from '../pageElements/home/SplashScreen';

export default function Home() {
  return (
    <div>
      <div className="border-b-2 border-b-light-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <SplashScreen />
      </div>
      <div className="overflow-hidden border-b-2 border-b-light-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <FeaturedProjects />
      </div>
      <div
        id="program-overview"
        className="border-b-2 border-b-light-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20"
      >
        <ProgramOverview />
      </div>
      <div className="border-b-2 border-b-light-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <CoreValues />
      </div>
      <div className="overflow-hidden border-b-2 border-b-light-gray px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <FeaturedGuests />
      </div>
      <div className="border-b-2 px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <AlumniTestimonials />
      </div>
      <div className="px-width-clamp py-20 tablet:pt-24 tablet:pb-20">
        <EndCTA />
      </div>
    </div>
  );
}
