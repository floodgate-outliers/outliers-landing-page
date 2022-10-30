import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './FeaturedGuests.module.scss';
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
    name: 'Anatoly Yakovenko',
    title: '[Solana] Co-Founder',
  },
  {
    id: '02',
    profileImageURL: '/featuredGuests/JohnPalmer.jpg',
    companyImageURL: '/featuredGuests/PartyDAO.jpg',
    name: 'John Palmer',
    title: '[Party DAO] Co-Founder',
  },
  {
    id: '03',
    profileImageURL: '/featuredGuests/TinaHe.jpeg',
    companyImageURL: '/featuredGuests/Station.jpg',
    name: 'Tina He',
    title: '[Station] Co-Founder',
  },
  {
    id: '04',
    profileImageURL: '/featuredGuests/MatteoLeibowitz.jpg',
    companyImageURL: '/featuredGuests/Uniswap.jpg',
    name: 'Matteo Leibowitz',
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
    <div className={styles['container']}>
      <h2 className={styles['title-header'] + ' title-font'}>
        Featured Guests
      </h2>
      <Swiper
        className={styles['cards-container']}
        slidesPerView={slidesPerView}
      >
        {FeaturedGuestsInfo.map(
          ({ id, profileImageURL, companyImageURL, name, title }) => {
            return (
              <SwiperSlide key={id}>
                <CardWithShadow animateWhile="always">
                  <div className={styles['card']}>
                    <p className={styles['id'] + ' title-font'}>{id}</p>
                    <div className={styles['images-container']}>
                      <div className={styles['profile-image-container']}>
                        <Image
                          priority
                          fill
                          src={profileImageURL}
                          alt="profile"
                        />
                        <div className={styles['company-image-container']}>
                          <Image
                            priority
                            fill
                            src={companyImageURL}
                            alt="company"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles['text-container']}>
                      <p className={styles['name']}>{name}</p>
                      <p className={styles['title'] + ' details-font'}>
                        {title}
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
