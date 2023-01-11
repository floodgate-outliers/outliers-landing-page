import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FC, ReactNode, useEffect, useState } from 'react';

const PopupVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const PopupCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

type BasicPopupProps = {
  id: string;
  children: ReactNode;
  overWriteShowPopup?: boolean;
};

export const BasicPopup: FC<BasicPopupProps> = ({
  id,
  children,
  overWriteShowPopup = false,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(overWriteShowPopup);
  }, [overWriteShowPopup]);

  // Close the navbar options if the click is outside the navbar
  const checkClickLocation = (e: MouseEvent) => {
    const popupCard = document.getElementById(id);
    if (showPopup && !popupCard?.contains(e.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('click', checkClickLocation);
      return () => document.removeEventListener('click', checkClickLocation);
    }
  }, [showPopup]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          variants={PopupVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 right-0 bottom-0 left-0 z-50 flex flex-row items-center justify-center bg-black/50"
        >
          <motion.div
            id={id}
            variants={PopupCardVariants}
            className="max-w-width-clamp relative border-4 border-off-black bg-off-white px-20 pt-10 pb-16 tablet:border-2"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-5 right-5 text-3xl"
            >
              &#10006;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
