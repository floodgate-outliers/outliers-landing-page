import Image from 'next/image';
import { FC } from 'react';

import { CardWithShadow } from 'components/cards/CardWithShadow';

type AlumniTestimonial = {
  name: string;
  handle: string;
  date: string;
  profileImage: string;
  testimonial: string;
};

const AlumniTestimonialInfo: AlumniTestimonial[] = [
  {
    name: 'Santiago Hernandez',
    handle: 'santiaghini',
    date: 'July 15, 2021',
    profileImage: '/alumniTestimonials/SantiagoHernandez.jpeg',
    testimonial:
      'I found people here that turned into great friends; people to start the next breakthrough company with, to chat about some niche new technology, or just to go on a hike and talk about life.',
  },
  {
    name: 'Kaili Wang',
    handle: 'kaili_jenner',
    date: 'July 28, 2021',
    profileImage: '/alumniTestimonials/KailiWang.jpeg',
    testimonial:
      'The community and mentorship of Outliers impacted my life in two major ways: 1) relationships with bright, wonderful minds that’ll last for decades to come, and 2) self-realization of what I want in life: using my strengths to make real impact and pursuing a life full of learning + building.',
  },
  {
    name: 'Michael Daigler',
    handle: '0xmerkle',
    date: 'Aug 03, 2021',
    profileImage: '/alumniTestimonials/MichaelDaigler.jpeg',
    testimonial:
      'Outliers made me more confident in taking a carrer path that might be different for the norm for people my age. I play into my strengths now regardless of what others think.',
  },
  {
    name: 'Santiago Hernandez',
    handle: 'santiaghini',
    date: 'July 15, 2021',
    profileImage: '/alumniTestimonials/SantiagoHernandez.jpeg',
    testimonial:
      'I found people here that turned into great friends; people to start the next breakthrough company with, to chat about some niche new technology, or just to go on a hike and talk about life.',
  },
  {
    name: 'Kaili Wang',
    handle: 'kaili_jenner',
    date: 'July 28, 2021',
    profileImage: '/alumniTestimonials/KailiWang.jpeg',
    testimonial:
      'The community and mentorship of Outliers impacted my life in two major ways: 1) relationships with bright, wonderful minds that’ll last for decades to come, and 2) self-realization of what I want in life: using my strengths to make real impact and pursuing a life full of learning + building.',
  },
  {
    name: 'Michael Daigler',
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
    <a href={`https://twitter.com/${handle}`} target="_blank" rel="noreferrer">
      <CardWithShadow
        scale
        shadowSize="small"
        animateWhile="hover"
        backgroundColor="off-white"
      >
        <div className="flex h-fit cursor-pointer flex-col gap-y-5 text-xl">
          <div className="flex flex-row gap-x-5">
            <div className="desktop:h-18 desktop:w-18 relative h-20 w-20 [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-lg [&>img]:object-cover desktop:[&>img]:rounded-md">
              <Image priority fill src={profileImage} alt="profile" />
            </div>
            <div className="flex flex-col gap-y-1 font-bold">
              <p className="text-off-black">{name}</p>
              <p className="text-gray">@{handle}</p>
            </div>
          </div>
          <p className="text-off-black">{testimonial}</p>
          <p className="text-base text-gray">{date}</p>
        </div>
      </CardWithShadow>
    </a>
  );
};

export const AlumniTestimonials: FC = () => {
  return (
    <div>
      <h2 className="title-header">Meet the Outliers</h2>
      <div className="grid grid-cols-2 gap-x-7 gap-y-7 tablet:grid-cols-1">
        <div className="flex flex-col gap-y-7">
          {AlumniTestimonialInfo.filter((_, i) => i % 2 === 0).map(
            (alumniTestimonial, index) => {
              return (
                <AlumniTestimonialCard key={index} {...alumniTestimonial} />
              );
            }
          )}
        </div>
        <div className="flex flex-col gap-y-7">
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
