import { FC } from 'react';
import Image from 'next/image';

import styles from './FeaturedGuests.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

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
  return (
    <div className={styles['container']}>
      <h2 className={styles['title-header'] + ' title-font'}>
        Featured Guests
      </h2>
      <Swiper
        className={styles['cards-container']}
        breakpoints={{
          1200: {
            slidesPerView: 2.1,
          },
          850: {
            slidesPerView: 1.75,
          },
          700: { slidesPerView: 1.5 },
          0: { slidesPerView: 1 },
        }}
      >
        {FeaturedGuestsInfo.map(
          ({ id, profileImageURL, companyImageURL, name, title }) => {
            return (
              <SwiperSlide key={id}>
                <div className={styles['card'] + ' solid-shadow-animation'}>
                  <p className={styles['id'] + ' title-font'}>{id}</p>
                  <div className={styles['images-container']}>
                    <div className={styles['profile-image-container']}>
                      <Image fill src={profileImageURL} alt="profile" />
                      <div className={styles['company-image-container']}>
                        <Image fill src={companyImageURL} alt="company" />
                      </div>
                    </div>
                  </div>
                  <div className={styles['text-container']}>
                    <p className={styles['name']}>{name}</p>
                    <p className={styles['title'] + ' details-font'}>{title}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
