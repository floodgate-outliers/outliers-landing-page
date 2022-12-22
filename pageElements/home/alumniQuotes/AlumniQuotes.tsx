import { FC } from 'react';

import { AlumniQuoteCard } from './AlumniQuoteCard';
import { AlumniQuotesInfo } from '../../../data/community/AlumniQuotesInfo';
import { BasicCarousel } from 'components/carousel/BasicCarousel';

export const AlumniQuotes: FC = () => {
  const AlumniQuoteCards = AlumniQuotesInfo.map((alumniQuote) => {
    return <AlumniQuoteCard key={alumniQuote.builderId} {...alumniQuote} />;
  });

  return (
    <div>
      <h2 className="title-header px-width-clamp">What Outliers Have To Say</h2>
      <BasicCarousel carouselElements={AlumniQuoteCards} />
    </div>
  );
};
