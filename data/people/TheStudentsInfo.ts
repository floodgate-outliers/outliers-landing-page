import { StudentInfo, STUDENT_ID } from 'types/People.type';
import { PROJECT_ID } from 'types/Project.type';

export const TheStudentsInfo: StudentInfo[] = [
  {
    id: STUDENT_ID.SANTIAGO_HERNANDEZ,
    twitterHandle: 'santiaghini',
    profileImageUrl: '/alumni/SantiagoHernandez.jpeg',
  },
  {
    id: STUDENT_ID.KAILI_WANG,
    twitterHandle: 'kaili_jenner',
    profileImageUrl: '/alumni/KailiWang.jpeg',
  },
  {
    id: STUDENT_ID.MICHAEL_DAIGLER,
    twitterHandle: '0xmerkle',
    profileImageUrl: '/alumni/MichaelDaigler.jpeg',
  },
  {
    id: STUDENT_ID.WENITTE_APIOU,
    twitterHandle: 'wenitte_a_placeholder',
    profileImageUrl: '/alumni/WenitteApiou.jpeg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
  {
    id: STUDENT_ID.VARUN_SHENOY,
    twitterHandle: 'varunshenoy_',
    profileImageUrl: '/alumni/VarunShenoy.jpg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
  {
    id: STUDENT_ID.JAN_RUTTINGER,
    twitterHandle: 'jan_ruettinger',
    profileImageUrl: '/alumni/JanRuttinger.jpg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
  {
    id: STUDENT_ID.YUMA_TANAKA,
    twitterHandle: 'yumat_10',
    profileImageUrl: '/alumni/YumaTanaka.jpeg',
    projectId: PROJECT_ID.THUNDER_LIZARD_NFT,
  },
];

export const getStudentInfoById = (studentId: STUDENT_ID): StudentInfo => {
  return TheStudentsInfo.find((s) => s.id === studentId)!;
};
