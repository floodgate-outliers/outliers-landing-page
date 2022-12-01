import { BasicButton } from 'components/buttons/BasicButton';
import { FC } from 'react';

export const JoinCTA: FC = () => {
  return (
    <div className="text-center">
      <p className="mb-10 text-5xl">Want to Join?</p>
      <a href={process.env.APPLICATION_LINK} target="_blank" rel="noreferrer">
        <BasicButton type="button" color="blue">
          <p className="text-3xl text-off-white tablet:-my-1 tablet:-mx-2 tablet:text-lg">
            Apply Now
          </p>
        </BasicButton>
      </a>
    </div>
  );
};
