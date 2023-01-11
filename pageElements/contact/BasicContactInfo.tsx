import { FC, ReactElement } from 'react';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

const linkVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    x: 0,
  },
  hover: {
    color: 'var(--floodgate)',
    x: 10,
  },
};

type LinkContainerProps = {
  emoji: string;
  text: string | ReactElement;
  href: `https://${string}` | `mailto: ${string}`;
  extraText?: string;
};

const LinkContainer: FC<LinkContainerProps> = ({
  emoji,
  text,
  href,
  extraText,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      variants={linkVariants}
      initial="initial"
      whileHover="hover"
      className="text-2xl"
    >
      <span>{emoji}</span> <span className="mr-5 underline">{text}</span>
      <span>{extraText}</span>
    </motion.a>
  );
};

export const BasicContactInfo: FC = () => {
  return (
    <div>
      <h1 className="title-header mb-0">Got Questions?</h1>
      <h2 className="text-2xl">
        Feel free to reach out to us via email or twitter
      </h2>
      <div className="mt-8 flex flex-col gap-y-2">
        <LinkContainer
          emoji="✉️"
          text="outliers@floodate.com"
          href="mailto: outliers@floodgate.com"
        />
        <LinkContainer
          emoji="🐤"
          text="@outlierdao"
          href="https://mobile.twitter.com/outlierdao"
        />
      </div>
      <div className="my-20 flex flex-row items-center">
        <div className="h-1 flex-grow bg-off-black" />
        <p className="title-header mx-10 mb-0">OR</p>
        <div className="h-1 flex-grow bg-off-black" />
      </div>
      <h2 className="title-header mb-0">Attend our info session!</h2>
      <h2 className="text-2xl">
        Click on one of the links for a calendar invite
      </h2>
      <div className="mt-8 flex flex-col gap-y-2">
        <LinkContainer
          emoji="1️⃣"
          text="Session 1"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWZkZ3BwMnVzZTlpcTBzZWY2ZTJzaGJtb2UgY19xMWU2ZTQyaTBmNm8wczJwaGRmNjhrbmI3c0Bn&tmsrc=c_q1e6e42i0f6o0s2phdf68knb7s%40group.calendar.google.com"
          extraText="(1/19 @ 5:00pm PT)"
        />
        <LinkContainer
          emoji="2️⃣"
          text="Session 2"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWc3MXJvMmJvZmFvMG5qdWFtZjkyMmVxNmIgY19xMWU2ZTQyaTBmNm8wczJwaGRmNjhrbmI3c0Bn&tmsrc=c_q1e6e42i0f6o0s2phdf68knb7s%40group.calendar.google.com"
          extraText="(1/25 @ 4:00pm PT)"
        />
      </div>
    </div>
  );
};
