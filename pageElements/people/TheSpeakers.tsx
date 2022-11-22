import { CardWithShadow } from 'components/cards/CardWithShadow';
import Image from 'next/image';
import { FC } from 'react';
import { TheSpeakersInfos } from './TheSpeakersInfos';

export const TheSpeakers: FC = () => {
  return (
    <div>
      <h2 className="title-header">The Speakers</h2>
      <div className="flex flex-col gap-y-16">
        {TheSpeakersInfos.map(
          (
            {
              name,
              // company,
              lectureTitle,
              description,
              companyImageURL,
              profileImageURL,
              year,
              handle,
            },
            index
          ) => {
            return (
              <a
                href={`https://twitter.com/${handle}`}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <CardWithShadow animateWhile="hover">
                  <div className="flex flex-row gap-x-20 px-5 py-7 tablet:flex-col">
                    <div className="relative h-[25rem] w-[25rem] flex-shrink-0 border-4 border-off-black tablet:h-[50rem] tablet:w-full tablet:border-2 mobile:h-[30rem]">
                      <Image
                        fill
                        priority
                        src={profileImageURL}
                        alt="profile"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col tablet:mt-5">
                      <div className="flex flex-row items-center gap-x-5">
                        <div className="relative h-10 w-10">
                          <Image
                            fill
                            priority
                            src={companyImageURL}
                            alt="profile"
                            className="rounded-full border-[1px] border-off-black object-cover"
                          />
                        </div>
                        <p className="text-4xl font-bold underline">{name}</p>
                        {/* <p className="text-2xl">{company}</p> */}
                      </div>
                      <p className="mt-5 text-2xl tablet:text-xl">
                        [Summer '{String(year).slice(-2)}] "{lectureTitle}"
                      </p>
                      <p className="mt-10 text-2xl tablet:text-xl">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardWithShadow>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};
