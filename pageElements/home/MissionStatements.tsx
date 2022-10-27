import { FC, Fragment, useState } from 'react';

import styles from './MissionStatements.module.scss';

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
  const [selectedMission, setSelectedMission] = useState<MISSION>(
    MISSION.CONNECT
  );

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
              <div
                className={styles['text-section']}
                style={{
                  display: selectedMission === mission ? 'block' : 'none',
                }}
              >
                <p className={styles['subtitle'] + ' subtitle-font'}>
                  {subtitle}
                </p>
                <p className={styles['text']}>{text}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
