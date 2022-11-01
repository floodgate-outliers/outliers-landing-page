import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useMediaQueryContext } from 'contexts/MediaQueryContext';

const linkVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
    scale: 1,
  },
  hover: {
    color: 'var(--floodgate)',
    textDecoration: 'underline',
    scale: 1.01,
  },
};

export const ContactForm: FC = () => {
  const { isTablet } = useMediaQueryContext();

  return (
    <div>
      <h1 className="title-header">Contact Us</h1>
      <div className="text-3xl tablet:text-2xl">
        <p>
          {isTablet ? 'Email: ' : 'Email ? '}
          <motion.a
            href="mailto: outliers@floodgate.com"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            className="inline-block text-4xl font-bold tablet:text-3xl"
          >
            outliers@floodate.com
          </motion.a>
          {isTablet ? (
            <span className="whitespace-pre-wrap">
              {'\n'}
              Twitter:{' '}
            </span>
          ) : (
            <span> : </span>
          )}
          <motion.a
            href="https://mobile.twitter.com/outlierdao"
            target="_blank"
            rel="noreferrer"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            className="inline-block text-4xl font-bold tablet:mt-5 tablet:text-3xl"
          >
            @outlierdao
          </motion.a>
        </p>
      </div>
    </div>
  );
};
