import { FC } from 'react';

import { CardWithShadow } from 'components/cards/CardWithShadow';

export const ProgramOverview: FC = () => {
  return (
    <div>
      <CardWithShadow
        animateWhile="inView"
        backgroundColor="off-white"
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        <div className="py-20 px-11 text-off-black desktop:py-14 desktop:px-11 tablet:py-8 tablet:px-4">
          <h2 className="mb-12 text-5xl font-bold underline">
            10-Week Program
          </h2>
          <p className="text-2xl">
            Outliers is a 10-week, summer program to empower exceptional student
            builders in Crypto.
            <br />
            <br /> More importantly, Outliers is an engaged community of
            students from across the country who come together to learn and
            build. We facilitate education and mentorship from top industry
            leaders, and provide resources to build and scale the{' '}
            <span className="font-bold">next Web3 breakthrough</span>.
          </p>
        </div>
      </CardWithShadow>
    </div>
  );
};
