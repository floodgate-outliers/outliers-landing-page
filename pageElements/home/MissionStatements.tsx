import { FC, Fragment, useEffect, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import { useMediaQueryContext } from 'contexts/MediaQueryContext';

enum MISSION {
  CONNECT = 'CONNECT',
  EDUCATE = 'EDUCATE',
  EMPOWER = 'EMPOWER',
}

type MissionStatementSection = {
  id: string;
  mission: MISSION;
  subtitle: string;
  text: string;
};

const MissionStatementSections: MissionStatementSection[] = [
  {
    id: 'I',
    mission: MISSION.CONNECT,
    subtitle: 'Personal bonds make the difference',
    text: 'The single most important thing for us is forming a tightly-knit community. We will support you on your bold, audacious journey to change the world. This is the place where you can be vulnerable, ask for help, and be supported unconditionally.',
  },
  {
    id: 'II',
    mission: MISSION.EDUCATE,
    subtitle: 'Building is the best way to learn',
    text: 'We are builders at heart. We don’t stop at reading papers, listening to talks, or doing thought experiments. We seek to understand the foundational building blocks to be able to cut through the noise and form our own opinions. We learn by building. Technical curiosity and excellence are our core skills.',
  },
  {
    id: 'III',
    mission: MISSION.EMPOWER,
    subtitle: 'Being kick-ass engineers is not enough',
    text: 'We take responsibility as founders and industry leaders. We convert the theoretically possible into real-world impact. We deeply care about the ethical, societal, and environmental implications of our work. We don’t take easy shortcuts, but always build things the right way.',
  },
];

export const MissionStatements: FC = () => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useMediaQueryContext();

  const [selectedMission, setSelectedMission] = useState<MISSION>(
    MISSION.CONNECT
  );
  const [textPadding, setTextPadding] = useState('0px');
  const [textHeight, setTextHeight] = useState('auto');

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
        {MissionStatementSections.map(({ id, mission, subtitle, text }) => {
          return (
            <Fragment key={id}>
              <div
                className="tablet:w-15 box-border flex cursor-pointer flex-col justify-end border-off-black py-12 text-center laptop:w-20 mobile:w-auto mobile:flex-row-reverse mobile:items-center mobile:py-2 mobile:px-5 [&:not(:nth-last-child(2))]:border-r-4 mobile:[&:not(:nth-last-child(2))]:border-r-0 mobile:[&:not(:first-child)]:border-t-2"
                onClick={() => {
                  setSelectedMission(mission);
                }}
              >
                <p className="[transform: translateX(75px)] mobile:[transform: none] mb-20 -rotate-90 text-4xl tablet:text-3xl mobile:mb-0 mobile:ml-3 mobile:rotate-0">
                  {mission}
                </p>
                <span className="text-2xl">{id}</span>
              </div>
              <motion.div
                variants={AccordionVariants}
                initial="closed"
                animate={selectedMission === mission ? 'open' : 'closed'}
                className="flex flex-col overflow-hidden border-off-black last:border-l-4 mobile:border-t-2 mobile:last:border-l-0 [&:not(:last-child)]:border-r-4 mobile:[&:not(:last-child)]:border-r-0"
                style={{
                  flexGrow: !isMobile && selectedMission === mission ? 1 : 0,
                  border: selectedMission === mission ? '' : 'none',
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
