import { Variants, motion } from 'framer-motion';
import { ReactElement, FC } from 'react';

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

type ContactExternalLinkProps = {
  emoji: string;
  text: string | ReactElement;
  href: `https://${string}` | `mailto: ${string}`;
  extraText?: string;
};

export const ContactExternalLink: FC<ContactExternalLinkProps> = ({
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
      className="w-fit text-2xl tablet:text-xl"
    >
      <span>{emoji}</span> <span className="mr-5 underline">{text}</span>
      <span>{extraText}</span>
    </motion.a>
  );
};
