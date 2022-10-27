import { FC } from 'react';

import styles from './ProgramOverview.module.css';

export const ProgramOverview: FC = () => {
  return (
    <div className="mx-xOffset">
      <div className="rounded-xl border-4 border-black bg-gray-100 px-20 pt-28 pb-36 shadow-solid-lg">
        <h2 className="text-7xl font-semibold underline">10-Week Program</h2>
        <p className="mt-20 text-4xl">
          Outliers is a 10-week, summer program to empower exceptional student
          builders in Crypto.
          <br />
          <br /> More importantly, Outliers is an engaged community of students
          from across the country who come together to learn and build. We
          facilitate education and mentorship from top industry leaders, and
          provide resources to build and scale the{' '}
          <span className="font-bold">next Web3 breakthrough</span>.
        </p>
      </div>
    </div>
  );
};
