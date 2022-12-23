import { FC } from 'react';

import { SpeakerInfo } from 'types/Community';
import { TheSpeakersInfos } from 'data/community/TheSpeakersInfos';
import { FeaturedSpeakerCard } from './FeaturedSpeakerCard';
import { BasicCarousel } from 'components/carousel/BasicCarousel';

// const featuredSpeakersInfo: SpeakerInfo[] = [
//   TheSpeakersInfos[0],
//   TheSpeakersInfos[1],
//   TheSpeakersInfos[2],
//   TheSpeakersInfos[3],
// ];

export const FeaturedSpeakers: FC = () => {
  const FeaturedSpeakerCards = TheSpeakersInfos.map((speaker, index) => (
    <FeaturedSpeakerCard index={index} speaker={speaker} />
  ));

  return (
    <div>
      <h2 className="title-header px-width-clamp">Featured Speakers</h2>
      <BasicCarousel carouselElements={FeaturedSpeakerCards} />
    </div>
  );
};
