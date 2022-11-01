import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

const addEventToGoogleCalendarURL =
  'https://www.google.com/calendar/render?action=TEMPLATE&text=✨+Outliers+Application+✨&dates=20230101/20230101&details=For+the+most+up-to-date+information,+check+here:+https://mobile.twitter.com/outlierdao%0AGet Excited!!!🔥&output=xml';

const gcalEventLinkVariants: Variants = {
  initial: {
    scale: 1,
    color: 'var(--off-black)',
    // opacity: 0.1,
  },
  hover: {
    scale: 1.05,
    color: 'var(--floodgate)',
    // opacity: 1,
    // transition: {
    //   repeat: Infinity,
    //   repeatType: 'reverse',
    //   duration: 1,
    // },
  },
};

export const EndCTA: FC = () => {
  return (
    <div className="text-center">
      <h2 className="title-header mb-10">
        Applications{' '}
        <motion.a
          href={addEventToGoogleCalendarURL}
          target="_blank"
          rel="noreferrer"
          variants={gcalEventLinkVariants}
          initial="initial"
          whileHover="hover"
          className="inline-block"
        >
          COMING SOON
        </motion.a>
      </h2>
      <p className="mb-3 text-2xl">
        Applications for Outliers 2023 are opening in JAN 2023!
      </p>
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
