import { Fragment, ReactElement } from 'react';
import { motion, Variants } from 'framer-motion';

// Note the parent "p" tag must be a "motion.p" tag
// The "motion.p" tag should have initial="initial" whileHover="hover"

const emphasisVariants: Variants = {
  initial: {
    color: 'var(--off-black)',
  },
  hover: {
    color: 'var(--floodgate)',
  },
};

export const parseTextForEmphasis = (text: string) => {
  const textComponent: (string | ReactElement)[] = text.split('EMPHASIZE');

  for (let i = 1; i < textComponent.length; i += 2) {
    textComponent[i] = (
      <motion.span variants={emphasisVariants} className="font-bold underline">
        {textComponent[i]}
      </motion.span>
    );
  }

  return textComponent.map((t, index) => <Fragment key={index}>{t}</Fragment>);
};
