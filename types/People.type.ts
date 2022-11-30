import { PROJECT_ID } from './Project.type';

export enum STUDENT_ID {
  JAN_RUTTINGER = 'Jan Ruttinger',
  JONGWON_PARK = 'Jongwon Park',
  JOYCE_JIANG = 'Joyce Jiang',
  KAILI_WANG = 'Kaili Wang',
  MICHAEL_DAIGLER = 'Michael Daigler',
  SANTIAGO_HERNANDEZ = 'Santiago Hernandez',
  VARUN_SHENOY = 'Varun Shenoy',
  WENITTE_APIOU = 'Wenitte Apiou',
  YUMA_TANAKA = 'Yuma Tanaka',
}

export interface MentorInfo {
  profileImageURL: string;
  colorProfileImageURL: string;
  name: string;
  company: string;
  bio: string;
  twitterHandle: string;
}

export interface SpeakerInfo {
  name: string;
  company: string;
  lectureTitle: string;
  description: string;
  profileImageURL: string;
  companyImageURL: string;
  year: number;
  twitterHandle: string;
}

export interface StudentInfo {
  id: STUDENT_ID;
  profileImageUrl: string;
  twitterHandle: string;
  projectId?: PROJECT_ID;
}
