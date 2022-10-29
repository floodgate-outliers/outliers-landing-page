import Image from 'next/image';
import { FC } from 'react';

import styles from './AlumniTestimonials.module.scss';

type AlumniTestimonial = {
  name: string;
  handle: string;
  date: string;
  profileImage: string;
  testimonial: string;
};

const AlumniTestimonialInfo: AlumniTestimonial[] = [
  {
    name: 'Santiago_Hernandez',
    handle: 'santiaghini',
    date: 'July 15, 2021',
    profileImage: '/alumniTestimonials/SantiagoHernandez.jpeg',
    testimonial:
      'I found people here that turned into great friends; people to start the next breaktrhough company with, to chat about some niche new technology, or just to go on a hike and talk about life.',
  },
  {
    name: 'Kaili_Wang',
    handle: 'kaili_jenner',
    date: 'July 28, 2021',
    profileImage: '/alumniTestimonials/KailiWang.jpeg',
    testimonial:
      'The community and mentorship of Outliers impacted my life in two major ways: 1) relationships with bright, wonderful minds that’ll last for decades to come, and 2) self-realization of what I want in life: using my strengths to make real impact and pursuing a life full of learning + building.',
  },
  {
    name: 'Michael_Daigler',
    handle: '0xmerkle',
    date: 'Aug 03, 2021',
    profileImage: '/alumniTestimonials/MichaelDaigler.jpeg',
    testimonial:
      'Outliers made me more confident in taking a carrer path that might be different for the norm for people my age. I play into my strengths now regardless of what others think.',
  },
  {
    name: 'Santiago_Hernandez',
    handle: 'santiaghini',
    date: 'July 15, 2021',
    profileImage: '/alumniTestimonials/SantiagoHernandez.jpeg',
    testimonial:
      'I found people here that turned into great friends; people to start the next breaktrhough company with, to chat about some niche new technology, or just to go on a hike and talk about life.',
  },
  {
    name: 'Kaili_Wang',
    handle: 'kaili_jenner',
    date: 'July 28, 2021',
    profileImage: '/alumniTestimonials/KailiWang.jpeg',
    testimonial:
      'The community and mentorship of Outliers impacted my life in two major ways: 1) relationships with bright, wonderful minds that’ll last for decades to come, and 2) self-realization of what I want in life: using my strengths to make real impact and pursuing a life full of learning + building.',
  },
  {
    name: 'Michael_Daigler',
    handle: '0xmerkle',
    date: 'Aug 03, 2021',
    profileImage: '/alumniTestimonials/MichaelDaigler.jpeg',
    testimonial:
      'Outliers made me more confident in taking a carrer path that might be different for the norm for people my age. I play into my strengths now regardless of what others think.',
  },
];

const AlumniTestimonialCard: FC<AlumniTestimonial> = ({
  name,
  handle,
  date,
  profileImage,
  testimonial,
}) => {
  return (
    <div key={handle} className={styles['card'] + ' details-font'}>
      <div className={styles['card-header']}>
        <div className={styles['profile-image-container']}>
          <Image fill src={profileImage} alt="profile" />
        </div>
        <div className={styles['header-text']}>
          <p className={styles['name']}>{name}</p>
          <a
            href={`https://twitter.com/${handle}`}
            target="_blank"
            rel="noreferrer"
            className={styles['handle']}
          >
            @{handle}
          </a>
        </div>
      </div>
      <p className={styles['testimonial']}>{testimonial}</p>
      <p className={styles['date'] + ' subdetails-font'}>{date}</p>
    </div>
  );
};

export const AlumniTestimonials: FC = () => {
  return (
    <div>
      <h2 className={styles['title'] + ' title-font'}>Meet the Outliers</h2>
      <div className={styles['parent-cards-container']}>
        <div className={styles['cards-container']}>
          {AlumniTestimonialInfo.filter((_, i) => i % 2 === 0).map(
            (alumniTestimonial, index) => {
              return (
                <AlumniTestimonialCard key={index} {...alumniTestimonial} />
              );
            }
          )}
        </div>
        <div className={styles['cards-container']}>
          {AlumniTestimonialInfo.filter((_, i) => i % 2 === 1).map(
            (alumniTestimonial, index) => {
              return (
                <AlumniTestimonialCard key={index} {...alumniTestimonial} />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
