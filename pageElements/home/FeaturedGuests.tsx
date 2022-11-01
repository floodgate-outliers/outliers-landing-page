import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CardWithShadow } from 'components/cards/CardWithShadow';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

type FeaturedGuest = {
  id: string;
  profileImageURL: string;
  companyImageURL: string;
  name: string;
  title: string;
};

const FeaturedGuestsInfo: FeaturedGuest[] = [
  {
    id: '01',
    profileImageURL: '/featuredGuests/AnatolyYakovenko.jpeg',
    companyImageURL: '/featuredGuests/Solana.jpg',
    name: 'Anatoly\nYakovenko',
    title: '[Solana] Co-Founder',
  },
  {
    id: '02',
    profileImageURL: '/featuredGuests/JohnPalmer.jpg',
    companyImageURL: '/featuredGuests/PartyDAO.jpg',
    name: 'John\nPalmer',
    title: '[Party DAO] Co-Founder',
  },
  {
    id: '03',
    profileImageURL: '/featuredGuests/TinaHe.jpeg',
    companyImageURL: '/featuredGuests/Station.jpg',
    name: 'Tina\nHe',
    title: '[Station] Co-Founder',
  },
  {
    id: '04',
    profileImageURL: '/featuredGuests/MatteoLeibowitz.jpg',
    companyImageURL: '/featuredGuests/Uniswap.jpg',
    name: 'Matteo\nLeibowitz',
    title: '[Uniswap] Ventures Lead',
  },
];

export const FeaturedGuests: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1.1);
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
      <h2 className="title-header">Featured Guests</h2>
      <Swiper className="!overflow-visible" slidesPerView={slidesPerView}>
        {FeaturedGuestsInfo.map(
          ({ id, profileImageURL, companyImageURL, name, title }) => {
            return (
              <SwiperSlide key={id}>
                <CardWithShadow animateWhile="always">
                  <div className="relative flex w-80 flex-col items-center pt-20 pb-16 desktop:pb-12 laptop:w-72">
                    <p className="absolute top-1 left-1 text-4xl desktop:top-0 desktop:left-0">
                      {id}
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
                      <p className="whitespace-pre-wrap text-3xl font-bold">
                        {name}
                      </p>
                      <p className="mt-2 text-xl">{title}</p>
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
