import { BasicButton } from 'components/buttons/BasicButton';
import Image from 'next/image';
import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-32 flex flex-col justify-end gap-y-5 tablet:mt-48 tablet:gap-y-10">
        <h1 className="text-10xl font-bold tablet:text-9xl">Outliers</h1>
      </div>
      <div className="mb-24 mt-2 flex flex-row items-center gap-x-5 tablet:mt-5 tablet:gap-x-3">
        <p className="mr-2 text-3xl font-bold">By</p>
        <div className="relative -mt-5 h-[100px] w-[175px] tablet:h-[40px] tablet:w-[100px]">
          <Image
            priority
            fill
            src="/FloodgateLogo.png"
            alt=""
            className="object-contain"
          />
        </div>
        <p className="text-2xl font-bold">&#10006;</p>
        <div className="relative h-[100px] w-[175px] tablet:h-[40px] tablet:w-[100px]">
          <Image
            priority
            fill
            src="/StandardCryptoLogo.png"
            alt=""
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <a href={process.env.APPLICATION_LINK} target="_blank" rel="noreferrer">
          <BasicButton type="button" color="blue" onClick={undefined}>
            Apply Now
          </BasicButton>
        </a>
      </div>
    </div>
  );
};
