import { CardWithShadow } from 'components/cards/CardWithShadow';
import { FC } from 'react';
import { AlumniQuote } from '../../../data/community/AlumniQuotesInfo';
import Image from 'next/image';
import { getBuilderInfoById } from 'data/community/TheBuildersInfos';

export const AlumniQuoteCard: FC<AlumniQuote> = ({
  builderId,
  date,
  quote,
}) => {
  const { id, profileImageUrl, twitterHandle } = getBuilderInfoById(builderId);
  return (
    <a
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noreferrer"
      className="block w-[700px] desktop:w-[600px] laptop:w-[500px] tablet:w-[400px] mobile:w-[325px]"
    >
      <CardWithShadow
        scale
        shadowSize="small"
        animateWhile="hover"
        backgroundColor="off-white"
      >
        <div className="flex h-fit cursor-pointer flex-col gap-y-5 text-xl">
          <div className="flex flex-row gap-x-5">
            <div className="desktop:h-18 desktop:w-18 relative h-20 w-20 [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-lg [&>img]:object-cover desktop:[&>img]:rounded-md">
              <Image
                priority
                fill
                src={profileImageUrl}
                alt="profile"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-1 font-bold">
              <p className="text-off-black">{id}</p>
              <p className="text-gray">@{twitterHandle}</p>
            </div>
          </div>
          <p className="text-off-black">{quote}</p>
          <p className="text-base text-gray">{date}</p>
        </div>
      </CardWithShadow>
    </a>
  );
};
