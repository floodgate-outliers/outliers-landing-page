import { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import { useMediaQueryContext } from 'contexts/MediaQueryContext';

enum CORE_VALUE {
  CONNECT = 'CONNECT',
  EDUCATE = 'EDUCATE',
  EMPOWER = 'EMPOWER',
}

type CoreValuesSection = {
  id: string;
  coreValue: CORE_VALUE;
  subtitle: string;
  text: string;
};

const CoreValuesSections: CoreValuesSection[] = [
  {
    id: 'I',
    coreValue: CORE_VALUE.CONNECT,
    subtitle: 'Personal bonds make the difference',
    text: 'The single most important thing for us is forming a tightly-knit community. We will support you on your bold, audacious journey to change the world. This is the place where you can be vulnerable, ask for help, and be supported unconditionally.',
  },
  {
    id: 'II',
    coreValue: CORE_VALUE.EDUCATE,
    subtitle: 'Building is the best way to learn',
    text: 'We are builders at heart. We don’t stop at reading papers, listening to talks, or doing thought experiments. We seek to understand the foundational building blocks to be able to cut through the noise and form our own opinions. We learn by building. Technical curiosity and excellence are our core skills.',
  },
  {
    id: 'III',
    coreValue: CORE_VALUE.EMPOWER,
    subtitle: 'Being kick-ass engineers is not enough',
    text: 'We take responsibility as founders and industry leaders. We convert the theoretically possible into real-world impact. We deeply care about the ethical, societal, and environmental implications of our work. We don’t take easy shortcuts, but always build things the right way.',
  },
];

const SubtitleVariants: Variants = {
  notSelected: {
    opacity: 0.2,
  },
  selected: {
    opacity: 1,
  },
};

export const CoreValues: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [selectedCoreValue, setSelectedCoreValue] = useState<CORE_VALUE>(
    CORE_VALUE.CONNECT
  );
  // Autoplay until the core value is selected for the first time
  const [isAutoplayDisabled, setIsAutoplayDisabled] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState<
    NodeJS.Timer | undefined
  >(undefined);
  const [textPadding, setTextPadding] = useState('0px');
  const [textHeight, setTextHeight] = useState('auto');

  const setAutoplayCoreValue = () => {
    setSelectedCoreValue((currValue) => {
      if (currValue === CORE_VALUE.CONNECT) {
        return CORE_VALUE.EDUCATE;
      } else if (currValue === CORE_VALUE.EDUCATE) {
        return CORE_VALUE.EMPOWER;
      } else {
        return CORE_VALUE.CONNECT;
      }
    });
  };

  useMemo(() => {
    if (!isAutoplayDisabled) {
      setAutoplayInterval(
        setInterval(() => {
          setAutoplayCoreValue();
        }, 5000)
      );
    } else {
      clearInterval(autoplayInterval);
    }
  }, [isAutoplayDisabled]);

  useEffect(() => {
    setTextHeight('auto');
    if (isMobile) {
      setTextPadding('50px 25px');
      setTextHeight('400px');
    } else if (isTablet) {
      setTextPadding('50px 50px');
    } else if (isLaptop) {
      setTextPadding('125px 50px');
    } else if (isDesktop) {
      setTextPadding('150px 100px');
    } else {
      setTextPadding('150px 125px');
    }
  }, [isDesktop, isLaptop, isTablet, isMobile]);

  const AccordionVariants: Variants = {
    closed: {
      height: '0px',
      width: '0px',
      opacity: 0,
      padding: '0px 0px',
      transition: {
        bounce: false,
        width: {
          duration: 1,
        },
        padding: {
          duration: 1,
        },
        opacity: {
          duration: 0.5,
        },
      },
    },
    open: {
      width: 'auto',
      height: textHeight,
      opacity: 1,
      padding: textPadding,
      transition: {
        bounce: false,
        width: {
          duration: 1,
        },
        padding: {
          duration: 1,
        },
        opacity: {
          delay: 0.5,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div>
      <h2 className="title-header">We Believe...</h2>
      <div
        className={
          'flex h-[700px] flex-row overflow-hidden border-4 border-off-black bg-off-white desktop:h-[600px] laptop:h-[500px] tablet:h-[400px] mobile:h-auto mobile:flex-col mobile:border-2'
        }
      >
        {CoreValuesSections.map(({ id, coreValue, subtitle, text }) => {
          return (
            <Fragment key={id}>
              <motion.div
                initial="notSelected"
                animate={
                  selectedCoreValue === coreValue ? 'selected' : 'notSelected'
                }
                className="tablet:w-15 box-border flex w-28 cursor-pointer flex-col justify-end border-off-black py-12 text-center laptop:w-20 mobile:w-auto mobile:flex-row-reverse mobile:items-center mobile:py-2 mobile:px-5 [&:not(:nth-last-child(2))]:border-r-4 mobile:[&:not(:nth-last-child(2))]:border-r-0 mobile:[&:not(:first-child)]:border-t-2"
                onClick={() => {
                  setIsAutoplayDisabled(true);
                  setSelectedCoreValue(coreValue);
                }}
              >
                <motion.p
                  variants={SubtitleVariants}
                  className="[transform: translateX(75px)] mobile:[transform: none] mb-20 -rotate-90 text-4xl tablet:text-3xl mobile:mb-0 mobile:ml-3 mobile:rotate-0"
                >
                  {coreValue}
                </motion.p>
                <motion.span variants={SubtitleVariants} className="text-2xl">
                  {id}
                </motion.span>
              </motion.div>
              <motion.div
                variants={AccordionVariants}
                initial="closed"
                animate={selectedCoreValue === coreValue ? 'open' : 'closed'}
                className="flex flex-col overflow-hidden border-off-black last:border-l-4 mobile:border-t-2 mobile:last:border-l-0 [&:not(:last-child)]:border-r-4 mobile:[&:not(:last-child)]:border-r-0"
                style={{
                  flexGrow:
                    !isMobile && selectedCoreValue === coreValue ? 1 : 0,
                  border: selectedCoreValue === coreValue ? '' : 'none',
                }}
              >
                <p className="mb-12 text-5xl font-semibold tablet:text-4xl mobile:mb-5">
                  {subtitle}
                </p>
                <p className="text-2xl">{text}</p>
              </motion.div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
