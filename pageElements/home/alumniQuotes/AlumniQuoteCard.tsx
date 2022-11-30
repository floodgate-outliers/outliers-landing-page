import { CardWithShadow } from 'components/cards/CardWithShadow';
import { FC } from 'react';
import { AlumniQuote } from '../../../data/people/AlumniQuotesInfo';
import Image from 'next/image';
import { getStudentInfoById } from 'data/people/TheStudentsInfo';

export const AlumniQuoteCard: FC<AlumniQuote> = ({
  studentId,
  date,
  quote,
}) => {
  const { id, profileImageUrl, twitterHandle } = getStudentInfoById(studentId);
  return (
    <a
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noreferrer"
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
              <Image priority fill src={profileImageUrl} alt="profile" />
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
