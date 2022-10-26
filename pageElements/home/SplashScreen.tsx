import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="mx-xOffset flex h-[calc(100vh-150px)] flex-col justify-between py-28">
      <div className="flex flex-col gap-y-2 text-6xl">
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className="">
        <h1 className="text-xxl font-semibold">Create the Future</h1>
        <h2 className="text-6xl">Builders x Crypto</h2>
      </div>
      <div>
        <p className="text-5xl text-floodgate">Outliers</p>
      </div>
    </div>
  );
};
