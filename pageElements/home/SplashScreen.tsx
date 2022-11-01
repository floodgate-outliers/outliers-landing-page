import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-5 text-6xl  mobile:text-3xl">
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className="my-14 flex flex-col justify-end gap-y-5">
        <h1 className="text-10xl font-bold mobile:text-5xl">
          Create the Future
        </h1>
        <h2 className="text-5xl mobile:text-3xl">Builders x Crypto</h2>
      </div>
      <div></div>
      <div>
        {/* <a href="#program-overview" className="w-fit"> */}
        <p className="text-4xl  text-floodgate mobile:text-3xl">Cohort-3</p>
        {/* </a> */}
      </div>
    </div>
  );
};
