import { BasicButton } from 'components/buttons/BasicButton';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-24 flex flex-col justify-end gap-y-5 tablet:mt-28 tablet:gap-y-10">
        <h1 className="text-9xl font-bold tablet:text-8xl">Out·li·ers</h1>
      </div>
      <div className="mt-2 mb-5 mobile:mb-10 mobile:pr-7">
        <p className="text-3xl mobile:text-2xl">
          Empowering exceptional young builders in crypto{' '}
          <br className="tablet:hidden" />
          through <a href="#community">community</a> and{' '}
          <a href="#program">education</a>
        </p>
      </div>
      <div className="mb-16 flex flex-row items-center gap-x-5 tablet:gap-x-3">
        <p className="mr-2 text-2xl font-bold">By</p>
        <div className="relative -mt-5 h-[100px] w-[150px] tablet:h-[40px] tablet:w-[100px]">
          <Image
            priority
            fill
            src="/FloodgateLogo.png"
            alt=""
            className="object-contain"
          />
        </div>
        <p className="font-bold">&#10006;</p>
        <div className="relative h-[100px] w-[150px] tablet:h-[40px] tablet:w-[100px]">
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
        <a
          href={process.env.NEXT_PUBLIC_APPLICATION_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <BasicButton type="button" color="blue" onClick={undefined}>
            Apply Now
          </BasicButton>
        </a>
      </div>
    </div>
  );
};
