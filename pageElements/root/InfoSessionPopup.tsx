import { AnimatePresence, Variants, motion } from 'framer-motion';
import { FC, ReactElement, useEffect, useState } from 'react';

const SHOW_POPUP_TIME = (15 / 60) * 60 * 1000; // ms

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
      className="text-2xl tablet:text-xl"
    >
      <span>{emoji}</span> <span className="mr-5 underline">{text}</span>
      <span>{extraText}</span>
    </motion.a>
  );
};

export const InfoSessionPopup: FC = () => {
  const [showInfoSessionPopup, setShowInfoSessionPopup] = useState(false);

  useEffect(() => {
    const showInfoSessionPopupTimeout = setTimeout(() => {
      setShowInfoSessionPopup(true);
    }, SHOW_POPUP_TIME);

    return () => clearTimeout(showInfoSessionPopupTimeout);
  }, []);

  return (
    <AnimatePresence>
      {showInfoSessionPopup && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-row items-center justify-center bg-black/50">
          <div className="max-w-width-clamp relative border-4 border-off-black bg-off-white px-20 pt-10 pb-16 tablet:border-2">
            <button
              onClick={() => setShowInfoSessionPopup(false)}
              className="absolute top-5 right-5 text-3xl"
            >
              &#10006;
            </button>

            <p className="title-header mb-0">Want to learn more?</p>
            <p className="text-2xl">Attend our info session!</p>
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
        </div>
      )}
    </AnimatePresence>
  );
};
