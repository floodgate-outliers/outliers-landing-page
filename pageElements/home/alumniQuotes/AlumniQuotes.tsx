import Image from 'next/image';
import { FC } from 'react';

import { CardWithShadow } from 'components/cards/CardWithShadow';
import { AlumniQuoteCard } from './AlumniQuoteCard';
import { AlumniQuotesInfo } from '../../../data/people/AlumniQuotesInfo';

export const AlumniQuotes: FC = () => {
  return (
    <div>
      <h2 className="title-header">What Outliers Have To Say</h2>
      <div className="grid grid-cols-2 gap-x-7 gap-y-7 tablet:grid-cols-1">
        <div className="flex flex-col gap-y-7">
          {AlumniQuotesInfo.filter((_, i) => i % 2 === 0).map(
            (alumniQuote, index) => {
              return <AlumniQuoteCard key={index} {...alumniQuote} />;
            }
          )}
        </div>
        <div className="flex flex-col gap-y-7">
          {AlumniQuotesInfo.filter((_, i) => i % 2 === 1).map(
            (alumniQuote, index) => {
              return <AlumniQuoteCard key={index} {...alumniQuote} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};
