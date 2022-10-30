import { FC, Fragment, useEffect, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import styles from './MissionStatements.module.scss';
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

  useEffect(() => {
    if (isMobile) {
      setTextPadding('50px 25px');
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
      height: 'auto',
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
      <h2 className={styles['title'] + ' title-font'}>We Believe...</h2>
      <div className={styles['accordion-container']}>
        {MissionStatementSections.map(({ id, mission, subtitle, text }) => {
          return (
            <Fragment key={id}>
              <div
                className={styles['header-section']}
                onClick={() => {
                  setSelectedMission(mission);
                }}
              >
                <p className={styles['mission-text'] + ' subtitle-font'}>
                  {mission}
                </p>
                <span className="details-font">{id}</span>
              </div>
              <motion.div
                variants={AccordionVariants}
                initial="closed"
                animate={selectedMission === mission ? 'open' : 'closed'}
                className={styles['text-section']}
                style={{
                  flexGrow: !isMobile && selectedMission === mission ? 1 : 0,
                  border: selectedMission === mission ? '' : 'none',
                }}
              >
                <p className={styles['subtitle'] + ' subtitle-font'}>
                  {subtitle}
                </p>
                <p className={styles['text']}>{text}</p>
              </motion.div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
