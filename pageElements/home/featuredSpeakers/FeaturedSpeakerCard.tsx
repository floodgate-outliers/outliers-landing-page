import { CardWithShadow } from 'components/cards/CardWithShadow';
import Image from 'next/image';
import { FC } from 'react';
import { SpeakerInfo } from 'types/Community.type';

type FeaturedSpeakerCardProps = {
  index: number;
  speaker: SpeakerInfo;
};

export const FeaturedSpeakerCard: FC<FeaturedSpeakerCardProps> = ({
  index,
  speaker,
}) => {
  const {
    name,
    lectureTitle,
    profileImageURL,
    companyImageURL,
    twitterHandle,
  } = speaker;

  return (
    <a
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noreferrer"
    >
      <CardWithShadow animateWhile="hover">
        <div className="relative flex w-80 flex-col items-center pt-16 pb-14 desktop:pb-12 laptop:w-72">
          <p className="absolute top-1 left-1 text-3xl desktop:top-0 desktop:left-0">
            {index}
          </p>
          <div>
            <div className="relative h-56 w-56 desktop:h-52 desktop:w-52 laptop:h-48 laptop:w-48 tablet:h-44 tablet:w-44 [&>img]:box-border [&>img]:rounded-full [&>img]:border-4 [&>img]:border-off-black mobile:[&>img]:border-2">
              <Image fill src={profileImageURL} alt="profile" />
              <div className="absolute bottom-0 right-0 h-[75px] w-[75px] rounded-full desktop:h-16 desktop:w-16 [&>img]:rounded-[inherit]">
                <Image fill src={companyImageURL} alt="company" />
              </div>
            </div>
          </div>
          <div className="mt-10 text-center tablet:mt-5">
            <p className="mt-2 text-xl font-bold">"{lectureTitle}"</p>
            <p className="mt-2 whitespace-pre-wrap text-xl">-{name}</p>
          </div>
        </div>
      </CardWithShadow>
    </a>
  );
};
