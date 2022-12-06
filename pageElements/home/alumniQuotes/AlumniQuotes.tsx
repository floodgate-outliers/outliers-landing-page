import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper';

import { CardWithShadow } from 'components/cards/CardWithShadow';
import { AlumniQuoteCard } from './AlumniQuoteCard';
import { AlumniQuotesInfo } from '../../../data/people/AlumniQuotesInfo';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

export const AlumniQuotes: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (isMobile) {
      setSlidesPerView(1.15);
    } else if (isTablet) {
      setSlidesPerView(1.2);
    } else if (isLaptop) {
      setSlidesPerView(1.45);
    } else if (isDesktop) {
      setSlidesPerView(1.6);
    } else {
      setSlidesPerView(1.95);
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  return (
    <div>
      <h2 className="title-header">What Outliers Have To Say</h2>
      <Swiper
        className="!overflow-visible"
        slidesPerView={slidesPerView}
        modules={[Mousewheel]}
        mousewheel={{
          forceToAxis: true,
        }}
      >
        {AlumniQuotesInfo.map((alumniQuote) => {
          return (
            <SwiperSlide key={alumniQuote.studentId}>
              <AlumniQuoteCard {...alumniQuote} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="grid grid-cols-2 gap-x-7 gap-y-7 tablet:grid-cols-1">
        <div className="flex flex-col gap-y-7">
          
        </div>
        <div className="flex flex-col gap-y-7">
          {AlumniQuotesInfo.filter((_, i) => i % 2 === 1).map(
            (alumniQuote, index) => {
              return <AlumniQuoteCard key={index} {...alumniQuote} />;
            }
          )}
        </div>
      </div> */}
    </div>
  );
};
