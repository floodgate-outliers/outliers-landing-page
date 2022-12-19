import { BasicButton } from 'components/buttons/BasicButton';
import { FC } from 'react';

export const DeadlineCTA: FC = () => {
  return (
    <div className="text-center">
      <h2 className="title-header mb-0">
        Applications Due <br className="hidden mobile:block" />
        January 25,2023
      </h2>
      <a
        href={process.env.NEXT_PUBLIC_APPLICATION_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-10 mb-16 block"
      >
        <BasicButton type="button" color="blue" onClick={undefined}>
          Apply Now
        </BasicButton>
      </a>
      <p className="text-2xl">
        Follow{' '}
        <a
          href="https://mobile.twitter.com/outlierdao"
          target="_blank"
          rel="noreferrer"
          className="text-floodgate underline"
        >
          @outlierdao
        </a>{' '}
        for updates.
      </p>
    </div>
  );
};
