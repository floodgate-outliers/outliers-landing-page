import { FC } from 'react';
import Image from 'next/image';

import styles from './FeaturedGuests.module.scss';

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
  // {
  //   id: '03',
  //   profileImageURL: '/featuredGuests/TinaHe.jpeg',
  //   companyImageURL: '/featuredGuests/Station.jpg',
  //   name: 'Tina He',
  //   title: '[Station] Co-Founder',
  // },
  // {
  //   id: '04',
  //   profileImageURL: '/featuredGuests/MatteoLeibowitz.jpg',
  //   companyImageURL: '/featuredGuests/Uniswap.jpg',
  //   name: 'Anatoly Yakovenko',
  //   title: '[Uniswap] Ventures Lead',
  // },
];

export const FeaturedGuests: FC = () => {
  return (
    <div>
      <h2 className={styles['title-header'] + ' title-font'}>
        Featured Guests
      </h2>
      <div className={styles['cards-container']}>
        {FeaturedGuestsInfo.map(
          ({ id, profileImageURL, companyImageURL, name, title }) => {
            return (
              <div
                key={id}
                className={styles['card'] + ' solid-shadow-animation'}
              >
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
            );
          }
        )}
      </div>
    </div>
  );
};
