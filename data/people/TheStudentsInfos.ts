import { StudentInfo, STUDENT_ID } from 'types/People.type';
import { PROJECT_ID } from 'types/Project.type';

export const getStudentInfoById = (studentId: STUDENT_ID): StudentInfo => {
  return TheStudentsInfos.find((s) => s.id === studentId)!;
};

// Format the names ["Alice", "Bob", "Carol"] => Alice, Bob, and Carol
export const formatStudentsNames = (names: string[]): string[] => {
  if (names.length === 1) {
    return names;
  } else {
    return names.map((name, index) =>
      index === names.length - 1 ? `${name}` : `${name}, `
    );
  }
};

export const TheStudentsInfos: StudentInfo[] = [
  {
    id: STUDENT_ID.JAN_DAMM,
    twitterHandle: 'jh_damm',
    profileImageUrl: '/students/JanDamm.jpg',
    projectId: PROJECT_ID.DATALEAP,
  },
  {
    id: STUDENT_ID.JAN_RUTTINGER,
    twitterHandle: 'jan_ruettinger',
    profileImageUrl: '/students/JanRuttinger.jpg',
    projectId: PROJECT_ID.DATALEAP,
  },
  {
    id: STUDENT_ID.JONGWON_PARK,
    twitterHandle: 'jwpark02',
    profileImageUrl: '/students/JongwonPark.jpg',
    projectId: PROJECT_ID.NORDLE,
  },
  {
    id: STUDENT_ID.JOYCE_JIANG,
    twitterHandle: 'joycebydsgn',
    profileImageUrl: '/students/JoyceJiang.jpg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
  {
    id: STUDENT_ID.KAILI_WANG,
    twitterHandle: 'kaili_jenner',
    profileImageUrl: '/students/KailiWang.jpeg',
  },
  {
    id: STUDENT_ID.MICHAEL_DAIGLER,
    twitterHandle: '0xmerkle',
    profileImageUrl: '/students/MichaelDaigler.jpeg',
  },
  {
    id: STUDENT_ID.SANTIAGO_HERNANDEZ,
    twitterHandle: 'santiaghini',
    profileImageUrl: '/students/SantiagoHernandez.jpeg',
  },
  {
    id: STUDENT_ID.VARUN_SHENOY,
    twitterHandle: 'varunshenoy_',
    profileImageUrl: '/students/VarunShenoy.jpg',
  },
  {
    id: STUDENT_ID.WENITTE_APIOU,
    twitterHandle: 'wenitte_a_placeholder',
    profileImageUrl: '/students/WenitteApiou.jpeg',
  },
  {
    id: STUDENT_ID.YUMA_TANAKA,
    twitterHandle: 'yumat_10',
    profileImageUrl: '/students/YumaTanaka.jpeg',
    projectId: PROJECT_ID.NORDLE,
  },
];
