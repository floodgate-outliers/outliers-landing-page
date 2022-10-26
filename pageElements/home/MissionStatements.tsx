import { FC } from 'react';

export const MissionStatements: FC = () => {
  return (
    <div className="mx-xOffset">
      <h2 className="text-7xl font-semibold">We Believe...</h2>
      <div className="mt-10 flex h-[500px] flex-row bg-gray-400">
        <div>
          <div className="flex w-fit flex-col justify-start text-5xl font-semibold">
            <div />
            <p className="block w-96 -rotate-90">EDUCATE</p>
            <span>I.</span>
          </div>
        </div>
        <div>
          <p className="w-fit text-5xl font-semibold">II. CONNECT</p>
        </div>
        <div>
          <p className="w-fit text-5xl font-semibold">III. EMPOWER</p>
        </div>
      </div>
    </div>
  );
};
