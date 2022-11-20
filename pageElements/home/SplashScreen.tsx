import { BasicButton } from 'components/buttons/BasicButton';
import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-5 text-4xl  mobile:gap-y-3 mobile:text-3xl">
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className="my-14 flex flex-col justify-end gap-y-5 mobile:my-10 mobile:gap-y-10">
        <h1 className="text-8xl font-bold mobile:text-7xl">Outliers</h1>
        <h2 className="text-4xl mobile:text-3xl">
          10-Week Program for Exceptional Builders
        </h2>
      </div>
      <div></div>
      <div>
        <a
          href="https://www.airtable.com/home/built-for-you"
          target="_blank"
          rel="noreferrer"
        >
          <BasicButton color="blue" onClick={undefined}>
            Apply Now
          </BasicButton>
        </a>
      </div>
    </div>
  );
};
