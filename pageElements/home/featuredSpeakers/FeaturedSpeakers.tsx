import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';

import { CardWithShadow } from 'components/cards/CardWithShadow';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';
import { SpeakerInfo } from 'types/Community';
import { TheSpeakersInfos } from 'data/community/TheSpeakersInfos';

const featuredSpeakersInfo: SpeakerInfo[] = [
  TheSpeakersInfos[0],
  TheSpeakersInfos[1],
  TheSpeakersInfos[2],
  TheSpeakersInfos[3],
];

export const FeaturedSpeakers: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1.3);
    } else if (isTablet) {
      setSlidesPerView(1.57);
    } else if (isLaptop) {
      setSlidesPerView(2.25);
    } else if (isDesktop) {
      setSlidesPerView(2.5);
    } else {
      setSlidesPerView(2.75);
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  return (
    <div>
      <h2 className="title-header">Featured Speakers</h2>
      <Swiper
        className="!overflow-visible"
        slidesPerView={slidesPerView}
        modules={[Mousewheel]}
        mousewheel={{
          forceToAxis: true,
        }}
      >
        {featuredSpeakersInfo.map(
          ({ profileImageURL, companyImageURL, name, lectureTitle }, index) => {
            return (
              <SwiperSlide key={index}>
                <CardWithShadow animateWhile="always">
                  <div className="relative flex w-80 flex-col items-center pt-20 pb-16 desktop:pb-12 laptop:w-72">
                    <p className="absolute top-1 left-1 text-4xl desktop:top-0 desktop:left-0">
                      {index}
                    </p>
                    <div>
                      <div className="relative h-56 w-56 desktop:h-52 desktop:w-52 laptop:h-48 laptop:w-48 tablet:h-44 tablet:w-44 [&>img]:box-border [&>img]:rounded-full [&>img]:border-4 [&>img]:border-off-black mobile:[&>img]:border-2">
                        <Image
                          priority
                          fill
                          src={profileImageURL}
                          alt="profile"
                        />
                        <div className="absolute bottom-0 right-0 h-[75px] w-[75px] rounded-full desktop:h-16 desktop:w-16 [&>img]:rounded-[inherit]">
                          <Image
                            priority
                            fill
                            src={companyImageURL}
                            alt="company"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 text-center tablet:mt-5">
                      <p className="mt-2 text-xl font-bold">"{lectureTitle}"</p>
                      <p className="mt-2 whitespace-pre-wrap text-xl">
                        -{name}
                      </p>
                    </div>
                  </div>
                </CardWithShadow>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
