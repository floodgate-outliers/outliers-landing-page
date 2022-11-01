import { FC } from 'react';

export const SplashScreen: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8 text-5xl">
        <p>Floodgate</p>
        <p>Standard Crypto</p>
      </div>
      <div className="my-24 flex flex-col justify-end gap-y-5">
        <h1 className="text-9xl font-bold">Create the Future</h1>
        <h2 className="text-5xl">Builders x Crypto</h2>
      </div>
      <div></div>
      <div>
        <a href="#program-overview" className="w-fit">
          <p className="text-5xl text-floodgate underline">Outliers</p>
        </a>
      </div>
    </div>
  );
};
